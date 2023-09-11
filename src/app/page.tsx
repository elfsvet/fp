'use client';

import WarningAlert, { eAlertsVariant } from '@/src/components/Alerts/WarningAlert';
import mikhail from 'public/mikhail.jpg';
import stepan from 'public/stepan.jpg';
import slava from 'public/slava.jpg';
import { mikhail as mikhailText } from '../../data/mikhail';
import { slava as slavaText } from '../../data/slava';
import { stepan as stepanText } from '../../data/stepan';
import AboutCard from '@/src/components/AboutCard';
import PhoneCard from '@/src/components/PhoneCard';
import Hero from '@/src/components/Hero';
import { FaArrowUp } from 'react-icons/fa';

const isBrowser = () => typeof window !== 'undefined';

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function Home() {
  return (
    <main className=''>
      <Hero />
      {/* <WarningAlert alertText='We are closed for walk in, please schedule an appointment.' alertWarning='Attention' /> */}
      <PhoneCard />

      <AboutCard
        image={mikhail}
        about={mikhailText.newAbout}
        philosophy={mikhailText.philosophy}
        expertise={mikhailText.expertise}
        follow={mikhailText.follow}
        book={mikhailText.book}
        title='cosmetology'
        firstName='Mikhail'
        lastName='Shevelev'
      />

      <AboutCard
        image={slava}
        about={slavaText.newAbout}
        philosophy={slavaText.philosophy}
        expertise={slavaText.expertise}
        follow={slavaText.follow}
        book={slavaText.book}
        title='nails'
        firstName='Viacheslav'
        lastName='Savidov'
        reverse={true}
      />

      <AboutCard
        image={stepan}
        about={stepanText.newAbout}
        philosophy={stepanText.philosophy}
        expertise={stepanText.expertise}
        follow={stepanText.follow}
        book={stepanText.book}
        title='hair'
        firstName='Stepan'
        lastName='Matysik'
      />
      <button
        className='fixed bottom-0 left-0 rounded-full m-2  p-2.5 bg-fp/50 hover:bg-fp/40 focus-visible:outline focus-visible:outline-2 text-white focus-visible:outline-offset-2 focus-visible:outline-fp'
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    </main>
  );
}
