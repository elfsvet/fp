
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const PhoneCard = () => {
  return (
    <div className='flex justify-center'>
      <div className='bg-gray-800 mt-10 p-10 flex-col flex gap-3 uppercase rounded w-96 -rotate-12 transition-transform hover:-rotate-6'>
        <p className='text-white text-sm'>call us now</p>
        <Link href='tel:7868602030' className='text-fp text-3xl font-bold'>(786) 860 - 2030</Link>
        <p className='text-white'>1920 e hallandale beach blvd ph6 hallandale beach 33009 fl</p>
      </div>
    </div>
  );
};
export default PhoneCard;
