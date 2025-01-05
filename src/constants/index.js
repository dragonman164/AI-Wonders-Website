import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  rudransh,
  chirag, 
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  gmail,
  github,
  linkedin,
} from "../assets";

export const navigation = [
  {
    id : "0",
    title : "About Us",
    url : "#about-us"
  },
  {
    id: "1",
    title: "Skillsets",
    url: "#how-to-use",
  },
  {
    id: "2",
    title: "Courses",
    url: "#courses",
  },
  
 
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "Testimonials",
    url: "#testimonials",
  },
  {
    id: "3",
    title: "Team",
    url: "#team",
  },
  {
    id : "7",
    title : "Contact Us",
    url : "#contact-us"
  }
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Generative AI (LLM models like GPT,Gemini,etc.)",
  "Machine Learning and Deep Learning concepts",
  "Real time projects like Face Recognition, Object Detection, etc.",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Rudransh Joshi",
    text: `Experienced Founder with expertise in computer networking, MERN Stack, AWS, GoLang, and Cloud Technologies. Skilled in strategizing, ideating, and desktop software development using ElectronJS. Holds a Bachelor's in Computer Science and Business Systems from Thapar University.`,
    date: "May 2023",
    status: "Innovator & Technologist",
    imageUrl: rudransh,
    colorful: true,
    socials :  [
      {
        id: "0",
        title: "Gmail",
        iconUrl: gmail,
        url: "mailto:rudranshj95@gmail.com",
      },
      {
        id: "1",
        title: "GitHub",
        iconUrl: github,
        url: "https://github.com/rudransh8274",
      },
      {
        id: "2",
        title: "LinkedIn",
        iconUrl: linkedin,
        url: "https://www.linkedin.com/in/rudransh-joshi-3579281a4/",
      }
    ]
  },
  {
    id: "1",
    title: "Chirag Sawarn",
    text: `Proficient in building end to end Web Apps using Express, React, Angular, SQL, MongoDB, and GraphQL.
Passionate about teaching, problem solving, and living healthy.`,
    date: "May 2023",
    status: "Web Builder & Mentor",
    imageUrl: chirag,
    socials :  [
      {
        id: "0",
        title: "Gmail",
        iconUrl: gmail,
        url: "mailto:cswarn@gmail.com",
      },
      {
        id: "1",
        title: "GitHub",
        iconUrl: github,
        url: "https://github.com/chiragsawarn",
      },
      {
        id: "2",
        title: "LinkedIn",
        iconUrl: linkedin,
        url: "https://www.linkedin.com/in/chiragsawarn/",
      }
    ]
  },
  // {
  //   id: "2",
  //   title: "Chatbot customization",
  //   text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
  //   date: "May 2023",
  //   status: "done",
  //   imageUrl: roadmap3,
  // },
  // {
  //   id: "3",
  //   title: "Integration with APIs",
  //   text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
  //   date: "May 2023",
  //   status: "progress",
  //   imageUrl: roadmap4,
  // },
];

export const collabText =
  "We are committed to nurturing kids with future ready tech skills. We  teach Web Dev, AI, and Programming Fundamentals to school going kids from class VI to X.";

export const collabContent = [
  {
    id: "0",
    title: "Team of Distinguished of Engineers",
    text: "We are a team of distinguished engineers from top tier engineering institutions of our country, striving to nurture high-paying, future-ready technical skills in schoolkids to enlighten their careers.",
  },
  {
    id: "1",
    title: "Online and Offline Modes of Teaching",
    text : "We run AI and web dev clubs in collaboration with schools who provide the systems and seating. While we provide trained instructors, industry trending curriculum, doubt support, and self paced recorded lectures on weekends in case you miss and class."
  },
  {
    id: "2",
    title: "Updated Curriculum",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Artificial Intelligence",
    description: "Learn about latest AI technologies being used at industry level",
    price: "12,000",
    features: [
      "Creating your own Generative AI models and best way to use them.",
      "Basic concepts of Machine Learning and Deep Learning",
      "Hands on projects like Face Recognition, Object Detection, etc.",
    ],
  },
  {
    id: "1",
    title: "Web Development",
    description: "Design complex websites and web apps using latest technologies",
    price: "15,000",
    features: [
      "Understanding how a website works.",
      "Designing complex UI designs using HTML, CSS, and JavaScript.",
      "Prominent backend technologies like Node.js, Spring Boot, etc.",
    ],
  },
  {
    id: "2",
    title: "Programming Languages",
    description: "Latest programming languages being used in the tech industry",
    price: "15,000",
    features: [
      "Learn fundamentals of coding.",
      "Get familiarized with the latest programming languages.",
      "A roadmap to learn new languages and technologies.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Student from Web Dev Track",
    text: [
      'Hi, Im Aryan, a 7th-grade student, and learning with AI Wonders has been one of the most exciting experiences of my life! I joined the AI track in Year 2, where I learned Exploratory Data Analysis. The concepts were taught in such a fun and clear way that I quickly started analyzing real-world data on electricity usage in my state.',
      'With the guidance of my mentors at AI Wonders, I created a detailed project that visualized patterns of electricity consumption and suggested ways to reduce wastage. This project not only helped me understand how data can solve real-life problems but also won me a national hackathon!',
      'AI Wonders has truly unlocked my potential, and Im so grateful for their support and encouragement. I can’t wait to learn more!',
      
    ],
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    customer : ' Aryan, Grade 7 Student'
  },
  {
    id: "1",
    title: "Student from Combined Track",
    text: [
      'AI Wonders is absolutely amazing! I joined the Web Development track in Year 1 as a complete beginner and started by learning basics like HTML, CSS, and DOM manipulation with JavaScript. The instructors explained every concept so clearly that coding quickly became my favorite activity',
      'By Year 2, I was diving deep into advanced JavaScript concepts like promises, API calls, and understanding the asynchronous nature of JavaScript. At first, it was tricky, but the doubt sessions and one-on-one guidance from AI Wonders made everything click. They explained it in a way that was simple and relatable, and I felt confident tackling even the toughest challenges.',
      'With the knowledge I gained, I built a real-time multiplayer game that became a huge hit in my class. Everyone loved playing it, and it made me realize how powerful coding skills can be! By the end of Year 2, I had become a React expert and could create dynamic, professional-level web apps.',
      'I can\'t thank AI Wonders enough for helping me discover my passion and giving me the tools to achieve something amazing. Definitely 5 stars from me!'
    ],
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    customer : 'Radha, Grade 8 Student'
  },
 
];

export const socials = [
  {
    id: "0",
    title: "Gmail",
    iconUrl: gmail,
    url: "#",
  },
  {
    id: "1",
    title: "GitHub",
    iconUrl: github,
    url: "#",
  },
  {
    id: "2",
    title: "LinkedIn",
    iconUrl: linkedin,
    url: "#",
  }
];
