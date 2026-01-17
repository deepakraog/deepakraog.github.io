import { blogs } from "../data/blogs";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Blogs() {
  usePageMeta({
    title: "Blogs | Deepak Rao Gaikwad",
    description: "Insights on AWS, Rust, and scalable architecture on Medium.",
  });

  return (
    <section className="page">
      <div className="page-header">
        <h1>Blogs</h1>
        <p>
          Cross-posted on Medium. Full articles live there with zero content
          duplication.
        </p>
      </div>
      <div className="card-grid">
        {blogs.map((blog) => (
          <article key={blog.title} className="card">
            <div className="card-header">
              <h3>{blog.title}</h3>
              <span className="badge">{blog.platform}</span>
            </div>
            <a
              className="text-link"
              href={blog.url}
              target="_blank"
              rel="noreferrer"
            >
              Read on Medium →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
