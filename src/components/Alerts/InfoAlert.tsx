'use client';

import {
  InformationCircleIcon,
} from '@heroicons/react/20/solid';

export enum eAlertsVariant {
  error = 'error',
  warning = 'warning',
  success = 'success',
  info = 'info',
}

export default function InfoAlert({
  alertText = 'alert text',
  alertWarning = 'alert warning',
}: {
  alertText: string;
  alertWarning: string;
}) {
  return (
    <div className='rounded-md bg-blue-50 p-4'>
      <div className='flex'>
        <div className='flex-shrink-0'>
          <InformationCircleIcon className='h-5 w-5 text-blue-400' aria-hidden='true' />
        </div>
        <div className='ml-3'>
          <h3 className='text-sm font-medium text-blue-800'>{alertWarning}</h3>
          <div className='mt-2 text-sm text-blue-700'>
            <p>{alertText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
