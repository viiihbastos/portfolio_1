import {
  SiPython,
  SiMysql,
  SiTensorflow,
  SiDocker,
  SiGit,
  SiJavascript,
  SiReact,
  SiJupyter,
  SiGithub,
  SiApachekafka,
  SiApachespark,
  SiScikitlearn,
  SiApacheairflow,
  SiDatabricks,
  SiJenkins
} from 'react-icons/si'

import { FaCloud, FaChartBar, FaDatabase, FaNetworkWired, FaCog, FaRobot } from 'react-icons/fa'
import { GrCompliance } from 'react-icons/gr'
import { BsCloudArrowUpFill } from 'react-icons/bs'
import { MdOutlineDataExploration } from 'react-icons/md'

type Skill = {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

type SkillCategory = {
  category: string;
  skills: Skill[];
};

// Habilidades organizadas por categorias
const skillCategories: SkillCategory[] = [
  {
    category: "Programming & Query Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "SQL", icon: SiMysql },
      { name: "JavaScript", icon: SiJavascript },
    ]
  },
  {
    category: "Data Processing & ETL",
    skills: [
      { name: "Apache Spark", icon: SiApachespark },
      { name: "PySpark", icon: SiApachespark },
      { name: "Azure Databricks", icon: SiDatabricks },
      { name: "ETL/ELT Processes", icon: FaDatabase },
      { name: "Data Pipeline Development", icon: MdOutlineDataExploration },
      { name: "Data Automation", icon: FaCog },
      { name: "Apache Airflow", icon: SiApacheairflow },
      { name: "Apache Kafka", icon: SiApachekafka },
    ]
  },
  {
    category: "Cloud & Infrastructure",
    skills: [
      { name: "Azure Cloud", icon: FaCloud },
      { name: "Data Architecture", icon: FaNetworkWired },
      { name: "Docker", icon: SiDocker },
      { name: "Cloud Migration", icon: BsCloudArrowUpFill },
      { name: "Jenkins", icon: SiJenkins },
    ]
  },
  {
    category: "Analysis & Visualization",
    skills: [
      { name: "Power BI", icon: FaChartBar },
      { name: "Jupyter", icon: SiJupyter },
      { name: "DataOps", icon: FaCog },
    ]
  },
  {
    category: "Advanced Analytics & AI",
    skills: [
      { name: "Machine Learning", icon: SiTensorflow },
      { name: "NLP & Transformer Models", icon: FaRobot },
      { name: "Scikit-learn", icon: SiScikitlearn },
    ]
  },
  {
    category: "Methodologies & Practices",
    skills: [
      { name: "Agile/Scrum", icon: FaCog },
      { name: "Data Governance", icon: GrCompliance },
      { name: "Git", icon: SiGit },
    ]
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">Technical Skills</h2>
          <p className="text-gray-400 text-lg">A comprehensive toolkit that enables me to design and implement robust data solutions</p>
        </div>
        
        <div className="space-y-12 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 pl-4 border-l-4 border-blue-500 text-white">{category.category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex flex-col items-center p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/60 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-300 group"
                    >
                      <Icon className="w-10 h-10 mb-3 text-blue-400 group-hover:text-blue-300 transition-colors" />
                      <span className="text-gray-200 font-medium text-center">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

