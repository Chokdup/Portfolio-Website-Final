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
    slug: "qube",
    title: "QUBE",
    category: "Mobile Apps",
    description: "Gamified mobile app designed to boost user engagement and retention through intuitive UX, reward-driven interactions, and habit-forming design patterns.",
    tags: ["UI/UX Design", "Gamification", "Mobile Dev"],
    metrics: "Increased Retention",
    image: "/projects/qube-hero.jpg",
    color: "from-red-500/20 to-orange-500/20",
    year: "2026",
    contributions: ["UI/UX Design", "UX Research", "Gamification", "Frontend Development"],
    hook: "Turn Cravings into Victories - a gamified mobile experience that makes users want to come back.",
    processBreakdown: [
      "Conducted UX research to understand user motivations and pain points",
      "Analyzed user behavior patterns to identify engagement opportunities",
      "Designed intuitive onboarding flows with progressive feature introduction",
      "Created reward-driven interaction systems including Lucky Spin and Scratch cards",
      "Developed collectibles system with ingredient cards and meal unlocking",
      "Implemented achievement badges to encourage continued engagement",
      "Built QR scanning functionality for seamless restaurant integration",
      "Designed profile system with progress tracking and achievements",
      "Conducted usability testing to refine gamification mechanics"
    ],
    situation: "Users often struggle to stay motivated and engaged with mobile apps over time. Many apps lose users after the initial experience due to unclear onboarding, weak engagement loops, and lack of meaningful interaction. The challenge was to design a mobile experience that felt intuitive, engaging, and habit-forming, encouraging users to return consistently.",
    action: "I designed and developed QUBE, a mobile app focused on improving user engagement and retention through thoughtful UI/UX and gamification. I conducted UX research to understand user motivations and pain points, then created intuitive flows, clear onboarding, and reward-driven interactions. I implemented gamification elements to make the experience more engaging, while also handling frontend development to ensure a smooth and responsive user experience.",
    result: "QUBE delivered a more engaging and intuitive mobile experience, improving user motivation and encouraging repeated use. By combining strong UX design with gamification and clean interface patterns, the app helped increase user engagement and retention, aligning with the goal of creating easy-to-use digital products that users enjoy and return to.",
    designProcess: [
      { title: "Research", description: "User interviews to understand motivations and engagement pain points" },
      { title: "Define", description: "Created engagement loops and reward systems based on user psychology" },
      { title: "Ideate", description: "Explored gamification mechanics including spins, scratches, and collectibles" },
      { title: "Prototype", description: "Built interactive prototypes for gamification features and flows" },
      { title: "Deliver", description: "Developed final app with smooth animations and responsive interactions" }
    ],
    mockups: [
      { src: "/projects/qube-onboarding.jpg", alt: "QUBE onboarding screens", caption: "Welcome flow with clear value proposition and easy sign-up" },
      { src: "/projects/qube-home.jpg", alt: "QUBE home and restaurant screens", caption: "Dashboard with rewards progress and restaurant discovery" },
      { src: "/projects/qube-gamification.jpg", alt: "QUBE gamification features", caption: "Lucky Spin, Scratch to Win, and reward claim modals" },
      { src: "/projects/qube-collectibles.jpg", alt: "QUBE collectibles system", caption: "Ingredient collection, meal unlocking, and coupon rewards" }
    ],
    testimonial: {
      quote: "QUBE transformed how users engage with our platform. The gamification elements keep them coming back day after day.",
      author: "Product Team",
      role: "QUBE Development"
    }
  },
  {
    id: 7,
    slug: "ndp",
    title: "NDP - No Due Portal",
    category: "Mobile Apps",
    description: "A mobile-based due clearance system that simplified the due clearance process for students and teachers, reducing manual effort and improving efficiency.",
    tags: ["UI/UX Design", "User Research", "Frontend Dev"],
    metrics: "Streamlined Workflow",
    image: "/projects/ndp-login-dashboard.png",
    color: "from-green-500/20 to-emerald-600/20",
    year: "2025",
    contributions: ["UI/UX Design", "User Research", "Frontend Development"],
    hook: "Transforming the tedious due clearance process into a seamless digital experience for students and staff.",
    processBreakdown: [
      "Conducted user research to understand pain points of students and teachers in the due clearance process",
      "Mapped user journeys for both students checking/clearing dues and teachers reviewing requests",
      "Analyzed the existing manual workflow to identify friction points and inefficiencies",
      "Designed a clean, intuitive mobile interface for easy navigation",
      "Created a progress tracking system with visual indicators for clearance status",
      "Developed department-wise due listing with toggle functionality for teachers",
      "Built an admin contact system for enquiries and support",
      "Implemented a certificate generation feature for cleared students",
      "Designed a user profile system with editable account information"
    ],
    situation: "The existing due clearance process for students was manual, time-consuming, and confusing. Students had to physically visit multiple offices to check and clear their dues, while teachers struggled to track clearance status. This created delays, frustration, and inefficiency for both students and staff.",
    action: "I designed and developed NDP (No Due Portal), a mobile-based due clearance system that simplified the process for both students and teachers. I conducted user research to understand real pain points, designed a clean and intuitive interface, and built the frontend to ensure a smooth digital experience. The system allowed students to view and clear dues easily while enabling teachers to review and approve requests efficiently.",
    result: "NDP streamlined the due clearance workflow, reduced manual effort, and improved overall efficiency for both students and teachers. By creating a clear, easy-to-use system, the platform increased user satisfaction and improved the overall experience - supporting my mission to design intuitive digital products that enhance user experience and retention.",
    designProcess: [
      { title: "Research", description: "User interviews with students and staff to understand due clearance pain points" },
      { title: "Define", description: "Created user personas and mapped workflows for both student and admin views" },
      { title: "Ideate", description: "Explored multiple interface concepts for tracking and managing dues" },
      { title: "Prototype", description: "Built interactive prototypes tested with real students and teachers" },
      { title: "Deliver", description: "Developed final mobile app with smooth frontend implementation" }
    ],
    mockups: [
      { src: "/projects/ndp-login-dashboard.png", alt: "NDP login and dashboard screens", caption: "Welcome login screen, No Due certificate, and student dashboard with completion tracking" },
      { src: "/projects/ndp-screens-1.png", alt: "NDP due form and department details", caption: "Admin contact form, student due form with department list, and department detail modal" },
      { src: "/projects/ndp-admin-profile.png", alt: "NDP admin and profile screens", caption: "Admin view with student list, due details modal, and user profile management" }
    ],
    testimonial: {
      quote: "NDP made our due clearance process so much easier. Students no longer need to run between offices, and we can track everything digitally.",
      author: "Administrative Staff",
      role: "GCIT Administration"
    }
  },
  {
    id: 8,
    slug: "q-less",
    title: "Q-Less",
    category: "Web Apps",
    description: "A web-based Queue Management System designed to simplify appointment and queue handling for doctors, patients, and receptionists in healthcare settings.",
    tags: ["UI/UX Design", "User Research", "Frontend Dev"],
    metrics: "Reduced Wait Time",
    image: "/projects/qless-landing.png",
    color: "from-blue-500/20 to-sky-600/20",
    year: "2025",
    contributions: ["UI/UX Design", "User Research", "Frontend Development"],
    hook: "Eliminating queue confusion and wait time anxiety with a transparent, real-time queue management system for healthcare.",
    processBreakdown: [
      "Conducted user research to understand the needs of doctors, patients, and reception staff",
      "Mapped user journeys for each role to identify pain points in existing queue systems",
      "Analyzed manual and semi-digital queue workflows to find inefficiencies",
      "Designed a clean, intuitive interface for easy queue management",
      "Created real-time token tracking with clear visibility for all users",
      "Developed role-specific dashboards for patients, receptionists, and doctors",
      "Built a notification system for queue updates and turn alerts",
      "Implemented chamber assignment and patient registration flows",
      "Designed a doctor panel for clearing tokens and managing queue overview"
    ],
    situation: "Clinics and hospitals often relied on manual or semi-digital queue systems that created long wait times, confusion, and inefficient communication between patients, receptionists, and doctors. Patients had difficulty tracking their turn, receptionists struggled to manage queues efficiently, and doctors lacked real-time visibility into patient flow.",
    action: "I designed and developed Q-Less, a web-based queue management system aimed at simplifying patient flow and improving efficiency. I conducted user research to understand the needs of doctors, patients, and reception staff, then designed a clean, intuitive interface that made queue management easy and transparent. I handled UI/UX design and frontend development to ensure the experience was smooth, responsive, and accessible for all user types.",
    result: "Q-Less reduced confusion and waiting time by providing clear queue visibility and better communication between users. The system helped improve operational efficiency for staff while enhancing the overall patient experience. By simplifying workflows and improving usability, the platform supported higher satisfaction and better engagement - aligning with my goal of building easy-to-use digital solutions that increase user retention.",
    designProcess: [
      { title: "Research", description: "User interviews with doctors, patients, and receptionists to understand queue pain points" },
      { title: "Define", description: "Created user personas and mapped workflows for each role in the queue system" },
      { title: "Ideate", description: "Explored multiple interface concepts for real-time queue tracking and management" },
      { title: "Prototype", description: "Built interactive prototypes tested with healthcare staff and patients" },
      { title: "Deliver", description: "Developed final web application with responsive frontend implementation" }
    ],
    mockups: [
      { src: "/projects/qless-landing.png", alt: "Q-Less landing page", caption: "Welcome page with CID input and feature highlights for queue management" },
      { src: "/projects/qless-patient-dashboard.png", alt: "Q-Less patient dashboard", caption: "Patient view showing token number, current queue position, chamber assignment, and wait time" },
      { src: "/projects/qless-notifications.png", alt: "Q-Less notifications", caption: "Real-time notifications for registration, chamber assignment, and turn alerts" },
      { src: "/projects/qless-receptionist.png", alt: "Q-Less receptionist panel", caption: "Receptionist dashboard for patient registration with chamber and token assignment" },
      { src: "/projects/qless-doctor-panel.png", alt: "Q-Less doctor panel", caption: "Doctor panel with queue overview, token clearing, and recently completed patients" }
    ],
    testimonial: {
      quote: "Q-Less transformed our clinic workflow. Patients know exactly where they are in the queue, and our staff can manage appointments much more efficiently.",
      author: "Healthcare Staff",
      role: "Clinic Administration"
    }
  },
  {
    id: 9,
    slug: "green-guardian",
    title: "GreenGuardian",
    category: "Dashboard",
    description: "A plant care management dashboard designed to help plant lovers track watering schedules, monitor plant health, and manage care routines with ease.",
    tags: ["UI/UX Design", "User Research", "Full Stack Dev"],
    metrics: "Improved Engagement",
    image: "/projects/greenguardian-dashboard.png",
    color: "from-green-600/20 to-emerald-500/20",
    year: "2024",
    contributions: ["UI/UX Design", "User Research", "Frontend Development", "Backend Development"],
    hook: "Making plant care simple and enjoyable through an intuitive dashboard that keeps your plants thriving.",
    processBreakdown: [
      "Conducted user research to understand common pain points among plant owners",
      "Analyzed existing plant care apps to identify usability gaps and opportunities",
      "Created user personas and journey maps for different plant enthusiast profiles",
      "Designed a clean, intuitive interface for tracking watering schedules",
      "Built plant health monitoring features with clear visual indicators",
      "Developed task scheduling system with reminders and notifications",
      "Created plant profiles with species information and care requirements",
      "Implemented FAQ section for common plant care questions",
      "Built backend integration for seamless data management and user accounts"
    ],
    situation: "Plant lovers often struggled to track watering schedules, monitor plant health, and manage plant care routines consistently. Many existing solutions were either too complicated or lacked an organized, user-friendly interface, which made it difficult for users to stay consistent with plant care habits.",
    action: "I designed and developed GreenGuardian, a plant care management dashboard focused on simplicity, clarity, and engagement. I conducted user research to understand common pain points among plant owners and created a clean, intuitive interface that allowed users to track watering schedules, monitor plant health, and manage plant information efficiently. I worked on UI/UX design, frontend development, and backend integration to deliver a seamless and functional experience.",
    result: "GreenGuardian made plant care more accessible and organized by providing users with a clear and easy-to-use dashboard. By simplifying plant management tasks and improving usability, the system encouraged consistent plant care habits and improved overall user engagement, supporting my goal of designing intuitive digital experiences that keep users engaged and coming back.",
    designProcess: [
      { title: "Research", description: "User interviews with plant enthusiasts to understand care tracking pain points" },
      { title: "Define", description: "Created user personas and mapped care routines for different plant owner profiles" },
      { title: "Ideate", description: "Explored multiple dashboard concepts for schedule tracking and plant monitoring" },
      { title: "Prototype", description: "Built interactive prototypes tested with plant owners for feedback" },
      { title: "Deliver", description: "Developed full-stack application with frontend and backend integration" }
    ],
    mockups: [
      { src: "/projects/greenguardian-login.png", alt: "GreenGuardian login page", caption: "Welcome login screen with nature-inspired split layout design" },
      { src: "/projects/greenguardian-dashboard.png", alt: "GreenGuardian main dashboard", caption: "Plant management dashboard with care tasks, schedules, and plant profiles" },
      { src: "/projects/greenguardian-features.png", alt: "GreenGuardian features section", caption: "Feature highlights: Schedule Tasks, Reminders, and Enhance Plant IQ" },
      { src: "/projects/greenguardian-landing.png", alt: "GreenGuardian landing page", caption: "Landing page with plant benefits information and FAQ section" }
    ],
    testimonial: {
      quote: "GreenGuardian helped me finally keep track of all my plants. The dashboard is so easy to use, and my plants have never been healthier!",
      author: "Plant Enthusiast",
      role: "GreenGuardian User"
    }
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map(p => p.slug)
}
