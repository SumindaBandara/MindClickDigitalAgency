import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const ratings = Array.isArray(blog.ratings) ? blog.ratings : [];
  const avg =
    ratings.length > 0
      ? (ratings.reduce((a, b) => a + Number(b || 0), 0) / ratings.length).toFixed(1)
      : null;

  // Convert HTML to plain text
  const getPlainText = (html) => {
    if (!html) return "";
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  // Create a short snippet for the card
  const snippet = getPlainText(blog.content).slice(0, 180) + (getPlainText(blog.content).length > 180 ? "…" : "");

  return (
    <div className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{blog.title}</h2>
      <p className="text-gray-600 mt-1">{snippet}</p>
      <div className="flex justify-between items-center mt-3 text-sm text-gray-500">
        <span>👁 {blog.views ?? 0} views</span>
        <span>⭐ {avg ?? "No rating"}</span>
      </div>
      <Link
        to={`/blogs/${blog._id}`}
        className="text-blue-600 mt-3 inline-block hover:underline"
      >
        Read More →
      </Link>
    </div>
  );
};

export default BlogCard;
