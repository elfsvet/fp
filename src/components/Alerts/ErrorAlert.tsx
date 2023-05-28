'use client';

import {
  ExclamationTriangleIcon,
  XCircleIcon,
  InformationCircleIcon,
  CheckCircleIcon,
} from '@heroicons/react/20/solid';

export enum eAlertsVariant {
  error = 'error',
  warning = 'warning',
  success = 'success',
  info = 'info',
}

export default function ErrorAlert({
  alertText = 'alert text',
  alertWarning = 'alert warning',
}: {
  alertText: string;
  alertWarning: string;
}) {
  return (
    <div className='rounded-md bg-red-50 p-4'>
      <div className='flex'>
        <div className='flex-shrink-0'>
          <XCircleIcon className='h-5 w-5 text-red-400' aria-hidden='true' />
        </div>
        <div className='ml-3'>
          <h3 className='text-sm font-medium text-red-800'>{alertWarning}</h3>
          <div className='mt-2 text-sm text-red-700'>
            <p>{alertText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
