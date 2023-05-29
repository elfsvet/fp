'use client';

import Image from 'next/image';
import mikhail from 'public/mikhail.jpg';
import stepan from 'public/stepan.jpg';
import slava from 'public/slava.jpg';
import Link from 'next/link';
import WarningAlert, { eAlertsVariant } from '@/components/Alerts/WarningAlert';
import NavBar from '@/components/NavBar';
import MyNav from '@/components/MyNav';
import { mikhail as mikhailText } from '../../data/mikhail';
import { slava as slavaText } from '../../data/slava';
import { stepan as stepanText } from '../../data/stepan';
import AboutCard from '@/components/AboutCard';
import PhoneCard from '@/components/PhoneCard';

export default function Home() {
  return (
    <main className=''>
      {/* <MyNav /> */}
      {/* <WarningAlert alertText='We are closed for walk in, please schedule an appointment.' alertWarning='Attention' /> */}
      {/* phone card */}
      <PhoneCard />
      {/* phone card */}
      <AboutCard image={mikhail} text={mikhailText.about} title='cosmetology' firstName='Mikhail' lastName='Shevelev' />
      <AboutCard
        image={slava}
        text={slavaText.about}
        title='nails'
        firstName='Viacheslav'
        lastName='Savidov'
        reverse={true}
      />
      <AboutCard image={stepan} text={stepanText.about} title='hair' firstName='Stepan' lastName='Matysik' />

      <Link
        href={`https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVOSZDEHgoh9is/znhp5gyXoERx3VS8vxhyCOuG9h1PDbeqjru07iFVN7KOlotgpRlmIdjcg5O7QK9k1pTlHaOJfwKdk4JQGUJsyV/pO6+eSElvdt1vEXFJJ8FeXYcqAdhZBqd/ATMeMiT2wdGxpsUChyMS2q3lCVT2KNxd1NLpRiXHJFAoFL2BldUvFkptMWejCKW7UIK+XEHBkB5r0l85pyJa75vcPD68pEQ9VqHVx6vhYWfxNha8L+Tsg4Ne62nD6LMx1aSb/9dVHiXT80taRsBkUEY1anrF2cFuk+SgOLo+KFNkx01G4MGf7e/rA4CxyO6q1+JnYTid5PKtRxPS4SWvGGiBJpqXV2ayGZc1WqNznWWMXhQQi+HS2KqvQbK6Uk/jaie74pzkBh2TsMUjM=`}
        className='rounded-md bg-fp justify-center items-center flex h-10 text-center px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        Book
      </Link>
    </main>
  );
}
