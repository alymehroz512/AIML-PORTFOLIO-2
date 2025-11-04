import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hero: {
    title: 'Strategic Toolkit & Creative Craft'
  },
  tagline: {
    text: 'Building intelligent systems through strategy, design, and innovation that enhance human experience'
  },
  tools: [
    {
      name: 'Python',
      description: 'Core programming language for AI & ML development',
      experience: '10 years'
    },
    {
      name: 'TensorFlow',
      description: 'End-to-end open-source platform for machine learning',
      experience: '7 years'
    },
    {
      name: 'PyTorch',
      description: 'Deep learning framework for research and production',
      experience: '6 years'
    },
    {
      name: 'Scikit-learn',
      description: 'Machine learning library for classical ML algorithms',
      experience: '8 years'
    },
    {
      name: 'Keras',
      description: 'High-level neural networks API built on TensorFlow',
      experience: '7 years'
    },
    {
      name: 'NumPy',
      description: 'Library for numerical computations and data manipulation',
      experience: '10 years'
    },
    {
      name: 'Pandas',
      description: 'Data analysis and manipulation library',
      experience: '9 years'
    },
    {
      name: 'Matplotlib',
      description: '2D plotting and visualization library for Python',
      experience: '8 years'
    },
    {
      name: 'Seaborn',
      description: 'Statistical data visualization library',
      experience: '6 years'
    },
    {
      name: 'OpenCV',
      description: 'Computer vision and image processing library',
      experience: '5 years'
    },
    {
      name: 'NLTK',
      description: 'Natural language processing toolkit',
      experience: '6 years'
    },
    {
      name: 'SpaCy',
      description: 'Industrial-strength NLP library for Python',
      experience: '5 years'
    },
    {
      name: 'Transformers',
      description: 'Hugging Face library for LLMs and NLP',
      experience: '4 years'
    },
    {
      name: 'XGBoost',
      description: 'Gradient boosting framework for regression/classification',
      experience: '6 years'
    },
    {
      name: 'LightGBM',
      description: 'Fast, distributed, high-performance gradient boosting',
      experience: '5 years'
    },
    {
      name: 'CatBoost',
      description: 'Gradient boosting library with categorical feature support',
      experience: '4 years'
    },
    {
      name: 'Jupyter Notebook',
      description: 'Interactive computing and visualization environment',
      experience: '9 years'
    },
    {
      name: 'Google Colab',
      description: 'Cloud-based Python notebook for ML experiments',
      experience: '7 years'
    },
    {
      name: 'AWS SageMaker',
      description: 'Cloud service for training and deploying ML models',
      experience: '5 years'
    },
    {
      name: 'Azure ML Studio',
      description: 'Microsoft platform for machine learning model building',
      experience: '4 years'
    },
    {
      name: 'MLflow',
      description: 'Open-source platform for ML lifecycle management',
      experience: '3 years'
    },
    {
      name: 'Docker',
      description: 'Containerization platform for model deployment',
      experience: '6 years'
    },
    {
      name: 'Kubernetes',
      description: 'Container orchestration for scalable ML workloads',
      experience: '4 years'
    },
    {
      name: 'FastAPI',
      description: 'High-performance API framework for ML deployment',
      experience: '4 years'
    },
    {
      name: 'Streamlit',
      description: 'Building interactive ML dashboards and data apps',
      experience: '5 years'
    },
    {
      name: 'Power BI',
      description: 'Data visualization and business analytics platform',
      experience: '3 years'
    },
    {
      name: 'Tableau',
      description: 'Business intelligence and data visualization tool',
      experience: '3 years'
    },
    {
      name: 'Git',
      description: 'Version control system for ML code and models',
      experience: '10 years'
    },
    {
      name: 'GitHub',
      description: 'Collaboration and model versioning platform',
      experience: '9 years'
    }
  ]
};

const toolkitSlice = createSlice({
  name: 'toolkit',
  initialState,
  reducers: {}
});

export default toolkitSlice.reducer;