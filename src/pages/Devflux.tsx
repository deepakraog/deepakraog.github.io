import { usePageMeta } from "../hooks/usePageMeta";

const tools = [
  {
    name: "JSON / CSV / YAML",
    description: "Formatter, validator, and converter for structured data.",
  },
  {
    name: "JWT Decoder",
    description: "Decode and verify tokens across multiple algorithms.",
  },
  {
    name: "Webhook Tester",
    description: "Replay, inspect, and sign payloads with confidence.",
  },
  {
    name: "API Tester",
    description: "A lightweight Postman alternative for fast iteration.",
  },
];

const architecture = [
  { label: "Frontend", value: "React + Vite" },
  { label: "Backend", value: "Rust (Axum)" },
  { label: "Auth", value: "API keys" },
  { label: "Billing", value: "Stripe metered usage" },
  { label: "Infra", value: "AWS Lambda + API Gateway" },
];

export default function Devflux() {
  usePageMeta({
    title: "DevFlux x Utilix | Developer Utilities",
    description:
      "Developer utilities built for speed, reliability, and pay-per-use scale.",
  });

  return (
    <section className="page">
      <div className="page-header">
        <p className="eyebrow">DevFlux x Utilix</p>
        <h1>Developer utilities built for speed, reliability, and pay-per-use.</h1>
        <p>
          A focused suite of tools designed to save engineering time with durable
          infrastructure and transparent pricing.
        </p>
      </div>

      <div className="section">
        <h2>Initial Tooling</h2>
        <div className="card-grid">
          {tools.map((tool) => (
            <article key={tool.name} className="card">
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Architecture</h2>
        <div className="architecture-grid">
          {architecture.map((item) => (
            <div key={item.label} className="architecture-item">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="section callout">
        <div>
          <h3>Interested in early access?</h3>
          <p>
            Reach out to collaborate on the roadmap or request a private demo of the
            tooling.
          </p>
        </div>
        <a className="button primary" href="mailto:gaikwad.dcg@gmail.com">
          Contact for access
        </a>
      </div>
    </section>
  );
}
