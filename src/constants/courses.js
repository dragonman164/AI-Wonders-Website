
export const WebDev = [
    {
        year : 1, 
        topics : [
            "What is browser",
            "What is internet",
            "HTML",
            "CSS",
            "Bash Basics (cd, ls, pwd, mkdir, touch, vi)",
            "Version control with Git/Github",
            "JavaScript",
            "Intro to DOM, DOM Tree Structure",
            "Common DOM APIs (getElementById, getElementsByClassName, querySelector, innerHTML, innerText, getAttribute, setAttribute)",
            "Event handlers: onClick, mouseOver, mouseOut, etc.",
            "EventPropagation",
            "LocalStorage",
            "Hosting static websites on vercel",
            
        ],

    },
    {
        year : 2, 
        topics: [
            "JavaScript",
            "Why we need JavaScript?",
            "Basic JS Syntax",
            "Single Threaded Nature of JS",
            "Async Nature of JS and its use in fetching data",
            "callback queue, event loop",
            "Intro to calling and writing APIs using Promises",
            "Common JS APIs (map, filter, reduce)",
            "React",
            "What are WebApps?",
            "Creating content with JSX",
            "Designing Reusable Components",
            "State Management",
            "Using an API with React",
            "Handling Forms",
            "Communication using Context",
            "Routing",
            "Mastering Props and State Design",
            "React Portals",
            "Custom Hooks",
            "Redux",
            "Introduction to Reducers",
            "Redux Toolkit",
            "Slicing with Redux Toolkit",
            "Interfacing with APIs using Async Thunks",
            "Redux Toolkit Query",
            "Typescript",
            "Styling react apps with TailwindCSS",
            
        ]
    },
    {
        year : 3,
        topics: [
            "Why we need databases?",
            "Schema design of Database",
            "Breaking raw data into first normal form",
            "Designing tables from ER",
            "KEYS for Maintaining relationship between tables (Primary, Candidate, Foreign, and Super)",
            "Interacting with DB using SQL",
            "DML vs DDL Commands in SQL",
            "Creating Tables",
            "SQL (Create, Read, Update, Delete) Commands",
            "Filtering row data (LIKE, BETWEEN, IS, IN, WHERE)",
            "Aggregate Queries (COUNT, MAX, MIN)",
            "Joins (Inner and Outer)",
            "Sorting & grouping data",
            "SQL commands for schema alteration",
            "Transactions and Concurrency Control",
            "Sub queries",
            "Batch queries",
            "ACID Properties of SQL DBs",
            "CAP Theorem Basics: Use of No-SQL DBs",
            "Backend Fundamentals with Node.Js",
            "What is a JS runtime?",
            "Node.js common APIs (fs, http, etc)",
            "Intro to REST APIs in Node.Js",
            "Routes and Middleware",
            "Integrating SQL DB with Node",
            "HTTP",
            "headers, body, query parameters",
            "Authentication using jwts, basics of jwts",
            "Hashing Passwords with bcrypt",
            "Secret management",
            "HTTP vs HTTPs",
            
            
        ]

    },
    {
        year : 4,
        topics: [
             // Bash Basics
  "Bash Basics: Commands: ls, cd, pwd, mkdir, touch, rm, cat, echo, grep",
  "Bash Basics: Variables, conditionals, and loops",
  "Bash Basics: File permissions (read, write, execute) and chmod",
  "Bash Basics: Piping, reading user input, redirecting output to file",
  "Bash Basics: Writing shell scripts and scheduling cron jobs",

  // Cloud Basics
  "Cloud Basics: Types of cloud",
  "Cloud Basics: IaaS, PaaS, and SaaS",
  "Cloud Basics: What are VMs?",
  "Cloud Basics: Creating a VM in various cloud providers (Specs, pricing, etc.)",
  "Cloud Basics: SSH into VMs remotely",
  "Cloud Basics: Reverse proxies",
  "Cloud Basics: Certificate management",
  "Cloud Basics: Load Balancers",
  "Cloud Basics: What is autoscaling? Autoscaling policies. ASG/MIG",

  // Containerization
  "Containerization: Intro to containers and Docker",
  "Containerization: How to dockerize your app (WORKDIR, CMD, RUN, ENV, COPY, ARG)",
  "Containerization: Publishing to DockerHub, other registries",
  "Containerization: Volumes and networks",
  "Containerization: Running a Docker container in a VM, exposing it over the internet",
  "Containerization: Basics of Docker Compose",

  // Elastic Compute Service (ECS)
  "Elastic Compute Service: What is ECS? Common use cases",
  "Elastic Compute Service: Introduction to Kubernetes (Clusters, nodes, pods, worker node vs control plane)",
  "Elastic Compute Service: ECR vs DockerHub",
  "Elastic Compute Service: Serverless vs EC2 instances for deployment, pros and cons",

  // Kubernetes
  "Kubernetes: Clusters, nodes, pods, worker node vs control plane",
  "Kubernetes: Local deployment using kind/minikube",
  "Kubernetes: Replicasets, Deployments",
  "Kubernetes: Networking concepts - Services, types of services",
  "Kubernetes: Ingress, Ingress controllers",
  "Kubernetes: Certificate management",
  "Kubernetes: Storage, PVs, PVCs, StorageClasses, static vs dynamic provisioning",
  "Kubernetes: ConfigMaps and secrets",
  "Kubernetes: Policies, Role-Based Access Control (RBAC), CRDs",

  // Terraform
  "Terraform: What is IaC?",
  "Terraform: IaC using bash scripts, AWS CLI/eksctl",
  "Terraform: Various IaC tools - Ansible vs Terraform",
  "Terraform: Installing Terraform, What is a resource, HCL syntax, Providers",
  "Terraform: Running Terraform commands (init, plan, apply, destroy)",
  "Terraform: Managing state, variables, counts",
  "Terraform: Terraform with AWS",
  "Terraform: Remote state on S3",

  // CI/CD in GitHub
  "CI/CD in GitHub: What is CI/CD?",
  "CI/CD in GitHub: GitHub CI/CD YAML format, GitHub Actions",
  "CI/CD in GitHub: Using CI/CD to deploy to a VM",
  "CI/CD in GitHub: Using CI/CD to provision infrastructure using IaC",
  "CI/CD in GitHub: Using CI/CD to deploy to a Kubernetes cluster",

  // CI/CD Advanced
  "CI/CD: GitHub Actions",
  "CI/CD: YAML syntax for workflows",
  "CI/CD: Creating GitHub Action workflows",
  "CI/CD: Triggers (schedule, pull_request, push, etc.)",
  "CI/CD: Workflow - Jobs, runners, environment variables, and secrets",
  "CI/CD: CI - Setting up a build pipeline",
  "CI/CD: Running automated tests (Unit Tests, Integration Tests)",
  "CI/CD: Linting and code quality checks",
  "CI/CD: CD - Deploying to cloud platforms (AWS, GCP, Azure)",
  "CI/CD: Using Docker for containerized deployments",
  "CI/CD: Rollback strategies in GitHub Actions",
  "CI/CD: Secret management (Storing API keys, tokens, and sensitive data in GitHub Secrets)",
  "CI/CD: Accessing secrets in workflows",
  "CI/CD: Notifications and reporting",
  
        ]
    }
]


export const AICourse = [
    {
        year : 1, 
        topics : [
            "Introduction to Artificial Intelligence Theory",
            "Purpose and Applications of Python Programming",
            "Interactive Programming Fundamentals", 
            "Basic Python Data Types and Structures",
            "Control Flow Statements and Loops",
            "Functions in Python",
            "Python File Handling Operations",
            "Essential Python Modules",
            "Building an Interactive Chatbot",
            "Face Recognition Implementation"
        ]
    },
    {
        year : 2, 
        topics : [
            "Introduction to Artificial Intelligence Fundamentals",
            "Machine Learning Foundations and Concepts",
            "Data Types and Classification Systems",
            "Data Processing and Preparation Methods",
            "Learning Algorithms and Methodologies",
            "Linear Regression Fundamentals",
            "Numerical Computing with Numpy",
            "Data Analysis using Pandas",
            "Interactive Dashboard Creation with Streamlit",
            "Image Processing using OpenCV Library",
            "House Price Prediction using Machine Learning",
            "Neural Networks Architecture and Design",
            "Understanding Neural Network Components",
            "Neural Network Connectivity Patterns",
            "Deep Learning Layer Architecture"
        ]
    },
    {
        year : 3,
        topics : [
            "Introduction to Generative Artificial Intelligence",
            "Large Language Models and Their Applications",
            "Web API Integration with Python",
            "OpenAI GPT API Implementation",
            "Building Interactive Chatbot Interfaces",
            "Local Language Model Deployment",
            "Retrieval Augmented Generation Systems",
            "Document Analysis using Vector Databases",
            "Video Content Analysis and Summarization",
            "Image Generation with AI Models",
            "Understanding Text to Video Generation"
        ]
    },
    {
        year : 4 , 
        topics : [
            "Advanced Computer Vision with OpenCV",
            "Google MediaPipe Implementation",
            "Posture Recognition Systems",
            "Hand Detection and Tracking",
            "Object Recognition and Classification",
            "Google Cloud Vision API Integration",
            "Interactive Air Writing Recognition",
            "Natural Language Processing Fundamentals",
            "Text Processing and Tokenization",
            "Language Vectorization Methods",
            "Large Language Model Architecture",
            "LLM Parameter Optimization",
            "Language Model Performance Evaluation",
            "Introduction to Autonomous AI Agents",
            "Self Learning Systems with Autogen",
            "RAG Agent Integration Framework",
            "Intelligent Customer Support Systems",
            "Smart Glass Design and Implementation"
        ]
    }
]

export const coding_curriculum = [
    {
        year: 1,  
        topics: [
            "Introduction to Block Programming",
            "Basic Computational Thinking",
            "Scratch Programming Fundamentals",
            "Simple Game Development with Scratch",
            "Introduction to Python Programming",
            "Basic Data Types and Variables",
            "Simple Input Output Operations",
            "Basic Math Operations in Python",
            "Creating Simple Calculators",
            "Introduction to Turtle Graphics"
        ]
    },
    {
        year: 2,
        topics: [
            "Control Flow Statements",
            "Loops and Iterations",
            "List and String Operations",
            "Basic Functions in Python",
            "File Handling Basics",
            "Simple Data Structures",
            "Basic Game Development with Python",
            "Introduction to GUI with Tkinter",
            "Simple Animation Projects",
            "Basic Web HTML and CSS"
        ]
    },
    {
        year: 3,  
        topics: [
            "Object Oriented Programming Basics",
            "Python Classes and Objects",
            "Introduction to SQL Databases",
            "Web Development with Flask",
            "Basic API Integration",
            "JSON Data Handling",
            "Project Based Learning",
            "Simple Machine Learning Concepts",
            "Basic Data Analysis",
            "Interactive Dashboard Creation"
        ]
    },
    {
        year: 4, 
        topics: [
            "Advanced Python Programming",
            "Data Structures Implementation",
            "Basic Algorithms",
            "Computer Vision Projects",
            "Natural Language Processing Basics",
            "Game Development with PyGame",
            "Mobile App Development Basics",
            "Artificial Intelligence Concepts",
            "Internet of Things Projects",
            "Final Capstone Project"
        ]
    }
 ]