export const hackathons = [
  {
    title: 'GreenMiles | Smart EV Trip Planner',
    event: 'Build2gether AI Hackathon',
    achievement: 'Ranked 39th out of 500 teams · Won ₹2500 cash prize',
    tagline:
      'A web application for EV users to plan efficient trips, discover charging stations, and reduce charging costs with smarter route planning.',
    overview:
      'GreenMiles helps electric vehicle users reduce range anxiety by planning routes with charging stops, surfacing nearby stations, highlighting solar-powered options, and enabling emergency reverse charging support.',
    problem:
      'EV users often struggle with range anxiety, uncertain charging availability, and inconsistent charging costs during longer trips.',
    features: [
      'Trip planning with optimal charging stops',
      'Nearby charging station discovery using OpenChargeMap',
      'Solar-powered charging prioritization for cost savings',
      'Community reverse charging support for emergencies',
      'Interactive map visualization using Leaflet and OpenStreetMap',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Vite',
      'OpenRouteService',
      'OpenChargeMap',
      'Leaflet',
      'OpenStreetMap',
      'Vercel',
    ],
    learnings: [
      'Designing real-world mobility solutions',
      'Integrating multiple APIs and geospatial data',
      'Handling CORS through serverless proxy architecture',
      'Building scalable frontend architecture under hackathon time constraints',
      'Deploying production-ready apps on Vercel',
    ],
    links: {
      live: 'https://greenmilescharge.vercel.app/',
    },
  },
];
