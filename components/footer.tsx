export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Manan Bhatia. Built with care.
        </p>
        <p className="text-muted-foreground text-sm">
          B.E. Computer Science · CGPA 9.51 · Chitkara University
        </p>
      </div>
    </footer>
  )
}
