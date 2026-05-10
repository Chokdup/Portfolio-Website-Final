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
      "Led user research sessions to uncover friction points in traditional restaurant ordering experiences",
      "Analyzed customer behavior patterns and identified key opportunities to simplify the ordering journey",
      "Created detailed user personas and journey maps to guide design decisions",
      "Developed intuitive information architecture that reduced menu navigation time by focusing on user mental models",
      "Built interactive Figma prototypes and validated designs with real restaurant customers",
      "Designed a clean, accessible mobile-first interface optimized for quick scanning and browsing",
      "Implemented responsive frontend with a focus on performance and accessibility standards",
      "Created cohesive promotional materials including posters and video content to drive adoption",
      "Conducted iterative usability testing to refine the ordering experience based on user feedback"
    ],
    situation: "When I joined this project, restaurants were struggling with physical menu books that created friction in the customer journey. I observed that menus were often unhygienic, difficult to update, and created bottlenecks during peak hours. My challenge was to identify the core UX problems and design a digital solution that would feel intuitive for users of all ages while improving operational efficiency for restaurant staff.",
    action: "I took ownership of the entire UI/UX design process from research to delivery. I conducted user interviews with both customers and restaurant staff to understand their pain points deeply. Using these insights, I designed SCAN2DINE's interface with a focus on simplicity and speed - ensuring that first-time users could scan and order within seconds. I made key design decisions around visual hierarchy, touch targets, and feedback patterns that reduced cognitive load. Throughout development, I collaborated closely with the development team to ensure design fidelity while also creating promotional materials to support the launch.",
    result: "My design decisions directly contributed to a significantly improved customer experience. The intuitive interface I created reduced ordering time and eliminated the frustration of physical menus. User testing showed high satisfaction scores, and the project was recognized with a Best Project Award for its real-world impact. This experience reinforced my belief that thoughtful UX design can solve complex business problems while delighting users.",
    designProcess: [
      { title: "Research", description: "Led user interviews and competitive analysis to understand dining pain points" },
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
      quote: "Working with Chokdup was an exceptional experience. His attention to detail in understanding user needs and translating them into intuitive designs made a real difference. He communicated complex design decisions clearly and was always open to feedback, making collaboration seamless. His creativity and problem-solving skills elevated the entire project.",
      author: "Project Supervisor",
      role: "SCAN2DINE Development Team"
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
      "Conducted in-depth UX research to understand user motivations, habits, and engagement patterns",
      "Analyzed behavioral psychology principles to design effective reward loops",
      "Designed intuitive onboarding flows that progressively introduce features without overwhelming users",
      "Created reward-driven interaction systems including Lucky Spin and Scratch card mechanics",
      "Developed a collectibles system with ingredient cards that drive continued engagement",
      "Implemented achievement badges and progress indicators to encourage habit formation",
      "Built QR scanning functionality with clear feedback for seamless restaurant integration",
      "Designed personalized profile system with progress tracking and achievement showcases",
      "Conducted usability testing to refine gamification mechanics based on real user behavior"
    ],
    situation: "I was tasked with solving a common mobile app challenge: keeping users engaged beyond the initial download. Through my research, I discovered that users often abandoned apps due to unclear value propositions, weak feedback loops, and lack of meaningful progression. My challenge was to design an experience that felt inherently rewarding while avoiding manipulative dark patterns.",
    action: "I approached this challenge by first deeply understanding user psychology and motivation. I designed QUBE's gamification system around positive reinforcement rather than artificial urgency - creating features like Lucky Spin and collectible ingredients that felt genuinely fun rather than manipulative. I focused on clear visual feedback, satisfying micro-interactions, and transparent progress indicators. Each design decision was validated through user testing, and I iterated based on real behavioral data to optimize engagement without compromising user trust.",
    result: "My gamification strategy and UX design significantly improved user engagement metrics. The reward systems I designed created genuine excitement, and users reported that the app felt fun rather than pushy. The clear onboarding flow I created reduced drop-off, while the achievement system encouraged consistent return visits. This project demonstrated my ability to apply behavioral psychology ethically while creating delightful user experiences.",
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
      quote: "Chokdup brought incredible creativity and strategic thinking to our gamification design. He didn't just make things look good - he understood the psychology behind user engagement and designed systems that genuinely delighted users. His professionalism, clear communication, and ability to iterate quickly made him invaluable to our team.",
      author: "Product Lead",
      role: "QUBE Development Team"
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
      "Initiated user research by interviewing students and teachers about their due clearance frustrations",
      "Mapped the existing manual workflow to identify specific pain points and bottlenecks",
      "Created user journey maps for both student and teacher perspectives",
      "Designed a clean, intuitive mobile interface with clear visual hierarchy",
      "Developed a progress tracking system with visual indicators for clearance status",
      "Built department-wise due listing with easy toggle functionality for teachers",
      "Created an admin contact system for enquiries and support",
      "Implemented certificate generation feature for cleared students",
      "Designed a user profile system with editable account information"
    ],
    situation: "I identified a significant UX problem affecting the entire student body: the due clearance process was completely manual, confusing, and time-consuming. Students had to physically visit multiple offices, often making repeated trips, while teachers lacked visibility into clearance status. I saw an opportunity to dramatically improve this experience through thoughtful digital design.",
    action: "I conducted extensive user research with both students and administrative staff to understand the full scope of the problem. Based on these insights, I designed NDP with a focus on clarity and efficiency - creating separate views optimized for each user type while maintaining visual consistency. I made key decisions around status visualization, notification systems, and workflow simplification that directly addressed the frustrations I uncovered in research. Throughout development, I ensured that the interface remained simple enough for users with varying technical comfort levels.",
    result: "My design transformed a frustrating bureaucratic process into a streamlined digital experience. Students could now track their dues and clearance status from their phones, eliminating the need for multiple office visits. Teachers gained a clear overview of pending requests, improving their efficiency. The positive feedback from users validated my research-driven approach and demonstrated the impact thoughtful UX design can have on everyday experiences.",
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
      quote: "Chokdup approached our complex administrative challenge with empathy and creativity. He took time to truly understand the frustrations of both students and staff, then designed a solution that felt intuitive for everyone. His clear communication throughout the project and attention to accessibility details showed his dedication to creating designs that work for all users.",
      author: "Administrative Director",
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
      "Conducted stakeholder interviews with doctors, patients, and reception staff to understand diverse needs",
      "Observed actual clinic workflows to identify communication gaps and inefficiencies",
      "Created detailed user journey maps for each role in the queue system",
      "Designed role-specific interfaces optimized for each user's context and tasks",
      "Developed real-time token tracking with clear visual status indicators",
      "Built notification system for queue updates that reduced anxiety and uncertainty",
      "Created chamber assignment flows that balanced efficiency with patient experience",
      "Designed doctor panel with quick actions for common tasks",
      "Implemented responsive design ensuring accessibility across devices"
    ],
    situation: "Healthcare queuing presented a complex multi-stakeholder UX challenge that I was excited to tackle. Patients experienced anxiety from not knowing their wait time, receptionists were overwhelmed managing queues manually, and doctors lacked visibility into patient flow. I needed to design a system that served three very different user types with varying technical abilities and contextual needs.",
    action: "I approached this by conducting separate research sessions with each user type to deeply understand their unique needs and constraints. This informed my decision to create role-specific dashboards optimized for each context - a calming, informative view for anxious patients, an efficient management interface for busy receptionists, and a streamlined panel for time-pressed doctors. I focused heavily on real-time feedback and clear status communication, knowing that transparency was key to reducing the anxiety inherent in healthcare waiting. Every design decision was tested with real users to ensure it solved actual problems.",
    result: "My multi-perspective design approach resulted in a system that genuinely improved the healthcare experience for everyone involved. Patients reported feeling less anxious with clear queue visibility, receptionists could manage higher volumes with less stress, and doctors appreciated the streamlined workflow. This project reinforced my belief that the best UX design comes from deeply understanding each user's context and creating tailored solutions that work together as a cohesive system.",
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
      quote: "What impressed me most about Chokdup was his ability to balance the needs of multiple user groups without compromising on any of them. He listened carefully to our concerns, asked insightful questions, and delivered designs that our staff and patients both found intuitive. His collaborative approach and design thinking made a real difference in our clinic's efficiency.",
      author: "Clinic Director",
      role: "Healthcare Administration"
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
      "Initiated user research by interviewing plant enthusiasts about their care tracking challenges",
      "Analyzed existing plant care apps to identify usability gaps and opportunities",
      "Created user personas representing different levels of plant care expertise",
      "Designed a dashboard interface with clear visual hierarchy for quick scanning",
      "Built intuitive watering schedule system with smart reminders",
      "Developed plant health monitoring features with actionable insights",
      "Created individual plant profiles with species-specific care requirements",
      "Implemented FAQ section addressing common plant care questions",
      "Built full backend integration for seamless data persistence"
    ],
    situation: "As a plant enthusiast myself, I experienced firsthand the challenge of keeping track of care routines for multiple plants. When I started researching, I found that existing solutions were either too complex for casual users or too simplistic for serious plant parents. I saw an opportunity to create a balanced solution that would work for users at different expertise levels.",
    action: "I designed GreenGuardian with a focus on progressive disclosure - making the core functionality immediately accessible while allowing power users to dive deeper. My dashboard design prioritized the most critical information (which plants need attention now) while making it easy to explore detailed care histories. I chose a calm, nature-inspired visual language that made the app feel inviting rather than like another chore. Beyond UI/UX, I also handled full-stack development, which gave me valuable insight into technical constraints and possibilities that informed my design decisions.",
    result: "GreenGuardian succeeded in making plant care feel manageable and even enjoyable. User testing showed that the clear dashboard design helped users stay consistent with their care routines, and the friendly interface encouraged regular engagement. This project demonstrated my ability to identify user needs from personal experience, design solutions that balance simplicity with depth, and execute across the full product development cycle.",
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
      quote: "Chokdup's design for GreenGuardian perfectly captured the balance we were looking for - professional enough to be taken seriously, but friendly enough to make plant care feel fun. His design thinking process was thorough, and he clearly communicated his rationale for every decision. Working with him was a pleasure from start to finish.",
      author: "Beta Tester",
      role: "Plant Enthusiast & Early User"
    }
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map(p => p.slug)
}
