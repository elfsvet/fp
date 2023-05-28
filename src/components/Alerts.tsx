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

export default function Alert({
  alertText = 'alert text',
  alertWarning = 'alert warning',
  alertVariant = eAlertsVariant.error,
}: {
  alertText: string;
  alertWarning: string;
  alertVariant: eAlertsVariant;
}) {
  const variant = () => {
    switch (alertVariant) {
      case eAlertsVariant.warning:
        return `yellow`;
      case eAlertsVariant.error:
        return `red`;
      case eAlertsVariant.success:
        return `green`;
      case eAlertsVariant.info:
        return `blue`;
      default:
        return `orange`;
    }
  };

  const result = variant();
  console.log(result);
  return (
    <div className={`rounded-md bg-${result}-50 p-4`}>
      <div className='flex'>
        <div className='flex-shrink-0'>
          <ExclamationTriangleIcon className={`h-5 w-5 text-${result}-400`} aria-hidden='true' />
        </div>
        <div className='ml-3'>
          <h3 className={`text-sm font-medium text-${result}-800`}>{alertWarning}</h3>
          <div className={`mt-2 text-sm text-${result}-700`}>
            <p>{alertText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
