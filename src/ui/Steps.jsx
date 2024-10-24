import { v4 as uuid } from 'uuid';
import { CheckedOutline, ChevronArrow } from '../utils/icons';

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

  return (
    steps?.length > 0 && (
      <div className='flex flex-col gap-4.5'>
        <div className='flex justify-center items-center gap-3'>
          {steps.map((item, idx) => [
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
            idx < LAST_IDX && (
              <ChevronArrow
                key={uuid()}
                rotate='right'
              />
            ),
          ])}
        </div>

        <div className={normal ? '' : 'bg-white rounded-3xl shadow p-4.5'}>
          {steps[current].content}

          <div className='flex justify-end gap-2'>
            {current === 0 || (
              <button
                className='normal_btn text-dark rounded-full'
                onClick={() => setCurrent(current - 1)}
              >
                Өмнөх
              </button>
            )}

            <button
              className='first_btn rounded-full'
              onClick={nextOnClick}
            >
              {current === LAST_IDX ? 'Болсон' : 'Дараах'}
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Steps;