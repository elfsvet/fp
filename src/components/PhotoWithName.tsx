import Image, { StaticImageData } from 'next/image';
import { Noto_Sans } from 'next/font/google';

const notoSansBold = Noto_Sans({ weight: '900', subsets: ['latin'] });

const PhotoWithName = ({
  image,
  title,
  firstName,
  lastName,
}: {
  image: string | StaticImageData;
  title: string;
  firstName: string;
  lastName: string;
}) => {
  return (
    <div className='w-full flex'>
      <Image src={image} alt='' className='rounded-xl' />
      <div className='-ml-10 uppercase'>
        <h1>{title}</h1>
        <div className={`${notoSansBold.className} text-2xl`}>
          <h1 className='text-fp font-extrabold'>{firstName}</h1>
          <h1>{lastName}</h1>
        </div>
        <p className='border-b-2 border-fp w-48'></p>
      </div>
    </div>
  );
};
export default PhotoWithName;
