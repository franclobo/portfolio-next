import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { Menu, Services, PersonalInfo, Figures, Skills, Experience, Projects } from "@/types";

const calculateAgeYears = (date: string) => {
  const birthday = new Date(date);
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const MenuItems: Menu[] = [
  {
    id: 1,
    name: 'Home',
    url: '/',
    icon: IoHomeOutline
  },
  {
    id: 2,
    name: 'About',
    url: '/about',
    icon: FaRegUser
  },
  {
    id: 3,
    name: 'Portfolio',
    url: '/portfolio',
    icon: FaRegFolderOpen
  },
  {
    id: 4,
    name: 'Contact',
    url: '/contact',
    icon: IoMailOpenOutline
  },
]

export const ServicesItems: Services[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Build your website from scratch or improve your existing one.",
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "Build your mobile app from scratch or improve your existing one.",
  },
  {
    id: 3,
    title: "Business Modeling",
    description: "SWOT analisys and business strategies.",
  },
  {
    id: 4,
    title: "Accountant",
    description: "Preparation of accountant financial statements.",
  },
  {
    id: 5,
    title: "Quality Manager",
    description: "Improve your quality processes according to ISO standards.",
  },
  {
    id: 6,
    title: "Project Manager",
    description:
      "Planning, management, control and improvement at each stage of the project",
  },
  {
    id: 7,
    title: "Environment Manager System",
    description:
      "Implement an environmental management system according to ISO standards.",
  },
  {
    id: 8,
    title: "Health and Safety Manager System",
    description:
      "Implement an Health and Safety Manager System according to ISO standards.",
  },
  {
    id: 9,
    title: "Marketing",
    description: "Market research, strategy and implementation.",
  },
  {
    id: 10,
    title: "Sales",
    description:
      "Formulation, implementation, evaluation and control of the sales program",
  },
  {
    id: 11,
    title: "Human Resources",
    description:
      "Recruitment, selection, training and remuneration of human talent",
  },
  {
    id: 12,
    title: "Financial Analysis",
    description:
      "Analysis of liquidity, solvency, management and profitability indicators",
  },
];

export const PersonalInfoItems: PersonalInfo[] = [
  {
    id: 1,
    title: "First Name",
    description: "Francisco",
  },
  {
    id: 2,
    title: "Last Name",
    description: "Borja",
  },
  {
    id: 3,
    title: "Age",
    description: "25",
  },
  {
    id: 4,
    title: "Age",
    description: calculateAgeYears("1988-05-27").toString(),
  },
  {
    id: 5,
    title: "Nationality",
    description: "Ecuadorian",
  },
  {
    id: 6,
    title: "Freelance",
    description: "Available",
  },
  {
    id: 7,
    title: "Address",
    description: "Quito, Ecuador",
  },
  {
    id: 8,
    title: "Phone",
    description: "+593 96 184 2276",
  },
  {
    id: 9,
    title: "Email",
    description: "fjbl2788@gmail.com",
  },
  {
    id: 10,
    title: "Languages",
    description: "Spanish, English, French, Russian",
  }
];

export const FiguresItems: Figures[] = [
  {
    title: "Projects completed",
    number: 120,
  },
  {
    title: "Happy Clients",
    number: 15,
  },
  {
    title: "Hours of Support",
    number: 1000,
  },
  {
    title: "Hard Workers",
    number: 10,
  },
];

export const SkillsItems: Skills[] = [
  {
    title: "HTML5",
    percentage: 90,
  },
  {
    title: "CSS3",
    percentage: 80,
  },
  {
    title: "JavaScript",
    percentage: 90,
  },
  {
    title: "React",
    percentage: 90,
  },
  {
    title: "React Native",
    percentage: 90,
  },
  {
    title: "Next.js",
    percentage: 90,
  },
  {
    title: "Python",
    percentage: 75,
  },
  {
    title: "Ruby",
    percentage: 90,
  },
  {
    title: "Ruby on Rails",
    percentage: 90,
  },
  {
    title: "Django",
    percentage: 75,
  },
  {
    title: "PostgreSQL",
    percentage: 90,
  },
  {
    title: "MongoDB",
    percentage: 80,
  },
  {
    title: "MySQL",
    percentage: 70,
  },
  {
    title: "SQLite",
    percentage: 60,
  },
  {
    title: "Git",
    percentage: 75,
  },
  {
    title: "Docker",
    percentage: 75,
  },
  {
    title: "AWS",
    percentage: 75,
  },
  {
    title: "Supabase",
    percentage: 75,
  },
  {
    title: "API REST",
    percentage: 95,
  },
];

export const ExperienceItems: Experience[] = [
  {
    title: "Self employed",
    company: "WebMinds Studio",
    dateFrom: "2023-01-01",
    dateTo: new Date().toISOString(),
    city: "Quito",
    icon: FaBriefcase,
    description: [
      {
        activity:
          "I started this venture to help entrepreneurs show their businesses on the web, allowing them autonomy in their website design, avoiding the templates used by other providers, and giving them full access to their website for future modifications without them feeling obligated to sign lifetime contracts.",
      },
    ],
  },
  {
    title: "Code Reviewer",
    company: "Microverse",
    dateFrom: "2022-08-01",
    dateTo: "2023-04-01",
    city: "United States - Remote",
    icon: FaBriefcase,
    description: [
      {
        activity:
          "👉 Carry out more than 30 weekly reviews to guarantee the quality of the source code and the user interface allowing the student to continue to the next stage.",
      },
      {
        activity:
          "👀 Review compliance feedback for necessary fixes, resulting in an 80% decrease in the number of new reviews.",
      },
      {
        activity:
          "🦑 Use GitHub and Slack to communicate with students and provide quick responses to project-related issues, resulting in a 50% increase in requirements completion and project approval.",
      },
    ],
  },
  {
    title: "Auditor Compliance",
    company: "Vásquez & Asociados",
    dateFrom: "2021-03-01",
    dateTo: "2021-07-01",
    city: "Quito",
    icon: FaBriefcase,
    description: [
      {
        activity:
          "🤝 Carried out the compliance audits assigned by the client Vasquez & Associates to the NIRSA suppliers in Quito and Highland region, covering 100% of suppliers assigned.",
      },
      {
        activity:
          "📈 Audited 20+ suppliers in the aspects of Corporate Social Responsibility, Biosafety Protocols for the Prevention of COVID, Quality, and Vulnerability. ",
      },
      {
        activity:
          "📑 Typed and sent to the lead auditor around 9 informs weekly with all the information in three sections, previous audition, in situ, and summary information with the supplier’s rating.",
      },
    ],
  },
  {
    title: "Manager assistant",
    company: "CELEC EP",
    dateFrom: "2018-05-01",
    dateTo: "2019-07-01",
    city: "Quito",
    icon: FaBriefcase,
    description: [
      {
        activity:
          "🧐 Managed the asset transfer file to provide tracking of assets assigned to employees, reaching 80% control of asset tracking.",
      },
      {
        activity:
          "💻 I supported the organization and digitization of the files, allowing orderly access to the file, and improving the productivity of warehouses by 25% compared to the previous year.",
      },
      {
        activity:
          "🕵️ I verified the physical file from the year 2011 to the year 2019 more than 1000 files in six months, covering 100% of the assigned work.",
      },
    ],
  },
  {
    title: "Business Engineer",
    company: "National Polytechnical School",
    dateFrom: "2013-01-01",
    dateTo: "2019-09-01",
    city: "Quito",
    icon: GiGraduateCap,
    description: [
      {
        activity:
          "I am currently in the academic capacity to design strategies aimed at planning, organization, management, innovation, and control of business systems. The curricular scenario of the Business Engineer combines modern concepts in Administration, Marketing, Human Resources, Management Information, Production Control, Accounting, Economics, Legislation, and Mathematics Applied to Business Management. The Business Engineer of the National Polytechnic School can design, implement and manage organizational systems that incorporate the added value of technology in the production of goods and services, leading decision-making in linking local technological production with demands and social needs, within a culture of quality, preservation of the ecosystem and social responsibility.",
      },
    ],
  },
  {
    title: "Full Stack Web Developer",
    company: "Microverse",
    dateFrom: "2022-03-01",
    dateTo: "2022-11-01",
    city: "United States - Remote",
    icon: GiGraduateCap,
    description: [
      {
        activity:
          "Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux. Developed skills in remote pair programming using GitHub, industry-standard git-flow, and daily standups to communicate and collaborate with international remote developers.",
      },
    ],
  },
];

export const ProjectsItems: Projects[] = [
  {
    id: 1,
    title: "CaseCobra",
    description:
      "Capture your favorite unique image for your phone case. CaseCobra protects not only your memories, but also your cell phone.",
    image:
      "https://github.com/user-attachments/assets/3fbc2396-3ffc-4922-8952-7e2e42d9478a",
    url: "https://casecobra-nine-iota.vercel.app",
    languages: ["Typescript", "Next.js", "Paypal", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Pricewise",
    description:
      "Track product prices effortlessly and save money on your online purchases.",
    image:
      "https://github.com/user-attachments/assets/ee5a3670-02a6-4ebb-a288-5082424bb543",
    url: "https://pricewise-azure-seven.vercel.app",
    languages: ["Typescript", "Next.js", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Podcaster",
    description: "Generate your podcast using AI.",
    image:
      "https://github.com/user-attachments/assets/ab2e1b64-ceda-4c2e-9fc4-a71583095c7f",
    url: "https://podcaster-zeta.vercel.app",
    languages: ["Typescript", "Next.js", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Real time search analytics",
    description:
      "A realtime search box, where users search articles, and then to have analytics that display what users were searching for. It can also track via IP. It records the user's input in realtime and ultimately display analytics & trends on what people are searching for the most.",
    image:
      "https://github.com/user-attachments/assets/172c2d2b-83e6-48da-84f9-5d24eafb00d1",
    url: "https://real-time-searching-bead1baa36ca.herokuapp.com/",
    languages: ["Ruby", "Ruby on Rails", "PostgreSQL"],
  },
  {
    id: 5,
    title: "Budget",
    description:
      "A mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.",
    image:
      "https://user-images.githubusercontent.com/58642949/203126520-d6f9f000-8f78-496c-b18e-a04cb95f83c5.png",
    url: "https://budget-2024-44f4924cb6b3.herokuapp.com/",
    languages: ["Ruby", "Ruby on Rails", "PostgreSQL"],
  },
  {
    id: 6,
    title: "Ecommerce Ruby",
    description:
      "Ecommerce Ruby is a project that allows users to buy and sell products online. Users can create an account, add products to their cart, and make purchases. Sellers can create products, manage their inventory, and view sales reports. It uses PayPal for payment processing.",
    image:
      "https://github.com/user-attachments/assets/32c2f73c-0b12-413b-a8bf-4531756f620a",
    url: "https://github.com/franclobo/ecommerce_ruby",
    languages: ["Ruby", "Ruby on Rails", "PostgreSQL", "Paypal"],
  },
  {
    id: 7,
    title: "Age calculator app",
    description:
      "A simple age calculator app that calculates your age based on your birthdate.",
    image:
      "https://play-lh.googleusercontent.com/iQt8qPw5N2yFOJLorVajzXQmu0_XUScIaPtIMysVijynmlO55G6pzfsqDADYTbpyatCw=w2560-h1440-rw",
    url: "https://play.google.com/store/apps/details?id=com.agecalculator2024&pcampaignid=web_share",
    languages: ["React Native", "Typesript"],
  },
];
