const certificationsData = [
  {
    imageUrl: "/certifications/certf-1.jpg",
    title: "Using Python to Interact with the Operating System",
    description: [
      "Mempelajari dasar-dasar penggunaan Python.",
      "Memahami cara berinteraksi dengan sistem operasi menggunakan Python.",
      "Keterampilan yang didapat: Pemrograman Python tingkat dasar.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/LJMDX7P8236B",
    issuer: "Coursera",
  },
  {
    imageUrl: "/certifications/certf-2.jpg",
    title: "Introduction to Git and GitHub",
    description: [
      "Pengenalan Git dan GitHub.",
      "Memahami perintah dasar Git untuk version control.",
      "Keterampilan yang didapat: Pengelolaan kode sumber.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/83N73F37ZBX8",
    issuer: "Coursera",
  },
  {
    imageUrl: "/certifications/certf-3.jpg",
    title: "Crash Course on Python",
    description: [
      "Belajar pemrograman Python dari dasar hingga menengah.",
      "Menggunakan Python untuk berbagai aplikasi sederhana.",
      "Keterampilan yang didapat: Dasar pemrograman Python.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/74KCP5W6PM8Y",
    issuer: "Coursera",
  },
  {
    imageUrl: "/certifications/certf-4.jpg",
    title: "Share Data Through the Art of Visualization",
    description: [
      "Mempelajari dasar-dasar visualisasi data.",
      "Menggunakan berbagai alat visualisasi untuk menyampaikan data.",
      "Keterampilan yang didapat: Visualisasi data dasar.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/RDKQVFVBCHTL",
    issuer: "Coursera",
  },
  {
    imageUrl: "/certifications/certf-5.jpg",
    title: "Process Data from Dirty to Clean",
    description: [
      "Belajar proses membersihkan data untuk analisis.",
      "Menerapkan teknik pembersihan data pada dataset.",
      "Keterampilan yang didapat: Data cleaning.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/CEQE555E9FWP",
    issuer: "Coursera",
  },
  {
    imageUrl: "/certifications/certf-6.jpg",
    title: "Learn Data Analysis with Python (ID-EN)",
    description: [
      "Mempelajari analisis data menggunakan Python.",
      "Penggunaan pustaka Python untuk analisis data.",
      "Keterampilan yang didapat: Data analysis dengan Python.",
    ],
    credentialUrl: "https://www.dicoding.com/certificates/2VX3O9ORNZYQ",
    issuer: "Dicoding Indonesia",
  },
  {
    imageUrl: "/certifications/certf-7.jpg",
    title: "Foundations of Programming for Software Development (ID-EN)",
    description: [
      "Dasar-dasar pemrograman untuk pengembangan perangkat lunak.",
      "Mempelajari konsep pemrograman dasar dan algoritma.",
      "Keterampilan yang didapat: Fondasi pemrograman.",
    ],
    credentialUrl: "https://www.dicoding.com/certificates/KEXL113JRXG2",
    issuer: "Dicoding Indonesia",
  },
  {
    imageUrl: "/certifications/certf-8.jpg",
    title: "Fundamentals of Git with GitHub (ID-EN)",
    description: [
      "Penggunaan Git dan GitHub untuk kontrol versi.",
      "Penerapan perintah-perintah dasar Git.",
      "Keterampilan yang didapat: Manajemen kode dengan Git.",
    ],
    credentialUrl: "https://www.dicoding.com/certificates/NVP7Q3RVOZR0",
    issuer: "Dicoding Indonesia",
  },
  {
    imageUrl: "/certifications/certf-9.jpg",
    title: "Probability & Statistics for Machine Learning & Data Science",
    description: [
      "Dasar-dasar probabilitas dan statistika untuk ML dan DS.",
      "Memahami konsep statistik untuk analisis data.",
      "Keterampilan yang didapat: Probabilitas dan statistik.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/DB57BJJM7HFY",
    issuer: "Coursera",
  },
  {
    imageUrl: "/certifications/certf-10.jpg",
    title: "Mathematics for Machine Learning and Data Science",
    description: [
      "Dasar-dasar matematika untuk ML dan DS.",
      "Penerapan aljabar linear dan kalkulus dalam ML.",
      "Keterampilan yang didapat: Matematika untuk ML.",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/C8D8ZQ2NLXGC",
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
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
    issuer: "Coursera",
  },
];

export default certificationsData;
