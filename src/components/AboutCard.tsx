import Image, { StaticImageData } from 'next/image';
import { Noto_Sans } from 'next/font/google';
import PhotoWithName from './PhotoWithName';

const notoSansBold = Noto_Sans({ weight: '900', subsets: ['latin'] });

const AboutCard = ({
  image,
  title,
  text,
  firstName,
  lastName,
  reverse = false,
}: {
  image: string | StaticImageData;
  title: string;
  text: string;
  firstName: string;
  lastName: string;
  reverse?: boolean;
}) => {
  return (
    <>
      <div className={notoSansBold.className}>
        <h1 className='uppercase text-right text-[#abb8c3] text-3xl mr-4'>{title}</h1>
      </div>
      <div className='grid sm:grid-cols-2 gap-4 my-10 mx-10'>
        {reverse ? (
          <>
            <div className=''>{text}</div>
            <PhotoWithName image={image} title={title} firstName={firstName} lastName={lastName} />
          </>
        ) : (
          <>
            <PhotoWithName image={image} title={title} firstName={firstName} lastName={lastName} />
            <div className=''>{text}</div>
          </>
        )}
      </div>
    </>
  );
};
export default AboutCard;
