'use client';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import logo from 'public/logo.png';

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
                <div className='flex-shrink-0'>
                  <Image className='block h-24 mt-10 w-auto lg:hidden' src={logo} alt='Fashion Point' />
                  <Image className='hidden h-28 mt-10 w-auto lg:block' src={logo} alt='Fashion Point' />
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <a href='#' className='rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white'>
                      About
                    </a>
                    <a
                      href='https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVOSZDEHgoh9is/znhp5gyXoERx3VS8vxhyCOuG9h1PDbeqjru07iFVN7KOlotgpRlmIdjcg5O7QK9k1pTlHaOJfwKdk4JQGUJsyV/pO6+eSElvdt1vEXFJJ8FeXYcqAdhZBqd/ATMeMiT2wdGxpsUChyMS2q3lCVT2KNxd1NLpRiXHJFAoFL2BldUvFkptMWejCKW7UIK+XEHBkB5r0l85pyJa75vcPD68pEQ9VqHVx6vhYWfxNha8L+Tsg4Ne62nD6LMx1aSb/9dVHiXT80taRsBkUEY1anrF2cFuk+SgOLwlMNM6/4NG8lPhYht8u9byWhSUZrvpf3NzGO1qmK7+mutdIItdAA9IrlWnM8S4KBHq16xFVfqAHQJwQt7IbM66exEhopoe8Y+19DRvKSPh8='
                      className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                    >
                      Service
                    </a>
                    <a
                      href='#'
                      className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                    >
                      Contacts
                    </a>
                    <a
                      href='https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVOSZDEHgoh9is/znhp5gyXoERx3VS8vxhyCOuG9h1PDbeqjru07iFVN7KOlotgpRlmIdjcg5O7QK9k1pTlHaOJfwKdk4JQGUJsyV/pO6+eSElvdt1vEXFJJ8FeXYcqAdhZBqd/ATMeMiT2wdGxpsUChyMS2q3lCVT2KNxd1NLpRiXHJFAoFL2BldUvFkptMWejCKW7UIK+XEHBkB5r0l85pyJa75vcPD68pEQ9VqHVx6vhYWfxNha8L+Tsg4Ne62nD6LMx1aSb/9dVHiXT80taRsBkUEY1anrF2cFuk+SgOLo+KFNkx01G4MGf7e/rA4CxyO6q1+JnYTid5PKtRxPS4SWvGGiBJpqXV2ayGZc1WqNznWWMXhQQi+HS2KqvQbK6Uk/jaie74pzkBh2TsMUjM='
                      className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
                    >
                      Book
                    </a>
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
                href='#'
                className='block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white'
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVOSZDEHgoh9is/znhp5gyXoERx3VS8vxhyCOuG9h1PDbeqjru07iFVN7KOlotgpRlmIdjcg5O7QK9k1pTlHaOJfwKdk4JQGUJsyV/pO6+eSElvdt1vEXFJJ8FeXYcqAdhZBqd/ATMeMiT2wdGxpsUChyMS2q3lCVT2KNxd1NLpRiXHJFAoFL2BldUvFkptMWejCKW7UIK+XEHBkB5r0l85pyJa75vcPD68pEQ9VqHVx6vhYWfxNha8L+Tsg4Ne62nD6LMx1aSb/9dVHiXT80taRsBkUEY1anrF2cFuk+SgOLwlMNM6/4NG8lPhYht8u9byWhSUZrvpf3NzGO1qmK7+mutdIItdAA9IrlWnM8S4KBHq16xFVfqAHQJwQt7IbM66exEhopoe8Y+19DRvKSPh8='
                className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
              >
                Service
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='#'
                className='block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
              >
                Contacts
              </Disclosure.Button>
              <Disclosure.Button
                as='a'
                href='https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVOSZDEHgoh9is/znhp5gyXoERx3VS8vxhyCOuG9h1PDbeqjru07iFVN7KOlotgpRlmIdjcg5O7QK9k1pTlHaOJfwKdk4JQGUJsyV/pO6+eSElvdt1vEXFJJ8FeXYcqAdhZBqd/ATMeMiT2wdGxpsUChyMS2q3lCVT2KNxd1NLpRiXHJFAoFL2BldUvFkptMWejCKW7UIK+XEHBkB5r0l85pyJa75vcPD68pEQ9VqHVx6vhYWfxNha8L+Tsg4Ne62nD6LMx1aSb/9dVHiXT80taRsBkUEY1anrF2cFuk+SgOLo+KFNkx01G4MGf7e/rA4CxyO6q1+JnYTid5PKtRxPS4SWvGGiBJpqXV2ayGZc1WqNznWWMXhQQi+HS2KqvQbK6Uk/jaie74pzkBh2TsMUjM='
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
