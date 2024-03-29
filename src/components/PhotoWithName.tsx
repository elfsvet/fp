import Image, { StaticImageData } from 'next/image';
import { Noto_Sans } from 'next/font/google';

const notoSansBold = Noto_Sans({ weight: '900', subsets: ['latin'] });

const PhotoWithName = ({
  image,
  title,
  firstName,
  lastName,
  side = 'left',
}: {
  image: string | StaticImageData;
  title: string;
  firstName: string;
  lastName: string;
  side?: 'right' | 'left';
}) => {
  return (
    <div className={`flex relative`}>
      <Image src={image} alt='' className='rounded-xl shadow-xl min-w-[300px] min-h-[450px] object-contain' />
      <div className=' md:block md:-ml-10 absolute md:static -top-6 -left-8 uppercase overflow-hidden'>
        {/* <h1>{title}</h1> */}
        <div className={`${notoSansBold.className} text-2xl`}>
          <h1 className='text-fp font-extrabold'>{firstName}</h1>
          <h1>{lastName}</h1>
        </div>
        <p className='border-b-2 border-fp w-40'></p>
      </div>
    </div>
  );
};
export default PhotoWithName;
