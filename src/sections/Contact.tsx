import Section from '../components/Section'
import GitHubIcon from '../components/icons/GitHubIcon'
import LinkedInIcon from '../components/icons/LinkedInIcon'
import EmailIcon from '../components/icons/EmailIcon'

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="contact-icons">
        <a
          href="https://github.com/danwflynn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </a>

        <a
          href="mailto:danielwflynn@icloud.com"
          aria-label="Email"
        >
          <EmailIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/daniel-flynn-w513/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
      </div>
    </Section>
  )
}
