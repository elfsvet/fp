import Image, { StaticImageData } from 'next/image';
import { Noto_Sans } from 'next/font/google';
import PhotoWithName from './PhotoWithName';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

const notoSansBold = Noto_Sans({ weight: '900', subsets: ['latin'] });

const AboutCard = ({
  image,
  title,
  about,
  expertise,
  philosophy,
  follow,
  book,
  firstName,
  lastName,
  reverse = false,
}: {
  image: string | StaticImageData;
  title: string;
  about: string;
  expertise: string[];
  philosophy: string;
  book: string;
  follow: string;
  firstName: string;
  lastName: string;
  reverse?: boolean;
}) => {
  return (
    <>
      <div className={notoSansBold.className}>
        <h1 className='uppercase text-right text-[#abb8c3] text-3xl mr-4'>{title}</h1>
      </div>
      <div className='flex md:flex-row flex-col gap-4 text-xl m-10 text-gray-600'>
        {reverse ? (
          <>
            <div className='md:hidden'>
              <PhotoWithName image={image} title={title} firstName={firstName} lastName={lastName} />
            </div>
            <div className='flex flex-col gap-4'>
              <div className=''>{about}</div>

              <div className='flex items-end gap-4 flex-col'>
                <div className='text-fp text-3xl'>Expertise</div>
                <p className='border-b-2 border-gray-500 w-40' />
                <div className='bg-fp bg-opacity-20 rounded-xl w-72 '>
                  <ul className='list-disc list-inside pl-10 py-5'>
                    {expertise.map((service) => {
                      return <li key={service}>{service}</li>;
                    })}
                  </ul>
                </div>
              </div>

              <div className='text-fp text-3xl'>Philosophy</div>
              <p className='border-b-2 border-gray-500 w-40' />
              <div className=''>{philosophy}</div>

              <div className='flex items-center md:items-end  flex-col'>
                <div className='flex gap-4'>
                  <Link href={follow} target='_blank'>
                    <FaInstagram className='w-12 h-12 text-fp' />
                  </Link>
                  <div className='flex items-center gap-x-6'>
                    <Link
                      href={book}
                      className='rounded-md bg-fp px-24 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-fp/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fp'
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className='md:block hidden'>
              <PhotoWithName image={image} title={title} firstName={firstName} lastName={lastName} side='right' />
            </div>
          </>
        ) : (
          <>
            <div>
              <PhotoWithName image={image} title={title} firstName={firstName} lastName={lastName} />
            </div>
            <div className='flex flex-col gap-4'>
              <div className=''>{about}</div>

              <div className='flex items-end gap-4 flex-col'>
                <div className='text-fp text-3xl'>Expertise</div>
                <p className='border-b-2 border-gray-500 w-40' />
                <div className='bg-fp bg-opacity-20 rounded-xl w-72 '>
                  <ul className='list-disc list-inside pl-10 py-5'>
                    {expertise.map((service) => {
                      return <li key={service}>{service}</li>;
                    })}
                  </ul>
                </div>
              </div>

              <div className='text-fp text-3xl'>Philosophy</div>
              <p className='border-b-2 border-gray-500 w-40' />
              <div className=''>{philosophy}</div>

              <div className='flex items-center md:items-end  flex-col'>
                <div className='flex gap-4'>
                  <Link href={follow} target='_blank'>
                    <FaInstagram className='w-12 h-12 text-fp' />
                  </Link>
                  <div className='flex items-center gap-x-6'>
                    <Link
                      href={book}
                      className='rounded-md bg-fp px-24 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-fp/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fp'
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default AboutCard;
