import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from '../types';

import {
  mobile,
  backend,
  // creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  //redux,
  tailwind,
  //nodejs,
  //mongodb,
  git,
  figma,
  docker,
  //hibernate,
  maven,
  rest,
  springboot,
  java,
  postgres,
  //meta,
  //starbucks,
  //tesla,
  //shopify,
  //carrent,
  //jobit,
  //tripguide,
  //threejs,
  creator,
  thestarter,
  novobanco,
  globalblue,
  santander,
  battlearena,
  llamas,
  library,
  rfp,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: TService[] = [
  {
    title: 'Software Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Product Designer',
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'springboot',
    icon: springboot,
  },
  {
    name: 'java',
    icon: java,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  // {
  //   name: 'Node JS',
  //   icon: nodejs,
  // },
  // {
  //   name: 'MongoDB',
  //   icon: mongodb,
  // },
  // {
  //   name: 'Three JS',
  //   icon: threejs,
  // },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  // {
  //   name: 'hibernate',
  //   icon: hibernate,
  // },
  {
    name: 'maven',
    icon: maven,
  },
  {
    name: 'rest',
    icon: rest,
  },
  {
    name: 'postgres',
    icon: postgres,
  },
];

const experiences: TExperience[] = [
  {
    title: 'Product Designer & Full Stack Developer',
    companyName: 'The Starter',
    icon: thestarter,
    iconBg: '#383E56',
    date: 'Feb 2024 - Jul 2024',
    points: [
      'Developed full stack applications using Java, Spring Boot, HTML, CSS, and JavaScript.',
      'Built REST APIs and integrated frontend components.',
      'Collaborated with teams using Agile methodology.',
      'Supported product design and UI/UX work with user research and prototyping.',
    ],
  },
  {
    title: 'Administrative - Corporate Department',
    companyName: 'Novo Banco',
    icon: novobanco,
    iconBg: '#383E56',
    date: 'Mar 2023 - Nov 2023',
    points: [
      'Managed documentation processes and ensured compliance.',
      'Supported internal workflows and data validation.',
      'Management of legal documents and digital channels.',
      'Coordination with clients and departments for account updates.',
      'Led high-pressure situations, enhancing skills such as communication, collaboration, and resilience.',
    ],
  },
  {
    title: 'Merchant & Logistics Manager',
    companyName: 'Global Blue',
    icon: globalblue,
    iconBg: '#383E56',
    date: 'Set 2018 - Fev 2023',
    points: [
      'Contractual support and liaising with other company offices.',
      'Logistics and correspondence management.',
      'Physical and digital archiving.',
      'Salesforce contractual management',
    ],
  },
  {
    title: 'Operations Manager - BackOffice',
    companyName: 'Santander Totta Group',
    icon: santander,
    iconBg: '#383E56',
    date: 'Jul 2016 - Jun 2018',
    points: [
      'Handling various types of assets and insurance associated with credits in Excel.',
      'Validating data consistency in the system with credit documentation, making necessary adjustments.',
      'Preparing processes for archiving after treatment.',
      'Bank Guarantees. Managing post-guarantee processes in increases, reductions, cancellations, and activations. Loading proposals and Guarantees into the system. Accounting for Promissory Notes, Bank Guarantees, and Pledges.',
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: TProject[] = [
  {
    name: 'Library Management System',
    description:
      'Full-stack RESTful application to manage book rentals and purchases with backend logic in Spring Boot and database integration.',
    tags: [
      { name: 'java', color: 'blue-text-gradient' },
      { name: 'springboot', color: 'green-text-gradient' },
      { name: 'mysql', color: 'pink-text-gradient' },
      { name: 'react', color: 'orange-text-gradient' },
    ],
    image: library,
    sourceCodeLink: 'https://github.com/AlexandraGomesss/library-app',
  },
  {
    name: 'Llamas vs Zombies Game',
    description:
      'Java-based game using JavaFX with game loop mechanics, wave logic, and UI feedback. Built in pair programming with OOP principles.',
    tags: [
      { name: 'java', color: 'blue-text-gradient' },
      { name: 'javafx', color: 'green-text-gradient' },
      { name: 'oop', color: 'pink-text-gradient' },
    ],
    image: llamas,
    sourceCodeLink: 'https://github.com/AlexandraGomesss/gamejam_llamasApocalypse',
  },
  {
    name: 'Game - Battle Arena (Mortal Kombat style)',
    description:
      'Java-based game using JavaFX with game loop mechanics, keyboard interface, random movement and PvP. Solo project',
    tags: [
      { name: 'java', color: 'blue-text-gradient' },
      { name: 'javafx', color: 'green-text-gradient' },
      { name: 'oop', color: 'pink-text-gradient' },
    ],
    image: battlearena,
    sourceCodeLink: 'https://github.com/AlexandraGomesss/BattleArena',
  },
  {
    name: 'RFP Proposal Tracker',
    description:
      'Web app for managing Requests for Proposal using Spring Boot, REST, and SOAP services with PostgreSQL integration.',
    tags: [
      { name: 'java', color: 'blue-text-gradient' },
      { name: 'springboot', color: 'green-text-gradient' },
      { name: 'soap', color: 'pink-text-gradient' },
    ],
    image: rfp,
    sourceCodeLink: 'https://github.com/AlexandraGomesss/RFP_Buddy',
  },
];

export { services, technologies, experiences, testimonials, projects };
