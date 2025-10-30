import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hero: {
    title: "Expertise in AI & Machine Learning",
  },

  // 🆕 Added this section for the top line in Skills Section
  skillsIntroLine:
    "Empowering data with intelligence crafting AI solutions that merge innovation, performance, and human centered design",

  coreSkillsSection: {
    heading: "Core Skills",
    subtitle: "10 years professional AI and ML developer",
  },
  secondarySkillsSection: {
    heading: "Secondary Skills",
    subtitle: "Additional expertise across AI ecosystem",
  },

  coreSkills: [
    {
      icon: "MdAnalytics",
      title: "Machine Learning",
      description:
        "Expert in supervised, unsupervised, and reinforcement learning algorithms. Skilled in regression, clustering, and optimization. Focused on building data-driven predictive solutions for real-world applications.",
    },
    {
      icon: "MdLayers",
      title: "Deep Learning",
      description:
        "Proficient in neural networks, CNNs, RNNs, and transformers. Experienced in designing architectures for vision and NLP. Skilled at model tuning, optimization, and GPU acceleration.",
    },
    {
      icon: "MdTextFields",
      title: "Natural Language Processing",
      description:
        "Building models for text classification, sentiment analysis, and generation. Experienced in tokenization, embeddings, and transformers. Applied NLP for chatbots and automated summarization.",
    },
    {
      icon: "MdImage",
      title: "Computer Vision",
      description:
        "Expertise in image classification and object detection using OpenCV. Skilled with segmentation and face recognition models. Developed end-to-end pipelines for visual AI solutions.",
    },
    {
      icon: "MdDataUsage",
      title: "Data Preprocessing",
      description:
        "Handling feature engineering, normalization, and missing values. Experienced in scaling large datasets efficiently. Building clean, structured pipelines for accurate model performance.",
    },
    {
      icon: "MdBuild",
      title: "Model Deployment",
      description:
        "Deploying scalable ML models using Docker, Kubernetes, and cloud services. Automating model lifecycle management. Ensuring performance, reliability, and continuous monitoring.",
    },
    {
      icon: "MdAutoGraph",
      title: "Model Optimization",
      description:
        "Optimizing models for latency and accuracy trade-offs using quantization, pruning, and distillation. Ensuring production-grade performance.",
    },
    {
      icon: "MdScience",
      title: "MLOps",
      description:
        "Implementing CI/CD for ML pipelines using MLflow and Kubeflow. Automating retraining, testing, and deployment workflows.",
    },
    {
      icon: "MdOutlinePrecisionManufacturing",
      title: "Feature Engineering",
      description:
        "Crafting powerful features using domain insights. Skilled in temporal, categorical, and text-based feature extraction.",
    },
    {
      icon: "MdSecurity",
      title: "AI Security",
      description:
        "Designing robust AI models resistant to adversarial attacks. Implementing fairness, interpretability, and privacy safeguards.",
    },
    {
      icon: "MdMonitorHeart",
      title: "Model Monitoring",
      description:
        "Tracking drift, performance degradation, and anomalies in deployed models. Using dashboards and alerts for real-time observability.",
    },
    {
      icon: "MdTimeline",
      title: "Time Series Forecasting",
      description:
        "Building ARIMA, Prophet, and LSTM models for temporal predictions. Experienced in demand, sales, and sensor forecasting use cases.",
    },
  ],

  secondarySkills: [
    {
      icon: "MdDataObject",
      title: "Big Data Technologies",
      description:
        "Hands-on experience with Hadoop and Spark for distributed processing. Optimizing data pipelines for high-volume datasets. Skilled in integrating ML with big data systems.",
    },
    {
      icon: "MdCloud",
      title: "Cloud Computing",
      description:
        "Expert in AWS, GCP, and Azure cloud services. Deploying scalable AI solutions using managed cloud resources. Integrating serverless functions for efficient workloads.",
    },
    {
      icon: "MdStorage",
      title: "SQL/NoSQL Databases",
      description:
        "Working with PostgreSQL, MongoDB, and BigQuery. Building optimized queries and schemas. Ensuring data consistency and high-performance analytics operations.",
    },
    {
      icon: "MdSettingsInputComposite",
      title: "API Development",
      description:
        "Building RESTful APIs with Flask and FastAPI for model serving. Implementing secure endpoints and version control. Supporting seamless integration with front-end apps.",
    },
    {
      icon: "MdSync",
      title: "Version Control",
      description:
        "Proficient in Git workflows and branching strategies. Experienced in GitHub Actions for CI/CD. Supporting collaborative AI development through modern versioning.",
    },
    {
      icon: "MdBarChart",
      title: "Data Visualization",
      description:
        "Creating insights using Tableau, Matplotlib, and Seaborn. Designing dashboards that highlight trends and anomalies. Translating data into actionable business intelligence.",
    },
    {
      icon: "MdArchitecture",
      title: "Software Architecture",
      description:
        "Designing modular and scalable AI system architectures. Applying microservices and event-driven design for flexibility and performance.",
    },
    {
      icon: "MdElectricBolt",
      title: "Edge AI",
      description:
        "Deploying optimized AI models to edge and IoT devices using TensorFlow Lite and ONNX Runtime. Focused on real-time inference efficiency.",
    },
    {
      icon: "MdHub",
      title: "Data Engineering",
      description:
        "Building ETL workflows, batch and streaming pipelines. Skilled with Airflow, Kafka, and dbt for data orchestration and transformation.",
    },
    {
      icon: "MdSmartToy",
      title: "Generative AI",
      description:
        "Developing text, image, and code generation systems using large language models. Experienced with fine-tuning GPT and diffusion models.",
    },
    {
      icon: "MdPublic",
      title: "AI Ethics & Governance",
      description:
        "Ensuring compliance, transparency, and fairness in AI development. Applying responsible AI frameworks and ethical standards.",
    },
    {
      icon: "MdPeopleAlt",
      title: "Team Leadership",
      description:
        "Leading cross-functional AI teams. Mentoring engineers and data scientists to deliver end-to-end ML solutions with best practices.",
    },
  ],
};

const expertiseSlice = createSlice({
  name: "expertise",
  initialState,
  reducers: {},
});

export default expertiseSlice.reducer;
