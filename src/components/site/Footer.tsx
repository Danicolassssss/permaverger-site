import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Permaverger — Cultiver des vergers durables.
          </p>
          <nav className="flex gap-4">
            <Link href="/blog" className="hover:text-green-700">Blog</Link>
            <Link href="/tutorials" className="hover:text-green-700">Tutoriels</Link>
            <Link href="#contact" className="hover:text-green-700">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

