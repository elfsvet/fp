import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const PhoneCard = ({ light = false }: { light?: boolean }) => {
  return (
    <div className={`flex justify-center pb-12`}>
      <div
        className={`${
          light ? '' : `bg-gray-800 shadow-xl`
        } mt-10 p-10 flex-col flex gap-3 uppercase rounded w-96 -rotate-12 transition-transform hover:-rotate-6 border-l-[5px] border-fp`}
      >
        <p className={`${light ? '' : `text-white`} text-sm`}>call us now</p>
        <Link href='tel:7868602030' className='text-fp text-3xl font-bold'>
          (786) 860 - 2030
        </Link>
        <p className={`${light ? '' : `text-white`}`}>1920 e hallandale beach blvd ph6 hallandale beach 33009 fl</p>
        <div className={`${light ? '' : `text-white`} flex justify-around`}>
          <Link href={'https://www.facebook.com/fashionpointmia/'} target='_blank'>
            <FaFacebook className='w-12 h-12' />
          </Link>
          <Link href={'https://www.instagram.com/fashionpointmiami/'} target='_blank'>
            <FaInstagram className='w-12 h-12' />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PhoneCard;
