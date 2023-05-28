'use client';

import Image from 'next/image';
import logo from 'public/logo.png';
import mikhail from 'public/mikhail.jpg';
import stepan from 'public/stepan.jpg';
import slava from 'public/slava.jpg';
import Link from 'next/link';
import Alert, { eAlertsVariant } from '@/components/Alerts';
import NavBar from '@/components/NavBar';

export default function Home() {
  return (
    <main className=''>
      <NavBar />
      <nav className='flex bg-gray-900 text-white static items-center'>
        <div className='h-24 w-full'>
          <div className='z-50 flex absolute mt-6 md:mt-3'>
            <Image src={logo} alt='' className='w-48 md:w-64' />
          </div>
        </div>
        <div className='h-24 w-full sm:flex justify-center hidden lg:text-center pl-2 lg:pl-0 text-3xl gap-2 flex-col lg:flex-row lg:items-center'>
          <h1 className='text-[#1892b2] font-bold'>Fashion</h1>
          <h1 className='font-bold'>Point </h1>
        </div>
        <div className='h-24 w-full flex justify-end items-center pr-3'>|||</div>
      </nav>
      <Alert alertText='hello' alertWarning='hello' alertVariant={eAlertsVariant.warning} />
      <div className='grid sm:grid-cols-2 gap-4'>
        <div className='w-full'>
          <Image src={mikhail} alt='' />
        </div>
        <div className='w-full'>
          Trained biotechnology engineer, trainer of MEDER BEAUTY SCIENCE (Switzerland), over 10 years in professional
          beauty industry. Michael has worked with leading Cosmetology brands such as, Guinot Paris, Sothys Paris and
          has completed numerous internships in France, during the 2 years when he was a leading brand-manager of
          Dermalogica in Russia. He has experience from one of the best salons in Côte d’Azure of France – Meder Beauty
          Antibes. After referring to our expert-beautician in “Fashion Point” beauty salon, you will discover many
          useful ways to skin care and long-lasting skin radiance. Professional cosmetics, as well as, special benefits
          of exfoliation will help you to achieve this, while you can also enjoy our skin deep cleansing and our
          relaxant massage tailored to suit each individual.
        </div>
        <div className='w-full'>
          <Image src={slava} alt='' />
        </div>
        <div className='w-full'>
          Nail master with more than 15 years of service experience, the winner of a Russian professional competition
          “Golden Hands of Russia”. He is also a creator of noninvasive techniques in nail care and a founder of
          improved standard in manicure and pedicure treatments. Vyacheslav worked in the best beauty salons in Moscow,
          and later opened his own studio in a prestigious area near the Patriarch’s Ponds in Moscow city. Among his
          clients were many famous Russian people including, Dima Bilan, Yana Churikova, Natasha Podolsky, Renata
          Litvinova, Satif Casanova, Lena Perova, Natasha Koroleva, Lika Star, Jurate Gurauskayte, Sasha Frolova.
        </div>
        <div className='w-full'>
          <Image src={stepan} alt='' />
        </div>
        <div className='w-full'>
          Stepan Matysik is a world-class hairstylist/colorist with a phenomenal creative output who finds joy in making
          his clients look great and feel fabulous for last 10 years, he recently joined our Fashion Point Miami team.
          He has learned an enormous amount of techniques though work with many upscale salons, including: the Italian
          spa salon Aldo Coppola, French salon Claude Sagnier and Arté Salon, NoHo. Previously he worked with big brand
          names and designers in the glamorous fashion word during New York Fashion Week and multi-brands stores in
          Moscow. The combination of all the knowledge gained allowed him to create his own vision and style that helps
          him find and create your personal look, to keep up with the rhythm of life, and easy to maintain through daily
          routine. Fabulous in no time? Is it a dream? No it’s reality. Come and see yourself at Fashion Point Miami.
          It’s a great chance to become divinely beautiful by his hands. “I can see details in great detail within the
          whole, then divide and conquer to achieve the look you’ve been dreaming of”, Stepan said. Stepan helps you
          achieve color that harmonizes with the cut and texture, along with an emphasis on healthy hair, to assure a
          successful look.
        </div>
        <Link
          href={`https://www.vagaro.com//Users/BusinessWidget.aspx?enc=MMLjhIwJMcwFQhXLL7ifVOSZDEHgoh9is/znhp5gyXoERx3VS8vxhyCOuG9h1PDbeqjru07iFVN7KOlotgpRlmIdjcg5O7QK9k1pTlHaOJfwKdk4JQGUJsyV/pO6+eSElvdt1vEXFJJ8FeXYcqAdhZBqd/ATMeMiT2wdGxpsUChyMS2q3lCVT2KNxd1NLpRiXHJFAoFL2BldUvFkptMWejCKW7UIK+XEHBkB5r0l85pyJa75vcPD68pEQ9VqHVx6vhYWfxNha8L+Tsg4Ne62nD6LMx1aSb/9dVHiXT80taRsBkUEY1anrF2cFuk+SgOLo+KFNkx01G4MGf7e/rA4CxyO6q1+JnYTid5PKtRxPS4SWvGGiBJpqXV2ayGZc1WqNznWWMXhQQi+HS2KqvQbK6Uk/jaie74pzkBh2TsMUjM=`}
          className='rounded-md bg-[#1892b2] h-10 text-center px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Book
        </Link>
        <div className='w-full'>
          <div className='grid gap-4'>
            <div className='bg-red-300 w-full h-[24px] capitalize'>about us</div>
            <div className='bg-red-300 w-full h-[24px]'>pic</div>
            <div className='bg-red-300'>
              We are simply the best. Our main goal is to create your perfect image. We brought together talented
              specialists from different spheres of beauty industry to make you feel confident and beautiful. Hair
              stylists, manicure and pedicure specialist, esthetician, laser cosmetology specialist, brow designer and
              make up artist-this is who we are. At Fashion Point you can be who you are.
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div className='grid gap-4'>
            <div className='bg-red-300 w-full h-[24px]'>prices</div>
            <div className='bg-red-300 w-full h-[24px]'>pic</div>
            <div className='bg-red-300 w-full h-[24px]'>desc</div>
          </div>
        </div>
        <div className='w-full'>
          <div className='grid gap-4'>
            <div className='bg-red-300 w-full h-[24px]'>gallery</div>
            <div className='bg-red-300 w-full h-[24px]'>pic</div>
            <div className='bg-red-300 w-full h-[24px]'>desc</div>
          </div>
        </div>
        <div className='w-full'>
          <div className='grid gap-4'>
            <div className='bg-red-300 w-full h-[24px]'>contacts</div>
            <div className='bg-red-300 w-full h-[24px]'>pic</div>
            <div className='bg-red-300 w-full h-[24px]'>desc</div>
          </div>
        </div>
        <div className='w-full'>
          <div className='grid gap-4'>
            <div className='bg-red-300 w-full h-[24px]'>booking</div>
            <div className='bg-red-300 w-full h-[24px]'>pic</div>
            <div className='bg-red-300 w-full h-[24px]'>desc</div>
          </div>
        </div>
      </div>
    </main>
  );
}
