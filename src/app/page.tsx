'use client';

import WarningAlert, { eAlertsVariant } from '@/src/components/Alerts/WarningAlert';

import AboutCard from '@/src/components/AboutCard';
import Hero from '@/src/components/Hero';
import PhoneCard from '@/src/components/PhoneCard';
import ScrollUpButton from '../components/Buttons/ScrollUpButton';
import mikhail from 'public/mikhail.jpg';
import { mikhail as mikhailText } from '../../data/mikhail';
import slava from 'public/slava.jpg';
import { slava as slavaText } from '../../data/slava';
import stepan from 'public/stepan.jpg';
import { stepan as stepanText } from '../../data/stepan';

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
        lastName='S'
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
        lastName='S'
        reverse={true}
      />

      <AboutCard
        image={stepan}
        about={stepanText.newAbout}
        philosophy={stepanText.philosophy}
        expertise={stepanText.expertise}
        follow={stepanText.follow}
        // book={stepanText.book}
        title='hair'
        firstName='Stepan'
        lastName='M'
      />
      <ScrollUpButton />
    </main>
  );
}
