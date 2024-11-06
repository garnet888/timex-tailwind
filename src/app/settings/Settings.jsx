'use client';

import { useState } from 'react';
import {
  CalendarIcon,
  DollIcon,
  UsersIcon,
  SearchingIcon,
  TimeSettingsIcon,
} from '@/utils/icons';
import AdminLayout from '@/layouts/AdminLayout';
import Box from '@/utils/Box';
import { Steps } from '@/ui';
import OrgaInfo from '@/components/Settings/OrgaInfo';
import Services from '@/components/Settings/Services';
import Employees from '@/components/Settings/Employees';
import Timetable from '@/components/Settings/Timetable';
import TimeOrder from '@/components/Settings/TimeOrder';

const Settings = ({ title }) => {
  const activeIconColor = 'var(--primary-color)';
  const initialSteps = [
    {
      icon: <DollIcon />,
      activeIcon: <DollIcon color={activeIconColor} />,
      title: 'Ажлын газар',
      content: <OrgaInfo />,
      isDone: false,
    },
    {
      icon: <SearchingIcon />,
      activeIcon: <SearchingIcon color={activeIconColor} />,
      title: 'Үйлчилгээнүүд',
      content: <Services />,
      isDone: false,
    },
    {
      icon: <UsersIcon />,
      activeIcon: <UsersIcon color={activeIconColor} />,
      title: 'Ажилтнууд',
      content: <Employees />,
      isDone: false,
    },
    {
      icon: <CalendarIcon />,
      activeIcon: <CalendarIcon color={activeIconColor} />,
      title: 'Цагийн хуваарь',
      content: <Timetable />,
      isDone: false,
    },
    {
      icon: <TimeSettingsIcon />,
      activeIcon: <TimeSettingsIcon color='var(--primary-color)' />,
      title: 'Цаг захиалга',
      content: <TimeOrder />,
      isDone: false,
    },
  ];

  const [steps, setSteps] = useState(initialSteps);
  const [currentStep, setCurrentStep] = useState(0);
  const [openedStep, setOpenedStep] = useState(0);

  const handleNextClick = () => {
    const last_idx = steps.length - 1;
    const nextStep = currentStep + 1;

    // setSteps((prev) =>
    //   prev.map((step, idx) => {
    //     if (idx === currentStep || idx < currentStep) {
    //       return { ...step, isDone: true };
    //     } else {
    //       return step;
    //     }
    //   })
    // );

    const done = { ...steps[currentStep], isDone: true };
    steps.splice(currentStep, 1, done);

    setSteps(steps);

    currentStep === last_idx || setCurrentStep(nextStep);
    setOpenedStep(nextStep);
  };

  return (
    <AdminLayout>
      <Box
        title={title}
        noDivider
      >
        <Steps
          steps={steps}
          current={currentStep}
          opened={openedStep}
          normal
          setCurrent={setCurrentStep}
          nextOnClick={handleNextClick}
        />
      </Box>
    </AdminLayout>
  );
};

export default Settings;
