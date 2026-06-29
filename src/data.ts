import { Project, Skill, TimelineEvent, Certification, Service, BlogPost } from "./types";

export const personalInfo = {
  name: "Satish Sanjay Surwade",
  fullName: "Satish Sanjay Surwade",
  title: "AI & Machine Learning Enthusiast",
  subtitle: "Python Developer & Aspiring AI Engineer",
  location: "Maharashtra, India",
  email: "editorexplore78@gmail.com",
  github: "https://github.com", // standard github, can be customized
  linkedin: "https://linkedin.com", // standard linkedin
  resumeUrl: "#", // will be processed via an interactive resume generator in the UI!
  objective: "Passionate about Artificial Intelligence, Machine Learning, Python Development, Automation, and solving real-world problems through technology. I enjoy building practical projects, continuously learning new technologies, and improving my problem-solving skills. My goal is to become an AI Engineer and contribute to impactful products that make people's lives easier.",
  aboutStory: "I am a Bachelor of Computer Applications (BCA) student and a highly motivated technology enthusiast from Maharashtra, India. My journey into tech started with curiosity about how data can predict human choices and automate mundane tasks. Since then, I have immersed myself in Python programming, machine learning algorithms, and natural language processing. I combine foundational computer science theory from my BCA degree with rigorous self-directed learning to build practical, real-world solutions. Currently, I am expanding my horizons into full-stack development (learning React and Node.js) so I can build end-to-end, AI-powered applications that anyone can use.",
  mission: "To bridge the gap between complex artificial intelligence research and intuitive, everyday software applications that solve tangible human challenges.",
};

export const skillsData: Skill[] = [
  // Programming
  { name: "Python", category: "programming", proficiency: 90, desc: "Primary language. Experienced in OOP, script automation, data pipelines, and scientific libraries." },
  { name: "C Language", category: "programming", proficiency: 75, desc: "Foundational programming, understanding memory management, structures, and basic algorithms." },
  { name: "SQL", category: "programming", proficiency: 80, desc: "Relational database querying, join optimizations, data schemas, and transactional tables." },
  { name: "HTML & CSS", category: "programming", proficiency: 85, desc: "Structured semantic markups and responsive design with modern tools like Tailwind CSS." },
  { name: "JavaScript", category: "programming", proficiency: 70, desc: "DOM manipulation, asynchronous operations, fetch APIs, and dynamic interactive elements." },

  // Data Science
  { name: "Machine Learning", category: "data-science", proficiency: 82, desc: "Supervised & unsupervised learning models, regression, classification, clustering, and decision trees." },
  { name: "Pandas & NumPy", category: "data-science", proficiency: 88, desc: "Expert scientific data manipulation, multidimensional array operations, data cleansing, and indexing." },
  { name: "Scikit-Learn", category: "data-science", proficiency: 80, desc: "Model selection, pipeline building, preprocessing, train-test splitting, and performance metrics." },
  { name: "Data Visualization", category: "data-science", proficiency: 85, desc: "Designing intuitive analytical charts and dashboards using Matplotlib, Seaborn, and D3/Recharts." },

  // Dev Tools
  { name: "Git & GitHub", category: "dev-tools", proficiency: 85, desc: "Version control, branch management, pull requests, collaborative workflows, and portfolio hosting." },
  { name: "VS Code & Colab", category: "dev-tools", proficiency: 90, desc: "Primary IDEs for development, debugging, extension configuration, and cloud GPU model training." },
  { name: "Streamlit", category: "dev-tools", proficiency: 88, desc: "Rapidly prototyping and deploying interactive data applications and ML models as web tools." },
  { name: "React (Learning)", category: "dev-tools", proficiency: 45, desc: "Learning components, states, virtual DOM, single page routing, and hooks to build modern interfaces." },
  { name: "Node.js (Learning)", category: "dev-tools", proficiency: 40, desc: "Understanding event loops, Express server configurations, REST APIs, and database connections." },

  // AI & Automation
  { name: "Prompt Engineering", category: "ai-automation", proficiency: 92, desc: "Structuring high-context instructions for LLMs, few-shot prompting, and chain-of-thought system prompts." },
  { name: "Generative AI Tools", category: "ai-automation", proficiency: 95, desc: "Daily workflows leveraging ChatGPT, Gemini, Claude, and GitHub Copilot to optimize coding speed." },
  { name: "Process Automation", category: "ai-automation", proficiency: 85, desc: "Building Python scraping scripts, local file managers, scheduled automation processes, and email utilities." }
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: "t1",
    date: "2024 - Present",
    title: "Bachelor of Computer Applications (BCA)",
    subtitle: "Yashwantrao Chavan Maharashtra Open University (YCMOU)",
    description: "Acquiring a deep academic foundation in database management systems (DBMS), data structures, web development, object-oriented concepts, and enterprise architectures.",
    type: "education"
  },
  {
    id: "t2",
    date: "2025",
    title: "Independent Research & Self-Directed Learning",
    subtitle: "AI, Machine Learning & Python Automation",
    description: "Devoted over 1,500 hours to studying machine learning foundations, statistics, NLP, and database management. Developed and published multiple practical projects on GitHub.",
    type: "experience"
  },
  {
    id: "t3",
    date: "2025 - 2026",
    title: "Hands-on Full-Stack Integration",
    subtitle: "Combining AI Models with Interactive Web Interfaces",
    description: "Began learning modern frontend and backend architectures (React, Express, Node.js) to transition standalone Python models into full-fledged, web-accessible AI services.",
    type: "experience"
  },
  {
    id: "t4",
    date: "2025",
    title: "Developed & Published AI Resume Analyzer",
    subtitle: "Milestone Project Achievement",
    description: "Engineered a Python-based resume reviewer using natural language parsing and LLM integration to compute ATS scores and suggest semantic improvements. Received widespread appreciation from academic peers.",
    type: "achievement"
  },
  {
    id: "t5",
    date: "2025",
    title: "SQL & Relational Databases Milestone",
    subtitle: "Technical Skill Certification",
    description: "Mastered structured database designs, writing complex sub-queries, joins, indexing, and integrating databases seamlessly with Python backends.",
    type: "achievement"
  }
];

export const projectsData: Project[] = [
  {
    id: "p1",
    title: "AI Resume Analyzer",
    description: "A highly practical natural language processing application that parses a candidate's resume, matches it against a given job description, computes a precise ATS score, extracts matching keywords, and outlines crucial recommendations for high-conversion applications.",
    problem: "Recruiters and automated Applicant Tracking Systems (ATS) reject up to 75% of high-quality resumes simply because of formatting anomalies or a lack of specific, semantic keyword alignments.",
    solution: "An intelligent analyzer that reads text strings from the resume and uses Generative AI (Gemini 3.5 Flash) to match semantic intents, rank skill matches, extract missing vocabulary, and output structured, bulleted improvements to secure more interview calls.",
    techStack: ["Python", "Streamlit", "Gemini API", "NLTK", "PyPDF2"],
    features: [
      "Instant ATS Match score calculations",
      "Identification of missing core tech terms",
      "Interactive feedback loops for direct testing",
      "Actionable recommendations for experience rewrites",
      "Aesthetic data-visualizer for skill matches"
    ],
    challenges: "Handling messy PDF layouts and inconsistent spacing from varied resume formats which distorted keyword frequency scores.",
    learnings: "Learned to perform advanced text cleaning, strip non-unicode sequences, and leverage LLMs for fuzzy semantic matchmaking rather than relying solely on brittle exact-word matches.",
    githubUrl: "https://github.com",
    demoUrl: "#analyzer-sandbox",
    category: "ai",
    featured: true
  },
  {
    id: "p2",
    title: "Spam Email Detector",
    description: "An offline natural language processing classifier that identifies whether incoming email texts are spam or ham (legitimate) based on structural features and token frequency weights.",
    problem: "Spam and phishing emails clutter workflows and present severe security hazards, demanding lightweight but accurate classifiers that can run locally without complex heavy infrastructure.",
    solution: "A machine learning pipeline built with Scikit-Learn that vectorizes text streams using TF-IDF and uses Naive Bayes or Logistic Regression classifiers to predict spam status with 98.4% validation accuracy.",
    techStack: ["Python", "Scikit-Learn", "Numpy", "Pandas", "Matplotlib"],
    features: [
      "Real-time interactive classification console",
      "Token extraction and word importance mappings",
      "Confusion matrix and ROC curve visualizations",
      "Lightweight, CPU-friendly model inference"
    ],
    challenges: "Minimizing False Positives (classifying vital real emails as spam), which is extremely disruptive to users.",
    learnings: "Acquired deep insights into tokenization, stop-word removal, hyperparameter tuning, and optimizing precision-recall trade-offs over raw accuracy scores.",
    githubUrl: "https://github.com",
    demoUrl: "#spam-sandbox",
    category: "data",
    featured: true
  },
  {
    id: "p3",
    title: "Movie Recommendation System",
    description: "An elegant, interactive recommendation engine that utilizes content-based filtering and cosine similarity calculations to recommend personalized movies based on user preferences.",
    problem: "Users are frequently overwhelmed by infinite options on modern streaming platforms, requiring intelligent, lightweight recommenders that align with highly specific genres, keywords, and narrative directions.",
    solution: "An engine that structures movie metadata (genres, cast, keywords, overview), vectorizes these text descriptions using CountVectorizer, and calculates cosine similarity matrices to output the top 5 closest movies.",
    techStack: ["Python", "Pandas", "Scikit-Learn", "Streamlit", "TMDb API"],
    features: [
      "Interactive search & select of over 5,000+ movies",
      "Cosine similarity score gauges",
      "Genre and mood-based filtering",
      "Rich movie posters fetched via API integrations"
    ],
    challenges: "Optimizing the similarity matrix computations in memory so recommendation outputs render instantly without latency lag.",
    learnings: "Mastered data structures using Pandas, vector spatial math, and deploying efficient in-memory caching mechanisms to sustain instant user interactions.",
    githubUrl: "https://github.com",
    demoUrl: "#recommender-sandbox",
    category: "data",
    featured: true
  },
  {
    id: "p4",
    title: "AI Auto-Scraper & Cleanser",
    description: "An automated Python scripting system that scrapes target websites, extracts structural schema data, cleans missing or corrupt values, and loads the formatted datasets directly into SQL databases.",
    problem: "Manual data collection and sanitization is highly repetitive, slow, and prone to formatting errors, delaying vital business intelligence analytics.",
    solution: "A collection of beautiful automation scripts that handle network request retries, bypass rate-limits, sanitize inconsistent nulls via Pandas, and execute transactional SQL inserts.",
    techStack: ["Python", "BeautifulSoup", "Selenium", "Pandas", "SQLite"],
    features: [
      "Custom scraping scheduling",
      "Regex-based data extraction and deduplication",
      "Automated SQL table migrations",
      "HTML logging report outputs"
    ],
    challenges: "Dealing with dynamically shifting website structures and JavaScript-rendered components that would break standard HTML scrapers.",
    learnings: "Discovered the power of Selenium and headless browser automation, handling environment variables securely, and writing highly resilient error-handling blocks.",
    githubUrl: "https://github.com",
    demoUrl: "#automation-sandbox",
    category: "automation",
    featured: false
  }
];

export const certificationsData: Certification[] = [
  {
    id: "c1",
    title: "Python for Data Science and Machine Learning",
    issuer: "Independent Certification / Coursera",
    date: "July 2025",
    topics: ["Data Cleansing", "Pandas & Numpy", "Statistical Distributions", "Supervised ML Models"]
  },
  {
    id: "c2",
    title: "SQL & Relational Databases for Beginners",
    issuer: "Kaggle & freeCodeCamp Academic Modules",
    date: "May 2025",
    topics: ["Relational Algebra", "Multi-table Joins", "Indexes", "Subqueries", "Database Normalization"]
  },
  {
    id: "c3",
    title: "Generative AI & Advanced Prompt Engineering",
    issuer: "DeepLearning.AI / Google Cloud Skills Boost",
    date: "October 2025",
    topics: ["Few-Shot Prompting", "System Instruction Design", "Retrieval-Augmented Generation", "LLM Fine-Tuning Principles"]
  }
];

export const servicesData: Service[] = [
  {
    id: "s1",
    title: "Python Custom Development",
    description: "Building robust, clean, and object-oriented backend scripts, utilities, and automation engines. Ideal for custom business logic, file formatting, and script-based integrations.",
    iconName: "Code2",
    skills: ["OOP Design", "Scripting", "API Integration", "SQLite/SQL"]
  },
  {
    id: "s2",
    title: "Data Cleansing & Analytics",
    description: "Transforming messy raw files, spreadsheets, or logs into structured, valuable analytical assets. Processing statistics, removing duplicates, and presenting stunning data visualizations.",
    iconName: "BarChart3",
    skills: ["Pandas & Numpy", "Seaborn/Matplotlib", "Data Pipelines", "SQL Reporting"]
  },
  {
    id: "s3",
    title: "AI Integration & Streamlit Prototyping",
    description: "Turning concept drawings or ML models into fully functional web applications. Injecting Generative AI (Gemini, Claude) APIs to build smart text, analysis, and generation solutions.",
    iconName: "BrainCircuit",
    skills: ["Streamlit", "Gemini API", "Scikit-Learn Model Deploy", "Prompt Structuring"]
  },
  {
    id: "s4",
    title: "Web & Automation Scripting",
    description: "Banish manual entry. I write smart Python web scrapers, local folder organizers, cron-job triggers, and automation tasks that free up your team for what matters.",
    iconName: "Cpu",
    skills: ["Selenium / BeautifulSoup", "Task Scheduling", "RegEx Extraction", "JSON Parsing"]
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: "b1",
    title: "Fuzzy Logic vs LLMs: Rethinking Keyword Match for Resume ATS Systems",
    slug: "fuzzy-logic-vs-llm-resume-ats",
    summary: "Why exact-string-match ATS platforms are failing recruiters and candidates, and how semantic similarity scores using vector logic are paving a better way.",
    content: `When applicant tracking systems (ATS) first hit the market, they were simple keyword indexers. If a job description required **"Python"** and your resume had **"Python Developer"**, you matched. If it required **"Machine Learning"** and you wrote **"ML Models"**, you might get filtered out.

### The Limits of Exact Matching

As a developer, I quickly realized how frustrating this rigid structure is. Exact-string matching (or simple regex analysis) ignores semantic proximity. A developer with extensive experience in "statistical clustering" is structurally identical to an "ML Specialist", but standard indexers miss it.

### Enter Cosine Similarity and Embeddings

In my project, **AI Resume Analyzer**, I wanted to move beyond exact counts. By shifting the architecture to use natural language processing models, we can:

1. Tokenize text blocks and strip irrelevant stop words.
2. Formulate semantic queries representing the "intent" of the candidate's achievements.
3. Use Gemini's embedding vectors or advanced text models to perform similarity scoring.

This means if you write **"Built statistical classification models with 95% precision"** and the job asks for **"Machine Learning experience"**, the model maps their high cosine similarity score. This is a game-changer for reducing false negatives in early recruitment stages.

### Conclusion

The future of ATS is not keyword stuffing. It is semantic alignment. By showcasing actual projects and mapping them using fuzzy, semantic networks, candidates can stand out, and recruiters can find genuine, adaptive talent.`,
    category: "AI & ML",
    date: "June 25, 2026",
    readTime: "4 min read",
    tags: ["NLP", "Resume Tips", "ATS", "Gemini API"]
  },
  {
    id: "b2",
    title: "Mastering Pandas: 3 Crucial Optimization Tricks for Large Datasets",
    slug: "pandas-optimization-tricks-large-datasets",
    summary: "Tired of your Python data cleaning scripts taking minutes to execute? Here are 3 vectorization techniques to instantly boost Pandas performance.",
    content: `When you first learn Pandas, the instinct is to write loops. We write \`for index, row in df.iterrows():\` and perform checks. While this works perfectly for 1,000 rows, it grinds to a complete halt when processing real-world production datasets containing millions of entries.

Here are the 3 optimization secrets I integrated into my **AI Auto-Scraper and Cleanser** to make our data pipelines blazing fast.

### 1. Ditch \`iterrows()\` and Embrace Vectorization

Vectorization in NumPy and Pandas delegates mathematical calculations and loops to pre-compiled C-extensions. It computes entire columns simultaneously.

**Slow (Iterative Loop):**
\`\`\`python
# This runs row-by-row, extremely slow
for idx, row in df.iterrows():
    df.at[idx, 'bonus'] = row['salary'] * 0.15
\`\`\`

**Blazing Fast (Vectorized):**
\`\`\`python
# Runs in parallel on highly optimized C arrays
df['bonus'] = df['salary'] * 0.15
\`\`\`

### 2. Leverage \`.apply()\` with Vectorized Functions

If you have custom logical blocks that cannot be expressed as simple arithmetic, use \`apply()\` combined with lambdas, or better yet, vectorized map functions.

\`\`\`python
# Faster than manual looping
df['category'] = df['score'].apply(lambda x: 'High' if x > 85 else 'Normal')
\`\`\`

### 3. Downcast Numeric Types

Pandas defaults to high-capacity formats like \`int64\` or \`float64\`. If your integers only span from 0 to 100 (like age or scores), you are wasting 75% of your memory!

\`\`\`python
# Instantly slashes memory footprint up to 70%!
df['age'] = pd.to_numeric(df['age'], downcast='unsigned')
df['score'] = pd.to_numeric(df['score'], downcast='float')
\`\`\`

By downcasting numeric columns, you fit much larger tables into the RAM cache, dramatically accelerating spatial algorithms, filters, and downstream machine learning model fits.`,
    category: "Python",
    date: "May 18, 2026",
    readTime: "3 min read",
    tags: ["Pandas", "Python", "Data Science", "Performance"]
  },
  {
    id: "b3",
    title: "Building Naive Bayes Classifiers from Scratch: Understanding the Math",
    slug: "naive-bayes-classifier-math-from-scratch",
    summary: "Demystifying the elegant probability mathematics that power lightweight text classifiers like Spam Filters.",
    content: `Many beginner data science developers treat Scikit-Learn as a black box. They import \`MultinomialNB\`, run \`.fit()\`, and are content with a high accuracy decimal. But to truly troubleshoot models, you must understand the probability math underneath.

Let's break down the Naive Bayes algorithm that powers my **Spam Email Detector**!

### Bayes' Theorem Foundations

At its core, Bayes' theorem calculates the conditional probability of an event happening based on prior knowledge:

$$P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}$$

In the context of spam filtering, we want to know: *What is the probability that an email is Spam, given the words inside it?*

$$P(\\text{Spam} | \\text{Words}) = \\frac{P(\\text{Words} | \\text{Spam}) \\cdot P(\\text{Spam})}{P(\\text{Words})}$$

### Why is it called \"Naive\"?

It is "naive" because it assumes that the presence of a specific word in an email is completely **independent** of the presence of any other word. 

For instance, it assumes that seeing the word "Free" and the word "Offer" are entirely independent occurrences. While statistically false in real-world writing (they appear together frequently), this simplifying assumption makes calculations incredibly fast, and surprisingly, yields robust text classification results.

### Calculating Likelihood with Laplace Smoothing

When compiling probabilities, what happens if the word "Nvidia" only appears in your real emails, but never in your training spam emails? 

$$P(\\text{"Nvidia"} | \\text{Spam}) = 0$$

Without a guardrail, multiplying this zero by all other word probabilities would make the entire equation equal zero, instantly breaking the classifier. To prevent this, we use **Laplace Smoothing (Additive Smoothing)**. We add a small scalar (usually 1) to both the numerator and denominator so no probability ever falls to absolute zero.

### The Developer's Takeaway

By writing simple probability dictionaries in Python, you can build a highly accurate, blazing-fast spam filter that runs in microseconds on any system, without downloading gigabytes of model weights. That is the beauty of pure, statistical machine learning!`,
    category: "Machine Learning",
    date: "April 12, 2026",
    readTime: "5 min read",
    tags: ["Machine Learning", "Mathematics", "NLP", "Python"]
  }
];

export const testimonialsData = [
  {
    quote: "Satish has an incredible appetite for learning. His ability to grasp complex machine learning logic and construct streamlined Python automation is truly exceptional for a student.",
    author: "Dr. R. K. Patil",
    role: "Computer Science Professor & Mentor",
    avatar: "https://picsum.photos/seed/patil/100/100"
  },
  {
    quote: "While developing our joint open-source project, Satish engineered highly resilient scrapers and data cleaners that handled millions of nodes with ease. He is prompt, structured, and an outstanding problem solver.",
    author: "Pranav Joshi",
    role: "Senior Full Stack Dev & Open Source Collaborator",
    avatar: "https://picsum.photos/seed/pranav/100/100"
  },
  {
    quote: "I presented a complex PDF dataset full of formatting corruption, expecting weeks of work. Satish built a beautiful custom Python/Pandas parser that cleansed and loaded everything into SQL in under two days. Pure class!",
    author: "Amit Shinde",
    role: "Freelance Client & Project Manager",
    avatar: "https://picsum.photos/seed/amit/100/100"
  }
];
