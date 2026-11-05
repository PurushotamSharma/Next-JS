/**
 * Central identity & professional data, single source of truth.
 * Structure: identity · currentRole · employment · independentProductWork ·
 * productProjects · engineeringProjects · skills · writing · profiles
 * Never invent dates, metrics, or employment relationships.
 */

export const SITE_URL = "https://purushotam.devopsguy.in";

/** Identity */
const identity = {
  name: "Purushotam Sharma",
  givenName: "Purushotam",
  familyName: "Sharma",
  title: "Technical Product Manager",
  headline:
    "Technical Product Manager with a DevOps & Cloud Infrastructure Background",
  tagline: "Turning technical complexity into products people use.",
  supportingStatement:
    "Technical Product Manager with a DevOps and Cloud Infrastructure background, bridging product strategy, business requirements, and engineering execution.",
  description:
    "I have evolved from a DevOps Engineer into a de facto Technical Product Manager through hands on ownership of product strategy, feature planning, and PRD writing across multiple SaaS products. I combine infrastructure fluency (AWS, Kubernetes, CI/CD, APIs) with product judgment (roadmapping, prioritization, pricing, onboarding, booking/checkout design, and stakeholder communication). My strength is translating business requirements into clear product and technical solutions for engineering teams.",
  shortDescription:
    "Purushotam Sharma is a Technical Product Manager for SaaS, marketplaces and platform integrations, with a DevOps and cloud background. Open to remote roles.",
  location: {
    locality: "",
    region: "Gujarat",
    country: "India",
    label: "Gujarat, India (remote)",
  },
  image: `${SITE_URL}/assets/photo.png`,
  imagePath: "/assets/photo.png",
  avatarPath: "/assets/avatar.png",
  url: SITE_URL,
  emailPublic: "purushotam@devopsguy.in",
  phonePublic: null, // TODO: confirm if phone should be public
  entityId: `${SITE_URL}/#person`,
  websiteId: `${SITE_URL}/#website`,
};

/** Dominant current professional role */
const currentRole = {
  company: "SellMato",
  title: "Technical Product Manager",
  period: "Jun 2025 → Present",
  startYear: "2025",
  endYear: null,
  isCurrent: true,
  type: "employment",
  label: "Currently working with SellMato",
  description: "", // TODO: confirm public description
  responsibilities: [
    "Worked with founders to prioritize roadmap items",
    "Defined new product features",
    "Improved seller onboarding",
    "Wrote user stories and acceptance criteria for engineering",
    "Contributed to business model and monetization strategy",
    "Worked with the platform's markup based revenue model",
  ],
  achievements: [], // TODO: verified outcome metrics only
};

/** Professional employment only, never include freelance/independent work here */
const employment = [
  {
    id: "sellmato",
    company: "SellMato",
    title: "Technical Product Manager",
    period: "Jun 2025 → Present",
    start: "2025-06",
    end: null,
    startYear: "2025",
    endYear: null,
    isCurrent: true,
    type: "employment",
    summary:
      "Current role focused on product strategy, feature definition, seller onboarding, and monetization for a SaaS marketplace.",
    responsibilities: [
      "Worked with founders to prioritize roadmap items",
      "Defined new product features",
      "Improved seller onboarding",
      "Wrote user stories and acceptance criteria for engineering",
      "Contributed to business model and monetization strategy",
      "Worked with the platform's markup based revenue model",
    ],
    achievements: [],
  },
  {
    id: "pietech",
    company: "Pietech Technology",
    title: "Senior DevOps Engineer, Product Ownership",
    period: "Jun 2024 → Jun 2025",
    start: "2024-06",
    end: "2025-06",
    startYear: "2024",
    endYear: "2025",
    isCurrent: false,
    type: "employment",
    summary:
      "Led technical delivery while expanding into product ownership across SaaS products (Nyburs, Superbrain).",
    responsibilities: [
      "Architected CI/CD pipelines and cloud infrastructure on AWS and Azure",
      "Operated observability with Prometheus, Grafana, and ELK",
      "Acted as translator between business stakeholders and engineering",
      "Partnered with design, engineering, and founders on product work",
    ],
    achievements: [
      "Production incident MTTR reduced by 30% with Prometheus and Grafana monitoring",
    ],
    productOwnership: [
      {
        product: "Nyburs",
        items: [
          "Defined community engagement features, local circles, and discussions",
          "Wrote PRDs and specifications",
          "Partnered with design, engineering, and founders from concept through shipping",
        ],
      },
      {
        product: "Superbrain",
        items: [
          "Defined AI feature requirements",
          "Scoped technical feasibility versus user value",
          "Contributed to roadmap prioritization and product positioning",
        ],
      },
    ],
  },
  {
    id: "credence",
    company: "Credence Technology",
    title: "DevOps Engineer",
    period: "Nov 2021 → Jun 2024",
    start: "2021-11",
    end: "2024-06",
    startYear: "2021",
    endYear: "2024",
    isCurrent: false,
    type: "employment",
    summary:
      "Containerized applications and improved deployment reliability across Docker, Kubernetes, AKS, EKS, and Azure.",
    responsibilities: [
      "Containerized applications with Docker and Kubernetes (AKS, EKS)",
      "Worked across Azure with development and operations teams",
      "Production troubleshooting and reliability work",
    ],
    achievements: [
      "Deployment time cut from 45 minutes to 5 minutes",
      "Legacy app migrated to AWS with 99.9% uptime",
    ],
  },
];

/** Independent / freelance product work, never in employment timeline */
const independentProductWork = [
  {
    id: "xaaki",
    name: "Xaaki",
    category: "Client engagement",
    title: "On Demand Device Repair Platform",
    type: "independent_product_work",
    period: "", // TODO: confirm dates, do not invent
    summary:
      "Partnered with founder and engineering to define booking, checkout, policies, and pricing for an on demand device repair platform.",
    responsibilities: [
      "Defined repair booking flow and checkout/payment experience",
      "Defined booking policies: cancellation, rescheduling, technician assignment",
      "Wrote PRDs and acceptance criteria",
      "Proposed pricing and service tier structure",
      "Conducted competitor and customer research",
    ],
    outcomes: [],
  },
];

const education = [
  {
    institution: "Charotar University",
    degree: "Master of Computer Application",
    duration: "2022 to 2024",
  },
  {
    institution: "MDSU University",
    degree: "Bachelor of Science",
    duration: "2019 to 2022",
  },
];

/** Product case studies, SellMato first */
const productProjects = [
  {
    id: "sellmato",
    name: "SellMato",
    type: "product",
    featured: true,
    priority: 1,
    role: "Technical Product Manager",
    status: "current",
    summary:
      "SaaS marketplace product work spanning roadmap prioritization, seller onboarding, feature definition, and monetization.",
    context:
      "SellMato is a SaaS marketplace where sellers need clear onboarding and the business needs a coherent roadmap tied to monetization.",
    roleDetail:
      "Technical Product Manager, owning feature definition, requirements, prioritization, and collaboration with founders and engineering.",
    problem:
      "Sellers needed clearer onboarding, and the product needed sharper prioritization between growth features and a sustainable revenue model.",
    users: "Sellers joining and operating on the marketplace; marketplace operators.",
    businessObjective:
      "Improve seller activation through better onboarding while aligning the roadmap with a markup based revenue model.",
    productDecisions: [
      "Prioritized roadmap items with founders based on seller and business impact",
      "Defined new product features against real seller and marketplace needs",
      "Focused product effort on onboarding as a critical activation path",
    ],
    featureDefinition:
      "Defined product features with enough clarity for engineering to implement without guessing intent.",
    prioritization:
      "Worked with founders to prioritize roadmap items, sequencing work by value, feasibility, and monetization impact.",
    sellerOnboarding:
      "Improved seller onboarding so new sellers could understand and complete the path into the marketplace more clearly.",
    userStories: "Wrote user stories that captured seller and operator needs for engineering.",
    acceptanceCriteria:
      "Wrote acceptance criteria so engineering and stakeholders shared a clear definition of done.",
    monetization:
      "Contributed to business model strategy and the platform's markup based revenue model.",
    technicalCollaboration:
      "Partnered with engineering to turn product requirements into implementable work and stay close to delivery constraints.",
    discovery: null,
    productGoal: null,
    userFlow: null,
    requirements: null,
    prd: null,
    outcome: null, // Do not invent metrics
    href: "/projects/sellmato",
  },
  {
    id: "xaaki",
    name: "Xaaki",
    type: "product",
    featured: true,
    priority: 2,
    role: "Product Management (client engagement)",
    status: "case_study",
    workType: "independent",
    summary:
      "On demand device repair platform, booking, checkout, policies, and pricing designed with founder and engineering.",
    context: "On demand device repair platform (client engagement).",
    roleDetail:
      "Product management for a client, working with the founder and engineering.",
    problem:
      "Repair booking and payment needed a clear, trustworthy flow with policies for cancellation, rescheduling, and technician assignment.",
    users: "Customers booking device repairs; technicians fulfilling jobs.",
    businessObjective:
      "Create a bookable, payable repair experience with a viable service tier structure.",
    productGoal:
      "Define end to end booking and checkout with policy and pricing clarity.",
    discovery: "Competitor research and customer research.",
    productDecisions: [
      "Defined repair booking flow",
      "Designed checkout and payment experience",
      "Defined cancellation, rescheduling, and technician assignment policies",
      "Proposed pricing and service tier structure",
    ],
    userFlow:
      "Repair booking → policies → technician assignment → checkout/payment.",
    requirements: ["PRDs", "Acceptance criteria"],
    prd: "Wrote PRDs and acceptance criteria for engineering.",
    technicalCollaboration:
      "Worked with founder and engineering team through definition and delivery.",
    prioritization: null,
    monetization: "Proposed pricing and service tier structure.",
    outcome: null,
    href: "/projects/xaaki",
  },
  {
    id: "nyburs",
    name: "Nyburs",
    type: "product",
    featured: true,
    priority: 3,
    role: "Product ownership (Pietech)",
    status: "shipped",
    summary:
      "Community features such as local circles and discussions, from concept through shipping.",
    context: "Community engagement product during Pietech tenure.",
    roleDetail: "Product ownership in partnership with design, engineering, and founders.",
    problem:
      "Needed structured community engagement surfaces (local circles, discussions) defined for design and engineering.",
    users: "Community members participating in local circles and discussions.",
    businessObjective: "Increase meaningful community engagement on the platform.",
    productGoal:
      "Specify and ship community engagement features in partnership with design and engineering.",
    discovery: null,
    productDecisions: [
      "Defined community engagement features",
      "Defined local circles and discussions",
    ],
    userFlow: null,
    requirements: ["PRDs / specifications"],
    prd: "Wrote PRDs and specifications.",
    technicalCollaboration:
      "Partnered with design, engineering, and founders from concept through shipping.",
    prioritization: null,
    monetization: null,
    outcome: null,
    href: "/projects/nyburs",
  },
  {
    id: "superbrain",
    name: "Superbrain",
    type: "product",
    featured: true,
    priority: 4,
    role: "Product ownership (Pietech)",
    status: "ai_product",
    summary:
      "AI powered product, feature requirements, feasibility vs value tradeoffs, roadmap and positioning contributions.",
    context: "AI powered product during Pietech tenure.",
    roleDetail: "Defined AI feature requirements and contributed to prioritization and positioning.",
    problem:
      "AI features needed clear requirements balancing technical feasibility with real user value.",
    users: "End users of the AI powered product.",
    businessObjective:
      "Advance an AI product roadmap with credible positioning and feasible scope.",
    productGoal:
      "Define AI feature requirements and contribute to prioritization and positioning.",
    discovery: null,
    productDecisions: [
      "Defined AI feature requirements",
      "Scoped technical feasibility versus user value",
      "Contributed to product positioning",
    ],
    userFlow: null,
    requirements: ["AI feature requirements"],
    prd: null,
    technicalCollaboration: "Worked with engineering on feasibility and delivery.",
    prioritization: "Contributed to roadmap prioritization.",
    monetization: null,
    outcome: null,
    href: "/projects/superbrain",
  },
];

const engineeringProjects = [
  {
    id: "gitops-k8s",
    name: "GitOps based Kubernetes Deployment",
    type: "engineering",
    summary:
      "GitOps practices for continuous deployment on Kubernetes with stronger delivery consistency.",
    tech: ["ArgoCD", "Kubernetes", "GitHub Actions", "Kustomize"],
    href: "/blog/gitops-implementation",
  },
  {
    id: "event-driven-cicd",
    name: "Event driven Microservices CI/CD",
    type: "engineering",
    summary:
      "Automated CI/CD for containerized services, pipelines, quality gates, and faster safe releases.",
    tech: ["Jenkins", "GitHub Actions", "Docker", "Kubernetes", "ArgoCD"],
    href: "/blog/cicd-pipeline-automation",
  },
  {
    id: "iac",
    name: "Infrastructure as Code",
    type: "engineering",
    summary:
      "Cloud infrastructure defined and managed as code to reduce drift and improve repeatability.",
    tech: ["Terraform", "AWS", "Ansible"],
    href: "/blog/infrastructure-as-code",
  },
  {
    id: "observability",
    name: "Microservices Monitoring & Observability",
    type: "engineering",
    summary:
      "Monitoring and alerting with Prometheus, Grafana, and ELK oriented observability practices.",
    tech: ["Prometheus", "Grafana", "ELK"],
    href: "/blog/microservices-monitoring",
  },
];

const skills = {
  product: [
    "Strategy",
    "Discovery",
    "PRDs",
    "Roadmaps",
    "Prioritization",
    "Monetization",
  ],
  engineering: [
    "Cloud",
    "AWS",
    "Kubernetes",
    "CI/CD",
    "Infrastructure",
    "APIs",
  ],
  technologies: [
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "Jenkins",
    "ArgoCD",
    "Terraform",
    "Infrastructure as Code",
    "Prometheus",
    "Grafana",
    "APIs",
    "Databases",
    "CI/CD",
  ],
  productCapabilities: [
    {
      name: "Product Strategy",
      how: "I connect business goals to a clear product direction before features are scoped.",
    },
    {
      name: "Roadmapping & Prioritization",
      how: "I work with founders and stakeholders to sequence work by user value, feasibility, and revenue impact.",
    },
    {
      name: "PRDs, User Stories & Acceptance Criteria",
      how: "I write requirements engineering can build against, clear enough to reduce ambiguity and rework.",
    },
    {
      name: "Feature Definition & Discovery",
      how: "I start from the user problem, validate options, then define the smallest useful product change.",
    },
    {
      name: "Onboarding, Booking & Checkout Design",
      how: "I design critical conversion flows where product decisions directly affect activation and revenue.",
    },
    {
      name: "Pricing & Monetization",
      how: "I contribute to pricing models and revenue mechanics, including marketplace markup structures.",
    },
    {
      name: "Engineering Collaboration",
      how: "I translate product intent into technical requirements and stay close to delivery constraints.",
    },
    {
      name: "Business to Engineering Translation",
      how: "I sit between stakeholders and builders so business requirements become shippable product and technical work.",
    },
  ],
  engineeringMessage:
    "My engineering background strengthens my product decisions.",
  differentiator:
    "Most product managers stop at requirements. Most engineers stop at systems. I work across both, so I can challenge a feature that is expensive to build, spot delivery risks early, and write requirements engineering can actually ship.",
};

const productMethodology = [
  {
    step: "Understand",
    body: "Start with the business goal and the user problem, not a feature request.",
  },
  {
    step: "Discover",
    body: "Learn what users need and what competitors already do, then test assumptions.",
  },
  {
    step: "Define",
    body: "Turn insight into clear product requirements, user stories, and acceptance criteria.",
  },
  {
    step: "Prioritize",
    body: "Choose what matters now based on value, effort, and revenue impact.",
  },
  {
    step: "Design",
    body: "Shape the flow, especially onboarding, booking, and checkout, before build starts.",
  },
  {
    step: "Build",
    body: "Stay close to engineering so intent survives implementation and tradeoffs stay visible.",
  },
  {
    step: "Measure",
    body: "Look at whether the change helped users and the business, not just whether it shipped.",
  },
  {
    step: "Iterate",
    body: "Use what you learned to improve the next cycle of decisions.",
  },
];

const writing = {
  summary:
    "Technical writing on Hashnode covering DevOps and cloud technologies.",
  categories: [
    "DevOps",
    "AWS",
    "Cloud",
    "Kubernetes",
    "Docker",
    "CI/CD",
    "Git",
    "Infrastructure",
  ],
};

const achievements = [
  {
    id: "hashnode-blogs",
    label: "Technical writing on Hashnode covering DevOps and cloud technologies",
  },
  {
    id: "tws-community",
    label: "Recognized as a Community Builder for the DevOps community (TWS)",
  },
];

const focusAreas = [
  "Product Strategy",
  "SaaS",
  "Roadmapping",
  "PRDs",
  "Engineering Collaboration",
  "Cloud / DevOps",
];

/**
 * Verified public profile URLs only (exact).
 * Used by footer, social components, and Person JSON-LD sameAs.
 * Do not add Medium, Topmate, or any unverified handle.
 */
const profiles = [
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/purushotamsharma/",
  },
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/PurushotamSharma",
  },
  {
    id: "hashnode",
    label: "Hashnode",
    url: "https://hashnode.com/@PurushotamSharma",
  },
  {
    id: "x",
    label: "X",
    url: "https://x.com/iampurushotamps",
  },
];

/** Header: five links plus the Contact button. Home is the logo. */
const navigation = [
  { name: "Work", path: "/projects" },
  { name: "Approach", path: "/product" },
  { name: "Experience", path: "/experience" },
  { name: "Writing", path: "/writing" },
  { name: "About", path: "/about" },
];

/** Footer: every page */
const footerNavigation = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/projects" },
  { name: "Approach", path: "/product" },
  { name: "Experience", path: "/experience" },
  { name: "Engineering", path: "/engineering" },
  { name: "Writing", path: "/writing" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const knowsAbout = [
  "Technical Product Management",
  "Product Strategy",
  "Product Discovery",
  "Roadmapping",
  "Prioritization",
  "PRDs",
  "SaaS",
  "Cloud Infrastructure",
  "DevOps",
  "AWS",
  "Azure",
  "Kubernetes",
  "Docker",
  "CI/CD",
  "Terraform",
  "Infrastructure as Code",
  "Automation",
];

export const person = {
  ...identity,
  identity,
  currentRole,
  employment,
  independentProductWork,
  education,
  productProjects: [...productProjects].sort((a, b) => a.priority - b.priority),
  engineeringProjects,
  skills,
  productMethodology,
  writing,
  achievements,
  focusAreas,
  profiles,
  /** @deprecated use profiles, kept for gradual migration safety */
  socialProfiles: profiles,
  navigation,
  footerNavigation,
  knowsAbout,
  /** Convenience aliases used by pages */
  productCapabilities: skills.productCapabilities,
  technicalFoundation: {
    message: skills.engineeringMessage,
    technologies: skills.technologies,
  },
};

/** Person.sameAs, confirmed public profiles only */
export const sameAs = profiles.map((p) => p.url);

export function getProfileUrl(id) {
  return profiles.find((p) => p.id === id)?.url || null;
}

export function getProductProject(id) {
  return person.productProjects.find((p) => p.id === id) || null;
}

export function getFeaturedProductProjects() {
  return person.productProjects.filter((p) => p.featured);
}

/** Length of a role from "YYYY-MM" start/end (end null = today), LinkedIn style */
export function formatRoleDuration(role) {
  if (!role.start) return "";
  const [sy, sm] = role.start.split("-").map(Number);
  const now = new Date();
  const [ey, em] = role.end ? role.end.split("-").map(Number) : [now.getFullYear(), now.getMonth() + 1];
  const months = (ey - sy) * 12 + (em - sm) + 1;
  const y = Math.floor(months / 12), m = months % 12;
  return [y ? `${y} yr${y > 1 ? "s" : ""}` : "", m ? `${m} mo${m > 1 ? "s" : ""}` : ""].filter(Boolean).join(" ");
}

/** Display employment / role period without inventing month-level dates */
export function formatRoleDates(role) {
  if (role.period) return role.period;
  if (role.isCurrent && role.startYear) return `${role.startYear} → Present`;
  if (role.startYear && role.endYear) return `${role.startYear} → ${role.endYear}`;
  if (role.isCurrent) return "Present";
  return "";
}
