'use client';
import { useForm, FormProvider } from 'react-hook-form';
import { useEffect, useMemo, useState } from 'react';
import { getCookie } from 'cookies-next';
import { info } from '../../info';
import StepRenderer from '../components/form/stepRenderer';
import fbEvent from '../services/fbEvents';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import i01 from '../../public/survey/01.png';
import i02 from '../../public/landing/002.png';
import i03 from '../../public/landing/003.png';
import i04 from '../../public/landing/012.png';
import i05 from '../../public/landing/006.png';
import paola from '../../public/landing/paola.png';
import eduardo from '../../public/landing/eduardo.png';
import alejandro from '../../public/landing/alejandro.png';
import Link from 'next/link';


const formSteps = (ocasion = '') => [
  {
    type: 'checkpoint',
    name: 'checkpoint',
    render: () => (
      <div className={`relative my-12 flex-grow}`}>
        <p className="ft-6 sans text-center font-bold">Tu visión inspira cada línea de diseño</p>
        <div className="relative w-full my-8 pt-[80%] rounded-2xl overflow-hidden">
          <Image src={i02} layout="fill" objectFit="cover"/>
        </div>
        <p className="ft-2 mt-4 text-center mb-12">Comencemos a descubrir la inspiración detrás de tu joya</p>
      </div>
    ),
  },
  {
    type: 'radio',
    name: 'ocasion',
    title: `¿Cuál es la ocasión?`,
    options: [
      {value: 'propuesta', label: 'Voy a proponer matrimonio'},
      {value: 'boda', label: 'Me voy a casar'},
      {value: 'aniversario', label: 'Es mi aniversario'},
      {value: 'hijos', label: 'Nacimiento de un hijo'},
      {value: 'cumpleanos', label: 'Cumpleaños'},
      {value: 'otro', label: 'Otro'},
    ],
    cols: 1,
    inputOptions: {required: true},
  },
  {
    type: 'radio',
    name: 'type',
    title: `¿Qué tipo de pieza estás buscando?`,
    options: (ocasion) => {
      return ocasion === 'propuesta'
        ? [
          {value: 'anilloCompromiso', label: 'Anillo de compromiso'},
          {value: 'otro', label: 'Otro'},
        ] : ocasion === 'boda'
          ? [
            {value: 'anilloBoda', label: 'Anillos de bodas'},
            {value: 'otro', label: 'Otro'},
          ]
          : [
            {value: 'churumbela', label: 'Churumbela'},
            {value: 'pulsera', label: 'Pulsera / Esclava'},
            {value: 'cadena', label: 'Cadena'},
            {value: 'aretes', label: 'Aretes'},
          ];
    },
    cols: 1,
    inputOptions: {required: true},
  },
  {
    type: 'radio',
    name: 'budget',
    title: `¿Tienes algún presupuesto definido?`,
    options: [
      {value: '<30,000', label: 'Menos de $30,000'},
      {value: '30,000-50,000', label: 'Entre $30,000 y $50,000'},
      {value: '50,000-100,000', label: 'Entre $50,000 y $100,000'},
      {value: '100,000-200,000', label: 'Entre $100,000 y $200,000'},
      {value: '>200,000', label: 'Más de $200,000'},
    ],
    cols: 1,
    inputOptions: {required: true},
  },
  {
    type: 'checkpoint',
    name: 'checkpoint',
    render: () => (
      <div className={`relative my-12 flex-grow}`}>
        <p className="ft-6 sans text-center font-bold">Maestría de 15 años en cada detalle</p>
        <div className="relative w-full my-8 pt-[80%] rounded-2xl overflow-hidden">
          <Image src={i03} layout="fill" objectFit="cover"/>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-8 p-8 border">
            <div className="flex flex-col justify-center items-center w-1/4">
              <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-4">
                <Image src={eduardo} layout="fill" objectFit="cover" objectPosition="top"/>
              </div>
              <p className="-ft-2">Eduardo M.</p>
            </div>
            <div className="-ft-1 w-3/4">
              <p className="flex gap-4"><span className="material-icons text-yellow-300">star star star star star</span>5/5
              </p>
              <p>Hicieron posible un diseño que representa nuestro amor de una manera única. Ver la emoción de mi novia
                al recibirlo no tuvo precio.</p>
            </div>
          </div>
          <div className="flex gap-8 p-8 border">
            <div className="flex flex-col justify-center items-center w-1/4">
              <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-4">
                <Image src={paola} layout="fill" objectFit="cover"/>
              </div>
              <p className="-ft-2">Paola G.</p>
            </div>
            <div className="-ft-1 w-3/4">
              <p className="flex gap-4"><span className="material-icons text-yellow-300">star star star star star</span>4.5/5
              </p>
              <p>Desde los bocetos entendieron lo que quería, esta pieza tiene mucho significado para mi y quedó
                perfecta.</p>
            </div>
          </div>
          <div className="flex gap-8 p-8 border">
            <div className="flex flex-col justify-center items-center w-1/4">
              <div className="relative w-full pt-[100%] rounded-full overflow-hidden mb-4">
                <Image src={alejandro} layout="fill" objectFit="contain"/>
              </div>
              <p className="-ft-2">Alejandro T.</p>
            </div>
            <div className="-ft-1 w-3/4">
              <p className="flex gap-4"><span className="material-icons text-yellow-300">star star star star star</span>5/5
              </p>
              <p>Todo estuvo perfecto, desde la primera sesión hasta la entrega de nuestros anillos de bodas.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    type: 'radio',
    name: 'material',
    title: '¿De qué material?',
    options: [
      {value: 'oro-18k', label: 'Oro 18k (amarillo, blanco o rosado)'},
      {value: 'oro-14k', label: 'Oro 14k (amarillo, blanco o rosado)'},
      {value: 'platino', label: 'Platino'},
    ],
    cols: 1,
    inputOptions: {required: true},
  },
  {
    name: 'stone',
    title: '¿Con qué gemas?',
    type: 'radio',
    options: [
      {value: 'diamante', label: 'Diamante natural'},
      {value: 'zafiro', label: 'Zafiro'},
      {value: 'esmeralda', label: 'Esmeralda'},
      {value: 'rubi', label: 'Rubí'},
      {value: 'otra', label: 'Otras gemas'},
      {value: 'sin-gema', label: 'No quiero gemas'},
    ],
    cols: 1,
    inputOptions: {required: true},
  },
  {
    type: 'checkpoint',
    name: 'checkpoint',
    render: () => (
      <div className={`relative my-12 flex-grow}`}>
        <p className="ft-6 sans text-center font-bold">Joyería con gemas preciosas certificadas</p>
        <div className="relative w-full my-8 pt-[80%] rounded-2xl overflow-hidden">
          <Image src={i04} layout="fill" objectFit="cover"/>
        </div>
        <p className="ft-2 mt-4 text-center mb-12">Oro de 18K, oro de 14K, platino y gemas preciosas con certificación
          GIA</p>
      </div>
    ),
  },
  {
    type: 'text',
    name: 'name',
    title: 'Regálame tu nombre',
    inputOptions: {required: true},
  },
  {
    type: 'tel',
    name: 'phone',
    title: 'Ahora un WhatsApp para contactarte',
    inputOptions: {required: true, maxLength: 10, minLength: 10},
  },
];

export default function Survey() {
  const [showIntro, setShowIntro] = useState(true);
  const [showOutro, setShowOutro] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const [inputError, setInputError] = useState(null);
  const [sending, setSending] = useState(false);
  const methods = useForm({mode: 'all'});
  const {
    register,
    handleSubmit,
    formState: {errors},
    watch,
  } = methods;

  const ocasion = watch('ocasion');
  console.log(ocasion);

  const steps = useMemo(() => {
    return formSteps(ocasion).map(step => {
      if (typeof step.options === 'function') {
        return {...step, options: step.options(ocasion)};
      }
      return step;
    });
  }, [ocasion]);

  useEffect(() => {
    if (showIntro) {
      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showIntro]);

  const lastInputIndex = steps.reduce((lastIndex, step, i) => {
    return step.type !== 'checkpoint' ? i : lastIndex;
  }, 0);

  const handleNext = async () => {
    const currentStep = steps[formStep];
    if (currentStep.type === 'checkpoint') {
      return setFormStep((prev) => Math.min(prev + 1, steps.length - 1));
    }

    const valid = await methods.trigger(currentStep.name);
    if (!valid) {
      setInputError(formStep);
      return;
    }

    setInputError(null);
    window.scrollTo(0, 0);
    setFormStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const onSubmit = async (data) => {
    console.log(data);
    setSending(true);
    try {
      const _fbc = getCookie('_fbc');
      const _fbp = getCookie('_fbp');
      data.whatsapp = '52' + data.phone.replace(/^(MX)?\+?(52)?\s?0?1?|\s|\(|\)|-|[a-zA-Z]/g, '');

      const payload = {...data, _fbc, _fbp};

      await fetch(info.surveyWebhook, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      await fbEvent('Lead', {phone: data.whatsapp});

      if (info.surveyRedirect) {
        const forwardLink = document.createElement('a');
        forwardLink.href = `${info.surveyRedirect}?name=${data.name}&email=${data.email}&phone=${data.whatsapp}`;
        forwardLink.target = '_blank';
        forwardLink.click();
      }

      setShowOutro(true);
    } catch (err) {
      console.error('Error al enviar formulario:', err);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <div className="relative flex flex-col flex-grow pointer-events-none">
        <AnimatePresence mode="wait">
          {showIntro && (
            <motion.div
              key="intro"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.5}}
              className="relative flex-grow flex flex-col items-center justify-center bg-[url('/survey/bg-marmol.png')] bg-cover px-4"
            >
              <div className="container flex flex-col justify-center items-center">
                <div className="relative inset-x-0 w-full pt-[10rem] md:pt-[15rem]">
                  <Image src={i01} layout="fill" className="object-cover md:object-contain"/>
                </div>
                <h1 className="ft-10 font-semibold my-12 text-center">Cada historia de amor, cada logro merece un
                  símbolo
                  eterno</h1>
                <p className="text-gray-600 mb-4 text-center">Cargando el test de personalización</p>

                <div className="w-full max-w-sm h-8 bg-gray-200 rounded-2xl overflow-hidden">
                  <motion.div
                    initial={{width: '0%'}}
                    animate={{width: '100%'}}
                    transition={{duration: 5, ease: 'easeInOut'}}
                    className="h-full bg-brand-1"
                  />
                </div>
              </div>
            </motion.div>
          )}
          {!showIntro && !showOutro && (
            <motion.div
              key="survey"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.5}}
              className="flex flex-col flex-grow pb-[8rem]"
            >
              <div className="fixed inset-x-0 top-[40px] bg-gray-100 z-10">
                <div className={`h-4 bg-brand-1`} style={{width: `${((formStep + 1) / steps.length) * 100}%`}}/>
              </div>
              <div
                className="relative container !px-0 md:pb-0 flex flex-col flex-grow md:flex-grow-0 items-center pointer-events-auto touch-auto">
                <div className="survey-card">
                  <FormProvider {...methods}>
                    <form className="flex flex-col flex-grow" onSubmit={handleSubmit(onSubmit)}>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={formStep} // importante para animaciones entre pasos
                          initial={{opacity: 0, x: 100}}
                          animate={{opacity: 1, x: 0}}
                          exit={{opacity: 0, x: -100}}
                          transition={{duration: 0.4, ease: 'easeInOut'}}
                        >
                          <StepRenderer
                            step={steps[formStep]}
                            index={formStep}
                            currentStep={formStep}
                            inputError={inputError}
                            register={register}
                          />
                        </motion.div>
                      </AnimatePresence>
                      <div
                        className={`fixed p-8 bottom-0 inset-x-0 grid ${steps[formStep].type === 'checkpoint' ? 'grid-cols-1' : 'grid-cols-2'} gap-8 w-full mt-auto bg-white border-t-2 border-gray-200 z-50`}>
                        {steps[formStep].type !== 'checkpoint' &&
                          <button
                            type="button"
                            onClick={() => setFormStep(formStep - 1)}
                            className="!bg-transparent !text-brand-3 border-none !w-full hover:text-brand-1 disabled:!text-gray-100"
                            disabled={formStep <= 0}
                          >Atrás
                          </button>
                        }
                        <button
                          type="button"
                          disabled={sending}
                          onClick={() => {
                            if (formStep === lastInputIndex) {
                              handleSubmit(onSubmit)();
                            } else {
                              handleNext();
                            }
                          }}
                          className="mt-auto !w-full"
                        >
                          {sending && <span className="animate-spin mr-4">+</span>}
                          {formStep === lastInputIndex ? 'Continuar' : 'Siguiente'}
                        </button>
                      </div>
                    </form>
                  </FormProvider>
                </div>
              </div>
            </motion.div>
          )}
          {showOutro && (
            <div
              className="relative container !px-0 md:pb-0 flex flex-col flex-grow md:flex-grow-0 items-center pointer-events-auto touch-auto">
              <div className="survey-card">
                <div className={`relative flex-grow`}>
                  <div className="relative w-full my-8 pt-[60%] rounded-2xl overflow-hidden">
                    <Image src={i05} layout="fill" objectFit="cover"/>
                  </div>
                  <p className="ft-6 sans text-center font-bold">Cada gran momento merece ser celebrado</p>
                  <p className="ft-2 mt-4 text-center mb-12">
                    Cada pieza que creamos es un reflejo de tu esencia. Diseñamos joyería
                    personalizada con oro 18k, oro 14k, platino y piedras preciosas certificadas, cuidando cada detalle para que tu
                    joya trascienda generaciones.
                  </p>
                </div>
                <div
                  className={`fixed p-8 bottom-0 inset-x-0 grid grid-cols-1 gap-8 w-full mt-auto bg-white border-t-2 border-gray-200 z-50`}>
                  <Link href="/">
                    <a className="button mt-auto !w-full">Continuar</a>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}