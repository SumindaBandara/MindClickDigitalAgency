import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createBlog } from "../../Services/blogService";


const CreateBlog = () => {
  const [form, setForm] = useState({ title: "", author: "", content: "" });
  const [isPreview, setIsPreview] = useState(false);
  const navigate = useNavigate();

  // Quill modules
  const modules = useMemo(() => ({
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ color: [] }, { background: [] }],
      ["link", "image", "blockquote", "code-block"],
      ["clean"],
    ],
    clipboard: { matchVisual: false },
  }), []);

  const formats = [
    "header", "bold", "italic", "underline", "strike",
    "list", "bullet", "color", "background",
    "link", "image", "blockquote", "code-block",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) return;

    try {
      await createBlog(form);
      navigate("/"); // Redirect to blog list or homepage
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Failed to create blog.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-6">✨ Create Your Blog</h1>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
          {/* Title */}
          <div>
            <label className="block mb-2 font-semibold">Blog Title</label>
            <input
              type="text"
              placeholder="Enter title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full border rounded px-4 py-2"
              required
            />
          </div>

          {/* Author */}
          <div>
            <label className="block mb-2 font-semibold">Author</label>
            <input
              type="text"
              placeholder="Author name"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              className="w-full border rounded px-4 py-2"
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="font-semibold">Content</label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsPreview(false)}
                  className={`px-3 py-1 rounded text-sm ${!isPreview ? "bg-blue-100 text-blue-700" : "text-gray-600"}`}
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => setIsPreview(true)}
                  className={`px-3 py-1 rounded text-sm ${isPreview ? "bg-blue-100 text-blue-700" : "text-gray-600"}`}
                >
                  Preview
                </button>
              </div>
            </div>

            {!isPreview ? (
              <ReactQuill
                theme="snow"
                value={form.content}
                onChange={(content) => setForm({ ...form, content })}
                modules={modules}
                formats={formats}
                placeholder="Write your amazing blog..."
              />
            ) : (
              <div
                className="p-4 border rounded min-h-[200px] bg-gray-50"
                dangerouslySetInnerHTML={{ __html: form.content }}
              />
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            🚀 Publish Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
