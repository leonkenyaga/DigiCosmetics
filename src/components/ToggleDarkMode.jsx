import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classNames(
        enabled ? 'bg-transparent' : 'bg-transparent',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-darkBlue transition-colors duration-200 ease-in-out'
      )}
    >
      <span className='sr-only'>Use setting</span>
      <span
        className={classNames(
          enabled ? 'translate-x-5' : '-translate-x-15',
          'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-transparent shadow ring-0 transition duration-200 ease-in-out'
        )}
      >
        <span
          className={classNames(
            enabled
              ? 'opacity-0 duration-100 ease-out'
              : 'opacity-100 duration-200 ease-in',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden='true'
        >
          <SunIcon
            className='h-6 w-6 flex-shrink-0 fill-[#FFE87C]'
            aria-hidden='true'
            weight='duotone'
            color='#254F6E'
            fill='#254F6E'
            strokeWidth={2}
          />
        </span>
        <span
          className={classNames(
            enabled
              ? 'opacity-100 duration-200 ease-in'
              : 'opacity-0 duration-100 ease-out',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden='true'
        >
          <MoonIcon
            className='h-6 w-6 flex-shrink-0 fill-[#91a3b0]'
            aria-hidden='true'
            weight='duotone'
            color='#254F6E'
            fill='#254F6E'
            strokeWidth={2}
          />
        </span>
      </span>
    </Switch>
  );
}
