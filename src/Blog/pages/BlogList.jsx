import { useEffect, useState } from "react";
import { fetchBlogs } from "../../Services/blogService";
import BlogCard from "../components/BlogCard";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const { user } = useUser();

  const isAdmin = user?.publicMetadata?.role === "admin";

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetchBlogs();
        const data = res.data;
        // Support either `[...]` or `{ blogs: [...] }`
        const list = Array.isArray(data)
          ? data
          : Array.isArray(data?.blogs)
          ? data.blogs
          : [];
        setBlogs(list);
      } catch (e) {
        console.error(e);
        setErr("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <div className="p-6 max-w-4xl mx-auto">Loading…</div>;
  if (err)
    return (
      <div className="p-6 max-w-4xl mx-auto text-red-600">
        {err}
      </div>
    );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">📚 Blog Knowledge Area</h1>
        {isAdmin && (
          <Link
            to="/blogs/create"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            ➕ Create Blog
          </Link>
        )}
      </div>

      {blogs.length === 0 ? (
        <p className="text-gray-600">No blogs yet. Create the first one!</p>
      ) : (
        <div className="grid gap-6">
          {blogs.map((b) => (
            <BlogCard key={b._id} blog={b} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
