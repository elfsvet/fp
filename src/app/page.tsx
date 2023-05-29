'use client';

import WarningAlert, { eAlertsVariant } from '@/components/Alerts/WarningAlert';
import mikhail from 'public/mikhail.jpg';
import stepan from 'public/stepan.jpg';
import slava from 'public/slava.jpg';
import { mikhail as mikhailText } from '../../data/mikhail';
import { slava as slavaText } from '../../data/slava';
import { stepan as stepanText } from '../../data/stepan';
import AboutCard from '@/components/AboutCard';
import PhoneCard from '@/components/PhoneCard';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className=''>
      <Hero />
      {/* <WarningAlert alertText='We are closed for walk in, please schedule an appointment.' alertWarning='Attention' /> */}
      <PhoneCard />

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

    </main>
  );
}
