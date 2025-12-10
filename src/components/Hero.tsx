export default function Hero() {
  return (
    <section id="hero" className="section hero" aria-label="Intro">
      <div className="hero-inner">
        <h1>Hi, I'm Foxxy</h1>
        <p className="tagline">Full-Stack Developer specializing in modern web applications with React and TypeScript</p>
        <div className="hero-actions">
          <a href="#projects" className="button primary">View My Work</a>
          <a href="#contact" className="button">Get In Touch</a>
        </div>
        <div className="social-links">
          <a href="https://github.com/girene646-laso" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <span>GitHub</span>
          </a>
          <a href="https://instagram.com/prlpyl" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
            <span>Instagram</span>
          </a>
          <a href="mailto:farrellfyelo@gmail.com" aria-label="Email Contact">
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
