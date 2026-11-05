/**
 * Long-form product case studies.
 * Rules: no invented metrics, no confidential numbers (prices, markup percentages).
 * Where a result is not yet measured, say so plainly.
 */

export const caseStudies = {
  sellmato: {
    id: "sellmato",
    name: "SellMato",
    headline: "Turning a reseller marketplace into a product sellers can launch in minutes",
    intro:
      "SellMato lets creators and resellers open their own storefront, add supplier products with their own margin, and sell through a single link. I joined as Technical Product Manager to own the roadmap with the founders and to make the parts of the product that touch infrastructure, onboarding, supplier integrations, pricing and billing, work as one system.",
    facts: [
      { label: "Role", value: "Technical Product Manager" },
      { label: "Timeline", value: "June 2025 to present" },
      { label: "Team", value: "Founders, engineering, design" },
      { label: "Focus", value: "Onboarding, integrations, pricing, billing" },
    ],
    sections: [
      {
        id: "context",
        title: "Context",
        paragraphs: [
          "SellMato sits between two groups. Merchants and suppliers list wholesale products. Resellers and creators pick products, set their own margin and sell them from a personal storefront, usually shared through a bio link. SellMato earns through a markup based model, so every product that reaches a storefront with sensible pricing is directly tied to revenue.",
          "When I joined, the product had the core pieces: storefronts, merchant listings, custom margins and payouts. What it lacked was a clear order of work and a reliable way to bring large supplier catalogues in without manual effort.",
        ],
      },
      {
        id: "problem",
        title: "The problem",
        paragraphs: [
          "Three problems were holding growth back, and they were connected.",
        ],
        bullets: [
          "New sellers dropped off between signing up, listing a first product and making a first sale. The path asked for too much before a seller saw any value.",
          "Catalogue growth depended on people adding and pricing products by hand, which did not scale and produced inconsistent prices.",
          "Paid plans needed a subscription model that was fair to sellers who upgraded mid cycle and safe against double charges.",
        ],
      },
      {
        id: "users",
        title: "Who we built for",
        cards: [
          { title: "Resellers and creators", body: "Want a storefront live quickly, products worth selling, and confidence that margin and payouts are correct." },
          { title: "Merchants and suppliers", body: "Want their catalogue listed accurately without managing every reseller themselves." },
          { title: "SellMato operators", body: "Need predictable revenue, clean pricing and low support load." },
        ],
      },
      {
        id: "goals",
        title: "Goals",
        bullets: [
          "Shorten the path from sign up to first listing and first sale.",
          "Bring supplier catalogues in automatically, priced by rules instead of by hand.",
          "Launch a subscription model with a free trial that converts cleanly to paid.",
          "Keep the storefront fast and working even when a supplier's systems are slow or down.",
        ],
      },
      {
        id: "discovery",
        title: "Discovery",
        paragraphs: [
          "I worked from where sellers actually stalled rather than from a feature wish list. With the founders I mapped the seller journey step by step, marked where sellers waited, guessed or abandoned, and separated steps that helped a seller reach a first sale from steps that only existed because of how the system was built.",
          "On the supplier side I reviewed how product data, stock and prices flowed from the supplier's store into SellMato, and where that flow could fail. Those failure points shaped the integration design more than any single feature request.",
        ],
      },
      {
        id: "prioritisation",
        title: "Prioritisation",
        paragraphs: [
          "I scored roadmap items with the founders on three inputs: impact on seller activation, revenue potential and engineering effort. Onboarding came first because every other improvement depended on sellers getting through it. The supplier integration came next because it fed the catalogue that onboarded sellers needed. Billing followed so that activated sellers had a clear path to a paid plan.",
        ],
      },
      {
        id: "decisions",
        title: "Key decisions and trade offs",
        decisions: [
          {
            title: "Redesign onboarding around the first sale",
            why: "A seller who sees a working storefront early sees value before effort. The new flow gets a seller to a live storefront with products before asking for anything that is not needed to sell.",
            tradeoff: "Some profile details moved later in the journey, so operators accepted slightly less complete profiles at the start in exchange for more sellers reaching the end.",
          },
          {
            title: "Storefronts read from our own product cache, never directly from the supplier",
            why: "Calling the supplier on every page view would tie SellMato's speed and uptime to someone else's systems and rate limits. A cache first design, refreshed on a schedule and by supplier updates, keeps storefronts fast and keeps them working when the supplier is slow or unavailable.",
            tradeoff: "A cache can briefly show older stock or prices, so we defined how fresh data must be and where a live check is still worth the cost, such as at checkout.",
          },
          {
            title: "Price supplier products with rules, not by hand",
            why: "A tiered markup rule, a larger margin on lower priced items and a smaller one above a price threshold, plus a reserve for shipping costs the supplier did not provide, let whole catalogues go live with consistent pricing.",
            tradeoff: "Rules are less precise than hand pricing for edge cases, so sellers keep the ability to set their own margin on top.",
          },
          {
            title: "Specify billing edge cases before build",
            why: "Subscriptions fail in the edges: upgrades partway through a cycle, trials converting to paid, network retries. I wrote these into the acceptance criteria up front, including prorated first charges and safe retries so a seller is never billed twice.",
            tradeoff: "It added time to the spec, but billing bugs cost trust and refunds, which is far more expensive than writing them down first.",
          },
        ],
      },
      {
        id: "solution",
        title: "What we built",
        flow: [
          "Sign up",
          "Storefront created",
          "Pick supplier products",
          "Prices set by rules",
          "Share link",
          "First sale",
          "Upgrade to paid plan",
        ],
        paragraphs: [
          "The three workstreams meet in one journey. Onboarding gets the seller to a storefront fast, the supplier integration fills it with correctly priced products, and billing gives an activated seller a clear trial to paid path. Payouts close the loop so sellers see their margin arrive.",
        ],
      },
      {
        id: "specs",
        title: "Requirements and specs",
        paragraphs: [
          "Each workstream had a PRD with the problem, goals, non goals, user stories and acceptance criteria, plus the technical requirements engineering needed: which data comes from the supplier, how often it refreshes, what happens when a sync fails, and how billing events are recorded.",
        ],
        bullets: [
          "User stories written from the seller's and operator's point of view.",
          "Acceptance criteria covering failure paths, not only the happy path.",
          "API and data requirements agreed with engineering before build started.",
          "Release checklists that included the integration settings a sync depends on.",
        ],
      },
      {
        id: "delivery",
        title: "Working with engineering",
        paragraphs: [
          "My DevOps background let me work through the integration design with engineering as a peer: where the cache lives, how updates arrive, what the storefront does when data is missing. When a product sync failed because the supplier store was reported unavailable, the fix was not only technical. I added the required integration settings and an availability check to the release checklist, so the same class of failure is caught before launch.",
        ],
      },
      {
        id: "outcome",
        title: "Outcome",
        paragraphs: [
          "Onboarding, supplier integration, rule based pricing and subscription billing now work as one journey from sign up to a paid plan. Suppliers' catalogues can be brought in without manual pricing, and storefronts no longer depend on a supplier being online to load.",
        ],
      },
      {
        id: "learnings",
        title: "What I learned",
        bullets: [
          "Activation problems are often sequencing problems. Moving steps later can matter more than adding features.",
          "Integrations are products too. Their failure modes deserve the same design attention as screens.",
          "Writing billing edge cases down first is the cheapest quality work a PM can do.",
        ],
      },
    ],
  },

  xaaki: {
    id: "xaaki",
    name: "Xaaki",
    headline: "Designing repair booking, checkout and service rules from scratch",
    intro:
      "Xaaki is an on demand device repair platform. As a client engagement, I worked with the founder and engineering to define how a customer books a repair, pays for it and gets a technician, and the rules that keep that process fair when plans change.",
    facts: [
      { label: "Role", value: "Product Manager, client engagement" },
      { label: "Team", value: "Founder and engineering" },
      { label: "Type", value: "On demand services marketplace" },
      { label: "Focus", value: "Booking, checkout, policies, pricing" },
    ],
    sections: [
      {
        id: "context",
        title: "Context",
        paragraphs: [
          "Device repair is a trust problem. Customers hand over an expensive phone or laptop to someone they have never met, often without knowing what the repair should cost. Xaaki needed a booking experience that felt clear and safe, and operating rules that worked for both customers and technicians.",
        ],
      },
      {
        id: "problem",
        title: "The problem",
        bullets: [
          "There was no defined end to end flow from choosing a repair to paying for it.",
          "Rules for cancelling, rescheduling and assigning technicians were not written down, which would lead to disputes and support load.",
          "Pricing and service levels had not been structured, so customers could not compare options with confidence.",
        ],
      },
      {
        id: "users",
        title: "Who we built for",
        cards: [
          { title: "Customers", body: "Want to know what the repair will cost, when it will happen and what happens if plans change." },
          { title: "Technicians", body: "Want clear jobs, fair assignment and protection from last minute cancellations." },
          { title: "The founder", body: "Needs a service that customers trust and that can scale without manual coordination." },
        ],
      },
      {
        id: "discovery",
        title: "Discovery",
        paragraphs: [
          "I studied how competing repair and home service platforms structure booking, pricing and cancellation, and combined that with customer research on what made people hesitate. The pattern was clear: customers needed price clarity and policy clarity before they would commit.",
        ],
      },
      {
        id: "decisions",
        title: "Key decisions and trade offs",
        decisions: [
          {
            title: "One clear booking flow from repair choice to payment",
            why: "Every extra branch is a place a customer can drop off. The flow moves in one direction and shows the price before payment.",
            tradeoff: "A single path is less flexible for unusual cases, which was accepted to keep the common case simple.",
          },
          {
            title: "Write the policies into the product",
            why: "Cancellation, rescheduling and technician assignment rules were defined in the PRDs with acceptance criteria, so the product enforces them consistently instead of support deciding case by case.",
            tradeoff: "Stricter rules can feel less friendly, so they were shown clearly at booking time rather than surprising customers later.",
          },
          {
            title: "Service tiers instead of a single price",
            why: "Tiers let customers choose between speed and cost, and give the business room for a premium option. The structure came from competitor analysis and customer research.",
            tradeoff: "More options add a decision for the customer, so the tier structure had to stay simple to read.",
          },
          {
            title: "Check feasibility before committing features",
            why: "Before each feature was committed I assessed the API and data requirements and how it would scale, so the founder could weigh value against build cost.",
            tradeoff: "Some ideas were deferred, but the first release stayed buildable.",
          },
        ],
      },
      {
        id: "solution",
        title: "What we defined",
        flow: ["Choose repair", "See price and tier", "Pick a time", "Pay", "Technician assigned", "Repair done"],
        paragraphs: [
          "The flow, the checkout and payment experience, the policies and the pricing structure were documented in PRDs with acceptance criteria for engineering.",
        ],
      },
      {
        id: "outcome",
        title: "Outcome",
        paragraphs: [
          "Xaaki moved from an idea to a defined, buildable product: a complete booking and payment journey, written operating policies and a pricing structure grounded in research, ready for engineering to build against.",
        ],
      },
      {
        id: "learnings",
        title: "What I learned",
        bullets: [
          "In services, policies are part of the user experience, not an operations afterthought.",
          "Price clarity before payment does more for trust than any amount of copy.",
        ],
      },
    ],
  },

  nyburs: {
    id: "nyburs",
    name: "Nyburs",
    headline: "Giving a hyperlocal social platform reasons for neighbours to talk",
    intro:
      "Nyburs is a hyperlocal social platform. At Pietech Technology I took on product ownership alongside my engineering role, defining the community features that give people nearby a reason to connect and keep coming back.",
    facts: [
      { label: "Role", value: "Product ownership" },
      { label: "Company", value: "Pietech Technology" },
      { label: "Team", value: "Founders, design, engineering" },
      { label: "Focus", value: "Community and engagement features" },
    ],
    sections: [
      {
        id: "context",
        title: "Context",
        paragraphs: [
          "A local social product lives or dies on whether people find something worth returning to. Without structure, local feeds turn into noise or go quiet.",
        ],
      },
      {
        id: "problem",
        title: "The problem",
        paragraphs: [
          "The platform needed structured spaces for engagement, defined clearly enough for design and engineering to build, so that conversations had a home and a reason to continue.",
        ],
      },
      {
        id: "decisions",
        title: "What I defined",
        decisions: [
          {
            title: "Local circles",
            why: "Smaller groups around a shared place or interest make it easier to start a conversation than one large public feed.",
            tradeoff: "More groups can fragment activity, so circles were scoped to stay meaningful rather than unlimited.",
          },
          {
            title: "Discussions",
            why: "Threaded discussions inside circles give conversations a lasting structure, so useful local knowledge is not lost in a stream.",
            tradeoff: "Structure adds a little friction compared with a quick post, which is worth it for depth.",
          },
        ],
      },
      {
        id: "specs",
        title: "Requirements and delivery",
        paragraphs: [
          "I wrote the PRDs and specifications for these features and worked with design, engineering and the founders from concept through to release.",
        ],
      },
      {
        id: "learnings",
        title: "What I learned",
        bullets: [
          "Engagement features need a reason to return, not just a place to post.",
          "Owning product next to engineering work showed me how much faster delivery goes when the spec answers engineering's questions before they are asked.",
        ],
      },
    ],
  },

  superbrain: {
    id: "superbrain",
    name: "Superbrain",
    headline: "Scoping AI features against what users actually need",
    intro:
      "Superbrain is an AI powered product. At Pietech Technology I defined AI feature requirements and helped decide which ideas were worth building, weighing technical feasibility against real user value.",
    facts: [
      { label: "Role", value: "Product ownership" },
      { label: "Company", value: "Pietech Technology" },
      { label: "Team", value: "Founders and engineering" },
      { label: "Focus", value: "AI requirements, prioritisation, positioning" },
    ],
    sections: [
      {
        id: "context",
        title: "Context",
        paragraphs: [
          "AI products tempt teams to build what is impressive rather than what is useful. Every AI feature also carries real costs in compute, latency and reliability that a roadmap has to account for.",
        ],
      },
      {
        id: "problem",
        title: "The problem",
        paragraphs: [
          "The product needed AI feature requirements that engineering could build and users would value, and a roadmap that did not over promise on what the technology could reliably do.",
        ],
      },
      {
        id: "decisions",
        title: "How I approached it",
        decisions: [
          {
            title: "Feasibility next to value for every feature",
            why: "Each proposed AI feature was scoped on two sides: the user problem it solved and what it would take to make it work reliably. Features strong on both moved forward.",
            tradeoff: "Some exciting ideas waited, which kept the roadmap credible.",
          },
          {
            title: "Requirements that define good enough",
            why: "AI output is not deterministic, so requirements described what acceptable output looks like and what happens when the model gets it wrong.",
            tradeoff: "Harder to write than a normal spec, but it removes the biggest source of rework on AI features.",
          },
        ],
      },
      {
        id: "specs",
        title: "Roadmap and positioning",
        paragraphs: [
          "I contributed to roadmap prioritisation and to how the product was positioned, so the story told about the product matched what it could reliably deliver.",
        ],
      },
      {
        id: "learnings",
        title: "What I learned",
        bullets: [
          "For AI features, defining failure behaviour is as important as defining the feature.",
          "Positioning should follow capability, not lead it.",
        ],
      },
    ],
  },
};

export function getCaseStudy(id) {
  return caseStudies[id] || null;
}
