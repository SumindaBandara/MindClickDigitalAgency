import { Link } from "react-router-dom";

const knowledgeItems = [
  {
    id: 1,
    title: "Boost Your Social Media Reach",
    snippet:
      "Learn how consistent posting, the right hashtags, and engaging visuals can increase your organic audience growth.",
    author: "Suminda Bandara",
    date: "Aug 5, 2025",
    img: "https://source.unsplash.com/400x250/?socialmedia,marketing",
  },
  {
    id: 2,
    title: "Use Colors That Convert",
    snippet:
      "Discover why colors like yellow (#fed600) catch attention and how to use them strategically in your marketing.",
    author: "MindClick Team",
    date: "July 30, 2025",
    img: "https://source.unsplash.com/400x250/?color,design",
  },
  {
    id: 3,
    title: "Know Your Audience",
    snippet:
      "Understanding your customers’ preferences is the key to tailoring content that truly connects and converts.",
    author: "Suminda Bandara",
    date: "July 25, 2025",
    img: "https://source.unsplash.com/400x250/?audience,data",
  },
];

export default function KnowledgePreview() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4" style={{ color: "#fed600" }}>
          MindClick Knowledge Hub Preview
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-lg">
          Get quick, actionable marketing tips to start growing your business today.  
          Dive deeper with our full library of expert articles and guides.
        </p>

        <div className="grid md:grid-cols-3 gap-10 mb-14">
          {knowledgeItems.map(({ id, title, snippet, author, date, img }) => (
            <div
              key={id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer border-t-4"
              style={{ borderTopColor: "#fed600" }}
            >
              <img
                src={img}
                alt={title}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{snippet}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>By {author}</span>
                  <span>{date}</span>
                </div>
                <Link
                  to={`/education/article/${id}`}
                  className="text-yellow-500 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/education"
          className="inline-block px-10 py-4 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-lg hover:bg-yellow-500 transition"
        >
          Explore All Articles & Tips
        </Link>
      </div>
    </section>
  );
}
