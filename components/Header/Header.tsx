import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const sections = [
  ["01", "About", "aboutSection"],
  ["02", "Experience", "WhereIhaveWorkedSection"],
  ["03", "Work", "SomethingIveBuiltSection"],
  ["04", "Contact", "GetInTouchSection"],
];

export default function Header(_props: { finishedLoading: boolean; sectionsRef: any }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  return (
    <header className="portfolio-header">
      <div className="portfolio-header-inner">
        <Link href="/"><a className="portfolio-logo" aria-label="Umar Orakzai home">U<span aria-hidden="true">.</span></a></Link>
        <button className="portfolio-menu-button" ref={menuButton} type="button"
          aria-expanded={menuOpen} aria-controls="portfolio-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen(!menuOpen)}>
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
        <nav id="portfolio-navigation" aria-label="Main navigation" className={`portfolio-nav ${menuOpen ? "is-open" : ""}`}>
          {sections.map(([number, label, id]) => (
            <a key={id} href={`/#${id}`} onClick={() => setMenuOpen(false)}><span>{number}.</span> {label}</a>
          ))}
          <a className="portfolio-button portfolio-button-small" href="/umar-orakzai-resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
            Résumé <span className="portfolio-file-type">PDF</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
