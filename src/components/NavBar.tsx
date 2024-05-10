'use client';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import logo from '@/public/logo.png';
import Link from 'next/link';
import { linkServicesFp, linkToBookFp } from '@/data/links';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 justify-between'>
              <div className='flex items-center w-full justify-between'>
                <Link href={'/'} className='flex-shrink-0'>
                  <Image className='block h-16 w-auto sm:hidden' src={logo} alt='Fashion Point' />
                  <Image className='hidden h-28 mt-10 w-auto sm:block' src={logo} alt='Fashion Point' />
                </Link>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link
                      href='/About'
                      className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                    >
                      About
                    </Link>
                    <Link
                      href={linkServicesFp}
                      className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                    >
                      Service
                    </Link>
                    <Link
                      href='/Contacts'
                      className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                    >
                      Contacts
                    </Link>
                    <Link
                      href={linkToBookFp}
                      className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </div>
              <div className='-mr-2 flex sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pb-3 pt-2'>
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as='a'
                href='/About'
                className='block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white'
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href={linkServicesFp}
                className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
              >
                Service
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='/Contacts'
                className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
              >
                Contacts
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href={linkToBookFp}
                className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
              >
                Book
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
