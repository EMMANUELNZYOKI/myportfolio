import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Bachelor of Science in Computer Science",
      company_name: "Zetech University",
      icon: starbucks,
      iconBg: "#383E56",
      date: "May 2025 - Present",
      points: [
    "Currently pursuing a Bachelor of Science in Computer Science.",
    "Studying advanced computing concepts including software development, data structures, algorithms, database systems, web technologies, and artificial intelligence.",
    "Gaining hands-on experience through practical projects and coursework.",
    "Strengthening problem-solving, analytical thinking, and technical skills for a career in the technology industry.",
  ],
    },
    {
      title: "Freelance Web Developer",
      company_name: "KajaxCodeLab",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2023 – Present",
      points: [
    "Owner of KajaxCodeLab, developing responsive and user-friendly websites for clients across various industries.",
    "Built websites using HTML, CSS, JavaScript, React, and WordPress.",
    "Integrated CMS, e-commerce, and analytics tools to enhance website functionality.",
    "Managed projects end-to-end, including design, deployment, and ongoing support.",
  ],
    },
    {
      title: "Diploma in Computer Science",
      company_name: "Diploma in Computer Science",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Sep 2022 - Nov 2024",
      points: [
    "Graduated with a Diploma in Computer Science in 2024.",
    "Gained practical skills in programming, web development, and database management.",
    "Worked with technologies including HTML5, CSS3, JavaScript, PHP, and MySQL.",
    "Applied UI/UX design principles to develop user-friendly applications.",
  ],
    },
    {
      title: "Web Developer",
      company_name: "SafetyPlus Consulting Limited",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "May 2024 - Aug 2024",
      points: [
    "Designed, developed, and deployed a responsive company website using HTML5, CSS3, JavaScript, PHP, and Node.js.",
    "Created a dynamic interface and integrated a CMS for easy content management.",
    "Optimized website performance, accessibility, and security for end-users.",
    "Strengthened full-stack development skills and managed end-to-end project lifecycles.",
    "Delivered high-quality digital solutions aligned with business requirements.",
      ],
    },
    {
      title: "Team Lead",
      company_name:"Zetech University",
      icon: shopify,
      iconBg: "#383E56",
      date: "Sep 2023 - Apr 2024",
      points:[
    "Guided peers in programming, project management, and coding as a team lead.",
    "Coordinated group projects, delegated tasks, and ensured smooth collaboration among team members.",
    "Facilitated team discussions, provided technical guidance, and helped troubleshoot coding challenges.",
    "Ensured timely project completion while strengthening leadership, communication, and problem-solving skills.",
    "Enhanced expertise in software development and teamwork through hands-on collaborative experience.",
      ],
    },
    {
      title: "Team Lead",
      company_name:"Zetech University",
      icon: shopify,
      iconBg: "#383E56",
      date: "Sep 2023 - Apr 2024",
      points:[
    "Guided peers in programming, project management, and coding as a team lead.",
    "Coordinated group projects, delegated tasks, and ensured smooth collaboration among team members.",
    "Facilitated team discussions, provided technical guidance, and helped troubleshoot coding challenges.",
    "Ensured timely project completion while strengthening leadership, communication, and problem-solving skills.",
    "Enhanced expertise in software development and teamwork through hands-on collaborative experience.",
      ],
    },
    {
      title:"IT Consultant | Web Developer",
      company_name: "St. Benedict School",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jun 2022 - Aug 2022",
      points: [
        "Worked as an ICT teacher, developing lesson plans covering computer hardware, software applications, programming, and internet safety.",
      "Used interactive teaching methods to simplify complex technical concepts and improve student engagement.",
      "Enhanced communication, problem-solving, and analytical skills through teaching and mentoring students.",
      "Applied technical knowledge to provide IT support and guidance.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
       name: "Car Management System",
  description:
    "A Python-based project designed to manage car inventories using CRUD operations. Users can add, view, edit, and delete car details such as make, model, year, mileage, and price. The system provides a simple and efficient way to handle car data, ideal for learning data management and user interaction in real-world applications.",
  tags: [
    {
      name: "python",
      color: "blue-text-gradient",
    },
    {
      name: "sqlite",
      color: "green-text-gradient",
    },
    {
      name: "tkinter",
      color: "pink-text-gradient",
    },
  ],
      image: carrent,
      source_code_link: "https://github.com/EMMANUELNZYOKI/car-management-system",
      demo_link: "https://github.com/EMMANUELNZYOKI/car-management-system"
    },
    {
      name: "Django Mpesa Intergration Daraja",
  description:
    "A Django-based library that integrates Safaricom’s Mpesa Daraja API to enable seamless mobile payment functionality in Python web applications. It simplifies STK Push requests, transaction confirmation, and status checks through well-structured API endpoints, with easy setup including configurable keys, URL routing, and model migrations.",
  tags: [
    {
      name: "django",
      color: "blue-text-gradient",
    },
    {
      name: "python",
      color: "green-text-gradient",
    },
    {
      name: "rest-api",
      color: "pink-text-gradient",
    },
  ],
      image: jobit,
      source_code_link: "https://github.com/EMMANUELNZYOKI/django-mpesa-daraja",
      demo_link: "https://github.com/EMMANUELNZYOKI/django-mpesa-daraja"
    },
    {
      name: "Travel Management System",
  description:
    "A responsive web platform built with PHP, MySQL, and Bootstrap that enables travel planning, bookings, and management. It includes user registration, role-based access, travel package listings, online booking with secure payments, and an admin dashboard for managing customers, tracking bookings, and viewing analytics.",
  tags: [
    {
      name: "php",
      color: "blue-text-gradient",
    },
    {
      name: "mysql",
      color: "green-text-gradient",
    },
    {
      name: "bootstrap",
      color: "pink-text-gradient",
    },
  ],
      image: tripguide,
      source_code_link: "https://github.com/EMMANUELNZYOKI/travel-management-system",
      demo_link: "https://github.com/EMMANUELNZYOKI/travel-management-system" ,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };