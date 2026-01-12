import Section from '../components/Section'

export default function Resume() {
  return (
    <Section id="resume" title="Resume">
      <div className="resume-wrapper">
        <iframe
          src="/df_resume.pdf"
          title="Daniel Flynn Resume"
          className="resume-pdf"
        />
      </div>
    </Section>
  )
}
