import {
  Home,
  Building2,
  HardHat,
  Ruler,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Layers,
  Truck,
  Sun,
  Monitor,
  GlassWater,
  Package,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const COMPANY = {
  name: "Nightingale Avenue Construction",
  shortName: "NAC",
  fullName: "Nightingale Avenue Construction",
  legalName: "Nightingale Avenue Construction Limited",
  phone: "+233243653665",
  phoneFormatted: "+233 24 365 3665",
  phone2: "+233530555793",
  phone2Formatted: "+233 53 0555 793",
  whatsapp: "233243653665",
  email: "sales@nightingaleavenueconstruction.com",
  email2: "info@nightingaleavenueconstruction.com",
  address: "No. 5 Nii Lomo Tackie Link, Abelemkpe, Accra - GA 135 6916",
  website: "www.nightingaleavenueconstruction.com",
  websiteUrl: "https://www.nightingaleavenueconstruction.com",
  businessHours: "Mon – Fri: 8:00 AM – 6:00 PM",
  tagline: "Solutions provider in construction, glass innovation, procurement & logistics, renewable energy and IT",
  heroTagline: "Quality Housing for All",
  incorporated: "January 2024",
  ownership: "Wholly Owned Ghanaian Company",
  whatsappMessage:
    "Hello Nightingale Avenue Construction, I would like to discuss a project.",
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  features: string[];
  image: string;
}

export const SERVICES: ServiceItem[] = [
  {
    icon: Building2,
    title: "Construction & Real Estate",
    slug: "construction",
    shortDescription:
      "Affordable housing, contemporary communities and design & build projects across Ghana.",
    description:
      "Nightingale Avenue Construction is recognized for excellence in real estate and civil engineering. Incorporated in January 2024, we deliver quality, affordable housing tailored to middle and high-income earners and essential public-sector workers. From contemporary communities with premium amenities to sustainable, culturally-tailored developments, our design & build expertise covers roads, drainage, and full infrastructure delivery.",
    features: [
      "Affordable housing - 500 units blueprint in Accra",
      "Sustainable communities with parks & renewable energy (Kumasi model)",
      "Renovation of public-sector worker housing",
      "Roads, drainage & infrastructure for new residential areas",
      "Contemporary, culturally-tailored community design",
      "Design & Build - end-to-end project delivery",
    ],
    image: "/images/construction.jpg",
  },
  {
    icon: Layers,
    title: "Glass Solutions - Frameless",
    slug: "glass-frameless",
    shortDescription:
      "Minimalist frameless glass for partitions, showers, balustrades, facades and more.",
    description:
      "Clean, minimalist glass solutions with no visible frames or borders, creating open, modern spaces that maximize natural light. Ideal for residential and commercial applications — from partitions and shower enclosures to balustrades, staircases, facades and pool fencing. Your trusted partner in innovative glass construction.",
    features: [
      "Glass partitions & frameless installations",
      "Shower enclosures & screens",
      "Glass balustrades & railings, staircases & walkways",
      "Shopfronts, entrances, facades & curtain walls",
      "Pool fencing & glass canopies / roofing",
      "Glass sliding, folding & swing doors",
      "Tempered & laminated safety glass",
      "Tinted & reflective solar-control glass",
    ],
    image: "/images/glass-frameless.jpg",
  },
  {
    icon: GlassWater,
    title: "Glass Solutions - Aluminium",
    slug: "glass-aluminium",
    shortDescription:
      "Durable aluminium systems for windows, doors, curtain walls and shopfronts.",
    description:
      "Our aluminium frames offer exceptional durability, corrosion resistance, and a clean modern finish. Available in a variety of profiles and colours to suit any architectural style — ideal for windows, doors, curtain walls and shopfronts in both residential and commercial buildings.",
    features: [
      "Casement & sliding windows",
      "Swing & sliding doors",
      "Shopfronts & storefronts & curtain wall systems",
      "Skylights & roof glazing",
      "Louvre & ventilation systems",
      "Partitions & wall cladding",
      "Security doors & grilles",
      "Composite panel (ACP) installation",
      "Curtain wall & shopfront systems",
    ],
    image: "/images/glass-aluminium.jpg",
  },
  {
    icon: Truck,
    title: "Procurement & Logistics",
    slug: "procurement-logistics",
    shortDescription:
      "Strategic sourcing, supply chain coordination and responsive logistics nationwide.",
    description:
      "At Nightingale Avenue Construction, our procurement and logistics operations are built on efficiency, reliability, and strategic sourcing. We ensure seamless acquisition and delivery of goods, materials, and services — with vetted local & international suppliers, technology-driven tracking, real-time visibility, and strict quality assurance before acceptance.",
    features: [
      "Military uniform / furniture equipment & stationery",
      "Medical (non-consumable) & food items / petroleum projects",
      "Household items & ICT / Communication equipment",
      "Tyres / Batteries / Vehicle spare parts / Fire equipment",
      "Travel and tours & service provider solutions",
      "End-to-end supply chain coordination & compliance",
      "Real-time tracking & reduced lead times",
      "Quality checks on all procured items",
    ],
    image: "/images/procurement.jpg",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    slug: "renewable-energy",
    shortDescription:
      "Green spaces and renewable energy solutions for sustainable communities.",
    description:
      "Powering sustainable communities with renewable energy integration. Our Kumasi sustainable community model features green spaces and renewable energy solutions that reduce operating costs while supporting Ghana's green transition — from solar integration to energy-efficient building design.",
    features: [
      "Solar integration for residential & community projects",
      "Energy-efficient building design",
      "Green spaces & sustainable community planning",
      "Renewable energy for infrastructure & estates",
      "Solar control glazing (tinted & reflective glass)",
      "Sustainable, culturally-tailored developments",
    ],
    image: "/images/renewable.jpg",
  },
  {
    icon: Monitor,
    title: "IT & Communications Solutions",
    slug: "it-communications",
    shortDescription:
      "ICT equipment, communication systems and technology-driven operations.",
    description:
      "Complete IT & Communications solutions — from household ICT and communication equipment to technology-driven procurement and logistics tracking systems that provide real-time visibility and improve decision-making across supply operations.",
    features: [
      "ICT & Communication equipment supply",
      "Technology-driven procurement & logistics systems",
      "Real-time tracking & operations visibility",
      "Household & office ICT solutions",
      "Communication infrastructure support",
      "Digital tools for project coordination",
    ],
    image: "/images/it-communications.jpg",
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  category: string;
  completionYear: string;
  description: string;
  fullDescription: string;
  client: string;
  duration: string;
  scope: string[];
  image: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "affordable-housing-accra-500",
    title: "500 Units Affordable Housing - Accra",
    location: "Accra, Greater Accra",
    category: "Construction",
    completionYear: "2024",
    description:
      "Construction of 500 units of affordable housing addressing Ghana's housing deficit for middle-income and public-sector workers.",
    fullDescription:
      "Nightingale Avenue Construction flagship affordable housing project delivering 500 units in Accra. Designed as part of our social housing blueprint targeting essential workers - nurses, doctors, teachers and security personnel - the project combines affordability with premium amenities: parks, playgrounds, recreational facilities and contemporary, culturally-tailored community design. Built with modern construction machinery and a robust supply chain.",
    client: "Nightingale Development",
    duration: "18 months",
    scope: [
      "Master Planning & Design & Build",
      "Affordable Housing Units (500)",
      "Contemporary Community Design",
      "Parks & Recreational Facilities",
      "Infrastructure & Drainage",
    ],
    image: "/images/featured-estate.jpg",
  },
  {
    id: "sustainable-community-kumasi",
    title: "Sustainable Community - Kumasi",
    location: "Kumasi, Ashanti Region",
    category: "Construction",
    completionYear: "2024",
    description:
      "Development of a sustainable community featuring green spaces and renewable energy solutions.",
    fullDescription:
      "A contemporary, sustainable community in Kumasi integrating green spaces, premium amenities and renewable energy. The project embodies our sustainable communities pillar - parks, playgrounds, and energy-efficient design tailored to Ghana's cultural and social dynamics while ensuring functionality, comfort and affordability.",
    client: "Nightingale Communities",
    duration: "20 months",
    scope: [
      "Sustainable Community Design",
      "Green Spaces & Parks",
      "Renewable Energy Integration",
      "Premium Amenities",
      "Culturally Tailored Planning",
    ],
    image: "/images/renewable.jpg",
  },
  {
    id: "renovation-public-worker-housing",
    title: "Public-Sector Worker Housing Renovation",
    location: "Ghana - Multiple Sites",
    category: "Construction",
    completionYear: "2024",
    description:
      "Renovation of public-sector worker housing, improving living conditions for nurses and teachers.",
    fullDescription:
      "Renovation programme improving living conditions for essential public-sector workers - nurses, teachers and security personnel. Aligned with our social housing blueprint and stakeholder collaboration with government bodies and NGOs, facilitating home ownership initiatives and directly addressing chronic housing shortages.",
    client: "Public Sector Housing Scheme",
    duration: "10 months",
    scope: [
      "Housing Renovation & Rehabilitation",
      "Structural Improvements",
      "Interior Upgrades",
      "Community Needs Assessment",
      "Stakeholder Collaboration",
    ],
    image: "/images/construction.jpg",
  },
  {
    id: "infrastructure-residential-area",
    title: "Residential Area Infrastructure Development",
    location: "Ghana - New Residential Area",
    category: "Infrastructure",
    completionYear: "2024",
    description:
      "Infrastructure development for a new residential area, including roads and drainage systems.",
    fullDescription:
      "Full infrastructure development for a new residential area - roads, drainage systems, site preparation and civil works. Utilising modern construction machinery, partnerships with reliable material suppliers and a dedicated workforce trained in professional and safe construction techniques.",
    client: "Government / Private Developer",
    duration: "12 months",
    scope: [
      "Road Construction & Rehabilitation",
      "Drainage & Stormwater Systems",
      "Site Preparation & Earthworks",
      "Civil Engineering Works",
      "Project Management & QA",
    ],
    image: "/images/construction.jpg",
  },
  {
    id: "glass-frameless-portfolio",
    title: "Frameless Glass Installations Portfolio",
    location: "Accra & Nationwide",
    category: "Glass Solutions",
    completionYear: "2024",
    description:
      "Portfolio of frameless glass solutions - partitions, balustrades, facades and shower enclosures for residential & commercial clients.",
    fullDescription:
      "Comprehensive frameless glass portfolio demonstrating Nightingale Avenue Construction expertise: partitions for offices, shower enclosures, balustrades and railings, staircases and walkways, shopfronts and entrances, facades and curtain walls, pool fencing and glass canopies. Tempered & laminated safety glass with tinted & reflective solar control glazing for energy efficiency.",
    client: "Multiple - Residential & Commercial",
    duration: "Ongoing",
    scope: [
      "Frameless Glass Installation",
      "Glass Partitions & Facades",
      "Balustrades & Shower Enclosures",
      "Tempered & Laminated Glass",
      "Solar Control Glazing",
    ],
    image: "/images/glass-frameless.jpg",
  },
  {
    id: "aluminium-systems-portfolio",
    title: "Aluminium Window, Door & Curtain Wall Systems",
    location: "Accra & Nationwide",
    category: "Glass Solutions",
    completionYear: "2024",
    description:
      "Aluminium casement & sliding windows, doors, shopfronts, curtain walls and ACP installations.",
    fullDescription:
      "Durable, corrosion-resistant aluminium systems in varied profiles and colours. Casement and sliding windows, swing and sliding doors, shopfronts and storefronts, curtain wall systems, skylights and roof glazing, louvre and ventilation, partitions and cladding, security doors and composite panel (ACP) installation for residential and commercial buildings.",
    client: "Multiple - Residential & Commercial",
    duration: "Ongoing",
    scope: [
      "Aluminium Window & Door Systems",
      "Curtain Wall Systems",
      "Shopfronts & Entrances",
      "Skylights & Roof Glazing",
      "ACP Installation",
    ],
    image: "/images/glass-aluminium.jpg",
  },
  {
    id: "procurement-logistics-government",
    title: "Government Procurement & Logistics Supply",
    location: "Nationwide Delivery",
    category: "Procurement",
    completionYear: "2024",
    description:
      "End-to-end procurement and logistics for government tenders - military, medical, ICT and vehicle supplies (PPA Registered).",
    fullDescription:
      "Strategic sourcing and responsive logistics for government and private sector clients. As a PPA-registered supplier, we handle military uniforms and equipment, medical non-consumables, food and petroleum projects, ICT and communication equipment, tyres/batteries/spare parts/fire equipment, plus travel and tours. Technology-driven with real-time tracking, vetted suppliers, and quality assurance on all items.",
    client: "Government & Private Sector (PPA Tender)",
    duration: "Ongoing",
    scope: [
      "Strategic Sourcing (Local & International)",
      "Supply Chain Coordination",
      "Logistics & Timely Delivery",
      "Quality Assurance & Compliance",
      "Real-time Tracking & Reporting",
    ],
    image: "/images/procurement.jpg",
  },
];

export interface TestimonialItem {
  name: string;
  role: string;
  review: string;
  rating: number;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Public Sector Client",
    role: "Government Housing Scheme",
    review:
      "Nightingale Avenue Construction demonstrated exceptional commitment to delivering affordable housing for our essential workers. Their social housing blueprint is exactly what Ghana needs.",
    rating: 5,
  },
  {
    name: "Commercial Client",
    role: "Shopfront - Accra",
    review:
      "The frameless glass and aluminium work by Nightingale Avenue Construction transformed our space. Clean, modern, and built to last — truly innovative glass solutions.",
    rating: 5,
  },
  {
    name: "Procurement Partner",
    role: "PPA Tender Client",
    review:
      "Strategic sourcing, transparent process and on-time delivery. Nightingale Avenue Construction procurement and logistics team is efficient and reliable.",
    rating: 5,
  },
  {
    name: "Community Resident",
    role: "Sustainable Community, Kumasi",
    review:
      "Living in a Nightingale community means premium amenities, green spaces and a culturally thoughtful design. Quality housing that enhances living standards.",
    rating: 5,
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin with a detailed discussion to understand your vision, requirements, budget, and timeline.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "Our team develops contemporary, culturally-tailored plans and engineering drawings for your approval.",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Sourcing & Preparation",
    description:
      "Strategic sourcing from vetted suppliers, detailed costing, scheduling, and permit approvals — with transparent procurement.",
    icon: Package,
  },
  {
    number: "04",
    title: "Construction / Installation",
    description:
      "Skilled workforce executes with modern machinery, quality materials, and strict safety standards — whether building or glazing.",
    icon: Building2,
  },
  {
    number: "05",
    title: "Quality Assurance",
    description:
      "Rigorous quality checks at every stage. All procured items and works undergo QA before acceptance and handover.",
    icon: HardHat,
  },
  {
    number: "06",
    title: "Handover & Support",
    description:
      "Final inspections, client walkthrough, documentation and logistics-backed aftercare — building lasting partnerships.",
    icon: Home,
  },
];

export const STATS = [
  { value: "2024", label: "Incorporated" },
  { value: "500+", label: "Housing Units Blueprint" },
  { value: "5", label: "Solution Pillars" },
  { value: "100%", label: "Ghanaian Owned" },
];

export const TEAM_MEMBERS = [
  {
    name: "John Awua Kyerematen",
    position: "Managing Director",
    bio: "33 years experience. BSc, ACMA II Management & Business. Leads overall strategy and company leadership.",
    image: "/images/team-1.jpg",
    qualification: "BSc, ACMA II Management & Business",
    experience: "33 years",
  },
  {
    name: "Wilson Akaho Tay",
    position: "Project Manager",
    bio: "23 years experience. HND Building & Construction. Oversees project delivery and design & build execution.",
    image: "/images/team-2.jpg",
    qualification: "HND Building & Construction",
    experience: "23 years",
  },
  {
    name: "Julius Gakpey",
    position: "Supervisor",
    bio: "7 years experience. HND Building Technology. Site supervision and quality execution.",
    image: "/images/team-3.jpg",
    qualification: "HND Building Technology",
    experience: "7 years",
  },
  {
    name: "Kwame Agyei Onuoba",
    position: "Construction Engineer",
    bio: "24 years experience. BSc Construction Engineering.",
    image: "/images/team-4.jpg",
    qualification: "BSc Construction Engineering",
    experience: "24 years",
  },
  {
    name: "Evans Osei Darko",
    position: "Structural Engineer",
    bio: "10 years experience. BSc (Eng) Civil Engineering.",
    image: "/images/team-5.jpg",
    qualification: "BSc (Eng) Civil Engineering",
    experience: "10 years",
  },
  {
    name: "Emmanuel Larbi Gyamfi",
    position: "Stores",
    bio: "5 years experience. HND Building Technology. Materials and inventory management.",
    image: "/images/team-6.jpg",
    qualification: "HND Building Technology",
    experience: "5 years",
  },
  {
    name: "Emmanuel Gorleku",
    position: "Planning and Architecture",
    bio: "19 years experience. MSc Project Management. Leads planning and architectural design.",
    image: "/images/team-7.jpg",
    qualification: "MSc Project Management",
    experience: "19 years",
  },
  {
    name: "Joseph Adolphus Cudjoe",
    position: "Quantity Surveyor",
    bio: "14 years experience. BSc Commercial Management. Costing and commercial oversight.",
    image: "/images/team-8.jpg",
    qualification: "BSc Commercial Management",
    experience: "14 years",
  },
  {
    name: "Frank Kojo Ankoh",
    position: "Accountant",
    bio: "11 years experience. BA Accounting.",
    image: "/images/team-9.jpg",
    qualification: "BA Accounting",
    experience: "11 years",
  },
  {
    name: "Nicholas Annor",
    position: "Human Resource",
    bio: "9 years experience. BA Human Resource Management.",
    image: "/images/team-10.jpg",
    qualification: "BA Human Resource Management",
    experience: "9 years",
  },
  {
    name: "Bernice Owoo",
    position: "General Manager",
    bio: "6 years experience. BA Psychology & Information Studies. Leads operations and administration.",
    image: "/images/team-11.jpg",
    qualification: "BA Psychology & Information Studies",
    experience: "6 years",
  },
  {
    name: "Patricia Tamakloe-Gorleku",
    position: "Marketing Manager",
    bio: "1 year experience. BCs Public Relations. Drives brand and client engagement.",
    image: "/images/team-12.jpg",
    qualification: "BCs Public Relations",
    experience: "1 year",
  },
  {
    name: "Gabriel Adjonyoh",
    position: "IT, Facilities & Logistics Manager",
    bio: "5 years experience. BSc Computer Engineering.",
    image: "/images/team-13.jpg",
    qualification: "BSc Computer Engineering",
    experience: "5 years",
  },
  {
    name: "Eunice Asiedua Yeboah",
    position: "Administrative Assistant / MD P.A.",
    bio: "BSc Biological Science. Executive and administrative support.",
    image: "/images/team-14.jpg",
    qualification: "BSc Biological Science",
    experience: "—",
  },
  {
    name: "Samuel Asante",
    position: "Procurement Manager",
    bio: "14 years experience. Leads strategic sourcing and supply chain.",
    image: "/images/team-15.jpg",
    qualification: "Procurement",
    experience: "14 years",
  },
  {
    name: "Moses Brew",
    position: "Supervisor (Frameless)",
    bio: "6 years experience. Specialist in frameless glass installations.",
    image: "/images/team-16.jpg",
    qualification: "Frameless Glass Specialist",
    experience: "6 years",
  },
  {
    name: "Emmanuel Ocansey",
    position: "Accountant",
    bio: "3 years experience. BSc Accounting.",
    image: "/images/team-17.jpg",
    qualification: "BSc Accounting",
    experience: "3 years",
  },
  {
    name: "Augustine Yeboah Asante",
    position: "Supervisor (Aluminium)",
    bio: "4 years experience. Specialist in aluminium systems.",
    image: "/images/team-18.jpg",
    qualification: "Aluminium Specialist",
    experience: "4 years",
  },
];

export const CORE_VALUES = [
  {
    title: "Quality & Affordability",
    description:
      "Delivering quality and affordable housing that enhances living standards without exceeding budget constraints.",
  },
  {
    title: "Sustainability",
    description:
      "Embracing sustainable and innovative housing solutions with green spaces and renewable energy integration.",
  },
  {
    title: "Inclusivity",
    description:
      "Tailoring developments to Ghana's diverse cultural and social dynamics, promoting accessibility for essential workers.",
  },
  {
    title: "Collaboration",
    description:
      "Building partnerships with government bodies and NGOs to address community needs and facilitate home ownership.",
  },
  {
    title: "Innovation",
    description:
      "Modern architectural styles, glass innovation, and technology-driven operations for smarter solutions.",
  },
  {
    title: "Transparency & Reliability",
    description:
      "End-to-end transparency, strict compliance, and reliable delivery — from procurement to handover.",
  },
];

export const CERTIFICATES = [
  {
    title: "Certificate to Commence Business",
    description: "Certified as a solutions company in 2024",
  },
  {
    title: "PPA Registered",
    description: "Duly registered with the Public Procurement Authority to engage in Government tenders",
  },
  {
    title: "Tax Clearance Certificate",
    description: "Compliant with section 14 of The Revenue Administration Act, 2016 (Act 915)",
  },
  {
    title: "SSNIT Clearance Certificate",
    description: "Duly certified by SSNIT under National Pensions Act 2008, Act 766",
  },
];

export const ICONS = {
  Home,
  Building2,
  HardHat,
  Ruler,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
};
