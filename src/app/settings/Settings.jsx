'use client';

import { useEffect, useState } from 'react';
import { BiGame, BiArch } from 'react-icons/bi';
import { v4 as uuid } from 'uuid';
import {
  Calendar,
  CheckedOutline,
  ChevronArrow,
  Employees,
  TimeSettings,
} from '@/utils/icons';
import AdminLayout from '@/layouts/AdminLayout';
import Box from '@/components/Box';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

const Settings = ({ title }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [openedStep, setOpenedStep] = useState(0);

  const STEPS = [
    {
      num: 0,
      icon: <BiGame />,
      title: 'Хувийн мэдээлэл',
      content: <Step1 setCurrentStep={setCurrentStep} />,
      isDone: false,
    },
    {
      num: 1,
      icon: <BiArch />,
      title: 'Үйлчилгээнүүд',
      content: <Step2 setCurrentStep={setCurrentStep} />,
      isDone: false,
    },
    {
      num: 2,
      icon: <Employees />,
      title: 'Ажилтнууд',
      content: <Step3 setCurrentStep={setCurrentStep} />,
      isDone: false,
    },
    {
      num: 3,
      icon: <Calendar />,
      title: 'Цагийн хуваарь',
      content: <Step4 setCurrentStep={setCurrentStep} />,
      isDone: false,
    },
    {
      num: 4,
      icon: <TimeSettings />,
      title: 'Цаг захиалга',
      content: <Step5 setCurrentStep={setCurrentStep} />,
      isDone: false,
    },
  ];

  const checkDone = (index) => {
    if (index === openedStep || STEPS[openedStep].isDone) {
      return true;
    }

    return STEPS[index].isDone;
  };

  const nextHandler = () => {
    setCurrentStep((prev) => prev + 1);

    const done = { ...STEPS[currentStep], isDone: true };
    STEPS.splice(currentStep, 1, done);

    setSteps(STEPS);

    setOpenedStep(currentStep + 1);

    console.log('NEXT on clicked--->', STEPS);
  };

  const doneOnClick = () => {
    const done = { ...STEPS.pop(), isDone: true };
    STEPS.push(done);

    setSteps(STEPS);

    setOpenedStep(STEPS.length - 1);

    console.log('DONE on clicked--->', STEPS);
  };

  return (
    <AdminLayout>
      <Box
        title={title}
        noDivider
      >
        <div>
          <div className='flex justify-center items-center gap-3'>
            {STEPS.map((step, idx) => [
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
              idx + 1 < STEPS.length && (
                <ChevronArrow
                  key={uuid()}
                  rotate='right'
                />
              ),
            ])}
          </div>

          <div>
            {STEPS[currentStep]?.content}

            <ul className='mt-6'>
              <li>
                Prev is title:{' '}
                {currentStep > 0 && String(STEPS[currentStep - 1].title)}
              </li>
              <li>
                Prev is done:{' '}
                {currentStep > 0 && String(STEPS[currentStep - 1].isDone)}
              </li>
            </ul>

            <div className='flex justify-end gap-2'>
              {currentStep > 0 && (
                <button
                  className='normal_btn'
                  onClick={() => setCurrentStep((prev) => prev - 1)}
                >
                  Өмнөх
                </button>
              )}

              {currentStep + 1 === STEPS.length ? (
                <button onClick={doneOnClick}>Болсон</button>
              ) : (
                <button
                  className='normal_btn'
                  onClick={nextHandler}
                >
                  Дараах
                </button>
              )}
            </div>
          </div>
        </div>
      </Box>
    </AdminLayout>
  );
};

export default Settings;
