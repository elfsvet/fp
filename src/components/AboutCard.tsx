import Image, { StaticImageData } from 'next/image';
import { Noto_Sans } from 'next/font/google';

const notoSansBold = Noto_Sans({ weight: '900', subsets: ['latin'] });

const AboutCard = ({
  image,
  title,
  text,
  firstName,
  lastName,
}: {
  image: string | StaticImageData;
  title: string;
  text: string;
  firstName: string;
  lastName: string;
}) => {
  return (
    <>
      <div className={notoSansBold.className}>
        <h1 className='uppercase text-right text-[#abb8c3] text-3xl mr-4'>{title}</h1>
      </div>
      <div className='grid sm:grid-cols-2 gap-4 my-10'>
        <div className='w-full flex'>
          <Image src={image} alt='' className='rounded-xl' />
          <div className='-ml-10 uppercase'>
            <h1>{title}</h1>
            <div className={`${notoSansBold.className} text-2xl`}>
              <h1 className='text-fp'>{firstName}</h1>
              <h1>{lastName}</h1>
            </div>
            <p className='border-b-2 border-fp w-48'></p>
          </div>
        </div>
        <div className='w-full'>{text}</div>
      </div>
    </>
  );
};
export default AboutCard;
