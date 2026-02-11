export default function Hero() {
  return (
    <section id="hero" className="discord-hero" aria-label="Intro">
      <div className="discord-hero-inner">
        <div className="discord-hero-content">
          <p className="discord-hero-kicker">Portfolio intro</p>
          <h1>Hi, I’m Foxxy</h1>
          <p className="discord-hero-tagline">
            Full-Stack Developer specializing in modern web applications with React and TypeScript.
            I build clean, fast, and thoughtful digital experiences.
          </p>
          <div className="discord-hero-actions">
            <a href="#projects" className="button primary">View My Work</a>
            <a href="#contact" className="button ghost">Get In Touch</a>
          </div>
          <div className="discord-hero-meta">
            <span>GitHub</span>
            <span>Instagram</span>
            <span>Email</span>
          </div>
        </div>
      </div>
    </section>
  );
}
