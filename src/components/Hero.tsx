import Image from 'next/image';
import Link from 'next/link';
import { linkToBookFp } from '@/data/links';
import misha1 from '@/public/misha1.jpeg';
import misha2 from '@/public/misha2.jpeg';
import slava1 from '@/public/slava1.jpeg';
import stepan1 from '@/public/stepan1.jpeg';
import stepan2 from '@/public/stepan2.jpeg';

export default function Hero() {
  return (
    <div className='bg-white'>
      <main>
        <div className='relative isolate'>
          <svg
            className='absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84'
                width={200}
                height={200}
                x='50%'
                y={-1}
                patternUnits='userSpaceOnUse'
              >
                <path d='M.5 200V.5H200' fill='none' />
              </pattern>
            </defs>
            <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
              <path
                d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
                strokeWidth={0}
              />
            </svg>
            <rect width='100%' height='100%' strokeWidth={0} fill='url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)' />
          </svg>
          <div
            className='absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'
            aria-hidden='true'
          >
            <div
              className='aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-fp to-white opacity-30'
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className='overflow-hidden'>
            <div className='mx-auto max-w-7xl px-6 pb-10 pt-10 sm:pt-60 lg:px-8 lg:pt-32'>
              <div className='mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
                <div className='w-full max-w-xl lg:shrink-0 xl:max-w-2xl'>
                  <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                    We turn beauty into art
                  </h1>
                  <p className='relative mt-6 text-2xl leading-8 text-gray-600 sm:max-w-md lg:max-w-none'>
                    We are a team of world-class beauty experts dedicated to creating the most beautiful and
                    transformative experiences for our clients. With over 50 years of combined experience, we have the
                    knowledge and skills to help you look and feel your best.
                  </p>
                  <div className='mt-10 flex items-center gap-x-6'>
                    <Link
                      href={linkToBookFp}
                      className='animate-pulse rounded-md bg-fp px-24 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-fp/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fp'
                    >
                      Book
                    </Link>
                  </div>
                </div>
                <div className='mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
                  <div className='ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80'>
                    <div className='relative'>
                      <Image
                        src={misha1}
                        alt=''
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                  </div>
                  <div className='mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36'>
                    <div className='relative'>
                      <Image
                        src={stepan1}
                        alt=''
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                    <div className='relative'>
                      <Image
                        src={slava1}
                        alt=''
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                  </div>
                  <div className='w-44 flex-none space-y-8 pt-32 sm:pt-0'>
                    <div className='relative'>
                      <Image
                        src={misha2}
                        alt=''
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                    <div className='relative'>
                      <Image
                        src={stepan2}
                        alt=''
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
