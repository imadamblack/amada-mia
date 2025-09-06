import { useEffect, useRef, useState } from "react";

export default function AmadaMiaPage() {
  const [lastClick, setLastClick] = useState("");
  const [slide, setSlide] = useState(0);
  const trackRef = useRef(null);

  const goToContact = (origin) => {
    setLastClick(origin);
    const el = document.getElementById("am-contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("trackCustom", "CTA_Click", { origin });
    }
  };

  const content = {
    hero: {
      title: "Vivir con intención, elegancia y diseño de autor en el Caribe Mexicano.",
      subtitle: "Luxury Amada Mía by Queara",
      cta_main: "Conoce tu nuevo hogar",
      cta_description: "Solicita información",
    },
    about: {
      paragraph:
        "Luxury Amada Mía no es solo un desarrollo inmobiliario: es la expresión más pura de lo que significa vivir con propósito y distinción en Playa del Carmen. Diseñado por el arquitecto mexicano Mario Luna Zepeda y concebido como la primera joya arquitectónica de Queara, este proyecto reúne plusvalía, exclusividad y diseño contemporáneo en una ubicación privilegiada, a pasos de la Quinta Avenida.",
    },
    catalog: [
      {
        title: "Planta Baja (Único)",
        description:
          "58.69 m² | 2 recámaras (principal con baño) | 2 baños | Sala | Comedor | Cocina | Cuarto de lavado | Closet",
        img: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d52?q=80&w=1200&auto=format&fit=crop",
        alt: "Estancia moderna — Planta baja",
      },
      {
        title: "Tipo 2 – 14 Unidades (PB a 6º nivel)",
        description:
          "64.95 m² | 2 recámaras (principal con baño) | 2 baños | Sala | Comedor | Cocina | Cuarto de lavado | Closet",
        img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop",
        alt: "Fachada contemporánea — Tipo 2",
      },
      {
        title: "Tipo 3 – 12 Unidades (1º a 6º nivel)",
        description:
          "49.14 m² | 2 recámaras | 1 baño | Sala | Comedor | Cocina | Cuarto de lavado | Closet",
        img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
        alt: "Recámara luminosa — Tipo 3",
      },
      {
        title: "Tipo 4 – 6 Unidades (1º a 6º nivel)",
        description:
          "50.41 m² | 1 recámara | 1 baño | Sala | Comedor | Cocina | Cuarto de lavado | Closet",
        img: "https://images.unsplash.com/photo-1600585154340-1e43c73f21be?q=80&w=1200&auto=format&fit=crop",
        alt: "Cocina integrada — Tipo 4",
      },
      {
        title: "Tipo 5 – 5 Unidades (2º a 6º nivel)",
        description:
          "47.69 m² | 1 recámara | 1 baño | Sala | Comedor | Cocina | Cuarto de lavado | Closet",
        img: "https://images.unsplash.com/photo-1560448075-bb4caa6c5e51?q=80&w=1200&auto=format&fit=crop",
        alt: "Terraza con vista — Tipo 5",
      },
    ],
    banner: { headline: "Promesa de transformación en una frase" },
    testimonials: [
      { name: "Nombre", rating: 5, quote: "Testimonio breve y creíble." },
      { name: "Nombre", rating: 4.5, quote: "Otro testimonio." },
    ],
    process: [
      { title: "Paso 1", description: "Qué sucede" },
      { title: "Paso 2", description: "Qué sucede" },
      { title: "Paso 3", description: "Qué sucede" },
      { title: "Paso 4", description: "Qué sucede" },
    ],
    faqs: [
      { q: "Pregunta 1", a: "Respuesta 1" },
      { q: "Pregunta 2", a: "Respuesta 2" },
    ],
    contact: {
      title: "Cierre con beneficio directo",
      description: "Breve instrucción para completar el formulario.",
    },
  };

  const scrollToIndex = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const target = el.children?.[i];
    if (target) {
      const targetLeft = target.getBoundingClientRect().left - el.getBoundingClientRect().left + el.scrollLeft;
      el.scrollTo({ left: targetLeft, behavior: "smooth" });
      setSlide(i);
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("trackCustom", "Catalog_ScrollTo", { index: i });
      }
    }
  };

  const handleTrackScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const elRect = el.getBoundingClientRect();
    const elCenter = elRect.left + elRect.width / 2;
    let nearest = 0;
    let minDist = Infinity;
    Array.from(el.children || []).forEach((child, idx) => {
      const rect = child.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const dist = Math.abs(center - elCenter);
      if (dist < minDist) {
        minDist = dist;
        nearest = idx;
      }
    });
    setSlide(nearest);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1501117716987-c8e8a3a59b3c?q=80&w=1600&auto=format&fit=crop"
            alt="Playa del Carmen — arquitectura contemporánea"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/50" />
        </div>
        <div className="relative container px-6 py-28 md:py-40 text-white">
          <p className="mb-4 inline-block rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            {content.hero.subtitle}
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight max-w-3xl">
            {content.hero.title}
          </h1>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              role="button"
              onClick={() => goToContact("hero_primary")}
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-medium shadow-lg bg-neutral-900 text-white hover:shadow-xl transition cursor-pointer select-none"
            >
              {content.hero.cta_main}
            </a>
            <a
              role="button"
              onClick={() => goToContact("hero_secondary")}
              className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-medium border border-white/40 hover:bg-white/10 transition cursor-pointer select-none"
            >
              {content.hero.cta_description}
            </a>
          </div>
        </div>
      </section>

      <section className="container px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Diseño de autor, ubicación privilegiada</h2>
            <p className="text-neutral-700 leading-relaxed">
              {content.about.paragraph}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
            <img
              src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop"
              alt="Render arquitectónico — Luxury Amada Mía"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container px-6 py-16 md:py-24">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Modelos residenciales</h2>
            <div className="hidden md:flex gap-2">
              <a aria-label="Anterior" role="button" onClick={() => scrollToIndex(Math.max(slide - 1, 0))} className="h-10 w-10 rounded-full border bg-white shadow-sm hover:shadow transition flex items-center justify-center cursor-pointer">‹</a>
              <a aria-label="Siguiente" role="button" onClick={() => scrollToIndex(Math.min(slide + 1, content.catalog.length - 1))} className="h-10 w-10 rounded-full border bg-white shadow-sm hover:shadow transition flex items-center justify-center cursor-pointer">›</a>
            </div>
          </div>

          <div className="relative">
            <div
              ref={trackRef}
              onScroll={handleTrackScroll}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
              style={{ scrollbarWidth: "none" }}
            >
              {content.catalog.map((item, idx) => (
                <article
                  key={idx}
                  className="min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[33%] xl:min-w-[28%] snap-center rounded-2xl border bg-white shadow-sm overflow-hidden"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img src={item.img} alt={item.alt || item.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-neutral-700 text-sm">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center gap-2">
              {content.catalog.map((_, i) => (
                <a
                  key={i}
                  aria-label={`Ir al modelo ${i + 1}`}
                  role="button"
                  onClick={() => scrollToIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full cursor-pointer ${slide === i ? "bg-neutral-900" : "bg-neutral-300"}`}
                />
              ))}
            </div>
            <div className="md:hidden mt-4 flex justify-center gap-3">
              <a aria-label="Anterior" role="button" onClick={() => scrollToIndex(Math.max(slide - 1, 0))} className="h-10 w-10 rounded-full border bg-white shadow-sm hover:shadow transition flex items-center justify-center cursor-pointer">‹</a>
              <a aria-label="Siguiente" role="button" onClick={() => scrollToIndex(Math.min(slide + 1, content.catalog.length - 1))} className="h-10 w-10 rounded-full border bg-white shadow-sm hover:shadow transition flex items-center justify-center cursor-pointer">›</a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1600&auto=format&fit=crop"
            alt="Cielo caribeño al atardecer"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative container px-6 py-20 md:py-28 text-white">
          <div className="absolute inset-0 bg-neutral-900/60" />
          <h2 className="text-2xl md:text-4xl font-semibold text-center max-w-3xl mx-auto">
            {content.banner.headline}
          </h2>
          <div className="mt-8 flex justify-center">
            <a
              role="button"
              onClick={() => goToContact("banner")}
              className="rounded-2xl bg-white text-neutral-900 px-6 py-3 font-medium shadow hover:shadow-lg transition cursor-pointer select-none"
            >
              {content.hero.cta_description}
            </a>
          </div>
        </div>
      </section>

      <section className="container px-6 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Lo que dicen nuestros residentes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {content.testimonials.map((t, i) => (
            <blockquote key={i} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-neutral-200" aria-hidden />
                <div>
                  <p className="font-medium">{t.name}</p>
                  <p className="text-sm text-neutral-500">Calificación: {t.rating}★</p>
                </div>
              </div>
              <p className="text-neutral-700">“{t.quote}”</p>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="container px-6 py-16 md:py-24">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold">Tu camino a Amada Mía</h2>
            <p className="text-neutral-600">De la primera llamada a la entrega de llaves, todo está pensado para que disfrutes el proceso.</p>
          </div>
          <ol className="grid md:grid-cols-4 gap-6">
            {content.process.map((p, idx) => (
              <li key={idx} className="rounded-2xl border p-6 bg-white shadow-sm">
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white text-sm">{idx + 1}</div>
                <h3 className="font-semibold mb-1">{p.title}</h3>
                <p className="text-neutral-700 text-sm">{p.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container px-6 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Preguntas frecuentes</h2>
        <div className="divide-y rounded-2xl border bg-white">
          {content.faqs.map((f, idx) => (
            <details key={idx} className="group px-6 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-medium">{f.q}</span>
                <span className="text-neutral-400 transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-2 text-neutral-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="am-contact" className="bg-neutral-100">
        <div className="container px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">{content.contact.title}</h2>
              <p className="text-neutral-700 mb-6">{content.contact.description}</p>
              <ul className="grid grid-cols-2 gap-3 text-sm text-neutral-700">
                <li className="rounded-xl bg-white p-3 border">A pasos de la Quinta Avenida</li>
                <li className="rounded-xl bg-white p-3 border">Diseño de Mario Luna Zepeda</li>
                <li className="rounded-xl bg-white p-3 border">Plusvalía y exclusividad</li>
                <li className="rounded-xl bg-white p-3 border">Amenidades selectas</li>
              </ul>
            </div>
            <ContactForm lastClick={lastClick} />
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="container px-6 py-8 text-sm text-neutral-500 flex justify-between">
          <p>© {new Date().getFullYear()} Queara — Luxury Amada Mía</p>
          <div className="flex gap-4">
            <a href="#am-contact" onClick={() => goToContact("footer")} className="cursor-pointer">Contacto</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Aviso de privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactForm({ lastClick }) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const formData = Object.fromEntries(new FormData(e.currentTarget).entries());
    setTimeout(() => {
      setSending(false);
      setSent(true);
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead", { lastClick: formData.lastClick || "" });
      }
    }, 600);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-sm border w-full">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="name">Nombre</label>
        <input id="name" name="name" required className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Tu nombre"/>
      </div>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-900" placeholder="tu@correo.com"/>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="phone">Teléfono</label>
          <input id="phone" name="phone" type="tel" className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-900" placeholder="+52 ..."/>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="message">Mensaje</label>
        <textarea id="message" name="message" rows={4} className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Cuéntanos qué estás buscando"/>
      </div>
      <input type="hidden" name="lastClick" value={lastClick} readOnly />
      <a
        role="button"
        onClick={(e) => { const form = e.currentTarget.closest("form"); if (form) form.requestSubmit(); }}
        className={`w-full inline-flex items-center justify-center rounded-2xl bg-neutral-900 text-white py-3 font-medium hover:bg-neutral-800 ${sent ? "pointer-events-none opacity-60" : ""}`}
      >
        {sent ? "¡Enviado! Te contactamos pronto" : sending ? "Enviando..." : "Solicitar información"}
      </a>
      <p className="mt-3 text-xs text-neutral-500">Protegemos tus datos. Al enviar aceptas el aviso de privacidad.</p>
    </form>
  );
}
