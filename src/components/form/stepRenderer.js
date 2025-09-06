import { Radio, Select } from './formAtoms';
import { restrictNumber } from '../../utils/formValidators';

export default function StepRenderer({
  step,
  index,
  currentStep,
  inputError,
  register,
}) {
  if (index !== currentStep) return null;

  const commonText = (
    <div className="mb-12">
      <p className="ft-4 sans font-bold" dangerouslySetInnerHTML={{ __html: step.title }} />
      {step.description && (
        <p className="ft-2 mt-4" dangerouslySetInnerHTML={{ __html: step.description }} />
      )}
    </div>
  );

  switch (step.type) {
    case 'text':
    case 'tel':
      return (
        <div className="my-20 flex-grow">
          {commonText}
          <input
            {...register(step.name, step.inputOptions)}
            type={step.type}
            placeholder={step.placeholder}
            onKeyDown={step.type === 'tel' ? restrictNumber : undefined}
            className={inputError === index ? '!border-brand-2 mt-12' : 'mt-12'}
          />
        </div>
      );

    case 'textarea':
      return (
        <div className="my-20 flex-grow">
          {commonText}
          <textarea
            {...register(step.name, step.inputOptions)}
            placeholder={step.placeholder}
            rows={step.cols || 4}
            className={inputError === index ? '!border-brand-2 mt-12' : 'mt-12'}
          />
        </div>
      );

    case 'radio':
      return (
        <div className="my-8 flex flex-col">
          {commonText}
          <Radio
            name={step.name}
            inputOptions={step.inputOptions}
            placeholder={step.placeholder}
            options={step.options}
            optCols={step.cols}
            className={inputError === index ? '!border-brand-2' : undefined}
          />
        </div>
      );

    case 'select':
      return (
        <div className="my-20 flex flex-col">
          {commonText}
          <Select
            name={step.name}
            inputOptions={step.inputOptions}
            placeholder={step.placeholder}
            options={step.options}
            className={inputError === index ? '!border-brand-2' : undefined}
          />
        </div>
      );

    case 'checkpoint':
      return step.render();

    default:
      return null;
  }
}
