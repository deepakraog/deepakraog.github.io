import { projects } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Projects() {
  usePageMeta({
    title: "Projects | Deepak Rao Gaikwad",
    description:
      "Architecture-first projects across serverless platforms, Rust data services, and CI/CD automation.",
  });

  return (
    <section className="page">
      <div className="page-header">
        <h1>Projects</h1>
        <p>
          Architecture-first initiatives focused on reliability, performance, and
          developer velocity.
        </p>
      </div>
      <div className="card-grid">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="pill-row">
              {project.stack.map((item) => (
                <span key={item} className="pill">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
