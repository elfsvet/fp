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
import ScrollUpButton from '../components/Buttons/ScrollUpButton';

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
      <ScrollUpButton />
    </main>
  );
}
