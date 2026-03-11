export const projects = [
  {
    title: 'UBI Smashers | Sports Court Management SaaS',
    slug: 'ubi-smashers',
    tagline:
      'A live SaaS platform for sports court bookings, attendance, and expense sharing used by a 40-member club in Singapore.',
    overview:
      'UBI Smashers is a production sports club management platform that handles court bookings, member attendance, expense splitting, automated balance calculations, and payment tracking. It replaced manual bookkeeping and gave the club a single operational system for day-to-day coordination.',
    features: [
      'Live booking workflows for sports court scheduling',
      'Attendance and member activity management',
      'Automated balance calculation and payment tracking',
      'Responsive full-stack dashboard for everyday club use',
      'Cloud deployment for real-world usage',
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Render', 'Vercel'],
    challenges: [
      'Designing booking and expense workflows that matched real club operations.',
      'Keeping financial calculations reliable across shared payments and balances.',
      'Making the product simple enough for repeated use by non-technical members.',
      'Deploying a stable full-stack system for a live user group.',
    ],
    learnings: [
      'How to translate messy offline workflows into a clean SaaS product.',
      'How to structure full-stack features around operational reliability.',
      'How to ship features that users depend on regularly.',
      'How to balance product simplicity with backend logic complexity.',
    ],
    feedback: true,
    links: {
      live: 'https://ubismashers.vercel.app',
    },
  },
  {
    title: 'MoiKanakku | Open-Source Finance System',
    slug: 'moi-kanakku',
    tagline:
      'An offline Tamil-English contribution and payout tracking system built for large South Indian functions.',
    overview:
      'MoiKanakku is an offline-first financial management system designed for event-based contribution tracking. It supports autosuggest, Excel-backed persistence, and fast reconciliation for large gatherings, making it practical for high-volume community and family functions.',
    features: [
      'Offline workflow with Excel-based persistence',
      'Tamil-English data handling for local usability',
      'Autosuggest support for fast entry',
      'Real-time contribution and payout tracking',
      'Fast balance reconciliation for large events',
    ],
    techStack: ['Python', 'OpenPyXL'],
    challenges: [
      'Designing a bilingual workflow that remained fast for operators.',
      'Managing large numbers of transaction records without online storage.',
      'Keeping reconciliation simple under heavy event-day usage.',
      'Building a dependable offline system around spreadsheet persistence.',
    ],
    learnings: [
      'How to build software for regional and domain-specific workflows.',
      'How to use structured spreadsheet storage effectively in desktop tooling.',
      'How to optimize data entry and balance calculation for speed.',
      'How to design around real operator needs instead of generic assumptions.',
    ],
    feedback: true,
    links: {
      github: 'https://github.com/Balamurugan315/MoiKanakku',
    },
  },
  {
    title: 'ATM Security Enhancement System',
    slug: 'atm-security-enhancement-system',
    tagline:
      'A real-time ATM security pipeline using face detection, identity verification, and automated alerts.',
    overview:
      'This project applies computer vision to ATM security by detecting faces, identifying individuals, checking mask presence, and triggering automated alerts. The system was designed for low-latency processing and measurable model performance in a real-time pipeline.',
    features: [
      'Real-time video processing pipeline',
      'Face detection and identity verification',
      'Mask detection for security compliance scenarios',
      'Automated alert triggering with low response time',
      'Performance-oriented model integration',
    ],
    techStack: ['Python', 'CNN', 'SSD-ResNet10', 'Twilio'],
    challenges: [
      'Balancing model accuracy with real-time latency constraints.',
      'Processing live video consistently under system load.',
      'Reducing delay between suspicious detection and alert generation.',
      'Integrating multiple vision components into one dependable pipeline.',
    ],
    learnings: [
      'How to design end-to-end AI systems around real-time constraints.',
      'How to evaluate practical tradeoffs between speed and model accuracy.',
      'How to connect detection pipelines to automated communication systems.',
      'How to build measurable applied machine learning solutions.',
    ],
    feedback: false,
  },
  {
    title: 'BingeFast | OTT Discovery Platform',
    slug: 'bingefast',
    tagline:
      'A responsive platform for discovering OTT content, ratings, cast details, and streaming availability.',
    overview:
      'BingeFast aggregates entertainment data across OTT-related APIs to help users browse content efficiently. It focuses on clean presentation, responsive behavior, and quick access to ratings, cast information, and availability.',
    features: [
      'Responsive browsing experience across devices',
      'Ratings, cast, and streaming availability display',
      'API integration for dynamic entertainment data',
      'Simple content discovery workflow',
      'Fast frontend interactions',
    ],
    techStack: ['TypeScript', 'React', 'APIs'],
    challenges: [
      'Combining multiple content sources into a coherent interface.',
      'Handling dynamic API data cleanly in the frontend.',
      'Maintaining responsiveness while showing rich media details.',
      'Designing discovery flows that remain simple for users.',
    ],
    learnings: [
      'How to structure API-driven React interfaces around user search behavior.',
      'How to present dense content information without clutter.',
      'How to improve frontend reliability around external API data.',
      'How to design lightweight discovery experiences.',
    ],
    feedback: true,
    links: {
      live: 'https://bingefast.vercel.app',
    },
  },
];
