import Image from 'next/image';
import logo from '@/public/logo.png';

const MyNav = () => {
  return (
    <nav className='flex bg-gray-900 text-white static items-center'>
      <div className='h-24 w-full'>
        <div className='z-50 flex absolute mt-6 md:mt-3'>
          <Image src={logo} alt='' className='w-48 md:w-64' />
        </div>
      </div>
      <div className='h-24 w-full sm:flex justify-center hidden lg:text-center pl-2 lg:pl-0 text-3xl gap-2 flex-col lg:flex-row lg:items-center'>
        <h1 className='text-fp font-bold'>Fashion</h1>
        <h1 className='font-bold'>Point </h1>
      </div>
      <div className='h-24 w-full flex justify-end items-center pr-3'>|||</div>
    </nav>
  );
};
export default MyNav;
