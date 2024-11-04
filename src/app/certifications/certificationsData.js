const certificationsData = [
  {
    imageUrl: "/certifications/certf-1.jpg",
    title: "Using Python to Interact with the Operating System",
    description: [
      "Setup, configure, and developer environment in Python.",
      "Understand and use regular expressions (regex), a powerful tool for processing text files.",
      "Manipulate files and processes running on the Operating System using Python.",
      "Know when to choose Bash or Python, and create small scripts using Bash.",
      "Automating System Administration Tasks with Python.",
      "Setting up Development Environment.",
      "Bash Scripting, Regular Expression (REGEX), and Testing in Python.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/LJMDX7P8236B",
    issuer: "Google & Coursera",
  },
  {
    imageUrl: "/certifications/certf-2.jpg",
    title: "Introduction to Git and GitHub",
    description: [
      "Understand why version control is a fundamental tool for coding and collaboration.",
      "Use and interact with GitHub .",
      "Collaborate with others through remote repositories.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/83N73F37ZBX8",
    issuer: "Google & Coursera",
  },
  {
    imageUrl: "/certifications/certf-3.jpg",
    title: "Crash Course on Python",
    description: [
      "Understand what Python is and why Python is relevant to automation.",
      "Understand how to use the basic Python structures: strings, lists, and dictionaries.",
      "Write short Python scripts to perform automated actions.",
      "Python Programming, Object-Oriented Programming (OOP), and Basic Python Data Structures.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/74KCP5W6PM8Y",
    issuer: "Google & Coursera",
  },
  {
    imageUrl: "/certifications/certf-4.jpg",
    title: "Share Data Through the Art of Visualization",
    description: [
      "Describe the use of data visualizations to talk about data and the results of data analysis..",
      "Explain what data driven stories are including reference to their importance and their attributes.",
      "Identify Tableau as a data visualization tool and understand its uses.",
      "Explain principles and practices associated with effective presentations.",
      "Data Analysis, Tableau Software, Data Visualization, and Presentation.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/RDKQVFVBCHTL",
    issuer: "Google & Coursera",
  },
  {
    imageUrl: "/certifications/certf-5.jpg",
    title: "Process Data from Dirty to Clean",
    description: [
      "Define different types of data integrity and identify risks to data integrity.",
      "Develop basic SQL queries for use on databases.",
      "Apply basic SQL functions to clean string variables in a database.",
      "Describe the process of verifying data cleaning results.",
      "Spreadsheet, Data Integrity, Sample Size Determination, SQL, and Data Cleansing.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/CEQE555E9FWP",
    issuer: "Google & Coursera",
  },
  {
    imageUrl: "/certifications/certf-6.jpg",
    title: "Learn Data Analysis with Python (ID-EN)",
    description: [
      "Understand various fundamental concepts of data analysis and the stages involved.",
      "Learn the basic concepts of descriptive statistics and how to apply them in the data analysis process.",
      "Identify important factors to consider when processing data.",
      "Implement various data wrangling techniques to prepare clean, ready-to-analyze data.",
      "Apply different EDA techniques to gain insights into the analyzed data.",
      "Use effective data visualization techniques to make it easier to present analysis results.",
      "Create interactive dashboards using Streamlit to present data analysis results.",
    ],
    credentialUrl: "https://www.dicoding.com/certificates/2VX3O9ORNZYQ",
    issuer: "Dicoding Indonesia",
  },
  {
    imageUrl: "/certifications/certf-7.jpg",
    title: "Foundations of Programming for Software Development (ID-EN)",
    description: [
      "Learn methods to identify application requirements from user needs and technical specs with case studies.",
      "Study how to create application requirements, analyze workflows, and build flow diagrams, with teamwork focus.",
      "Master programming basics in syntax, variables, data types, logic, and JavaScript ES6, with practice in pseudocode.",
      "Learn HTML5 and CSS3 to modify software interfaces, applied through case studies.",
      "Understand software documentation, code styling, comments, and technical writing, with case study practice.",
    ],
    credentialUrl: "https://www.dicoding.com/certificates/KEXL113JRXG2",
    issuer: "Dicoding Indonesia",
  },
  {
    imageUrl: "/certifications/certf-8.jpg",
    title: "Fundamentals of Git with GitHub (ID-EN)",
    description: [
      "Learn what Git and GitHub are and their benefits in managing data or code.",
      "Understand Git basics like creating repositories, adding files, committing, and checking out.",
      "Enhance Git fundamentals through a case study.",
      "Learn Git branching, merging, and conflict resolution.",
      "Understand team collaboration on repositories, including forking, squashing, and code reviews.",
      "Improve team collaboration skills with a case study on handling pull requests in an active GitHub repository.",
      "Learn to use GitHub as a portfolio by creating a career-ready README.",
    ],
    credentialUrl: "https://www.dicoding.com/certificates/NVP7Q3RVOZR0",
    issuer: "Dicoding Indonesia",
  },
  {
    imageUrl: "/certifications/certf-9.jpg",
    title: "Probability & Statistics for Machine Learning & Data Science",
    description: [
      "Describe and quantify the uncertainty in predictions made by machine learning models.",
      "Understand the properties of commonly used probability distributions in machine learning and data science, visually and intuitively.",
      "Apply statistical methods like maximum likelihood estimation (MLE) and maximum a priori estimation (MAP) to machine learning problems.",
      "Evaluate the performance of machine learning models using interval estimates and margin of errors.",
      "Probability And Statistics, Machine Learning (ML) Algorithms, Statistical Analysis, Probability, and Statistical Hypothesis Testing.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/DB57BJJM7HFY",
    issuer: "DeepLearning.AI & Coursera",
  },
  {
    imageUrl: "/certifications/certf-10.jpg",
    title: "Mathematics for Machine Learning and Data Science",
    description: [
      "A deep understanding of the math that makes machine learning algorithms work.",
      "Statistical techniques that empower to get more of data analysis.",
      "Bayesian Statistics, Mathematics, Linear Regression, Calculus, Machine Learning, and Probability.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/C8D8ZQ2NLXGC",
    issuer: "DeepLearning.AI & Coursera",
  },
  {
    imageUrl: "/certifications/certf-11.jpg",
    title: "Linear Algebra for Machine Learning and Data Science",
    description: [
      "Memahami konsep aljabar linear untuk ML.",
      "Penerapan aljabar linear dalam machine learning.",
      "Keterampilan yang didapat: Aljabar linear.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/99DWXZJZZLAG",
    issuer: "DeepLearning.AI & Coursera",
  },
  {
    imageUrl: "/certifications/certf-12.jpg",
    title: "Calculus for Machine Learning and Data Science",
    description: [
      "Memahami dasar-dasar kalkulus untuk ML.",
      "Penerapan kalkulus dalam machine learning.",
      "Keterampilan yang didapat: Kalkulus untuk ML.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/6GF96DG7CEZP",
    issuer: "DeepLearning.AI & Coursera",
  },
  {
    imageUrl: "/certifications/certf-13.jpg",
    title: "Analyze Data to Answer Questions",
    description: [
      "Belajar analisis data untuk menjawab pertanyaan bisnis.",
      "Penggunaan alat-alat analisis data dasar.",
      "Keterampilan yang didapat: Analisis data.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/FQ3FC96W6SHX",
    issuer: "Google & Coursera",
  },
  {
    imageUrl: "/certifications/certf-14.jpg",
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    description: [
      "Dasar-dasar pembelajaran tanpa pengawasan.",
      "Menggunakan teknik rekomendasi dan reinforcement learning.",
      "Keterampilan yang didapat: Unsupervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/VCM9A89YPPBU",
    issuer: "DeepLearning.AI, StandFord, & Coursera",
  },
  {
    imageUrl: "/certifications/certf-15.jpg",
    title: "Supervised Machine Learning: Regression and Classification",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/FHQ4386NGQCQ",
    issuer: "DeepLearning.AI, StandFord, & Coursera",
  },
  {
    imageUrl: "/certifications/certf-16.jpg",
    title: "Machine Learning",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/E64XFY5YAFST",
    issuer: "DeepLearning.AI, StandFord, & Coursera",
  },
  {
    imageUrl: "/certifications/certf-17.jpg",
    title:
      "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/W6PXGFJZU4NM",
    issuer: "DeepLearning.AI & Coursera",
  },
  {
    imageUrl: "/certifications/certf-18.jpg",
    title: "Convolutional Neural Networks in TensorFlow",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/6HCMV2489R5R",
    issuer: "DeepLearning.AI & Coursera",
  },
  {
    imageUrl: "/certifications/certf-19.jpg",
    title: "Advanced Learning Algorithms",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/RGWEXWX4HPQL",
    issuer: "DeepLearning.AI & Coursera",
  },
  {
    imageUrl: "/certifications/certf-20.jpg",
    title: "TensorFlow: Data and Deployment",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/V24B7YKR9MYX",
    issuer: "DeepLearning.AI & Coursera",
  },
  {
    imageUrl: "/certifications/certf-21.jpg",
    title: "TensorFlow: Advanced Techniques",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/VX9ERJBG8RBQ",
    issuer: "DeepLearning.AI & Coursera",
  },
  {
    imageUrl: "/certifications/certf-22.jpg",
    title: "Structuring Machine Learning Projects",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/PF8UXXH9LC9X",
    issuer: "DeepLearning.AI & Coursera",
  },
  {
    imageUrl: "/certifications/certf-23.jpg",
    title: "Sequences, Time Series and Prediction",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/H5MC5EJSK8B3",
    issuer: "DeepLearning.AI & Coursera",
  },
  {
    imageUrl: "/certifications/certf-24.jpg",
    title: "Natural Language Processing in TensorFlow",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/XE5AN5P5YMY7",
    issuer: "DeepLearning.AI & Coursera",
  },
  {
    imageUrl: "/certifications/certf-25.jpg",
    title: "Generative Deep Learning with TensorFlow",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/7XV48NSLYBZL",
    issuer: "DeepLearning.AI & Coursera",
  },
  {
    imageUrl: "/certifications/certf-26.jpg",
    title: "Generative AI for Everyone",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/XUXFHH5FCA5V",
    issuer: "DeepLearning.AI & Coursera",
  },
  {
    imageUrl: "/certifications/certf-27.jpg",
    title: "Device-based Models with TensorFlow Lite",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/9GPJBK9TQSD4",
    issuer: "DeepLearning.AI & Coursera",
  },
  {
    imageUrl: "/certifications/certf-28.jpg",
    title: "DeepLearning.AI TensorFlow Developer",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/GXAKEPSRSRNP",
    issuer: "DeepLearning.AI & Coursera",
  },
  {
    imageUrl: "/certifications/certf-29.jpg",
    title: "Data Pipelines with TensorFlow Data Services",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/VY5KXNEA8YFZ",
    issuer: "DeepLearning.AI & Coursera",
  },
  {
    imageUrl: "/certifications/certf-30.jpg",
    title: "Custom and Distributed Training with TensorFlow",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/7TXFR9E9H5AJ",
    issuer: "DeepLearning.AI & Coursera",
  },
  {
    imageUrl: "/certifications/certf-31.jpg",
    title: "Custom Models, Layers, and Loss Functions with TensorFlow",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/P6MY975HL4S6",
    issuer: "DeepLearning.AI & Coursera",
  },
  {
    imageUrl: "/certifications/certf-32.jpg",
    title: "Browser-based Models with TensorFlow.js",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/J7RW8WRGUZ6C",
    issuer: "DeepLearning.AI & Coursera",
  },
  {
    imageUrl: "/certifications/certf-33.jpg",
    title: "Advanced Deployment Scenarios with TensorFlow",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/MZH9GDN9V2DU",
    issuer: "DeepLearning.AI & Coursera",
  },
  {
    imageUrl: "/certifications/certf-34.jpg",
    title: "Advanced Computer Vision with TensorFlow",
    description: [
      "Dasar-dasar supervised learning.",
      "Penerapan regresi dan klasifikasi dalam ML.",
      "Keterampilan yang didapat: Supervised learning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/QEK5C8FK6HCK",
    issuer: "DeepLearning.AI & Coursera",
  },
];

export default certificationsData;
