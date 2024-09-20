'use client';

import { useState } from 'react';
import { DiApple, DiAndroid } from 'react-icons/di';
import Layout from '@/layouts/Layout';
import InputAddon from '@/ui/InputAddon';
import Textarea from '@/ui/Textarea';
import Select from '@/ui/Select';

const RenderAbout = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = (which = '') => [
    { value: `${which + ' [chocolate]'}`, label: `${which + ' [Chocolate]'}` },
    { value: `${which + ' [coffee]'}`, label: `${which + ' [Coffee]'}` },
    { value: `${which + ' [apple ade]'}`, label: `${which + ' [Apple ade]'}` },
    { value: `${which + ' [vanilla]'}`, label: `${which + ' [Vanilla]'}` },
  ];

  const selectOnChange = (which, option) => {
    console.log(`${which}--->`, option);

    setSelectedOption(option && option.value);
  };

  return (
    <Layout>
      <div className='flex flex-col-reverse md:grid md:grid-cols-2 gap-8 p-4'>
        <div>
          <div className='border-b border-blue-400 pb-4 mb-8'>
            <h1>Цаг захиалгын платформ</h1>
            <p>
              Бид танд захиалга, үйл ажиллагаагаа төлөвлөх хялбар шийдлийг санал
              болгож байна.
            </p>
          </div>

          <div className='border-b border-blue-400 pb-6 mb-8'>
            <h1>This is heading 1</h1>
            <h2>This is heading 2</h2>
            <h3>This is heading 3</h3>
            <h4>This is heading 4</h4>
            <h5>This is heading 5</h5>
            <h6>This is heading 6</h6>
          </div>

          <div className='flex flex-col gap-2 border-b border-blue-400 pb-6 mb-8'>
            <button>Primary button</button>
            <button disabled>Disabled button</button>

            <button className='first_btn'>First button</button>
            <button className='second_btn'>Second button</button>
            <button className='third_btn'>Third button</button>
            <button className='normal_btn'>Normal button</button>

            <button className='text_btn'>Text button</button>
          </div>

          <div className='flex flex-col gap-2 border-b border-blue-400 pb-6 mb-8'>
            <input placeholder='Primary' />
            <input placeholder='Disabled' disabled />

            <input className='alert_input' placeholder='Alert' />
            <input
              className='no_arrow'
              placeholder='Number (No arrow)'
              type='number'
            />
            <input placeholder='Number' type='number' />
            <input className='rounded_input' placeholder='Rounded' />

            <InputAddon
              placeholder='Before addon input'
              before={<DiApple size={20} color='var(--primary-color)' />}
            />

            <InputAddon
              placeholder='Alert before addon input'
              before={<DiApple size={20} color='var(--primary-color)' />}
              alert
            />

            <InputAddon
              placeholder='After addon input'
              after={<DiAndroid size={20} color='var(--primary-color)' />}
            />

            <InputAddon
              placeholder='Alert after addon input'
              after={<DiAndroid size={20} color='var(--primary-color)' />}
              alert
            />

            <InputAddon
              placeholder='Both addon input'
              before={<DiApple size={20} color='var(--primary-color)' />}
              after={<DiAndroid size={20} color='var(--primary-color)' />}
            />

            <InputAddon
              placeholder='Both addon input'
              before={<DiApple size={20} color='var(--primary-color)' />}
              after={<DiAndroid size={20} color='var(--primary-color)' />}
              alert
            />

            <InputAddon
              placeholder='Both addon input'
              before={<DiApple size={20} color='var(--primary-color)' />}
              after={<DiAndroid size={20} color='var(--primary-color)' />}
              disabled
            />
          </div>

          <div className='flex flex-col gap-2 border-b border-blue-400 pb-6 mb-8'>
            <Textarea placeholder='Primary' />
            <Textarea placeholder='Disabled' disabled />

            <Textarea placeholder='Counted' shownCount maxLength={100} />

            <Textarea placeholder='Alert' type='alert' />
          </div>

          <div className='flex flex-col gap-2 border-b border-blue-400 pb-6 mb-8'>
            <Select
              options={options()}
              value={selectedOption}
              onChange={(opt) => selectOnChange('Default', opt)}
            />

            <Select
              options={options('Searchable')}
              value={selectedOption}
              placeholder='Searchable'
              searchable
              onChange={(opt) => selectOnChange('Searchable', opt)}
            />

            <Select
              options={options('Multiple')}
              value={selectedOption}
              placeholder='Multiple'
              multiple
              onChange={(opt) => selectOnChange('Multiple', opt)}
            />

            <Select
              options={options('Disabled')}
              value={selectedOption}
              placeholder='Disabled'
              disabled
              onChange={(opt) => selectOnChange('Disabled', opt)}
            />

            <Select
              options={options('Rounded')}
              value={selectedOption}
              placeholder='Rounded'
              rounded
              onChange={(opt) => selectOnChange('Rounded', opt)}
            />

            <Select
              options={options('Rounded multiple')}
              value={selectedOption}
              placeholder='Rounded multiple'
              rounded
              multiple
              onChange={(opt) => selectOnChange('Rounded multiple', opt)}
            />
          </div>
        </div>

        <div className='relative grid place-content-center md:place-content-start'>
          <ul className='sticky top-[80px] w-[320px] h-[320px] overflow-auto list-decimal bg-cyan-200 rounded-lg pl-10 p-2'>
            <li>Prefix input</li>
            <li>Password input</li>
            <li>Image Cutter</li>
            <li>Form inputs</li>
            <li>Avatar</li>
            <li>Upload image</li>
            <li>Preview image</li>
            <li>Checkbox/Radiobox</li>
            <li>Modal /npm/</li>
            <li>Tabs /npm/</li>
            <li>Collapse /npm/</li>
            <li>Switch</li>
            <li>Date picker</li>
            <li>Carousel</li>
            <li>Toast</li>
            <li>Table</li>
            <li>Chart</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default RenderAbout;
