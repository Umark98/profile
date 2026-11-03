export default function Footer(props: { githubUrl: string; hideSocialsInDesktop: boolean }) {
  return (
    <footer className="portfolio-footer">
      <p>Built by Umar Orakzai</p>
      <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">View source on GitHub <span aria-hidden="true">↗</span></a>
    </footer>
  );
}
