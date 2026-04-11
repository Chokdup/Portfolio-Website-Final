export interface Project {
  id: number
  slug: string
  title: string
  category: string
  description: string
  tags: string[]
  metrics: string
  image: string
  color: string
  // Extended case study content
  year: string
  contributions: string[]
  hook: string
  situation: string
  action: string
  result: string
  processBreakdown: string[]
  designProcess: {
    title: string
    description: string
  }[]
  mockups: {
    src: string
    alt: string
    caption: string
  }[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
}

export const projects: Project[] = [
  {
    id: 0,
    slug: "scan2dine",
    title: "SCAN2DINE",
    category: "Web Apps",
    description: "Award-winning QR-based digital menu system that transforms dining experiences by making them easier, faster, and more enjoyable through contactless technology.",
    tags: ["UI/UX Design", "Frontend Dev", "UX Research"],
    metrics: "Best Project Award",
    image: "/projects/scan2dine-hero.jpg",
    color: "from-amber-500/20 to-orange-600/20",
    year: "2025",
    contributions: ["UI/UX Design", "UX Research", "Frontend Development", "Poster Design", "Promotional Video"],
    hook: "Transforming dining experiences with a simple scan - making restaurant ordering seamless, hygienic, and delightful.",
    processBreakdown: [
      "Conducted extensive user research to understand pain points in traditional restaurant ordering",
      "Analyzed customer behavior and restaurant workflows to identify friction points",
      "Created user personas and journey maps for both customers and restaurant staff",
      "Designed intuitive information architecture for easy menu navigation",
      "Built interactive prototypes in Figma for early validation with real users",
      "Developed a clean, accessible interface optimized for mobile scanning",
      "Implemented responsive frontend with focus on speed and usability",
      "Designed promotional materials including posters and video content",
      "Conducted usability testing to refine the ordering experience"
    ],
    situation: "Restaurants were relying on physical menu books that were often unhygienic, outdated, and inconvenient to update. This created friction in the customer experience and limited restaurants' ability to deliver a smooth and engaging ordering journey, reducing customer satisfaction and repeat visits.",
    action: "I designed and developed SCAN2DINE, a QR-based digital menu system focused on improving usability, accessibility, and customer experience. I led the UI/UX design, conducted user research to understand real user needs, and built a clean, intuitive interface that allowed customers to quickly browse menus with ease. I also worked on frontend development and created promotional materials to help drive adoption.",
    result: "The solution improved customer experience by providing a fast, hygienic, and easy-to-use digital menu interface. By removing friction and making the menu experience seamless, SCAN2DINE helped restaurants deliver a more engaging user experience and contributed to higher user satisfaction and retention. The project was recognized as a Best Project for its real-world impact and usability-driven design.",
    designProcess: [
      { title: "Research", description: "User interviews and competitive analysis to understand dining pain points" },
      { title: "Define", description: "Created personas and mapped customer journeys for digital ordering" },
      { title: "Ideate", description: "Explored multiple design concepts for QR-based menu interfaces" },
      { title: "Prototype", description: "Built interactive prototypes tested with real restaurant customers" },
      { title: "Deliver", description: "Developed final product with frontend implementation and promotional materials" }
    ],
    mockups: [
      { src: "/projects/scan2dine-home.jpg", alt: "SCAN2DINE home page", caption: "Landing page showcasing the hassle-free digital dining experience" },
      { src: "/projects/scan2dine-about.jpg", alt: "SCAN2DINE about section", caption: "About page explaining the QR-based menu system benefits" },
      { src: "/projects/scan2dine-contact.jpg", alt: "SCAN2DINE contact page", caption: "Contact form with consistent Get in Touch styling" }
    ],
    testimonial: {
      quote: "SCAN2DINE revolutionized how our customers interact with our menu. The contactless experience has significantly improved customer satisfaction.",
      author: "Restaurant Partner",
      role: "Early Adopter, SCAN2DINE"
    }
  },
  {
    id: 1,
    slug: "fintrack-dashboard",
    title: "FinTrack Dashboard",
    category: "Dashboard",
    description: "A comprehensive financial analytics dashboard that increased user engagement by 45% through intuitive data visualization.",
    tags: ["Figma", "React", "Data Viz"],
    metrics: "+45% engagement",
    image: "/projects/fintrack.jpg",
    color: "from-blue-600/20 to-indigo-500/20",
    year: "2024",
    contributions: ["UI/UX Design", "User Research", "Prototyping", "Design System", "Usability Testing"],
    hook: "Transforming complex financial data into actionable insights that users actually want to explore.",
    processBreakdown: [
      "Conducted 15 in-depth user interviews to understand pain points and workflows",
      "Analyzed 3 months of usage data to identify drop-off points and friction areas",
      "Created user personas and journey maps to guide design decisions",
      "Redesigned information architecture based on card sorting sessions",
      "Built interactive prototypes in Figma for early validation",
      "Implemented progressive disclosure patterns for complex data",
      "Designed customizable dashboard with drag-and-drop widgets",
      "Created a comprehensive design system for consistency",
      "Ran A/B tests on key interactions to optimize engagement"
    ],
    situation: "FinTrack, a B2B fintech startup, struggled with low user engagement on their analytics platform. Users found the existing dashboard overwhelming with dense data tables and confusing navigation. The average session duration was under 2 minutes, and support tickets about 'finding specific data' accounted for 40% of all inquiries.",
    action: "I led a complete UX overhaul starting with extensive user research—conducting 15 user interviews and analyzing 3 months of usage data. Key interventions included: redesigning the information architecture around user mental models, introducing progressive disclosure for complex data, creating a customizable dashboard with drag-and-drop widgets, and implementing contextual micro-interactions that guide users through data exploration.",
    result: "Within 3 months of launch, user engagement increased by 45%, with average session duration growing from 2 minutes to 8.5 minutes. Support tickets related to navigation dropped by 65%, and the NPS score improved from 32 to 58. The redesign also contributed to a 28% increase in premium tier upgrades.",
    designProcess: [
      { title: "Discovery", description: "User interviews and competitive analysis to understand pain points and opportunities" },
      { title: "Information Architecture", description: "Card sorting sessions to restructure navigation around user mental models" },
      { title: "Wireframing", description: "Low-fidelity prototypes tested with 8 users to validate core concepts" },
      { title: "Visual Design", description: "High-fidelity designs with a focus on data visualization clarity" },
      { title: "Iteration", description: "A/B testing key interactions and refining based on quantitative data" }
    ],
    mockups: [
      { src: "/projects/fintrack-dashboard-main.jpg", alt: "FinTrack main dashboard view", caption: "The redesigned main dashboard with customizable widgets" },
      { src: "/projects/fintrack-analytics.jpg", alt: "FinTrack analytics deep dive", caption: "Progressive disclosure allows users to drill into detailed analytics" },
      { src: "/projects/fintrack-mobile.jpg", alt: "FinTrack mobile responsive view", caption: "Fully responsive design maintains functionality on mobile" }
    ],
    testimonial: {
      quote: "The new dashboard completely changed how our users interact with their data. We've seen engagement metrics we never thought possible.",
      author: "Sarah Chen",
      role: "Product Lead, FinTrack"
    }
  },
  {
    id: 2,
    slug: "healthsync-mobile",
    title: "HealthSync Mobile",
    category: "Mobile",
    description: "Health tracking app that achieved 4.8 star rating through focus on accessibility and seamless user experience.",
    tags: ["iOS", "Android", "Health Tech"],
    metrics: "4.8★ rating",
    image: "/projects/healthsync.jpg",
    color: "from-indigo-500/20 to-blue-600/20",
    year: "2024",
    contributions: ["UI/UX Design", "Accessibility Design", "User Research", "Prototyping", "Mobile Design"],
    hook: "Making health data personal, actionable, and accessible to everyone—regardless of ability or tech-savviness.",
    processBreakdown: [
      "Performed comprehensive accessibility audit using WCAG 2.1 guidelines",
      "Recruited users with diverse abilities for inclusive user testing",
      "Simplified onboarding flow with progressive feature introduction",
      "Designed voice-over optimized interfaces with proper semantic markup",
      "Created high-contrast mode and customizable text size options",
      "Developed Focus Mode highlighting 3 most relevant health metrics",
      "Tested prototypes with screen readers and alternative input methods",
      "Implemented haptic feedback for key interactions",
      "Designed consistent gesture patterns across the app"
    ],
    situation: "HealthSync had a functional health tracking app with solid backend capabilities, but user retention was poor. The app had a 2.9 star rating with common complaints about confusing navigation, inaccessible design for users with visual impairments, and overwhelming feature density. Only 15% of users returned after the first week.",
    action: "I conducted accessibility audits using WCAG 2.1 guidelines and recruited users with diverse abilities for testing. The redesign prioritized: simplified onboarding with progressive feature introduction, voice-over optimized interfaces with proper semantic markup, high-contrast mode and customizable text sizes, and a 'Focus Mode' that highlights the 3 most relevant health metrics based on user goals.",
    result: "The app rating improved from 2.9 to 4.8 stars within 4 months. Week-1 retention increased from 15% to 42%. The app received recognition from the American Foundation for the Blind for accessibility excellence, and was featured in the App Store's 'Apps We Love' collection.",
    designProcess: [
      { title: "Accessibility Audit", description: "Comprehensive review against WCAG 2.1 AA standards" },
      { title: "Inclusive User Research", description: "Testing sessions with users of varying abilities and ages" },
      { title: "Simplified IA", description: "Reduced feature complexity while maintaining power-user capabilities" },
      { title: "Prototype Testing", description: "Iterative testing with screen readers and alternative input methods" },
      { title: "Launch & Monitor", description: "Phased rollout with accessibility metrics tracking" }
    ],
    mockups: [
      { src: "/projects/healthsync-home.jpg", alt: "HealthSync home screen", caption: "Clean home screen with personalized health insights" },
      { src: "/projects/healthsync-tracking.jpg", alt: "HealthSync tracking interface", caption: "Simplified tracking with voice input support" },
      { src: "/projects/healthsync-accessibility.jpg", alt: "HealthSync accessibility features", caption: "High contrast mode and customizable text sizes" }
    ],
    testimonial: {
      quote: "For the first time, I can use a health app independently with my screen reader. This is how all apps should be designed.",
      author: "Michael Torres",
      role: "App User & Accessibility Advocate"
    }
  },
  {
    id: 3,
    slug: "shopease-ecommerce",
    title: "ShopEase E-commerce",
    category: "Web Apps",
    description: "E-commerce platform that increased checkout completion by 35% through streamlined purchase flow.",
    tags: ["E-commerce", "UX Research", "A/B Testing"],
    metrics: "+35% checkout rate",
    image: "/projects/shopease.jpg",
    color: "from-blue-500/20 to-indigo-500/20",
    year: "2023",
    contributions: ["UI/UX Design", "Conversion Optimization", "A/B Testing", "User Research", "Prototyping"],
    hook: "Removing friction from the path to purchase—every eliminated step is revenue recovered.",
    processBreakdown: [
      "Analyzed funnel data to identify exact drop-off points in checkout",
      "Reviewed session recordings to understand user frustration patterns",
      "Benchmarked checkout flows of top 10 e-commerce competitors",
      "Condensed 5-step checkout into single-page experience",
      "Implemented guest checkout with optional post-purchase account creation",
      "Redesigned cart to show shipping costs early and transparently",
      "Added progress indicators and trust signals throughout checkout",
      "Created quick buy option for returning customers",
      "Ran A/B tests on 3 checkout variants to validate improvements"
    ],
    situation: "ShopEase, a mid-size fashion retailer, had a cart abandonment rate of 78%—significantly higher than the industry average of 70%. User research revealed frustration with a 5-step checkout process, mandatory account creation, and hidden shipping costs revealed only at the final step.",
    action: "I led a checkout optimization project using a data-driven approach. Key changes included: condensing checkout to a single-page experience, implementing guest checkout with optional account creation post-purchase, showing shipping costs early in the cart view, adding progress indicators and trust signals throughout, and creating a 'quick buy' option for returning customers.",
    result: "Checkout completion rate increased by 35% within 6 weeks. Cart abandonment dropped from 78% to 58%. Average order value increased by 12% due to better cross-sell placement. The changes generated an estimated $2.3M in additional annual revenue.",
    designProcess: [
      { title: "Funnel Analysis", description: "Identified exact drop-off points using analytics and session recordings" },
      { title: "Competitive Benchmarking", description: "Analyzed checkout flows of top 10 e-commerce sites" },
      { title: "Rapid Prototyping", description: "Created 3 checkout variants for A/B testing" },
      { title: "User Testing", description: "Moderated testing with 12 participants across demographics" },
      { title: "Iterative Launch", description: "Rolled out winning variant with continuous optimization" }
    ],
    mockups: [
      { src: "/projects/shopease-cart.jpg", alt: "ShopEase cart page", caption: "Redesigned cart with clear shipping information" },
      { src: "/projects/shopease-checkout.jpg", alt: "ShopEase checkout flow", caption: "Single-page checkout with progress indication" },
      { src: "/projects/shopease-confirmation.jpg", alt: "ShopEase order confirmation", caption: "Confirmation page with account creation prompt" }
    ],
    testimonial: {
      quote: "The checkout redesign paid for itself within the first month. The ROI on this UX investment has been incredible.",
      author: "David Park",
      role: "CEO, ShopEase"
    }
  },
  {
    id: 4,
    slug: "datavault-analytics",
    title: "DataVault Analytics",
    category: "Dashboard",
    description: "Enterprise analytics platform with complex data sets made accessible through thoughtful information architecture.",
    tags: ["Enterprise", "Data Design", "B2B"],
    metrics: "-70% support tickets",
    image: "/projects/datavault.jpg",
    color: "from-indigo-500/20 to-blue-500/20",
    year: "2023",
    contributions: ["UI/UX Design", "Information Architecture", "Design System", "User Research", "Enterprise UX"],
    hook: "Enterprise software doesn't have to feel enterprise—complex data can be simple to navigate.",
    processBreakdown: [
      "Conducted workshops with product, engineering, and customer success teams",
      "Created 4 distinct user personas based on user journey mapping",
      "Partnered with data science team to understand complex workflows",
      "Designed role-based dashboards with pre-configured views",
      "Implemented natural language search for finding reports and metrics",
      "Created contextual help and guided tours for complex features",
      "Built scalable design system component library",
      "Ran beta program with 5 key clients for early feedback",
      "Developed in-app tutorials and comprehensive documentation"
    ],
    situation: "DataVault's enterprise analytics platform served Fortune 500 clients but had a steep learning curve. New users required 40+ hours of training, and the support team spent 60% of their time answering 'how do I find X' questions. Client churn was increasing as competitors offered more intuitive alternatives.",
    action: "I partnered with the data science team to understand user workflows and created personas for different user types (analysts, executives, data engineers). The redesign introduced: role-based dashboards with pre-configured views, natural language search for finding reports and metrics, contextual help and guided tours for complex features, and a redesigned navigation following the principle of progressive disclosure.",
    result: "Support tickets decreased by 70% within 4 months. New user onboarding time dropped from 40 hours to 8 hours. Client NPS increased from -5 to +35. The redesign was cited as a key factor in winning 3 major enterprise contracts worth $4.5M ARR.",
    designProcess: [
      { title: "Stakeholder Alignment", description: "Workshops with product, engineering, and customer success teams" },
      { title: "User Journey Mapping", description: "Documented workflows for 4 distinct user personas" },
      { title: "Design System Creation", description: "Built a scalable component library for consistency" },
      { title: "Phased Rollout", description: "Beta program with 5 key clients for early feedback" },
      { title: "Training & Documentation", description: "Created in-app tutorials and documentation" }
    ],
    mockups: [
      { src: "/projects/datavault-overview.jpg", alt: "DataVault overview dashboard", caption: "Role-based overview dashboard for executives" },
      { src: "/projects/datavault-search.jpg", alt: "DataVault natural language search", caption: "Natural language search for finding any metric" },
      { src: "/projects/datavault-reports.jpg", alt: "DataVault report builder", caption: "Intuitive report builder with drag-and-drop" }
    ],
    testimonial: {
      quote: "Our analysts now spend time analyzing data instead of searching for it. That's the difference good UX makes.",
      author: "Jennifer Walsh",
      role: "VP of Analytics, Fortune 500 Client"
    }
  },
  {
    id: 5,
    slug: "learnpath-education",
    title: "LearnPath Education",
    category: "Web Apps",
    description: "Educational platform that increased course completion rates by 55% through gamification and progress tracking.",
    tags: ["EdTech", "Gamification", "Learning UX"],
    metrics: "+55% completion",
    image: "/projects/learnpath.jpg",
    color: "from-blue-600/20 to-indigo-500/20",
    year: "2024",
    contributions: ["UI/UX Design", "Gamification Design", "User Research", "Prototyping", "Product Strategy"],
    hook: "Learning should feel like progress, not punishment—designing for motivation and mastery.",
    processBreakdown: [
      "Consulted with educational psychologists on motivation principles",
      "Conducted in-depth interviews with course completers and drop-offs",
      "Designed visual progress paths showing complete learning journey",
      "Created bite-sized lessons with immediate practice opportunities",
      "Implemented achievement badges and streaks for consistent learning",
      "Designed peer cohort system for accountability and community",
      "Built personalized review sessions based on performance data",
      "A/B tested lesson lengths and reward timing for optimization",
      "Created celebration moments for milestone achievements"
    ],
    situation: "LearnPath offered high-quality coding courses but struggled with completion rates. Only 12% of enrolled students finished their courses, with most dropping off after the first 2 modules. Feedback indicated courses felt 'endless' with no sense of progress, and students felt isolated without peer support.",
    action: "I redesigned the learning experience around motivation psychology and social learning principles. Key features included: visual progress paths showing the complete journey, bite-sized lessons with immediate practice opportunities, achievement badges and streaks for consistent learning, peer cohorts for accountability and community, and personalized review sessions based on performance data.",
    result: "Course completion rates increased from 12% to 67% within 6 months. Daily active users grew by 180%, and student satisfaction scores improved from 3.2 to 4.7 out of 5. The platform was featured in EdSurge as an example of effective learning UX.",
    designProcess: [
      { title: "Learning Science Research", description: "Consulted with educational psychologists on motivation" },
      { title: "Student Interviews", description: "In-depth interviews with completers and drop-offs" },
      { title: "Gamification Design", description: "Designed reward systems based on intrinsic motivation" },
      { title: "Social Features", description: "Created cohort system for peer accountability" },
      { title: "Continuous Optimization", description: "A/B tested lesson lengths and reward timing" }
    ],
    mockups: [
      { src: "/projects/learnpath-journey.jpg", alt: "LearnPath learning journey", caption: "Visual learning path with clear milestones" },
      { src: "/projects/learnpath-lesson.jpg", alt: "LearnPath lesson interface", caption: "Bite-sized lessons with immediate practice" },
      { src: "/projects/learnpath-community.jpg", alt: "LearnPath community features", caption: "Peer cohort discussion and support" }
    ],
    testimonial: {
      quote: "I've started and stopped so many online courses. LearnPath is the first one I actually finished—and enjoyed.",
      author: "Alex Rivera",
      role: "Student, Software Engineering Track"
    }
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map(p => p.slug)
}
