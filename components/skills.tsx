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
  SiScikitlearn
} from 'react-icons/si'

const skills = [
  { name: "Python", icon: SiPython },
  { name: "SQL", icon: SiMysql },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Jupyter", icon: SiJupyter },
  { name: "GitHub", icon: SiGithub },
  { name: "Kafka", icon: SiApachekafka },
  { name: "Spark", icon: SiApachespark },
  { name: "Scikit-learn", icon: SiScikitlearn },
]

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-black/90">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Skills</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-800/30 transition-colors group"
              >
                <Icon className="w-8 h-8 mb-2 text-gray-200 group-hover:text-primary transition-colors" />
                <span className="text-gray-100 text-sm text-center">{skill.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

