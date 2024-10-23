const Step = ({ steps }) => {
  return (
    <div className='flex justify-center items-center gap-3'>
      {steps.map((step, idx) => [
        <button
          key={step.num}
          className={[
            'normal_btn flex gap-1 text-gray-400 text-sm font-medium rounded-full',
            step.isDone ? '!text-dark' : '',
            idx === currentStep
              ? 'bg-primary/10 !text-dark border-2 border-primary'
              : '',
          ].join(' ')}
          disabled={!checkDone(idx)}
          onClick={() => setCurrentStep(idx)}
        >
          {step.isDone ? <CheckedOutline /> : step.icon}
          {step.title}
        </button>,
        idx + 1 < steps.length && (
          <ChevronArrow
            key={uuid()}
            rotate='right'
          />
        ),
      ])}
    </div>
  );
};

export default Step;
