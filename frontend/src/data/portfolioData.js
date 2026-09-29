
const portfolioData = {
    personal: {
        name: "Nitesh Yadav",
        role: "Full Stack Developer",
        location: "India",
        email: "niteshyadav4272@gmail.com",
        description:
            "Full Stack Developer with 1.5+ years of experience building web applications using React, Node.js, Express.js, MongoDB, Next.js, and AWS. Experienced in developing REST APIs, authentication systems, responsive interfaces, and scalable backend solutions.",
    },

    socialLinks: [
        {
            name: "GitHub",
            url: "https://github.com/",
        },
        {
            name: "LinkedIn",
            url: "https://linkedin.com/",
        },
        {
            name: "Email",
            url: "mailto:niteshyadav4272@gmail.com",
        },
    ],


  education: [
    {
        degree: "B.Tech",
        institute: "Kamla Nehru Institute of Technology",
        shortInstitute: "KNIT Sultanpur",
        location: "Sultanpur, Uttar Pradesh",
        startYear: "2022",
        endYear: "2026",
        description:
            "Bachelor of Technology with a strong focus on technical learning, problem solving and software development.",
    },
],

    experience: [
    {
        role: "Full Stack Developer Intern",
        company: "Techsunset",
        location: "Bengaluru, India",
        startDate: "April 2025",
        endDate: "Present",
        duration: "1.5+ Years",

        description:
            "Worked on full-stack web applications, developing responsive frontend interfaces and scalable backend services using modern JavaScript technologies.",

        technologies: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
            "JWT",
            "AWS",
        ],

        responsibilities: [
            "Developed responsive web interfaces using React.js and Tailwind CSS.",
            "Built and integrated RESTful APIs using Node.js and Express.js.",
            "Worked with MongoDB and Mongoose for database design and data management.",
            "Implemented authentication and authorization using JWT and HTTP-only cookies.",
            "Integrated frontend applications with backend APIs and handled API states.",
            "Worked with AWS services for application deployment and cloud infrastructure.",
        ],
    },
],
    services: [
        {
            title: "Frontend Development",
            description:
                "Building responsive and user-friendly interfaces using React.js, JavaScript, Tailwind CSS, reusable components, and modern UI practices.",
        },
        {
            title: "Backend Development",
            description:
                "Developing reliable server-side applications using Node.js, Express.js, structured business logic, validation, and middleware.",
        },
        {
            title: "REST API Development",
            description:
                "Designing and integrating RESTful APIs with proper request handling, validation, authentication, error handling, and clean API architecture.",
        },
        {
            title: "Database Development",
            description:
                "Designing and managing MongoDB databases using Mongoose, schema design, aggregation pipelines, indexing, and efficient queries.",
        },
        {
            title: "Authentication & Security",
            description:
                "Implementing secure authentication using JWT, HTTP-only cookies, password hashing, protected routes, and authorization.",
        },
        {
            title: "Cloud & Deployment",
            description:
                "Deploying full-stack applications using AWS services and configuring applications for reliable production environments.",
        },
    ],

    // project
projects: [
    {
        id: 1,

        title: "crm-techsunset.com",

        description:
            "CRM software used to manage customers, leads, sales, and customer interactions in one place.",

        technologies: [
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "MongoDB",
            "Redis",
        ],

        image: "/photo/crm.png",

        liveDemo: "https://crm.techsunset.com",

        label: "CRM Platform",

        workedOn: [
            "Built customer and lead management interfaces with reusable React components",
            "Developed REST APIs for customer CRUD operations and lead workflows",
            "Implemented search, filtering and customer status management",
            "Integrated authentication, authorization and request validation",
            "Optimized API communication and database queries for smoother dashboard performance",
        ],
    },

    {
        id: 2,

        title: "TechSunset HRMS",

        description:
            "Human Resource management software used to manage employees, attendance, leaves, onboarding, departments, holidays, and HR reports.",

        technologies: [
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "MongoDB",
            "Redis",
        ],

        image: "/photo/hr.png",

        liveDemo: "https://hr.techsunset.com",

        label: "HR Platform",

        workedOn: [
            "Developed employee, attendance and leave management workflows",
            "Built reusable dashboard components and data-driven HR interfaces",
            "Created REST APIs for employee, attendance and leave operations",
            "Implemented validation, authentication and role-based access flows",
            "Improved data handling for HR dashboards and operational reports",
        ],
    },

    {
        id: 3,

        title: "TechSunset Inventory",

        description:
            "Inventory management software used to manage products, stock, orders, suppliers, warehouses, and fulfillment.",

        technologies: [
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "MongoDB",
            "Redis",
            "BullMQ",
        ],

        image: "/photo/inventory.png",

        liveDemo: "https://inventory.techsunset.com",

        label: "Inventory Platform",

        workedOn: [
            "Developed product, stock and order management interfaces",
            "Created APIs for inventory, supplier and warehouse operations",
            "Implemented stock updates and order processing workflows",
            "Used background job processing for asynchronous inventory operations",
            "Improved API performance through efficient data handling and caching",
        ],
    },

    {
        id: 4,

        title: "TechSunset Project Management",

        description:
            "Project and task management software used to manage projects, tasks, deadlines, milestones, team workload, and progress.",

        technologies: [
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "Prisma",
        ],

        image: "/photo/project.png",

        liveDemo: "https://project.techsunset.com",

        label: "Project Management",

        workedOn: [
            "Built project, task and team workload management interfaces",
            "Developed REST APIs for projects, tasks, milestones and deadlines",
            "Implemented structured data access using Prisma ORM",
            "Created task assignment, status and priority management workflows",
            "Improved application structure with reusable components and optimized API flows",
        ],
    },
],
  
    skills: [
        // =========================
        // Frontend
        // =========================
        {
            name: "HTML",
            category: "Frontend",
            level: 90,
        },
        {
            name: "CSS",
            category: "Frontend",
            level: 85,
        },
        {
            name: "JavaScript",
            category: "Frontend",
            level: 85,
        },
        {
            name: "React.js",
            category: "Frontend",
            level: 85,
        },
        {
            name: "Tailwind CSS",
            category: "Frontend",
            level: 85,
        },

        // =========================
        // Backend
        // =========================
        {
            name: "Node.js",
            category: "Backend",
            level: 85,
        },
        {
            name: "Express.js",
            category: "Backend",
            level: 85,
        },
        {
            name: "REST API",
            category: "Backend",
            level: 85,
        },
        {
            name: "JWT",
            category: "Backend",
            level: 80,
        },
        {
            name: "Mongoose",
            category: "Backend",
            level: 80,
        },

        // =========================
        // Database
        // =========================
        {
            name: "MongoDB",
            category: "Database",
            level: 85,
        },
        {
            name: "MongoDB Atlas",
            category: "Database",
            level: 80,
        },
        {
            name: "Aggregation",
            category: "Database",
            level: 75,
        },
        {
            name: "Indexing",
            category: "Database",
            level: 70,
        },

        // =========================
        // System Design
        // =========================
        {
            name: "Microservices",
            category: "System Design",
            level: 70,
        },
        {
            name: "API Gateway",
            category: "System Design",
            level: 65,
        },
        {
            name: "Load Balancing",
            category: "System Design",
            level: 65,
        },
        {
            name: "Caching",
            category: "System Design",
            level: 70,
        },
        {
            name: "Scalability",
            category: "System Design",
            level: 65,
        },
        {
            name: "Database Design",
            category: "System Design",
            level: 75,
        },

        // =========================
        // Messaging & Distributed Systems
        // =========================
        {
            name: "RabbitMQ",
            category: "Messaging & Distributed Systems",
            level: 65,
        },
        {
            name: "Kafka",
            category: "Messaging & Distributed Systems",
            level: 55,
        },
        {
            name: "Redis",
            category: "Messaging & Distributed Systems",
            level: 65,
        },
        {
            name: "Event-Driven Architecture",
            category: "Messaging & Distributed Systems",
            level: 60,
        },
        {
            name: "Message Queues",
            category: "Messaging & Distributed Systems",
            level: 65,
        },
        {
            name: "Asynchronous Processing",
            category: "Messaging & Distributed Systems",
            level: 65,
        },

        // =========================
        // Cloud & DevOps
        // =========================
        {
            name: "AWS",
            category: "Cloud & DevOps",
            level: 70,
        },
        {
            name: "EC2",
            category: "Cloud & DevOps",
            level: 70,
        },
        {
            name: "S3",
            category: "Cloud & DevOps",
            level: 70,
        },
        {
            name: "Docker",
            category: "Cloud & DevOps",
            level: 65,
        },
        {
            name: "CI/CD",
            category: "Cloud & DevOps",
            level: 60,
        },
        {
            name: "Nginx",
            category: "Cloud & DevOps",
            level: 65,
        },

        // =========================
        // Tools
        // =========================
        {
            name: "Git",
            category: "Tools / DevOps",
            level: 85,
        },
        {
            name: "GitHub",
            category: "Tools / DevOps",
            level: 85,
        },
        {
            name: "Postman",
            category: "Tools / DevOps",
            level: 85,
        },
    ],
};

export default portfolioData;

