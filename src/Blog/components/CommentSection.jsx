import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { fetchComments, addComment } from "../../Services/blogService";

const CommentSection = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const { user, isSignedIn } = useUser(); // Clerk hook

  useEffect(() => {
    fetchComments(blogId).then(res => setComments(res.data));
  }, [blogId]);

  const handleSubmit = async () => {
    if (!text || !isSignedIn) return;

    const userEmail = user?.primaryEmailAddress?.emailAddress || "Guest";

    const res = await addComment({ blogId, user: userEmail, text });
    setComments([res.data, ...comments]);
    setText("");
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">💬 Comments</h2>
      
      {isSignedIn ? (
        <div className="flex gap-2 mt-3">
          <input 
            type="text"
            placeholder="Write a comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border flex-1 rounded px-3 py-1"
          />
          <button 
            onClick={handleSubmit} 
            className="bg-green-500 text-white px-4 rounded"
          >
            Post
          </button>
        </div>
      ) : (
        <p className="text-gray-500 mt-2">⚠️ Please sign in to comment.</p>
      )}

      <div className="mt-4 space-y-3">
        {comments.map(c => (
          <div key={c._id} className="p-3 border rounded">
            <p className="font-semibold">{c.user}</p>
            <p>{c.text}</p>
            <span className="text-xs text-gray-400">
              {new Date(c.createdAt).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;