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
      <div className='flex sm:flex-row flex-col gap-4 m-10'>
        {reverse ? (
          <>
            <div className=''>{text}</div>
            <div>
              <PhotoWithName image={image} title={title} firstName={firstName} lastName={lastName} />
            </div>
          </>
        ) : (
          <>
            <div>
              <PhotoWithName image={image} title={title} firstName={firstName} lastName={lastName} />
            </div>
            <div className=''>{text}</div>
          </>
        )}
      </div>
    </>
  );
};
export default AboutCard;
