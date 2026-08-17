import { CONTACT } from "@/data/contact";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/10 px-5 md:px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 editorial-num text-graphite">
      <span>© {year} Jesse Santos</span>
      <div className="flex gap-6">
        {CONTACT.behance && (
          <a href={CONTACT.behance} className="hover:text-ink" target="_blank" rel="noreferrer">
            Behance
          </a>
        )}
        {CONTACT.linkedin && (
          <a href={CONTACT.linkedin} className="hover:text-ink" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
        {CONTACT.instagram && (
          <a href={CONTACT.instagram} className="hover:text-ink" target="_blank" rel="noreferrer">
            Instagram
          </a>
        )}
      </div>
    </footer>
  );
}
