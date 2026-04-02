export default function GiorgiaCortesePortfolio() {
  const skills = {
    digitalInnovation: [
      "Digital transformation strategy",
      "Process re-engineering",
      "Data architecture fundamentals",
      "AI for business applications",
      "Predictive analytics",
      "SQL and database design",
    ],
    technicalAnalytical: [
      "Analytical problem-solving under technical constraints",
      "Systems thinking shaped by industrial engineering training",
      "Quantitative reasoning for structured decision-making",
      "CAD modelling and FEM structural analysis",
      "MATLAB simulation and kinematic synthesis",
    ],
    leadershipSoftSkills: [
      "Student ambassador and institutional representation",
      "Stakeholder alignment and institutional communication",
      "Partnership outreach and sponsorship structuring",
      "Cross-functional coordination",
      "Community-building and student engagement initiatives",
    ],
    marketIntelligence: [
      "Pharma 4.0 and smart manufacturing principles",
      "Regulatory-aware process engineering (GMP mindset)",
      "Biotech and pharmaceutical production workflows",
      "Chemical process optimization and scale-up logic",
      "Sustainable and bio-based production systems",
      "Scientific literature analysis and technical interpretation",
    ],
  };

  const experience = [
    {
      period: "12/2025 – Present",
      title: "Dean’s List Programme & Student Ambassador",
      company: "Luiss Business School · Rome",
      bullets: [
        "Selected on a merit basis among 25 students in the MSc cohort, reinforcing a profile built on academic precision and high-performance execution.",
        "Represent the School in institutional events and international outreach initiatives, acting as a visible interface between the institution and its external ecosystem.",
        "Support student engagement strategy and community-building initiatives across global programmes, helping calibrate a more connected and internationally resonant student experience.",
      ],
    },
    {
      period: "12/2025 – 04/2026",
      title: "Sponsorship & Partnerships Manager",
      company: "Luiss Women In Business · Rome",
      bullets: [
        "Drove outreach to corporate partners and startups to secure sponsorship opportunities, expanding the association’s external network.",
        "Supported negotiation workflows and structured partnership proposals with a more strategic and execution-ready approach.",
        "Operated at the intersection of relationship management, brand value articulation, and event operations.",
      ],
    },
    {
      period: "11/2025 – 02/2026",
      title: "Marketing Specialist",
      company: "Luiss Women In Business · Rome",
      bullets: [
        "Translated campaign concepts into structured visual assets aligned with brand positioning.",
        "Contributed to content planning, visual storytelling strategy, and message coherence across initiatives.",
        "Helped shape a cleaner and more premium-facing communication system for association activities.",
      ],
    },
    {
      period: "06/2024 – 09/2024",
      title: "Customer Care",
      company: "Autocentri Balduina · Rome",
      bullets: [
        "Worked inside a fast-paced high-performance commercial environment where speed, accuracy, and customer sensitivity were mission-critical.",
        "Managed inquiries and follow-up processes to support client satisfaction and improve service continuity.",
        "Developed first-hand exposure to the operational tempo and customer expectations surrounding the automotive retail experience.",
      ],
    },
  ];

  const pharmaPrototype = {
  title: "Pharma Prototype — Bio-Based Photoprotection Systems",
  period: "2025",
  organization: "Università Campus Bio-Medico di Roma",
  bullets: [
    "Engineered a full-spectrum analysis of photoprotective formulations, bridging chemical engineering, biotechnology, and cosmetic science into a unified product-development framework.",
    "Mapped industrial processes from biomass extraction to final sunscreen formulation, identifying critical trade-offs between efficacy, sustainability, and regulatory compliance.",
    "Conducted comparative strategic analysis between Caudalie (bio-based, circular economy model) and ISDIN (high-performance synthetic approach), highlighting dual innovation pathways in the industry.",
    "Evaluated green extraction technologies (e.g., supercritical CO₂, deep eutectic solvents) and their scalability potential for industrial applications.",
    "Identified systemic gap between high-SPF performance and eco-sustainable formulations, positioning hybrid solutions as the next frontier of product innovation.",
    "Developed a structured, research-driven perspective on Pharma 4.0 integration, where data, process optimization, and regulatory frameworks converge into intelligent manufacturing systems."
  ]
};

const projects = [
    {
      period: "03/2025 – 06/2025",
      title: "Virtual Prototyping & FEM Analysis — Polycentric Prosthetic Knee",
      context: "Bioengineering & Mechanical Design",
      bullets: [
        "Designed and validated 3D CAD assemblies in Autodesk Inventor with ISO-compliant material selection for biomedical applications.",
        "Conducted structural FEM analysis through Autodesk Inventor Nastran to verify stress distribution, displacement behaviour, and safety factors.",
        "Applied engineering logic that translates naturally into high-performance product development environments.",
      ],
    },
    {
      period: "10/2024 – 01/2025",
      title: "Kinematic Synthesis of a Four-Bar Linkage Mechanism",
      context: "Applied Mechanical Engineering",
      bullets: [
        "Translated ergonomic and functional requirements into kinematic constraints using the Suh–Radcliffe method.",
        "Validated finite motion synthesis through MATLAB simulations.",
        "Strengthened a systems-thinking approach rooted in motion logic, mechanical behaviour, and technical validation.",
      ],
    },
  ];

  const education = [
    {
      period: "09/2026 – 12/2026",
      title: "MSc Business Analytics & Artificial Intelligence — Exchange Programme",
      school: "Nottingham Business School, Nottingham Trent University",
      details:
        "Merit-based selection as the only available LUISS exchange slot. Focus on Analytics & AI for Business, Predictive Analytics, and SQL-driven data management.",
    },
    {
      period: "09/2025 – 06/2026",
      title: "MSc Digital Transformation — Major in Digital Innovation",
      school: "Luiss Business School",
      details:
        "Merit-based Mentorship Programme. Core areas include operational process re-engineering, data architecture, AI-led redesign, and technology landscape analysis.",
    },
    {
      period: "10/2022 – 10/2025",
      title: "BSc Industrial Engineering — Major in Chemical Engineering",
      school: "Università Campus Bio-Medico di Roma",
      details:
        "Thesis on photoprotective creams, mapping industrial processes from biomass to sunscreens with Caudalie and ISDIN as case studies. Built a rigorous foundation across mechanics, industrial plants, chemistry, and machine design.",
    },
  ];

  const futureConcepts = [
    {
      title: "AI-Driven Digital Transformation",
      text:
        "The next competitive frontier lies in reimagining how pharma and biotech organizations operate — leveraging AI, data architecture, and process digitalization to build faster, more adaptive business systems. This is the space where I want to operate — designing and implementing AI-driven transformation initiatives in complex industrial organizations.",
    },
    {
      title: "Industrial Process Engineering",
      text:
        "Operational excellence in pharma and chemical manufacturing depends on the ability to re-engineer production workflows, integrate real-time data, and apply systematic problem-solving to complex industrial systems. My engineering background positions me to contribute directly to this challenge — translating technical constraints into optimized, data-informed processes.",
    },
    {
      title: "Product Innovation & R&D",
      text:
        "Bridging laboratory intelligence, biomass-derived formulations, and manufacturing execution into scalable product pipelines is how the next generation of pharma and biotech companies will compete. My thesis on bio-based photoprotection systems gave me a first direct exposure to this pipeline — from raw material to scalable formulation.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-neutral-200 selection:text-neutral-950">
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <header className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-400">Digital Innovation · Pharma & Chemical Systems · Precision-driven Execution</p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">Giorgia Cortese</h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-neutral-300 md:text-lg">
                A future-facing profile engineered at the intersection of <span className="text-white">digital transformation</span>, <span className="text-white">systems thinking</span>, and <span className="text-white">scientific and industrial sensitivity</span>. Built through industrial engineering, refined through LUISS, and directed toward the premium mobility sector.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-neutral-200">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">Rome, Italy</span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">Italian — native · English — fluent · Spanish — conversational</span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">Digital Transformation MSc</span>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[24px] border border-white/10 bg-black/30 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Positioning</p>
                <p className="mt-3 text-lg leading-7 text-neutral-200">
                  Engineering discipline and digital transformation applied to pharma, biotech, and intelligent manufacturing systems — where scientific rigor meets process-driven innovation.
                </p>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-black/30 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">Current direction</p>
                <p className="mt-3 text-lg leading-7 text-neutral-200">
                  Focused on the convergence of industrial chemical engineering and digital transformation in pharma and biotech contexts — spanning process re-engineering, data-driven manufacturing, and AI-powered operational intelligence.
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="mt-8 grid gap-8">
          <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Heritage</h2>
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">About Me</span>
              </div>
              <div className="space-y-5 text-neutral-300 leading-7">
                <p>
                  My trajectory began in <span className="text-white">Industrial Engineering</span>, where I learned to read systems as interdependent architectures shaped by precision, constraints, and measurable performance. That foundation continues to inform how I evaluate business, technology, and transformation.
                </p>
                <p>
                  At <span className="text-white">Luiss Business School</span>, I am refining that technical mindset through Digital Transformation, with a focus on process redesign, data architecture, and AI-enabled innovation, building a profile oriented toward integrating emerging technologies into robust, scalable operating models.
                </p>
                <p>
                  My focus is directed toward pharma, biotechnology, and advanced chemical industries, where scientific rigor and process excellence must operate in full alignment with digital transformation. My goal is to contribute at the intersection of these disciplines, where engineering thinking meets intelligent systems design.
                </p>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Technical Specs</h2>
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">Capabilities Matrix</span>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <h3 className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-400">Digital Innovation</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-300">
                    {skills.digitalInnovation.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <h3 className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-400">Technical &amp; Analytical Skills</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-300">
                    {skills.technicalAnalytical.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <h3 className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-400">Leadership &amp; Soft Skills</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-300">
                    {skills.leadershipSoftSkills.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <h3 className="text-sm font-medium uppercase tracking-[0.25em] text-neutral-400">Pharma & Chemical Intelligence</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-300">
                    {skills.marketIntelligence.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Future Concepts</h2>
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">Industry Vision</span>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {futureConcepts.map((item) => (
                <article key={item.title} className="rounded-[24px] border border-white/10 bg-black/20 p-6">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-neutral-300">{item.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Education</h2>
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">Academic Platform</span>
              </div>
              <div className="space-y-5">
                {education.map((item) => (
                  <article key={item.title} className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                    <p className="text-sm text-neutral-500">{item.period}</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.18em] text-neutral-400">{item.school}</p>
                    <p className="mt-4 text-sm leading-6 text-neutral-300">{item.details}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-8">
              <section className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Core Toolkit</h2>
                  <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">Systems & Tools</span>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-neutral-200">
                  {[
                    "Excel",
                    "MATLAB",
                    "C++",
                    "LaTeX",
                    "Canva",
                    "Notion",
                    "Cursor",
                    "Claude",
                    "Gemini",
                    "Gamma",
                    "Lovable",
                  ].map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/20 px-4 py-2">
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              <section className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Languages</h2>
                  <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">Communication</span>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-neutral-200">
                  {[
                    "Italian — native",
                    "English — fluent",
                    "Spanish — conversational",
                  ].map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-black/20 px-4 py-2">
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </section>

          <section className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Pharma Prototype</h2>
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">Flagship Project</span>
            </div>
            <article className="rounded-[24px] border border-white/10 bg-black/20 p-6">
              <p className="text-sm text-neutral-500">{pharmaPrototype.period}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{pharmaPrototype.title}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-neutral-400">{pharmaPrototype.organization}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-neutral-300">
                {pharmaPrototype.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </article>
          </section>

          <section className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">The Prototype</h2>
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">Experience</span>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {experience.map((item) => (
                <article key={item.title} className="rounded-[24px] border border-white/10 bg-black/20 p-6">
                  <p className="text-sm text-neutral-500">{item.period}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm uppercase tracking-[0.2em] text-neutral-400">{item.company}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-neutral-300">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Engineered Projects</h2>
                <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">Academic Build Log</span>
              </div>
              <div className="space-y-6">
                {projects.map((project) => (
                  <article key={project.title} className="rounded-[24px] border border-white/10 bg-black/20 p-6">
                    <p className="text-sm text-neutral-500">{project.period}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.2em] text-neutral-400">{project.context}</p>
                    <ul className="mt-5 space-y-3 text-sm leading-6 text-neutral-300">
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>• {bullet}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>
                  <section className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Contact Interface</h2>
              <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">Direct Line</span>
            </div>
            <div className="grid gap-4 text-neutral-300">
              <p>📍 Rome, Italy — Open to relocation</p>
              <p>📧 giorgiacortese2609@gmail.com</p>
              <p>📞 +39 392 165 4609</p>
              <p className="text-neutral-400 text-sm">Portfolio available upon request and designed as a strategic extension of interview discussions.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
