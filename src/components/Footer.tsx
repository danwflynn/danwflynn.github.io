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
        <a href="mailto:you@email.com">
          Email
        </a>
      </p>
    </footer>
  )
}
