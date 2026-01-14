import { useState } from 'react'
import Section from '../components/Section'

const projects = [
  {
    name: 'ARM LEGv8 CPU Implementation with Schematic Compiler',
    description: 'Verilog implementation and testbench for a 5-stage pipelined CPU with LEGv8 instruction set, \
    64-bit registers, ALU, register file, instruction decoder, and control signals. Python schematic compiler \
    that parses verilog code to generate a directed graph of the components using DFS. Also includes a MIPS cpu implementation \
    with 32-bit registers which the ARM CPU was based on.',
    link: 'https://github.com/danwflynn/ARM-LEGv8-CPU',
    skills: ['Computer Architecture', 'Hardware Simulation', 'Verilog', 'ARM', 'MIPS', 'Assembly', 'Python', 'Graphviz', 'Search Algorithms', 'Compilers'],
  },
  {
    name: 'Interactive System for Electronic Creativity',
    description: 'Interactive drawing system using an ESP32-based remote over BLE and C/OpenGL graphics software. \
    Remote tracking via Raspberry Pi camera, laser pointer, and Python OpenCV. Communication between components done over MQTT. \
    Allows a user to draw on a projector screen using a laser pointer dot, a camera, and remote inputs.',
    link: 'https://github.com/danwflynn/interactive-sec',
    skills: ['C', 'C++', 'Makfile', 'CMAKE', 'Computer Graphics', 'OpenGL', 'Microcontrollers', 'ESP32', 'BLE', 'Python', 'OpenCV', 'MQTT', 'Image Processing', 'Raspberry Pi', 'Linux', 'Unix'],
  },
  {
    name: 'AI Poker Solver and Simulator',
    description: 'Python poker simulator generating betting strategies using genetic algorithms. \
    Used NumPy to manage probability matrices based on hand strength, pot size, and balance. Different agents with different strategies \
    are spawned into the game. They get eleminated when they run out of money and new agents are added with mutated strategies.',
    link: 'https://github.com/danwflynn/geneticpoker',
    skills: ['Python', 'NumPy', 'Genetic Algorithms', 'AI'],
  },
  {
    name: 'StackOverflow Plus',
    description: 'Implementation of a fake stack overflow code base with private threads/communities, and end of year Wrapped feature. \
    My specific feature was the Wrapped feature. The Wrapped feature includes user statistics, graphs, badges, and LLM generated messages \
    about the user\'s activity. The user can have their wrapped sent to themselves or other users using the Resend email API.',
    link: 'https://github.com/neu-cs4530/fall25-project-fall25-project-group-805',
    skills: ['Web Development', 'LLMs', 'Typescript', 'MongoDB', 'Express', 'RESTful APIs', 'Jest', 'Supertest', 'Cypress', 'Docker', 'openapi', 'Netlify', 'CI/CD', 'GitHub Actions', 'YAML', 'Axios', 'HTML', 'CSS'],
  },
  {
    name: 'Java Reversi Game',
    description: 'Java implementation of Reversi game using MVC design paradigm, cubic coordinate system, and JUnit for testing. \
    Game includes multiplayer mode as well as option to play against the computer with an optimized strategy. The game is playable in Hexagonal mode \
    or Rectangular mode.',
    link: 'https://github.com/danwflynn/reversi',
    skills: ['Java', 'Game Development', 'JUnit', 'AI'],
  },
  {
    name: 'The Shinebox',
    description: 'In progress implementation of a 2d platforming game written in C++ using SFML framework. Includes original sprites, \
    collision physics, movement physics, gravity physics, moving camera, and animations.',
    link: 'https://github.com/danwflynn/theshinebox',
    skills: ['C++', 'SFML', 'OpenGL', 'Computer Graphics', 'Game Development'],
  },
  {
    name: 'Linux Shell Command Line Interface Implementation',
    description: 'C implementation of a linux shell including a subset of all available commands. Includes tokenizer using manual memory allocation. \
    Functionality encompasses changing directories, piping, input/output redirection, file input/output, sequencing, multiprocessing, system calls, etc.',
    link: 'https://github.com/danwflynn/shell-cli',
    skills: ['C', 'Linux', 'Unix', 'Operating Systems'],
  },
  {
    name: 'FUSE Filesystem Implementation',
    description: 'C implementation of a filesystem in userspace. Functionality includes file reading, writing, creating, deleting, and recursive directory traversals. \
    Implementation includes bitmaps, inodes, etc.',
    link: 'https://github.com/danwflynn/fuse-filesystem',
    skills: ['C', 'Linux', 'Unix', 'Operating Systems'],
  },
]

export default function Projects() {
  const [query, setQuery] = useState('')

  const filteredProjects = projects.filter((project) =>
    project.skills.some((skill) =>
      skill.toLowerCase().includes(query.toLowerCase())
    )
  )

  return (
    <Section id="projects" title="Projects">
      <input
        type="text"
        placeholder="Filter by skill"
        className="project-search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="project-grid">
        {filteredProjects.map((p) => (
          <div key={p.name} className="project-card">
            <h3>{p.name}</h3>
            <p className="project-description">{p.description}</p>

            <div className="project-skills">
              {p.skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>

            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </Section>
  )
}
