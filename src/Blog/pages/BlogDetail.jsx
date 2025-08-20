import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogById, rateBlog } from "../../Services/blogService";
import CommentSection from "../components/CommentSection.jsx";
import { SignedIn, SignedOut, SignInButton, useUser } from "@clerk/clerk-react";
import { Eye, Star, Calendar, User, CheckCircle, X } from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams();
  const { user } = useUser();
  const [blog, setBlog] = useState(null);
  const [rating, setRating] = useState(0);
  const [userHasRated, setUserHasRated] = useState(false);
  const [userCurrentRating, setUserCurrentRating] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    fetchBlogById(id).then((res) => {
      setBlog(res.data);
      
      // Check if current user has already rated this blog
      if (user && res.data.ratings) {
        const hasUserRated = res.data.ratings.some(r => {
          if (typeof r === 'object' && r.userId) {
            return r.userId === user.id;
          }
          return false;
        });
        
        if (hasUserRated) {
          setUserHasRated(true);
          const userRatingObj = res.data.ratings.find(r => 
            typeof r === 'object' && r.userId === user.id
          );
          if (userRatingObj) {
            setUserCurrentRating(userRatingObj.rating);
            setRating(userRatingObj.rating);
          }
        }
      }
    });
  }, [id, user]);

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleRate = async () => {
    if (rating > 0 && !userHasRated && user) {
      try {
        const ratingData = {
          rating,
          userId: user.id
        };
        
        const res = await rateBlog(id, ratingData);
        setBlog(res.data);
        setUserHasRated(true);
        setUserCurrentRating(rating);
      } catch (error) {
        console.error("Error rating blog:", error);
        showToastMessage("You've already rated this blog or there was an error.");
      }
    }
  };

  const renderStars = (currentRating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < currentRating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ));
  };

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading amazing content...</p>
        </div>
      </div>
    );
  }

  const getPreviewText = (htmlContent) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    const textContent = tempDiv.textContent || tempDiv.innerText || "";
    const words = textContent.split(" ").slice(0, 50);
    return words.join(" ") + (textContent.split(" ").length > 50 ? "..." : "");
  };

  let ratingsArray = [];
  if (blog.ratings && blog.ratings.length > 0) {
    if (typeof blog.ratings[0] === 'object' && blog.ratings[0].rating !== undefined) {
      ratingsArray = blog.ratings.map(r => r.rating);
    } else {
      ratingsArray = blog.ratings;
    }
  }

  const avgRating = ratingsArray.length > 0
    ? ratingsArray.reduce((a, b) => a + b, 0) / ratingsArray.length
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right-8 duration-300">
          <div className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 max-w-md">
            <div className="flex-1">
              <p className="font-medium">{toastMessage}</p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="hover:bg-red-600 rounded-full p-1 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 border-b border-gray-200 pb-6">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              <span className="font-medium">{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-600" />
              <span>
                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-purple-600" />
              <span>{blog.viewCount || 0} views</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">{renderStars(Math.round(avgRating))}</div>
              <span className="text-sm">
                {avgRating > 0 ? avgRating.toFixed(1) : "No ratings"}
                {ratingsArray.length > 0 && (
                  <span className="text-gray-400 ml-1">
                    ({ratingsArray.length})
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Full Content - Only when signed in */}
        <SignedIn>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 mb-8">
            <div className="p-8">
              <div
                className="quill-content max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
          </div>

          {/* Rating Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {userHasRated ? "Your Rating" : "Rate this blog"}
            </h3>
            
            {userHasRated ? (
              <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">You rated:</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${i < userCurrentRating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-green-600 font-medium">({userCurrentRating}/5)</span>
                </div>
                <span className="text-sm text-gray-500 ml-auto">
                  Thank you for your rating!
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Your rating:</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        className="transition-colors hover:scale-110"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= rating
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300 hover:text-yellow-200"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={handleRate}
                  disabled={rating === 0 || userHasRated}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  Submit Rating
                </button>
              </div>
            )}
          </div>

          {/* Comments */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <CommentSection blogId={id} />
          </div>
        </SignedIn>

        {/* Signed Out - Preview */}
        <SignedOut>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
            <div className="quill-content max-w-none text-gray-700 mb-8">
              {getPreviewText(blog.content)}
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-8 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Want to read more?
                </h3>
                <p className="text-gray-600 mb-6">
                  Sign in to read the full blog, rate, comment, and join the
                  conversation!
                </p>
              </div>
              <SignInButton mode="modal">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                  🚀 Sign In to Continue
                </button>
              </SignInButton>
            </div>
          </div>
        </SignedOut>
      </div>
    </div>
  );
};

export default BlogDetail;