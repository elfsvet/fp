'use client';

import { Switch } from '@headlessui/react';
import { ChangeEvent, useState } from 'react';
import { eContactActions, useContactForm } from '@/src/hooks/useContactForm';
import PhoneCard from '@/src/components/PhoneCard';
import { Metadata } from 'next';
import ScrollUpButton from '@/src/components/Buttons/ScrollUpButton';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Contacts() {
  const [contactState, dispatch] = useContactForm();

  const handleSubmitContactForm = () => {
    const { firstName, lastName, phone, email, message, agreed } = contactState;
    if (agreed === false || !firstName || !lastName || !email || !message) {
      console.log('need to finish the form');
      return;
    } else {
      console.log('submitted with ', contactState);
    }
  };
  return (
    <div className='bg-white px-6 py-4 sm:py-10 lg:px-8'>
      <PhoneCard light={true} />
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Contact us</h2>
        <p className='mt-2 text-lg leading-8 text-gray-600'>
          We are always happy to answer any of your questions and take into account your suggestions.
        </p>
      </div>
      {/* <form action='#' method='POST' className='mx-auto mt-16 max-w-xl sm:mt-20'>
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div>
            <label htmlFor='first-name' className='block text-sm font-semibold leading-6 text-gray-900'>
              First name
            </label>
            <div className='mt-2.5'>
              <input
                type='text'
                name='first-name'
                id='first-name'
                autoComplete='given-name'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fp sm:text-sm sm:leading-6'
                value={contactState.firstName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  dispatch({ type: eContactActions.CONTACT_FIRST_NAME, payload: { firstName: e.target.value } });
                }}
              />
            </div>
          </div>
          <div>
            <label htmlFor='last-name' className='block text-sm font-semibold leading-6 text-gray-900'>
              Last name
            </label>
            <div className='mt-2.5'>
              <input
                type='text'
                name='last-name'
                id='last-name'
                autoComplete='family-name'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fp sm:text-sm sm:leading-6'
                value={contactState.lastName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  dispatch({ type: eContactActions.CONTACT_LAST_NAME, payload: { lastName: e.target.value } });
                }}
              />
            </div>
          </div>

          <div className='sm:col-span-2'>
            <label htmlFor='email' className='block text-sm font-semibold leading-6 text-gray-900'>
              Email
            </label>
            <div className='mt-2.5'>
              <input
                type='email'
                name='email'
                id='email'
                autoComplete='email'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fp sm:text-sm sm:leading-6'
                value={contactState.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  dispatch({ type: eContactActions.CONTACT_EMAIL, payload: { email: e.target.value } });
                }}
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor='phone-number' className='block text-sm font-semibold leading-6 text-gray-900'>
              Phone number
            </label>
            <div className='relative mt-2.5'>
              <input
                type='tel'
                name='phone-number'
                id='phone-number'
                autoComplete='tel'
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fp sm:text-sm sm:leading-6'
                value={contactState.phone}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  dispatch({ type: eContactActions.CONTACT_PHONE, payload: { phone: e.target.value } });
                }}
              />
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor='message' className='block text-sm font-semibold leading-6 text-gray-900'>
              Message
            </label>
            <div className='mt-2.5'>
              <textarea
                name='message'
                id='message'
                rows={4}
                className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fp sm:text-sm sm:leading-6'
                value={contactState.message}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                  dispatch({ type: eContactActions.CONTACT_MESSAGE, payload: { message: e.target.value } });
                }}
              />
            </div>
          </div>
          <Switch.Group as='div' className='flex gap-x-4 sm:col-span-2'>
            <div className='flex h-6 items-center'>
              <Switch
                checked={contactState.agreed}
                onChange={() =>
                  dispatch({ type: eContactActions.CONTACT_AGREED, payload: { agreed: !contactState.agreed } })
                }
                className={classNames(
                  contactState.agreed ? 'bg-fp' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fp'
                )}
              >
                <span className='sr-only'>Agree to policies</span>
                <span
                  aria-hidden='true'
                  className={classNames(
                    contactState.agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className='text-sm leading-6 text-gray-600'>
              By selecting this, you agree to our{' '}
              <a href='#' className='font-semibold text-fp'>
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className='mt-10'>
          <button
            type='submit'
            className='block w-full rounded-md bg-fp px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fp'
            onClick={handleSubmitContactForm}
          >
            Lets talk
          </button>
        </div>
      </form> */}
      <ScrollUpButton />
    </div>
  );
}
