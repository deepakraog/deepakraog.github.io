import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta({
    title: "Deepak Rao Gaikwad | Principal Engineer",
    description:
      "Principal Engineer building scalable cloud platforms, Rust services, and reliable systems.",
    ogTitle: "Deepak Rao Gaikwad",
    ogDescription: "Principal Engineer | Full-Stack | Cloud Architect",
  });

  return (
    <section className="page">
      <div className="hero">
        <div>
          <p className="eyebrow">Principal Engineer</p>
          <h1>Hello, I'm Deepak Rao Gaikwad.</h1>
          <p className="lead">
            I design and ship scalable, cost-efficient platforms across AWS, Rust, and
            TypeScript. I focus on resilient architectures, developer velocity, and
            measurable impact.
          </p>
          <div className="cta-row">
            <Link className="button primary" to="/projects">
              View Projects
            </Link>
            <Link className="button ghost" to="/devflux">
              DevFlux x Utilix
            </Link>
          </div>
        </div>
        <div className="hero-card">
          <h3>Focus Areas</h3>
          <ul>
            <li>Cloud-native systems with AWS Lambda, API Gateway, and DynamoDB.</li>
            <li>High-performance Rust services and data pipelines.</li>
            <li>CI/CD automation and platform engineering.</li>
          </ul>
        </div>
      </div>

      <div className="section-grid">
        <div className="card">
          <h3>Architecture Impact</h3>
          <p>
            Led multi-region serverless platforms handling 1.6M+ monthly transactions
            with cost controls and high availability.
          </p>
        </div>
        <div className="card">
          <h3>Developer Experience</h3>
          <p>
            Built internal tools and CI/CD workflows that increased deployment frequency
            by 5x and improved observability.
          </p>
        </div>
        <div className="card">
          <h3>Product + Platform</h3>
          <p>
            Partnered with product teams to deliver developer utilities and API
            platforms with clear monetization paths.
          </p>
        </div>
      </div>

      <div className="section">
        <h2>Connect</h2>
        <div className="link-grid">
          <a href="mailto:gaikwad.dcg@gmail.com">Email</a>
          <a href="https://github.com/deepakraog" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com/in/deepakraog" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://x.com/deepakraog" target="_blank" rel="noreferrer">
            X (Twitter)
          </a>
          <a href="https://deepakraog.medium.com" target="_blank" rel="noreferrer">
            Medium
          </a>
          <a href="/Deepak_Gaikwad.pdf" target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
