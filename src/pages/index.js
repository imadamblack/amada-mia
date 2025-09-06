import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import i00 from '/public/landing/00.jpg';
import i01 from '/public/landing/01.jpg';
import depto_01 from '/public/depas/depa-1.png';
import depto_02 from '/public/depas/depa-2.png';
import depto_03 from '/public/depas/depa-3.png';
import depto_04 from '/public/depas/depa-4.png';
import depto_05 from '/public/depas/depa-5.png';
import bg_marmol from '/public/landing/bg-marmol.png';

import calidad from '/public/SVG/calidad.svg';
import concepto from '/public/SVG/concepto.svg';
import contacto from '/public/SVG/contacto.svg';
import depas from '/public/SVG/depas.svg';
import logoWhite from '/public/SVG/logo-white.svg';
import logoQueara from '/public/SVG/logo-queara-white.svg';
import exclusividad from '/public/SVG/exclusividad.svg';
import queara from '/public/SVG/queara.svg';
import ventajas from '/public/SVG/ventajas.svg';
import vivir from '/public/SVG/ico-vivir.svg';
import invertir from '/public/SVG/ico-invertir.svg';
import rentabilidad from '/public/SVG/ico-roi.svg';
import OptInForm from '../components/form/opt-in-form';

export default function AmadaMiaPage() {
  const [lastClick, setLastClick] = useState('');
  const [slide, setSlide] = useState(0);
  const trackRef = useRef(null);

  const goToContact = (origin) => {
    setLastClick(origin);
    const el = document.getElementById('am-contact');
    if (el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'CTA_Click', {origin});
    }
  };

  const content = {
    hero: {
      title: 'Vivir con intención, elegancia y diseño de autor en el Caribe Mexicano',
      subtitle: 'Luxury Amada Mía by Queara',
      cta_main: 'Conoce tu nuevo hogar',
      cta_description: 'Solicita información',
    },
    about: {
      paragraph:
        'Luxury Amada Mía no es solo un desarrollo inmobiliario: es la expresión más pura de lo que significa vivir con propósito y distinción en Playa del Carmen. Diseñado por el arquitecto mexicano Mario Luna Zepeda y concebido como la primera joya arquitectónica de Queara, este proyecto reúne plusvalía, exclusividad y diseño contemporáneo en una ubicación privilegiada, a pasos de la Quinta Avenida.',
    },
    catalog: [
      {
        title: 'Tipo 1',
        units: 'Planta Baja',
        description:
          '58.69 m² | 2 recámaras | 2 baños | Sala | Comedor | Cocina | Cuarto de lavado | Closet',
        img: depto_01,
        alt: 'Estancia moderna — Planta baja',
      },
      {
        title: 'Tipo 2',
        units: '14 Unidades (PB a 6º nivel)',
        description:
          '64.95 m² | 2 recámaras | 2 baños | Sala | Comedor | Cocina | Cuarto de lavado | Closet',
        img: depto_02,
        alt: 'Fachada contemporánea — Tipo 2',
      },
      {
        title: 'Tipo 3',
        units: '12 Unidades (1º a 6º nivel)',
        description:
          '49.14 m² | 2 recámaras | 1 baño | Sala | Comedor | Cocina | Cuarto de lavado | Closet',
        img: depto_03,
        alt: 'Recámara luminosa — Tipo 3',
      },
      {
        title: 'Tipo 4',
        units: '6 Unidades (1º a 6º nivel)',
        description:
          '50.41 m² | 1 recámara | 1 baño | Sala | Comedor | Cocina | Cuarto de lavado | Closet',
        img: depto_04,
        alt: 'Cocina integrada — Tipo 4',
      },
      {
        title: 'Tipo 5',
        units: '5 Unidades (2º a 6º nivel)',
        description:
          '47.69 m² | 1 recámara | 1 baño | Sala | Comedor | Cocina | Cuarto de lavado | Closet',
        img: depto_05,
        alt: 'Terraza con vista — Tipo 5',
      },
    ],
    banner: {headline: 'Promesa de transformación en una frase'},
    testimonials: [
      {name: 'Nombre', rating: 5, quote: 'Testimonio breve y creíble.'},
      {name: 'Nombre', rating: 4.5, quote: 'Otro testimonio.'},
    ],
    ventajas: [
      {
        img: vivir,
        title: 'Para vivir',
        description: 'Un hogar con confort absoluto, seguridad 24/7 y amenidades que enriquecen la vida diaria.',
      },
      {
        img: invertir,
        title: 'Para invertir',
        description: 'Ubicación estratégica en la zona de mayor plusvalía, con alta demanda de renta vacacional y residencial.',
      },
      {
        img: rentabilidad,
        title: 'Rentabilidad respaldada',
        description: 'Alta rentabilidad respaldada por un producto exclusivo y de autor, diseñado para conservar y multiplicar su valor en el tiempo.',
      },
    ],
    faqs: [
      {q: 'Pregunta 1', a: 'Respuesta 1'},
      {q: 'Pregunta 2', a: 'Respuesta 2'},
    ],
    contact: {
      title: 'Cierre con beneficio directo',
      description: 'Breve instrucción para completar el formulario.',
    },
  };

  const scrollToIndex = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const target = el.children?.[i];
    if (target) {
      const targetLeft = target.getBoundingClientRect().left - el.getBoundingClientRect().left + el.scrollLeft;
      el.scrollTo({left: targetLeft, behavior: 'smooth'});
      setSlide(i);
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('trackCustom', 'Catalog_ScrollTo', {index: i});
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
    <div className="bg-neutral-50 text-neutral-900">
      <section className="min-h-[80rem] flex flex-col relative overflow-hidden items-center justify-center z-[100]">
        <div className="absolute inset-0">
          <Image
            src={i00}
            layout="fill"
            alt="Playa del Carmen — arquitectura contemporánea"
            objectPosition="center"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-neutral-900/30"/>
        </div>
        <div className="relative container px-6 py-28 md:py-40 text-white">
          <div className="mx-auto relative w-1/2 pt-[12rem] mb-12">
            <Image
              src={logoWhite}
              layout="fill"
              alt="Playa del Carmen — arquitectura contemporánea"
              objectPosition="center"
              objectFit="contain"
            />
          </div>
          <h1 className="ft-11 font-semibold leading-tight text-center mx-auto md:w-2/3">
            {content.hero.title}
          </h1>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center">
            <a
              role="button"
              onClick={() => goToContact('hero_primary')}
              className="button ft-2 hover:bg-brand-3"
            >
              {content.hero.cta_main}
            </a>
          </div>
        </div>
        <div className="flex relative">
          <p className="ft-1 text-white">Un proyecto de</p>
          <div className="relative w-[20rem] aspect-[5/1] ml-4 bottom-1">
            <Image src={logoQueara} layout="fill" objectFit="contain"/>
          </div>
        </div>

      </section>

      <section className="bg-[url('/landing/bg-marmol.png')] bg-cover py-40">
        <div className="container px-6 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="pr-20">
              <h2 className="font-black">EL CONCEPTO</h2>
              <p className="text-neutral-700 leading-relaxed">
                {content.about.paragraph}
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
              <Image
                src={i01}
                layout="fill"
                alt="Playa del Carmen — arquitectura contemporánea"
                objectPosition="center"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white" style={{
        borderTop: '8px solid transparent',
        borderBottom: '8px solid transparent',
        borderLeft: '0 solid transparent',
        borderRight: '0 solid transparent',
        borderImage: `linear-gradient(
          to right,
          #b8860b 0%,   /* dorado oscuro */
          #ffd700 20%,  /* dorado brillante */
          #fff8dc 40%,  /* casi blanco (reflejo) */
          #ffd700 60%,  /* dorado brillante */
          #b8860b 80%,  /* dorado oscuro */
          #ffd700 100%  /* cierra brillante */
        ) 1`,
        borderImageSlice: 1,
      }}>
        <div className="px-12 py-16 md:py-24">
          <h2 className="font-black text-center mb-20">DEPARTAMENTOS</h2>
          <div className="flex items-center justify-between mb-6">
            <div className="hidden md:flex gap-2">
              <a aria-label="Anterior" role="button" onClick={() => scrollToIndex(Math.max(slide - 1, 0))}
                 className="ft-1 h-10 w-10 rounded-full border bg-white shadow-sm hover:shadow transition flex items-center justify-center cursor-pointer">‹</a>
              <a aria-label="Siguiente" role="button"
                 onClick={() => scrollToIndex(Math.min(slide + 1, content.catalog.length - 1))}
                 className="ft-1 h-10 w-10 rounded-full border bg-white shadow-sm hover:shadow transition flex items-center justify-center cursor-pointer">›</a>
            </div>
          </div>

          <div className="relative">
            <div
              ref={trackRef}
              onScroll={handleTrackScroll}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
              style={{scrollbarWidth: 'none'}}
            >
              {content.catalog.map((item, idx) => (
                <article
                  key={idx}
                  className="min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[28%] snap-center rounded-2xl border bg-white shadow-sm overflow-hidden"
                >
                  <div className="relative aspect-[1/1] w-full overflow-hidden">
                    <Image src={item.img} alt={item.alt || item.title} layout="fill" objectFit="contain"/>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="mb-8">{item.units}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {item.description.split(' | ').map((d) => <li>{d}</li>)}
                    </ul>
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
                  className={`h-2.5 w-2.5 rounded-full cursor-pointer ${slide === i ? 'bg-neutral-900' : 'bg-neutral-300'}`}
                />
              ))}
            </div>
            <div className="md:hidden mt-4 flex justify-center gap-3">
              <a aria-label="Anterior" role="button" onClick={() => scrollToIndex(Math.max(slide - 1, 0))}
                 className="h-10 w-10 rounded-full border bg-white shadow-sm hover:shadow transition flex items-center justify-center cursor-pointer">‹</a>
              <a aria-label="Siguiente" role="button"
                 onClick={() => scrollToIndex(Math.min(slide + 1, content.catalog.length - 1))}
                 className="h-10 w-10 rounded-full border bg-white shadow-sm hover:shadow transition flex items-center justify-center cursor-pointer">›</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url('/landing/bg-marmol.png')] bg-cover">
        <div className="container px-6 py-16 md:py-24">
          <div className="items-start">
            <div className="mb-20">
              <h2 className="font-black text-center mb-20">CALIDAD Y ACABADOS</h2>
              <p className="ft-2 text-center text-neutral-700 mt-4">Cada residencia refleja el equilibrio perfecto
                entre
                elegancia,
                funcionalidad e innovación.</p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-700">
              <li className="rounded-xl bg-white p-12 border">Cocinas integrales marca Teka</li>
              <li className="rounded-xl bg-white p-12 border">Pisos de porcelanato y duela premium</li>
              <li className="rounded-xl bg-white p-12 border">Minisplits en todas las unidades</li>
              <li className="rounded-xl bg-white p-12 border">Closets en recámaras</li>
              <li className="rounded-xl bg-white p-12 border">Domótica italiana Master: hogares inteligentes</li>
              <li className="rounded-xl bg-white p-12 border">Ventanería alemana de PVC anticiclónica</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="min-h-[72rem] flex flex-col relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={i01}
            layout="fill"
            alt="Playa del Carmen — arquitectura contemporánea"
            objectPosition="center"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-neutral-900/30"/>
        </div>
        <div className="relative container px-6 py-28 md:py-40 text-white">
          <div className="container px-6 py-20 md:py-28 text-white">
            <h2 className="font-black">EXCLUSIVIDAD</h2>
            <p className="ft-2 text-left lg:w-1/3 mt-20">
              Con apenas 38 residencias, cada espacio ha sido creado como un santuario privado: acabados premium,
              amenidades de lujo y detalles que trascienden el tiempo.
              <br/><br/>
              Aquí no solo adquieres un departamento; aseguras un legado de elegancia y valor en uno de los destinos más
              deseados del Caribe Mexicano.
            </p>
            <div className="mt-8 flex justify-start">
              <a
                role="button"
                onClick={() => goToContact('banner')}
                className="ft-2 rounded-2xl bg-white text-neutral-900 px-6 py-3 font-medium shadow hover:shadow-lg transition cursor-pointer select-none"
              >
                {content.hero.cta_description}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*<section className="container px-6 py-16 md:py-24">*/}
      {/*  <h2 className="text-2xl md:text-3xl font-semibold mb-8">Lo que dicen nuestros residentes</h2>*/}
      {/*  <div className="grid md:grid-cols-2 gap-6">*/}
      {/*    {content.testimonials.map((t, i) => (*/}
      {/*      <blockquote key={i} className="rounded-2xl border bg-white p-6 shadow-sm">*/}
      {/*        <div className="flex items-center gap-3 mb-3">*/}
      {/*          <div className="h-10 w-10 rounded-full bg-neutral-200" aria-hidden/>*/}
      {/*          <div>*/}
      {/*            <p className="font-medium">{t.name}</p>*/}
      {/*            <p className="text-sm text-neutral-500">Calificación: {t.rating}★</p>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*        <p className="text-neutral-700">“{t.quote}”</p>*/}
      {/*      </blockquote>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</section>*/}

      <section className="bg-[url('/landing/bg-marmol.png')] bg-cover" style={{
        borderTop: '8px solid transparent',
        borderBottom: '8px solid transparent',
        borderLeft: '0 solid transparent',
        borderRight: '0 solid transparent',
        borderImage: `linear-gradient(
          to right,
          #b8860b 0%,   /* dorado oscuro */
          #ffd700 20%,  /* dorado brillante */
          #fff8dc 40%,  /* casi blanco (reflejo) */
          #ffd700 60%,  /* dorado brillante */
          #b8860b 80%,  /* dorado oscuro */
          #ffd700 100%  /* cierra brillante */
        ) 1`,
        borderImageSlice: 1,
      }}>
        <div className="container px-6 py-16 md:py-24">
          <h2 className="font-black text-center mb-20">VENTAJAS Y BENEFICIOS</h2>
          <ol className="grid md:grid-cols-3 gap-6">
            {content.ventajas.map((p, idx) => (
              <div key={idx} className="rounded-2xl border p-12 bg-white shadow-sm">
                <div className="relative aspect-[1/1] w-1/3 mb-12">
                  <Image src={p.img} layout="fill" objectFit="contain" objectPosition="center"/>
                </div>
                <h3 className="ft-2 font-semibold mb-1">{p.title}</h3>
                <p className="ft-0 text-neutral-700 text-sm">{p.description}</p>
              </div>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative bg-[url('/landing/bg-marmol-dark.jpg')] bg-cover py-40">
        <div className="container grid md:grid-cols-2 gap-12 px-6 py-40 z-50">
          <div className="p-32">
            <div className="mb-8">
              <div className="relative h-[6rem] flex justify-start mb-20">
                <Image src={logoQueara} layout="fill" objectFit="contain" objectPosition="left" className="brightness-200"/>
              </div>
            </div>
            <p className="text-white">
              Desarrolladora mexicana que integra diseño, funcionalidad y plusvalía en cada proyecto. Luxury Amada Mía
              es el inicio de una serie de desarrollos que transformarán la forma de habitar el Caribe.
            </p>
          </div>
          <div className="p-32">
            <h2 className="font-black text-white mb-12">MARIO LUNA ZEPEDA</h2>
            <p className="mb-8 text-white">Arquitecto mexicano reconocido por su visión contemporánea y
              estética sofisticada.</p>
            <p className="italic text-right w-2/3 ml-auto text-white">“La arquitectura es el arte de crear espacios que
              se convierten en legado”</p>
          </div>
        </div>
      </section>

      <section id="am-contact" className="bg-neutral-100" style={{
        borderTop: '8px solid transparent',
        borderBottom: '8px solid transparent',
        borderLeft: '0 solid transparent',
        borderRight: '0 solid transparent',
        borderImage: `linear-gradient(
          to right,
          #b8860b 0%,   /* dorado oscuro */
          #ffd700 20%,  /* dorado brillante */
          #fff8dc 40%,  /* casi blanco (reflejo) */
          #ffd700 60%,  /* dorado brillante */
          #b8860b 80%,  /* dorado oscuro */
          #ffd700 100%  /* cierra brillante */
        ) 1`,
        borderImageSlice: 1,
      }}>
        <div className="container px-6 py-16 md:py-24">
          <div className="reading-container">
            <h2>Contáctanos</h2>
            <p>Obtén más información sobre este desarrollo a unas cuadras de la Quinta Avenida de Playa del Carmen</p>
            <OptInForm lastClick={lastClick}/>
          </div>
        </div>
      </section>
    </div>
  );
}
