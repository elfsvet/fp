'use client';

import {
  ExclamationTriangleIcon,
} from '@heroicons/react/20/solid';

export enum eAlertsVariant {
  error = 'error',
  warning = 'warning',
  success = 'success',
  info = 'info',
}

export default function WarningAlert({
  alertText = 'alert text',
  alertWarning = 'alert warning',
}: {
  alertText: string;
  alertWarning: string;
}) {
  return (
    <div className='rounded-md bg-yellow-50 p-4'>
      <div className='flex'>
        <div className='flex-shrink-0'>
          <ExclamationTriangleIcon className='h-5 w-5 text-yellow-400' aria-hidden='true' />
        </div>
        <div className='ml-3'>
          <h3 className='text-sm font-medium text-yellow-800'>{alertWarning}</h3>
          <div className='mt-2 text-sm text-yellow-700'>
            <p>{alertText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
