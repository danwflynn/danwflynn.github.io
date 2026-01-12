export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Daniel Flynn</p>
      <p className="footer-links">
        <a
          href="https://github.com/danwflynn"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <span className="footer-separator">·</span>
        <a href="mailto:danielwflynn@icloud.com">
          Email
        </a>
        <span className="footer-separator">·</span>
        <a
          href="https://www.linkedin.com/in/daniel-flynn-w513/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  )
}
