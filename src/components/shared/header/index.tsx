import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';
import { ShoppingCart, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image src="/images/logo.png" alt={`${APP_NAME} logo`} height={48} width={48} priority={true} />
          </Link>
          <span className="mt-3 ml-2 hidden text-2xl font-semibold lg:block">{APP_NAME}</span>
        </div>

        <div className="space-x-2">
          <Button asChild variant={'ghost'}>
            <Link href={'/cart'}>
              <ShoppingCart />
            </Link>
          </Button>

          <Button asChild variant={'ghost'}>
            <Link href={'/sign-in'}>
              <UserIcon />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

// 'use client';

// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';

// const AnnouncementBar = () => {
//   return (
//     <div className="w-full bg-black py-2">
//       <div className="container mx-auto flex items-center justify-center px-8">
//         <span className="text-center text-sm font-medium tracking-wide text-white">
//           FREE SHIPPING On ORDERS OVER $15.00 • FREE RETURNS
//         </span>
//       </div>
//     </div>
//   );
// };

// const Header = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [prevScrollY, setPrevScrollY] = useState<number>(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       const scrolledUp = currentScrollY < prevScrollY;

//       if (scrolledUp) {
//         setIsOpen(true);
//       } else if (currentScrollY > 100) {
//         setIsOpen(false);
//       }

//       setPrevScrollY(currentScrollY);
//     };

//     setPrevScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.addEventListener('scroll', handleScroll);
//     };
//   }, [prevScrollY]);

//   return (
//     <header className="sticky top-0 z-50 w-full">
//       <div
//         className={`w-full transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
//       >
//         <AnnouncementBar />

//         {/* Navigation */}
//         <div className="sm-py-4 flex w-full items-center justify-between border-gray-100 bg-white/80 py-3 shadow-sm backdrop-blur-sm">
//           <div className="container mx-auto flex items-center justify-between px-8">
//             <div className="flex flex-1 items-center justify-start gap-4 sm:gap-6">
//               <button className="text-gray-700 hover:text-gray-900 md:hidden">
//                 <svg
//                   className="h-6 w-6 text-gray-800 dark:text-white"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M18 6H6m12 4H6m12 4H6m12 4H6"
//                   />
//                 </svg>
//               </button>

//               <nav className="hidden gap-4 text-sm font-medium md:flex lg:gap-6">
//                 <Link href={'#'}>Shop</Link>
//                 <Link href={'#'}>New Arrival</Link>
//                 <Link href={'#'}>Sales</Link>
//               </nav>
//             </div>

//             <Link href={'#'}>link</Link>

//             <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4">
//               <button className="hidden text-gray-700 hover:text-gray-900 sm:block">
//                 <svg
//                   className="h-6 w-6 text-gray-800 dark:text-white"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeWidth="2"
//                     d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
//                   />
//                 </svg>
//               </button>

//               <Link href="/auth/sign-in">Sign In</Link>
//               <Link href="/auth/sign-up">Sign Up</Link>

//               <button className="relative text-gray-700 hover:text-gray-900">
//                 <svg
//                   className="h-6 w-6 text-gray-800 dark:text-white"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
//                   />
//                 </svg>

//                 <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-black text-[10px] text-white sm:h-4 sm:w-4 sm:text-xs">
//                   0
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
