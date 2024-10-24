import { v4 as uuid } from 'uuid';
import { CheckedOutline, ChevronArrow } from '@/utils/icons';
import MobileHeader from './MobileHeader';

const Steps = ({
  steps,
  current,
  opened,
  normal = false,
  setCurrent,
  nextOnClick,
}) => {
  const LAST_IDX = steps?.length && steps.length - 1;

  const enabledStepChecker = (index) => {
    if (Number.isInteger(opened)) {
      return index > opened;
    } else {
      return index > current;
    }
  };

  const getIcon = (index) => {
    if (index === current) {
      return steps[index].activeIcon;
    }

    if (steps[index].isDone) {
      return <CheckedOutline />;
    }

    return steps[index].icon;
  };

  const onStepClick = (index) => {
    setCurrent(index);
  };

  const renderHeaders = (inMobile = false) =>
    steps.map((item, idx) => [
      <button
        key={uuid()}
        className={[
          'normal_btn flex gap-1 text-gray-400 text-sm font-medium rounded-full hover:text-gray-400',
          item.isDone ? '!text-dark' : '',
          idx === current
            ? `${
                normal ? 'bg-primary/10' : 'bg-primary/5'
              } !text-dark border-2 border-primary`
            : '',
        ].join(' ')}
        disabled={enabledStepChecker(idx)}
        onClick={() => onStepClick(idx)}
      >
        {getIcon(idx)}

        {item.title}
      </button>,
      inMobile ||
        (idx < LAST_IDX && <ChevronArrow key={uuid()} rotate='right' />),
    ]);

  return (
    steps?.length > 0 && (
      <div className='flex flex-col gap-4.5'>
        <MobileHeader
          steps={steps}
          current={current}
          normal={normal}
          renderHeaders={renderHeaders}
        />

        <div className='hidden lg:flex justify-center items-center flex-wrap gap-3'>
          {renderHeaders()}
        </div>

        <div className={normal ? '' : 'bg-white rounded-3xl shadow p-4.5'}>
          {steps[current].content}

          <div className='flex justify-center lg:justify-end gap-2 mt-4.5'>
            {current === 0 || (
              <button
                className='normal_btn text-dark rounded-full'
                onClick={() => setCurrent(current - 1)}
              >
                Өмнөх
              </button>
            )}

            <button className='first_btn rounded-full' onClick={nextOnClick}>
              {current === LAST_IDX ? 'Болсон' : 'Дараах'}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Steps;
