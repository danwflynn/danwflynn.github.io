import Section from '../components/Section'

const projects = [
  {
    name: 'Verilog Graph Visualizer',
    description:
      'Python tool that converts Verilog into directed graphs and schematics.',
    link: 'https://github.com/danwflynn',
  },
]

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="project-list">
        {projects.map((p) => (
          <li key={p.name} className="project-item">
            <strong className="project-title">{p.name}</strong>
            <p className="project-description">{p.description}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
