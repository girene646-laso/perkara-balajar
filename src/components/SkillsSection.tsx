const skillGroups: { title: string; items: string[] }[] = [
  { title: 'Frontend', items: ['React', 'TypeScript', 'HTML/CSS', 'Vite'] },
  { title: 'Backend', items: ['Node.js', 'REST APIs', 'Git'] },
  { title: 'Tools & Libraries', items: ['VS Code', 'npm', 'ESLint'] },
  { title: 'Concepts', items: ['PWA', 'Code Splitting', 'Accessibility', 'Performance'] },
];

function SkillsSection() {
  return (
    <section id="skills" className="section" aria-label="Skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillGroups.map(g => (
          <div key={g.title} className="skill-group">
            <h4>{g.title}</h4>
            <ul>{g.items.map(i => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
