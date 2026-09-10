export const config = {
  developer: {
    name: "Shakith A",
    title: "Junior .NET Full Stack Developer",
    subtitle: "C# | ASP.NET Core | Angular | SQL Server | GenAI",
    bio: "Junior .NET Full Stack Developer with hands-on experience in ASP.NET Core, Angular, SQL Server, and Generative AI.",
    avatar:
      "https://ui-avatars.com/api/?name=Shakith+A&background=0a0a0a&color=fff&size=200",
    about:
      "Computer Science and Engineering graduate with hands-on experience in backend development, databases, frontend technologies, and Generative AI. Passionate about building practical full-stack software solutions.",
  },

  social: {
    github: "shaki-12",
    email: "shakith2004@gmail.com",
    linkedin: "shakith-a-0484a027b",
    location: "Chennai, Tamil Nadu, India",
  },

  experience: [
    {
      id: 1,
      company: "Faith Infotech",
      role: "Full Stack .NET Developer Trainee",
      period: "Feb 2026 – Sep 2026",
      skills: [
        "ASP.NET Core Web API",
        "ASP.NET MVC",
        "C#",
        "Entity Framework Core",
        "LINQ",
        "SQL Server",
        "Angular",
        "REST APIs",
      ],
    },

    {
      id: 2,
      company: "Pumo Technovation",
      role: "Java Intern",
      period: "Jul 2025 – Sep 2025",
      skills: [
        "Core Java",
        "OOP",
        "Collections",
        "Exception Handling",
      ],
    },
  ],

  education: [
    {
      id: 1,
      institution: "Aalim Muhammed Salegh College of Engineering",
      degree: "B.E. Computer Science and Engineering",
      period: "2022 – 2026",
      gpa: "CGPA: 8.0",
    },
  ],

  projects: [
    {
      id: 1,
      title: "SyntaxFlow Hospital Management System",
      description:
        "A full-featured Hospital Management System with Receptionist, Doctor, Pharmacy, and Lab modules. Handles patient management and appointment scheduling end-to-end.",
      image: "/projects/portfolio_hms.png",
      technologies: [
        "ASP.NET MVC",
        "ASP.NET Core Web API",
        "C#",
        "Angular",
        "Entity Framework Core",
        "SQL Server",
      ],
      features: [
        "Receptionist Module",
        "Doctor Module",
        "Pharmacy Module",
        "Lab Module",
        "Patient Management",
        "Appointment Scheduling",
      ],
      github: "https://github.com/shaki-12/Hospital-Management-System",
      demo: "#",
    },

    {
      id: 2,
      title: "Student Feedback Sentiment Analyzer",
      description:
        "A browser-based sentiment analysis tool for student feedback with real-time classification, dashboard visualization, and sentiment scoring.",
        image: "/projects/studentfeedback.png",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Gemini API",
      ],
      features: [
        "Dashboard Visualization",
        "Sentiment Classification",
        "Real-Time Analysis",
      ],
      github: "https://github.com/shaki-12",
      demo: "#",
    },

    {
      id: 3,
      title: "AI-Enabled Clinical Management System",
      description:
        "An AI-powered clinical policy assistant using Retrieval-Augmented Generation (RAG), OpenAI, Angular, and ASP.NET Core Web API.",
      image: "/projects/portfolio_clara.png",
      technologies: [
        "Angular",
        "ASP.NET Core Web API",
        ".NET 8",
        "C#",
        "OpenAI",
        "RAG",
      ],
      features: [
        "RAG Pipeline",
        "Policy Document Retrieval",
        "Embeddings",
        "Similarity Search",
        "Grounded Responses",
        "Out-of-Policy Handling",
      ],
      github:
        "https://github.com/shaki-12/Clinic-Management-RAG-AI-Assistant",
      demo: "#",
    },
  ],

  skills: [
    // Programming Languages
    { name: "C#", icon: "csharp" },
    { name: "Java", icon: "java" },
    { name: "Python", icon: "python" },
    { name: "SQL", icon: "sql" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },

    // Backend
    { name: "ASP.NET Core Web API", icon: "aspnetcore" },
    { name: "ASP.NET MVC", icon: "dotnet" },
    { name: "Entity Framework Core", icon: "efcore" },
    { name: "LINQ", icon: "linq" },
    { name: "REST APIs", icon: "dotnet" },

    // Frontend
    { name: "Angular", icon: "angular" },
    { name: "HTML5", icon: "html" },
    { name: "CSS3", icon: "css" },

    // Database
    { name: "SQL Server", icon: "sqlserver" },
    { name: "Oracle", icon: "oracle" },

    // Concepts
    { name: "OOP", icon: "linq" },
    { name: "CRUD", icon: "linq" },
    { name: "MVC Architecture", icon: "dotnet" },
    { name: "Dependency Injection", icon: "dotnet" },
    { name: "Repository Pattern", icon: "dotnet" },
    { name: "JWT Authentication", icon: "dotnet" },
    { name: "Role-Based Authorization", icon: "dotnet" },

    // AI / GenAI
    { name: "Generative AI", icon: "rag" },
    { name: "LLMs", icon: "rag" },
    { name: "RAG", icon: "rag" },
    { name: "OpenAI", icon: "openai" },
    { name: "Prompt Engineering", icon: "rag" },
    { name: "Chatbot Development", icon: "rag" },
    { name: "ML.NET", icon: "mlnet" },

    // Tools
    { name: "Visual Studio 2022", icon: "dotnet" },
    { name: "VS Code", icon: "dotnet" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Postman", icon: "postman" },
    { name: "Swagger", icon: "swagger" },
  ],

  skillCategories: [
    {
      category: "Programming Languages",
      items: [
        "C#",
        "Java",
        "Python",
        "SQL",
        "JavaScript",
        "TypeScript",
      ],
    },

    {
      category: "Backend",
      items: [
        "ASP.NET Core Web API",
        "ASP.NET MVC",
        "Entity Framework Core",
        "LINQ",
        "REST APIs",
      ],
    },

    {
      category: "Frontend",
      items: [
        "Angular",
        "HTML5",
        "CSS3",
      ],
    },

    {
      category: "Database",
      items: [
        "SQL Server",
        "Oracle",
      ],
    },

    {
      category: "Concepts",
      items: [
        "CRUD",
        "OOP",
        "MVC Architecture",
        "Dependency Injection",
        "Repository Pattern",
        "JWT Authentication",
        "Role-Based Authorization",
      ],
    },

    {
      category: "AI / GenAI",
      items: [
        "Generative AI",
        "LLMs",
        "RAG",
        "OpenAI",
        "Prompt Engineering",
        "Chatbot Development",
        "ML.NET",
      ],
    },

    {
      category: "Tools",
      items: [
        "Visual Studio 2022",
        "VS Code",
        "Git",
        "GitHub",
        "Postman",
        "Swagger",
      ],
    },
  ],
};