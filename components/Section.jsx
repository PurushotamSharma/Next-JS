export function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`relative py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function Container({ children, className = "" }) {
  return (
    <div className={`container mx-auto px-4 relative ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }) {
  return (
    <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4">
      {children}
    </p>
  );
}

export function PageHero({ eyebrow, title, description, children }) {
  return (
    <div className="pt-32 pb-12 md:pb-16">
      <Container>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight max-w-4xl leading-[1.1]">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 text-lg md:text-xl text-white/65 max-w-3xl leading-relaxed">
            {description}
          </p>
        ) : null}
        {children}
      </Container>
    </div>
  );
}
