import { info } from '../../info';

export default function ThankYou() {
  return (
    <section className="relative flex flex-col flex-grow justify-center pt-20 px-0">
      <div className="container md:w-1/2 flex flex-col items-center gap-8">
        <h2 className="ft-8 text-center">
          ¡Gracias por registrarte!
        </h2>
        <p className="ft-4 text-center">
          Muy pronto, uno de nuestros asesores se pondrá en contacto contigo para darte más info sobre tu nuevo depa.
        </p>
        <div className="flex flex-col items-center justify-center gap-10">
          <a
            className="ft-2 py-3 px-6 rounded-lg items-center  bg-green-500 hover:bg-green-600 transition-all hover:scale-105"
            href={`https://wa.me/${info.whatsapp.value}`}
          >
            <p className="ft-2 text-white">
              Contáctanos por <span className="font-semibold">WhatsApp</span>
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
