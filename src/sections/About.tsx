import Section from '../components/Section'
import ArticleCard from '../components/ArticleCard'


const results = [
  { event: 'Marathon', time: '2:43:44', url: 'https://www.brooksee.com/rss/results?race=167583' },
  { event: 'Half Marathon', time: '1:16:48', url: 'https://runsignup.com/Race/Results/34170?resultSetId=149995#resultSetId-541744;perpage:25' },
  { event: 'Mile', time: '4:24.61', url: 'https://www.tfrrs.org/results/76104/4647240/2023_Boston_University_John_Thomas_Terrier_Classic/Mens-Mile' },
  { event: '1500m', time: '3:58.92', url: 'https://www.tfrrs.org/results/79073/4823586/UMASS_Commonwealth_Invitational/Mens-1500-Meters' },
  { event: '800m', time: '1:57.41', url: 'https://www.tfrrs.org/results/76503/4670002/Hampshire_Black_Sheep_Invitational/Mens-800-Meters' },
];

export default function About() {
  return (
    <Section id="about" title="About">
      <p>
        I’m a Computer Engineering and Computer Science graduate from Northeastern University (Cum Laude, GPA 3.59) with hands-on experience spanning embedded systems, distributed software, and full-stack development. Through three engineering co-ops, I’ve worked across the stack from low-level firmware and hardware interfaces to cloud-native infrastructure and user-facing applications.
      </p>
      <p>
        My experience includes developing embedded firmware on STM32 and ESP32 platforms, building Linux-based systems and daemons on SoCs, and implementing real-world hardware control for medical and laboratory devices. I’ve also worked on edge computing and industrial automation systems using Docker, Kubernetes, and OPC UA, focusing on reliability, scalability, and deployment efficiency.
      </p>
      <p>
        Academically and independently, I’m especially interested in computer architecture, systems programming, and applied machine learning. I’ve designed and implemented a 5-stage pipelined ARM LEGv8 CPU in Verilog and built a Python-based schematic compiler to visualize hardware designs. I’ve also explored AI and optimization through projects like a genetic-algorithm-based poker solver and NLP/ML coursework using PyTorch and Transformers.
      </p>
      <p>
        I also have solid experience with web development using a variety of tools. I'm proficient with languages like typescript, and tools/frameworks like node and react. I've built applications that utilize containerization, database management, and CI/CD processes.
      </p>
      <p>
        I enjoy working close to the metal while keeping the broader system in mind how hardware, software, and infrastructure interact in real products. I’m currently seeking full-time roles where I can contribute to complex systems in embedded software, systems engineering, or low-level/backend software development. I'm also interested in roles for web development, machine learning, devOps, data analysis, and anything that aligns with my skillset and interests.
      </p>
      <h2>Articles</h2>
      <ArticleCard
        title="Computer Architecture Students Design Industry-Ready Pipelined Processors"
        description="Northeastern University students design and implement industry-grade pipelined processors as part of advanced computer architecture coursework."
        link="https://coe.northeastern.edu/news/computer-architecture-students-design-industry-ready-pipelined-processors/"
        image="/logos/neu-logo.png"
      />
      <ArticleCard
        title="Northeastern’s club running team fosters community, takes home titles"
        description="Daniel Flynn, a fourth year computer engineering and computer science major, echoed the sentiment, and said he has found racing and training with the team to be incredibly rewarding."
        link="https://huntnewsnu.com/79772/sports/northeasterns-club-running-team-fosters-community-takes-home-titles/"
        image="/logos/neu-logo.png"
      />
      <p></p>
      <h2>Miscellaneous</h2>
      <p>
        Outside of engineering, I'm a competitive runner who has qualified to run the Boston Marathon in 2026. Here are some of my personal best times.
      </p>
      {results.map(({ event, time, url }) => (
        <p key={event}>
          {event}:{' '}
          <a href={url} target="_blank" rel="noopener noreferrer">
            {time}
          </a>
        </p>
      ))}
    </Section>
  )
}
