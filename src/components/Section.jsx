function Section() {
  const sections = [
    {
      title: "Leadership & Influence",
      content: "Leading 12 direct reports and 20+ indirect in OSS, IT, and analytics. Mentored 10+ analysts org-wide."
    },
    {
      title: "Enterprise Data Platforms",
      content: "PlanAid: 250 users, 20B data points. NetStat: 1300+ users. Full CI/CD, feature stores, A/B testing."
    },
    {
      title: "FinOps & Cost Efficiency",
      content: "OPEX reduced from $9M → $5M via cloud hybridization, cost per pipeline/model tracked."
    },
    {
      title: "Governance & Metadata",
      content: "Collibra + Confluence (5,000+ assets) and wiki knowledge base, reduced time-to-insight by 45–65%. Live asset cataloging in place."
    },
    {
      title: "Privacy & Access Control",
      content: "Built secure, privacy-by-design self-service platform with tokenization & RBAC."
    },
    {
      title: "360 API & Insights",
      content: "Launched Networth for customer/network 360 view—churn prediction, marketing insights, H3-based geodata, 500k calls/day."
    },
    {
      title: "Cloud & ML Ops",
      content: "Azure & Databricks power current stack; exploring GCP & Snowflake. Kafka, OpenAI, GenAI-enabled agents live."
    }
  ]

  return (
    <section className="px-4 py-8 space-y-6 max-w-4xl mx-auto">
      {sections.map((s, i) => (
        <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-2">{s.title}</h2>
          <p className="text-gray-300">{s.content}</p>
        </div>
      ))}
    </section>
  )
}

export default Section