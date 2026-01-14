function AboutSection() {
  return (
    <section id="about" className="section about" aria-label="About me">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="intro">
            I'm a Full-Stack Developer with a passion for building clean, performant web applications 
            that solve real problems. I specialize in modern JavaScript frameworks, particularly React and TypeScript, 
            with a strong focus on user experience and accessibility.
          </p>
          <p>
            My journey into development started with curiosity about how things work under the hood. 
            Today, I combine technical expertise with creative problem-solving to deliver solutions 
            that are both functional and delightful to use.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, playing strategy games like Arknights and Elden Ring, 
            or diving into the latest web development trends. I believe in continuous learning and staying 
            curious about emerging tools and techniques.
          </p>
          
          <div className="quick-facts">
            <h3>Quick Facts</h3>
            <ul>
              <li>Based in Indonesia</li>
              <li>Open to full-time opportunities and freelance projects</li>
              <li>Gamer at heart - Strategy enthusiast</li>
              <li>Currently exploring advanced React patterns and performance optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
