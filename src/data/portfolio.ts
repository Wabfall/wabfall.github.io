import type { Bil, BilArr } from "../lib/lang";

// ─── Personal ────────────────────────────────────────────────────────────────

export const personal = {
  name: "Etienne Chevrollier",
  title: { en: "Data Engineer · DataPlatform Engineer", fr: "Ingénieur Data · DataPlatform Engineer" } as Bil,
  subtitle: {
    en: "Building Reliable Data Systems & Internal Tools for Business Teams",
    fr: "Construire des systèmes data fiables et des outils internes pour les équipes métier",
  } as Bil,
  location: "Barcelona, Catalonia, Spain",
  tagline: {
    en: "Data Engineer with a strong Software Engineering foundation. My strengths lie in understanding systems end-to-end, proposing solutions aligned with real business usage, and simplifying complex processes. From dbt pipelines and data contracts to AI-powered internal tools — I bridge the gap between data infrastructure and the people who use it.",
    fr: "Ingénieur Data avec une solide formation en génie logiciel. Mes points forts : comprendre les systèmes de bout en bout, proposer des solutions alignées avec les usages réels, et simplifier des processus complexes. Des pipelines dbt aux outils internes propulsés par l'IA — je fais le lien entre l'infrastructure data et ceux qui l'utilisent.",
  } as Bil,
  badge: { en: "Google Cloud Certified", fr: "Certifié Google Cloud" } as Bil,
  email: "etiennechevrollier@gmail.com",
  cv: "/cv-etienne-chevrollier.pdf", // place your CV at public/cv-etienne-chevrollier.pdf
  github: "https://github.com/Wabfall/",
  linkedin: "https://linkedin.com/in/etienne-chevrollier",
};

// ─── About ───────────────────────────────────────────────────────────────────

export const about = {
  hook: [
    { en: "Beyond pipelines.", fr: "Au-delà des pipelines." } as Bil,
    { en: "Reliable data ecosystems, owned by everyone.", fr: "Des écosystèmes data fiables, pilotés par tous." } as Bil,
  ],
  paragraphs: [
    {
      en: "I'm Etienne Chevrollier, a Data Engineer with a strong Software Engineering background, currently at papernest in Barcelona. I partner with data and business teams to transform complex infrastructures into robust, sustainable systems — from high-availability pipelines to intuitive internal tools that empower stakeholders to leverage data autonomously.",
      fr: "Ingénieur Data fort d'un solide bagage en génie logiciel, j'évolue actuellement chez papernest à Barcelone. J'accompagne les équipes data et métiers dans la transformation d'infrastructures complexes en systèmes robustes et pérennes — de la conception de pipelines à haute disponibilité au développement d'outils internes intuitifs qui permettent aux parties prenantes d'exploiter la donnée en toute autonomie.",
    } as Bil,
    {
      en: "Data reliability is the cornerstone of my expertise. I implement data contracts and strict schema validation to proactively anticipate anomalies before they impact downstream consumers, deploy alerting systems for proactive architecture monitoring, and build dbt models with rigorous software engineering standards — systematically tested, documented, and version-controlled.",
      fr: "La fiabilité de la donnée est la pierre angulaire de mon expertise. J'implémente des data contracts et des validations de schémas stricts pour anticiper les anomalies avant qu'elles n'impactent les consommateurs, des systèmes d'alerting pour un monitoring proactif des architectures, et des modèles dbt avec la rigueur de l'ingénierie logicielle — systématiquement testés, documentés et versionnés.",
    } as Bil,
    {
      en: "I build pragmatic internal tools designed around real-world usage: secure configuration editors enabling non-technical teams to orchestrate data flows without risk, visualisation platforms co-designed with business stakeholders, and AI-powered solutions to multiply workflow efficiency across both technical and non-technical teams.",
      fr: "Je développe des outils internes pragmatiques, pensés pour les usages réels : des éditeurs de configuration sécurisés permettant aux équipes non-techniques de piloter les flux de données sans risque, des plateformes de restitution visuelle co-construites avec les métiers, et des solutions propulsées par l'IA pour démultiplier l'efficacité des workflows.",
    } as Bil,
    {
      en: "I believe data is a strategic value-creation lever. My approach goes beyond technical execution: my role as an engineer is to align data with business objectives while anticipating future needs. By making infrastructure reliable, I free up engineering capacity to reinvest in innovation. Data Engineering is not a cost centre — it is a genuine engine for performance and growth.",
      fr: "Je suis convaincu que la donnée est un levier de création de valeur stratégique. Mon approche dépasse la simple exécution technique : mon rôle est d'aligner la data sur les objectifs de l'entreprise tout en anticipant ses besoins futurs. En fiabilisant l'infrastructure, je libère du temps d'ingénierie pour le réinvestir dans l'innovation. L'ingénierie Data n'est pas un centre de coût — c'est un véritable moteur de performance et de croissance.",
    } as Bil,
  ],
};

// ─── Category tag ─────────────────────────────────────────────────────────────

export type Category = "software" | "data" | "both" | null;

// ─── Experiences ─────────────────────────────────────────────────────────────

export const experiences = [
  {
    role: { en: "Data Engineer", fr: "Ingénieur Data" } as Bil,
    company: "papernest",
    type: { en: "VIE", fr: "VIE" } as Bil,
    period: "Oct 2025 – Present",
    location: "Barcelona, Spain · Hybrid",
    category: "both" as Category,
    icon: "/logos/papernest.svg" as string | null,
    highlights: {
      en: [
        "Acting as the sole Data Engineer onsite, primary point of contact for Sales Ops and Data Analysts across FR, ES & IT markets",
        "Designed & developed a custom YAML Configuration Editor — enables non-technical stakeholders to safely configure pipelines, preventing syntax errors and reducing support time",
        "Developing features on the proprietary internal ETL engine (Python) and dbt models, applying software engineering standards (testing, documentation, CI/CD)",
        "Set up data contracts and schema validation to proactively catch data quality issues across markets",
        "Implemented alerting processes for pipeline monitoring and proactive incident detection",
        "Built AI-powered internal tools to accelerate workflows for both technical and non-technical teams",
      ],
      fr: [
        "Seul ingénieur Data sur site, interlocuteur principal pour les équipes Sales Ops et Data Analysts sur les marchés FR, ES & IT",
        "Conçu et développé un éditeur de configuration YAML — permet aux parties prenantes non-techniques de configurer des pipelines en toute sécurité, évitant erreurs de syntaxe et réduisant le temps de support",
        "Développement de fonctionnalités sur le moteur ETL interne (Python) et des modèles dbt, avec les standards du génie logiciel (tests, documentation, CI/CD)",
        "Mise en place de data contracts et de validation de schéma pour détecter les problèmes de qualité en amont",
        "Implémentation de processus d'alerting pour la surveillance proactive des pipelines",
        "Construction d'outils internes propulsés par l'IA pour accélérer les workflows des équipes tech et non-tech",
      ],
    } as BilArr,
    tech: ["Python", "dbt", "Next.js", "React", "Tailwind CSS", "YAML", "ETL", "Data Contracts"],
    github: null,
  },
  {
    role: { en: "Front-Data Developer", fr: "Développeur Front-Data" } as Bil,
    company: "Bouygues Telecom",
    type: { en: "Apprenticeship", fr: "Alternance" } as Bil,
    period: "Sept 2022 – Aug 2025",
    location: "Nantes, France · Hybrid",
    category: "both" as Category,
    icon: "/logos/bouygues-telecom.svg" as string | null,
    highlights: {
      en: [
        "Developed an internal web app for log data visualization & analysis — full-stack, designed and built independently",
        "Improved a SQL streaming module within an internal ETL using Apache Flink",
        "Automated documentation generation from Java code & Markdown with Docusaurus",
        "Developed data governance scripts using BigQuery, Teradata, and Hadoop",
      ],
      fr: [
        "Développé une application web interne de visualisation et d'analyse de logs — full-stack, conçue et construite de façon autonome",
        "Amélioré un module SQL de streaming au sein d'un ETL interne avec Apache Flink",
        "Automatisé la génération de documentation depuis le code Java & Markdown avec Docusaurus",
        "Développé des scripts de gouvernance des données avec BigQuery, Teradata et Hadoop",
      ],
    } as BilArr,
    tech: ["Spring Boot", "React", "ElasticSearch", "MongoDB", "Apache Flink", "Java", "BigQuery", "Teradata", "Hadoop", "Docusaurus"],
    github: null,
  },
  {
    role: { en: "Co-founder & Web Developer", fr: "Co-fondateur & Développeur Web" } as Bil,
    company: "Thingmill",
    type: { en: "Student Project", fr: "Projet Étudiant" } as Bil,
    period: "Jan 2018 – Jul 2022",
    location: "Alençon, France",
    category: "software" as Category,
    icon: null as string | null,
    highlights: {
      en: [
        "Co-founded a student project (Retrobox) initiated in high school",
        "Web development with Vue.js, HTML/CSS for multiple websites",
        "Created visuals and graphics using Photoshop and design tools",
        "Managed social media and maintained a blog for the project",
      ],
      fr: [
        "Co-fondé un projet étudiant (Retrobox) lancé au lycée",
        "Développement web avec Vue.js et HTML/CSS pour plusieurs sites",
        "Création de visuels et graphismes avec Photoshop et outils de design",
        "Gestion des réseaux sociaux et tenue d'un blog pour le projet",
      ],
    } as BilArr,
    tech: ["Vue.js", "HTML/CSS", "Photoshop"],
    github: null,
  },
  {
    role: { en: "Java Development Intern", fr: "Stagiaire Développement Java" } as Bil,
    company: "Ag2ir",
    type: { en: "Internship", fr: "Stage" } as Bil,
    period: "Apr 2022 – Jun 2022",
    location: "Alençon, France",
    category: "software" as Category,
    icon: null as string | null,
    highlights: {
      en: [
        "Developed a configuration application for an ERP system (EBP) using XML files",
        "Designed and developed a Java GUI (Swing) for configuring and using data",
        "Automated XML file processing to facilitate ERP integration in companies",
      ],
      fr: [
        "Développé une application de configuration pour un ERP (EBP) via des fichiers XML",
        "Conçu et développé une interface Java GUI (Swing) pour configurer et utiliser les données",
        "Automatisé le traitement des fichiers XML pour faciliter l'intégration de l'ERP en entreprise",
      ],
    } as BilArr,
    tech: ["Java", "Java Swing", "XML", "Eclipse"],
    github: null,
  },
];

// ─── Education ────────────────────────────────────────────────────────────────

export const education = [
  {
    school: "ESIEA – École d'Ingénieur·e·s",
    degree: { en: "Master's Degree, Computer Science & Digital Technologies", fr: "Master Informatique & Technologies Numériques" } as Bil,
    period: "Sept 2022 – Aug 2025",
    category: "both" as Category,
    icon: "/logos/esiea.svg" as string | null,
    details: {
      en: [
        "Major: Software Engineering — Full-Stack Dev (Vue.js, TypeScript, Node.js), Architecture & Cloud (Microservices, CI/CD, Docker, AWS), UX (Figma)",
        "Data & Real-Time: SQL, NoSQL (MongoDB, ElasticSearch), RabbitMQ",
        "Minor: Business Engineering — Growth Hacking, negotiation, business strategy",
        "Digital Consulting Week at EY",
      ],
      fr: [
        "Majeure : Génie Logiciel — Dev Full-Stack (Vue.js, TypeScript, Node.js), Architecture & Cloud (Microservices, CI/CD, Docker, AWS), UX (Figma)",
        "Data & Temps Réel : SQL, NoSQL (MongoDB, ElasticSearch), RabbitMQ",
        "Mineure : Business Engineering — Growth Hacking, négociation, stratégie commerciale",
        "Semaine Conseil Digital chez EY",
      ],
    } as BilArr,
  },
  {
    school: "Université du Québec à Chicoutimi (UQAC)",
    degree: { en: "International Mobility – 3rd Year Exchange", fr: "Mobilité Internationale – Échange 3ème Année" } as Bil,
    period: "May 2023 – Jul 2023",
    category: "both" as Category,
    icon: "/logos/uqac.svg" as string | null,
    details: {
      en: [
        "Advanced Web Technologies: bank web app (React, TypeScript, Spring Boot)",
        "Programming Tools for Data Science: addiction analysis (Jupyter, Pandas, Python)",
        "Visits to 3 IT companies in Quebec",
      ],
      fr: [
        "Technologies Web Avancées : application bancaire (React, TypeScript, Spring Boot)",
        "Outils de Programmation pour la Data Science : analyse sur l'addiction (Jupyter, Pandas, Python)",
        "Visites de 3 entreprises IT au Québec",
      ],
    } as BilArr,
  },
  {
    school: "Université Le Havre Normandie",
    degree: { en: "DUT (Two-Year Technical Degree), Computer Science", fr: "DUT Informatique" } as Bil,
    period: "Sept 2020 – Jun 2022",
    category: "software" as Category,
    icon: "/logos/ulhn.png" as string | null,
    details: {
      en: ["Foundation in Java, SQL, algorithms, networks, and software engineering"],
      fr: ["Bases en Java, SQL, algorithmes, réseaux et génie logiciel"],
    } as BilArr,
  },
  {
    school: "Lycée Alain",
    degree: { en: "High School Diploma – Scientific track, Engineering Sciences", fr: "Baccalauréat Scientifique – Sciences de l'Ingénieur" } as Bil,
    period: "Sept 2017 – Jun 2020",
    category: null as Category,
    icon: null as string | null,
    details: {
      en: ["With honors — Engineering Sciences specialization"],
      fr: ["Mention bien — spécialité Sciences de l'Ingénieur"],
    } as BilArr,
  },
];

// ─── Stats ───────────────────────────────────────────────────────────────────

export const stats = [
  { value: "3+", label: { en: "Years of Experience", fr: "Ans d'expérience" } as Bil },
  { value: "6+", label: { en: "Projects Delivered",  fr: "Projets livrés"   } as Bil },
  { value: "4+", label: { en: "Companies",           fr: "Entreprises"       } as Bil },
  { value: "GCP", label: { en: "Cloud Certified",    fr: "Certifié Cloud"    } as Bil },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export type SkillCategory = {
  name: Bil;
  capabilities: BilArr;
  tools: string[];
};

export const skills: SkillCategory[] = [
  {
    name: { en: "Data Engineering", fr: "Ingénierie des données" },
    capabilities: {
      en: ["Pipeline design & ETL/ELT development", "Data contracts & schema validation", "Alerting & quality monitoring", "dbt modeling, testing & documentation"],
      fr: ["Conception de pipelines & développement ETL/ELT", "Data contracts & validation de schéma", "Alerting & monitoring de la qualité des données", "Modélisation dbt, tests & documentation"],
    },
    tools: ["Python", "dbt", "Apache Flink", "BigQuery", "GCP", "ETL Frameworks"],
  },
  {
    name: { en: "Software Engineering", fr: "Génie Logiciel" },
    capabilities: {
      en: ["Full-stack web development", "Internal tools & business applications", "API design & backend services", "User-centered interfaces for non-technical users"],
      fr: ["Développement web full-stack", "Outils internes & applications métier", "Conception d'API & services backend", "Interfaces centrées utilisateur pour les profils non-techniques"],
    },
    tools: ["React", "Next.js", "TypeScript", "Spring Boot", "Node.js", "Vue.js", "Tailwind CSS"],
  },
  {
    name: { en: "Data Platform & Cloud", fr: "Plateforme Data & Cloud" },
    capabilities: {
      en: ["Cloud data infrastructure", "Data warehouse design & optimization", "Streaming & batch processing", "Data governance"],
      fr: ["Infrastructure data cloud", "Conception & optimisation de data warehouses", "Traitement en streaming & batch", "Gouvernance des données"],
    },
    tools: ["BigQuery", "Google Cloud Platform", "ElasticSearch", "MongoDB", "Teradata", "Hadoop", "Docker"],
  },
  {
    name: { en: "AI & Internal Tooling", fr: "IA & Outils Internes" },
    capabilities: {
      en: ["AI-powered tools for technical & non-technical teams", "LLM integration & prompt engineering", "Workflow automation", "Configuration-driven systems"],
      fr: ["Outils IA pour équipes techniques & non-techniques", "Intégration LLM & prompt engineering", "Automatisation des workflows", "Systèmes pilotés par la configuration"],
    },
    tools: ["Python", "LLM APIs", "Next.js", "React", "YAML"],
  },
  {
    name: { en: "Process & Approach", fr: "Processus & Approche" },
    capabilities: {
      en: ["End-to-end system understanding", "Solutions aligned with real business usage", "Documentation & engineering standards", "Cross-functional collaboration", "CI/CD, Git, code quality"],
      fr: ["Compréhension des systèmes de bout en bout", "Solutions alignées avec les usages métier réels", "Documentation & standards d'ingénierie", "Collaboration cross-fonctionnelle", "CI/CD, Git, qualité de code"],
    },
    tools: [],
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export type Testimonial = {
  quote: Bil;
  name: string;
  role: Bil;
  company: string;
  linkedinUrl?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: {
      fr: "J'ai eu l'occasion de manager Étienne lors de son VIE à Barcelone en tant que data engineer chez Papernest. J'ai particulièrement apprécié sa proactivité et son autonomie. À titre d'exemple, il a lui-même initié, défendu et mené à bien un projet à forte valeur ajoutée pour plusieurs équipes de l'entreprise. Il a également fait preuve d'une grande curiosité et d'une excellente capacité à appréhender rapidement les sujets qui lui étaient confiés, ce qui lui a permis de progresser rapidement. Nul doute qu'il mènera une très belle carrière dans la data.",
      en: "I had the opportunity to manage Étienne during his VIE in Barcelona as a Data Engineer at Papernest. I particularly appreciated his proactivity and autonomy. As an example, he independently initiated, championed, and delivered a high-value project that benefited several teams across the company. He also showed great curiosity and an excellent ability to quickly get up to speed on new topics, which allowed him to progress rapidly. There is no doubt he will have a brilliant career in data.",
    } as Bil,
    name: "Vincent Potin",
    role: { fr: "Manager direct · Data Engineer VIE", en: "Direct Manager · Data Engineer VIE" } as Bil,
    company: "papernest",
  },
  {
    quote: {
      fr: "Étienne délivre un code de qualité, documenté et en respectant les délais. Il sait adapter son discours à son interlocuteur pour expliquer sa démarche et être force de proposition. Je recommande vivement !",
      en: "Étienne delivers quality, well-documented code on time. He knows how to adapt his communication to his audience, explain his approach clearly, and bring forward relevant proposals. Highly recommended!",
    } as Bil,
    name: "Aslane Mortreau",
    role: { fr: "Manager direct · Freelance Data & AI Specialist", en: "Direct Manager · Freelance Data & AI Specialist" } as Bil,
    company: "R&D Pharmaceutique & Cosmétique",
  },
  {
    quote: {
      fr: "J'ai pu travailler avec Etienne chez Bouygues Telecom. Il débutait sa carrière et a su faire preuve d'une grande autonomie. Cette qualité s'ajoute à ses compétences techniques, sa rapidité d'apprentissage et sa positivité. C'était agréable de travailler avec Etienne, je le recommanderai avec plaisir.",
      en: "I had the chance to work with Etienne at Bouygues Telecom. He was early in his career and already showed strong autonomy. This, combined with his technical skills, fast learning curve, and positive attitude, made him a great colleague. I would be happy to recommend him.",
    } as Bil,
    name: "Vincent Le Squere",
    role: { fr: "Architecte logiciel · Java", en: "Software Architect · Java" } as Bil,
    company: "Bouygues Telecom",
  },
];

// ─── LinkedIn Posts ───────────────────────────────────────────────────────────

export type Post = {
  title: string;
  excerpt: string;
  date: string; // ISO: "2025-11-20"
  tag: string;  // "Data Engineering" | "Software" | "AI & Data" | ...
  url?: string;
};

export const linkedinPosts: Post[] = [
  {
    title: "Le 29 août 2025 — tourner une page",
    excerpt: "Le 29 août 2025, c'était le moment pour moi de tourner une page et dire au revoir. Retour sur 3 ans d'alternance chez Bouygues Telecom.",
    date: "2025-08-29",
    tag: "Software",
    url: "https://www.linkedin.com/posts/etienne-chevrollier_le-29-ao%C3%BBt-2025-c%C3%A9tait-le-moment-pour-activity-7374404327605682177-3sew",
  },
  {
    title: "Have you heard of Docusaurus?",
    excerpt: "Build optimized websites quickly and focus on your content — Docusaurus is Meta's static site generator. I used it to automate documentation generation from Java & Markdown at Bouygues Telecom.",
    date: "2026-04-14",
    tag: "Software",
    url: "https://www.linkedin.com/posts/etienne-chevrollier_build-optimized-websites-quickly-focus-activity-7338127913382277120-mPR4",
  },
  {
    title: "How to prepare for the Google Cloud Digital Leader certification?",
    excerpt: "Tips and resources to pass the Cloud Digital Leader exam — my experience preparing for the #GoogleCloud certification. #clouddigitalleader #GCP",
    date: "2026-04-18",
    tag: "Data Platform",
    url: "https://www.linkedin.com/posts/etienne-chevrollier_googlecloud-clouddigitalleader-certification-activity-7339214999539605504-aimC",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export type ProjectContent = {
  context: Bil;
  approach: BilArr;
  solution: Bil;
  keyOutcome: Bil;
  applications: BilArr | null;
  link?: string;
};

export const projects = [
  {
    slug: "yaml-configuration-editor",
    title: { en: "YAML Configuration Editor", fr: "Éditeur de Configuration YAML" } as Bil,
    description: {
      en: "Custom internal web app that allows non-technical stakeholders at papernest to safely configure data pipelines. Prevents syntax errors, reduces support time, and empowers business teams to work autonomously.",
      fr: "Application web interne permettant aux parties prenantes non-techniques de papernest de configurer des pipelines data en toute sécurité. Évite les erreurs de syntaxe, réduit le temps de support et donne aux équipes métier une autonomie complète.",
    } as Bil,
    type: { en: "Internal Web Tool", fr: "Outil Interne Web" } as Bil,
    date: "Oct 2025",
    role: { en: "Sole developer", fr: "Développeur unique" } as Bil,
    company: "papernest",
    category: "both" as Category,
    tech: ["Python", "Next.js", "React", "Tailwind CSS", "YAML"],
    github: null as string | null,
    highlight: true,
    content: {
      context: {
        en: "At papernest, data pipeline configuration relied on manually editing YAML files distributed across multiple markets. Non-technical stakeholders — Sales Ops managers and Data Analysts in FR, ES, and IT — had no safe way to adjust configurations without involving a Data Engineer. A single YAML syntax error could silently break pipelines affecting multiple markets.",
        fr: "Chez papernest, la configuration des pipelines data reposait sur l'édition manuelle de fichiers YAML répartis sur plusieurs marchés. Les parties prenantes non-techniques — responsables Sales Ops et Data Analysts FR, ES et IT — n'avaient aucun moyen sécurisé de modifier les configurations sans impliquer un ingénieur Data. Une simple erreur de syntaxe YAML pouvait silencieusement casser des pipelines sur plusieurs marchés.",
      } as Bil,
      approach: {
        en: [
          "Designed a Next.js/React web interface with real-time YAML validation and an intuitive form-based editor",
          "Built a Python backend handling YAML parsing, schema validation, and safe application of configuration changes",
          "Implemented schema-based validation enforcing pipeline configuration rules before any deployment",
          "Created a context-aware UI translating YAML structure into understandable fields for non-technical users",
          "Added preview and diff capabilities to show exactly what will change before applying updates",
        ],
        fr: [
          "Conçu une interface web Next.js/React avec validation YAML en temps réel et un éditeur basé sur des formulaires intuitifs",
          "Développé un backend Python gérant le parsing YAML, la validation de schéma et l'application sécurisée des modifications",
          "Implémenté une validation basée sur les schémas pour vérifier les règles de configuration avant tout déploiement",
          "Créé une interface contextuelle traduisant la structure YAML en champs compréhensibles pour les utilisateurs non-techniques",
          "Ajouté des capacités de prévisualisation et de diff pour montrer exactement ce qui changera avant d'appliquer",
        ],
      } as BilArr,
      solution: {
        en: "The editor gives non-technical stakeholders full control over pipeline configuration through a guided, safe interface. All changes are validated in real-time, previewed before application, and deployed through a controlled flow — with no risk of introducing syntax errors into production pipelines.",
        fr: "L'éditeur donne aux parties prenantes non-techniques un contrôle total sur la configuration des pipelines via une interface guidée et sécurisée. Toutes les modifications sont validées en temps réel, prévisualisées avant application, et déployées via un flux contrôlé — sans risque d'introduire des erreurs de syntaxe dans les pipelines de production.",
      } as Bil,
      keyOutcome: {
        en: "Support tickets related to pipeline configuration dropped significantly. Sales Ops teams across FR, ES, and IT markets now autonomously manage configurations without engineering intervention, freeing Data Engineer time for higher-value tasks.",
        fr: "Les tickets de support liés à la configuration des pipelines ont significativement diminué. Les équipes Sales Ops des marchés FR, ES et IT gèrent désormais de manière autonome les configurations sans intervention de l'ingénieur Data.",
      } as Bil,
      applications: {
        en: ["Multi-market data pipeline self-service", "Non-technical stakeholder autonomy", "Reducing engineering bottlenecks in data operations", "Safe configuration management"],
        fr: ["Self-service de configuration multi-marché", "Autonomie des parties prenantes non-techniques", "Réduction des goulots d'étranglement en data ops", "Gestion sécurisée des configurations"],
      } as BilArr,
    } as ProjectContent,
  },
  {
    slug: "log-data-visualization-platform",
    title: { en: "Log Data Visualization Platform", fr: "Plateforme de Visualisation de Logs" } as Bil,
    description: {
      en: "Full-stack internal web application for log data visualization and analysis at Bouygues Telecom. Designed and developed independently from scratch with continuous evolution based on user feedback.",
      fr: "Application web interne full-stack pour la visualisation et l'analyse de logs chez Bouygues Telecom. Conçue et développée de façon indépendante, avec une évolution continue basée sur les retours utilisateurs.",
    } as Bil,
    type: { en: "Internal Web Platform", fr: "Plateforme Interne Web" } as Bil,
    date: "Sept 2022",
    role: { en: "Sole developer", fr: "Développeur unique" } as Bil,
    company: "Bouygues Telecom",
    category: "both" as Category,
    tech: ["Spring Boot", "React", "ElasticSearch", "MongoDB"],
    github: null as string | null,
    highlight: true,
    content: {
      context: {
        en: "Log analysis at Bouygues Telecom's data platform team was fragmented across multiple tools with no unified way to explore streaming data quality or investigate pipeline behavior in real time. The team needed a centralized interface consolidating log data from distributed systems, accessible to both engineers and analysts.",
        fr: "L'analyse des logs au sein de l'équipe data platform de Bouygues Telecom était fragmentée sur plusieurs outils sans moyen unifié d'explorer la qualité des données en streaming ou d'investiguer le comportement des pipelines. L'équipe avait besoin d'une interface centralisée regroupant les données de log des systèmes distribués.",
      } as Bil,
      approach: {
        en: [
          "Acted as sole developer across the full stack: backend, frontend, and data layer design",
          "Built a Spring Boot backend querying ElasticSearch indices containing structured log data",
          "Developed a React frontend with real-time visualization of log streams, error patterns, and pipeline metrics",
          "Designed a filtering and search system adapted to Bouygues Telecom's specific pipeline log structure",
          "Iterated the application design through direct feedback loops with data engineers and analysts",
        ],
        fr: [
          "Agit en tant que développeur unique sur toute la stack : backend, frontend et conception de la couche data",
          "Construit un backend Spring Boot interrogeant les indices ElasticSearch contenant les données de log structurées",
          "Développé un frontend React avec visualisation en temps réel des flux de logs, des patterns d'erreurs et des métriques de pipeline",
          "Conçu un système de filtrage et de recherche adapté à la structure spécifique des logs de Bouygues Telecom",
          "Itéré le design de l'application via des boucles de feedback direct avec les ingénieurs et analystes data",
        ],
      } as BilArr,
      solution: {
        en: "A unified internal web platform that aggregates, visualizes, and enables analysis of log data from distributed streaming pipelines. Engineers can monitor pipeline health, investigate anomalies, and analyze historical log patterns through a single, purpose-built interface.",
        fr: "Une plateforme web interne unifiée qui agrège, visualise et permet l'analyse des données de log issues de pipelines de streaming distribués. Les ingénieurs peuvent surveiller l'état des pipelines, investiguer les anomalies et analyser les patterns de logs historiques via une seule interface dédiée.",
      } as Bil,
      keyOutcome: {
        en: "Reduced time-to-insight for pipeline issues from hours to minutes. Non-engineering stakeholders gained the ability to independently explore log data, reducing the load on the data engineering team during incident investigations.",
        fr: "Réduction du temps d'analyse des problèmes pipeline de plusieurs heures à quelques minutes. Les parties prenantes non-techniques ont pu explorer de façon autonome les données de log, réduisant la charge sur l'équipe data engineering lors des investigations.",
      } as Bil,
      applications: {
        en: ["Streaming pipeline monitoring", "Log analysis & anomaly investigation", "Real-time data quality visibility", "Internal data observability"],
        fr: ["Monitoring des pipelines streaming", "Analyse de logs & investigation d'anomalies", "Visibilité sur la qualité des données en temps réel", "Observabilité data interne"],
      } as BilArr,
    } as ProjectContent,
  },
  {
    slug: "sql-streaming-module",
    title: { en: "SQL Streaming Module (Apache Flink)", fr: "Module SQL Streaming (Apache Flink)" } as Bil,
    description: {
      en: "Improved a SQL streaming data processing module within an internal ETL at Bouygues Telecom, developed using Java and Apache Flink.",
      fr: "Amélioration d'un module SQL de traitement de données en streaming au sein d'un ETL interne chez Bouygues Telecom, développé en Java avec Apache Flink.",
    } as Bil,
    type: { en: "Data Engineering", fr: "Ingénierie des données" } as Bil,
    date: "2023",
    role: { en: "Developer", fr: "Développeur" } as Bil,
    company: "Bouygues Telecom",
    category: "data" as Category,
    tech: ["Java", "Apache Flink", "SQL"],
    github: null as string | null,
    highlight: false,
    content: {
      context: {
        en: "An existing SQL streaming module within Bouygues Telecom's internal ETL framework presented performance bottlenecks and reliability issues that impacted data processing throughput across the platform.",
        fr: "Un module SQL de streaming existant dans le framework ETL interne de Bouygues Telecom présentait des goulots d'étranglement de performance et des problèmes de fiabilité impactant le débit de traitement des données sur toute la plateforme.",
      } as Bil,
      approach: {
        en: ["Analyzed existing Apache Flink SQL streaming jobs to identify performance bottlenecks", "Refactored streaming logic to improve parallelism and fault-tolerance", "Enhanced error handling and added monitoring to increase pipeline reliability"],
        fr: ["Analysé les jobs SQL Apache Flink existants pour identifier les goulots d'étranglement", "Refactorisé la logique de streaming pour améliorer le parallélisme et la tolérance aux pannes", "Amélioré la gestion des erreurs et ajouté du monitoring pour augmenter la fiabilité des pipelines"],
      } as BilArr,
      solution: {
        en: "Improved SQL streaming module with better throughput, more robust error handling, and enhanced observability over streaming data flows within the internal ETL.",
        fr: "Module SQL de streaming amélioré avec un meilleur débit, une gestion des erreurs plus robuste et une observabilité accrue sur les flux de données au sein de l'ETL interne.",
      } as Bil,
      keyOutcome: {
        en: "Improved data processing reliability and reduced pipeline latency within Bouygues Telecom's streaming infrastructure.",
        fr: "Fiabilité du traitement des données améliorée et latence des pipelines réduite au sein de l'infrastructure streaming de Bouygues Telecom.",
      } as Bil,
      applications: null,
    } as ProjectContent,
  },
  {
    slug: "bank-web-app-uqac",
    title: { en: "Bank Web App (UQAC)", fr: "Application Bancaire Web (UQAC)" } as Bil,
    description: {
      en: "Web application for a fictional bank developed during international exchange at UQAC. Full-stack project with React, TypeScript, and Spring Boot.",
      fr: "Application web pour une banque fictive développée lors de l'échange international à l'UQAC. Projet full-stack avec React, TypeScript et Spring Boot.",
    } as Bil,
    type: { en: "Academic Full-Stack Project", fr: "Projet Académique Full-Stack" } as Bil,
    date: "Jun 2023",
    role: { en: "Full-stack developer", fr: "Développeur full-stack" } as Bil,
    company: "UQAC",
    category: "software" as Category,
    tech: ["React", "TypeScript", "Spring Boot"],
    github: null as string | null,
    highlight: false,
    content: {
      context: {
        en: "Academic full-stack project at UQAC building a banking web application as part of the Advanced Web Technologies course, practicing modern full-stack development with React, TypeScript, and Spring Boot.",
        fr: "Projet académique full-stack à l'UQAC construisant une application bancaire web dans le cadre du cours de Technologies Web Avancées, en pratiquant le développement full-stack moderne avec React, TypeScript et Spring Boot.",
      } as Bil,
      approach: {
        en: ["Designed and implemented a RESTful API with Spring Boot and Java", "Built a React frontend with TypeScript for full type-safety", "Implemented user authentication, account management, and transaction history", "Applied clean architecture separating business logic from the UI layer"],
        fr: ["Conçu et implémenté une API RESTful avec Spring Boot et Java", "Construit un frontend React avec TypeScript pour une sécurité des types complète", "Implémenté l'authentification utilisateur, la gestion des comptes et l'historique des transactions", "Appliqué une architecture propre séparant la logique métier de la couche UI"],
      } as BilArr,
      solution: {
        en: "A functional banking web application with account management, transaction history, and secure user authentication — demonstrating full-stack capability with modern web technologies.",
        fr: "Une application bancaire web fonctionnelle avec gestion des comptes, historique des transactions et authentification sécurisée — démontrant la capacité full-stack avec les technologies web modernes.",
      } as Bil,
      keyOutcome: {
        en: "Complete full-stack delivery: REST API, typed React frontend, and functional banking features — built in 3 months during an international exchange.",
        fr: "Livraison full-stack complète : API REST, frontend React typé et fonctionnalités bancaires opérationnelles — construits en 3 mois lors d'un échange international.",
      } as Bil,
      applications: null,
    } as ProjectContent,
  },
  {
    slug: "data-analysis-addiction-study",
    title: { en: "Data Analysis – Addiction Study", fr: "Analyse de Données – Étude sur l'Addiction" } as Bil,
    description: {
      en: "Data analysis project on addiction statistics developed at UQAC using Jupyter Notebook and Pandas, with a full written report.",
      fr: "Projet d'analyse de données sur les statistiques d'addiction développé à l'UQAC avec Jupyter Notebook et Pandas, avec un rapport complet.",
    } as Bil,
    type: { en: "Academic Data Science Project", fr: "Projet Académique Data Science" } as Bil,
    date: "Jul 2023",
    role: { en: "Data analyst", fr: "Data analyst" } as Bil,
    company: "UQAC",
    category: "data" as Category,
    tech: ["Python", "Pandas", "Jupyter Notebook"],
    github: null as string | null,
    highlight: false,
    content: {
      context: {
        en: "Academic data science project at UQAC analyzing addiction statistics, covering the complete data science workflow from raw data ingestion to statistical insights and written report.",
        fr: "Projet académique de data science à l'UQAC analysant des statistiques sur l'addiction, couvrant l'intégralité du workflow data science depuis l'ingestion des données brutes jusqu'aux insights statistiques et au rapport écrit.",
      } as Bil,
      approach: {
        en: ["Collected and cleaned addiction statistics dataset from public sources", "Applied statistical analysis with Pandas and NumPy", "Visualized findings with Matplotlib and Seaborn", "Produced a structured written report documenting methodology and results"],
        fr: ["Collecté et nettoyé un jeu de données sur les statistiques d'addiction", "Appliqué des analyses statistiques avec Pandas et NumPy", "Visualisé les résultats avec Matplotlib et Seaborn", "Produit un rapport écrit structuré documentant la méthodologie et les résultats"],
      } as BilArr,
      solution: {
        en: "A complete Jupyter Notebook-based pipeline: from raw data ingestion and cleaning to statistical analysis, visualization, and a written analytical report.",
        fr: "Un pipeline complet basé sur Jupyter Notebook : depuis l'ingestion et le nettoyage des données brutes jusqu'à l'analyse statistique, la visualisation et un rapport analytique écrit.",
      } as Bil,
      keyOutcome: {
        en: "End-to-end data science workflow: data collection, cleaning, analysis, visualization, and documentation — in a reproducible Jupyter environment.",
        fr: "Workflow data science de bout en bout : collecte, nettoyage, analyse, visualisation et documentation — dans un environnement Jupyter reproductible.",
      } as Bil,
      applications: null,
    } as ProjectContent,
  },
  {
    slug: "erp-configuration-app",
    title: { en: "ERP Configuration App (Ag2ir)", fr: "Application de Configuration ERP (Ag2ir)" } as Bil,
    description: {
      en: "Java GUI application for configuring an ERP system (EBP) via XML files. Automated XML file processing to facilitate ERP integration in companies.",
      fr: "Application Java GUI pour configurer un ERP (EBP) via des fichiers XML. Automatisation du traitement XML pour faciliter l'intégration de l'ERP en entreprise.",
    } as Bil,
    type: { en: "Desktop Application", fr: "Application Desktop" } as Bil,
    date: "Jun 2022",
    role: { en: "Intern developer", fr: "Développeur stagiaire" } as Bil,
    company: "Ag2ir",
    category: "software" as Category,
    tech: ["Java", "Java Swing", "XML"],
    github: null as string | null,
    highlight: false,
    content: {
      context: {
        en: "During an internship at Ag2ir, the team needed a user-friendly desktop interface to configure their ERP system (EBP) through XML files, replacing error-prone manual XML editing by non-technical staff.",
        fr: "Lors d'un stage chez Ag2ir, l'équipe avait besoin d'une interface desktop conviviale pour configurer leur ERP (EBP) via des fichiers XML, remplaçant l'édition manuelle XML sujette aux erreurs.",
      } as Bil,
      approach: {
        en: ["Analyzed the ERP XML schema to understand the full configuration structure", "Developed a Java Swing GUI enabling visual configuration of ERP parameters", "Implemented automated XML file generation from user interface inputs", "Added validation to prevent configuration errors before ERP integration"],
        fr: ["Analysé le schéma XML de l'ERP pour comprendre la structure de configuration complète", "Développé une interface Java Swing permettant la configuration visuelle des paramètres ERP", "Implémenté la génération automatisée de fichiers XML depuis les saisies de l'interface", "Ajouté une validation pour éviter les erreurs de configuration avant l'intégration ERP"],
      } as BilArr,
      solution: {
        en: "A Java desktop application with a visual Swing interface for configuring the ERP system, automatically generating valid XML files and eliminating manual XML editing.",
        fr: "Une application Java desktop avec une interface Swing visuelle pour configurer l'ERP, générant automatiquement des fichiers XML valides et éliminant l'édition manuelle du XML.",
      } as Bil,
      keyOutcome: {
        en: "Non-technical staff can configure and integrate the ERP without touching XML directly, reducing configuration errors and integration time.",
        fr: "Le personnel non-technique peut configurer et intégrer l'ERP sans toucher directement au XML, réduisant les erreurs de configuration et le temps d'intégration.",
      } as Bil,
      applications: null,
    } as ProjectContent,
  },
];
