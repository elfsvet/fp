'use client';

import AboutCard from '@/src/components/AboutCard';
import PhoneCard from '@/src/components/PhoneCard';
import mikhail from 'public/mikhail.jpg';
import stepan from 'public/stepan.jpg';
import slava from 'public/slava.jpg';
import { mikhail as mikhailText } from '../../../data/mikhail';
import { slava as slavaText } from '../../../data/slava';
import { stepan as stepanText } from '../../../data/stepan';
import ScrollUpButton from '@/src/components/Buttons/ScrollUpButton';

const About = () => {
  return (
    // <div>
    //   <PhoneCard light={true} />
    //   <h1>About us</h1>
    // <p>
    //   We are simply the best. Our main goal is to create your perfect image. We brought together talented specialists
    //   from different spheres of beauty industry to make you feel confident and beautiful. Hair stylists, manicure and
    //   pedicure specialist, esthetician, laser cosmetology specialist, brow designer and make up artist-this is who we
    //   are. At Fashion Point you can be who you are.
    // </p>
    // </div>
    <div className='bg-white px-6 py-4 sm:py-10 lg:px-8'>
      <PhoneCard light={true} />
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>About us</h2>
        <p className='mt-2 text-lg leading-8 text-gray-600'>
          We are simply the best. Our main goal is to create your perfect image. We brought together talented
          specialists from different spheres of beauty industry to make you feel confident and beautiful. Hair stylists,
          manicure and pedicure specialist, esthetician, laser cosmetology specialist, brow designer and make up
          artist-this is who we are. At Fashion Point you can be who you are.
        </p>
      </div>
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
    </div>
  );
};
export default About;
