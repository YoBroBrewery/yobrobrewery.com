'use Server';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { AiOutlineInstagram } from 'react-icons/ai';
import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

import logo from './../../app/icon.svg';

const Footer = () => {
  return (
    <footer className='mt-auto bg-blue'>
      <div className='p-4 py-6 lg:py-8'>
        <div className='mx-auto w-full max-w-screen-2xl md:flex md:justify-between'>
          <div className='mb-6 flex flex-col md:mb-0'>
            <Link href='/' className='flex w-fit items-center'>
              <Image src={logo} alt='Yo Bro Brewery' width={80} height={80} />
            </Link>
            <p className='my-2 text-sm text-white/80 md:mb-0 md:mt-2 md:w-7/12'>
              Yo Bro Brewery is a brewery based in scottsdale, Arizona. We are a
              team of passionate brewers who love to make beer.
            </p>
          </div>
          <div className='grid  gap-8  sm:gap-6 grid-cols-2 sm:grid-cols-3'>
            {/* grid-cols-2 sm:grid-cols-3 */}
            <div className='invisible'>
              <h2 className='mb-6 text-sm font-semibold uppercase text-white'>
                Organization
              </h2>
              <ul className='font-medium text-white'>
                {[
                  ['About', '/about'],
                  ['Leadership', '/about/#leadership'],
                  ['Contact', '/contact'],
                ].map(([title, url], key) => (
                  <li key={key} className='mb-4'>
                    <Link
                      aria-label={`Learn more about CodeDevils by heading to ${title}`}
                      href={url as string}
                      className='hover:text-maroon hover:underline'
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div>
              <h2 className='mb-6 text-sm font-semibold uppercase text-gray-900 '>
                Resources
              </h2>
              <ul className='font-medium text-white'>
                <li className='mb-4'>
                  <Link
                    target='_blank'
                    rel='noopener noreferrer'
                    href={
                      'https://codedevils.notion.site/CodeDevils-Constitution-79dd330604ca416cb17378ca429891f3?pvs=4'
                    }
                    className='hover:text-maroon hover:underline'
                  >
                    Constitution
                  </Link>
                </li>
                <li className='mb-4'>
                  <Link
                    target='_blank'
                    rel='noopener noreferrer'
                    href={
                      'https://codedevils.notion.site/Welcome-Docs-d786e78b46a6418a8748c8ca579ea717?pvs=4'
                    }
                    className='hover:text-maroon hover:underline'
                  >
                    Welcome Docs
                  </Link>
                </li>
              </ul>
            </div> */}
            {/* <div>
              <h2 className='mb-6 text-sm font-semibold uppercase text-gray-900'>
                Legal
              </h2>
              <ul className='font-medium text-white'>
                <li className='mb-4 last:mb-0'>
                  <Link
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-maroon hover:underline'
                    href={
                      'https://codedevils.notion.site/CodeDevils-Privacy-Policy-bc0544f3eebe42fc9d60d39f8d731834?pvs=4'
                    }
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className='mb-4 last:mb-0'>
                  <Link
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-maroon hover:underline'
                    href={
                      'https://codedevils.notion.site/Terms-Conditions-59c663cb99e9471a8e0fae12cbb09008?pvs=4'
                    }
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <hr className='my-6 border-gray-500 sm:mx-auto lg:my-4' />
        <div className='mx-auto w-full max-w-screen-2xl sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-white'>
            © 2024{' '}
            <Link
              href='/'
              className='text-marron transition-colors duration-200 ease-in-out hover:text-maroon md:text-white'
            >
              Yo Bro Brewery
            </Link>
            . All Rights Reserved.
          </span>
          <ul className='mt-4 flex space-x-5 sm:mt-0 sm:justify-center'>
            <li>
              <Link
                className='text-white transition-colors duration-200 ease-in-out hover:text-maroon'
                target='_blank'
                href='https://www.instagram.com/yobrobrewery'
              >
                <span className='h-4 w-4'>
                  <AiOutlineInstagram />
                </span>
                <span className='sr-only'>Instagram</span>
              </Link>
            </li>
            <li>
              <Link
                className='text-white transition-colors duration-200 ease-in-out hover:text-maroon'
                target='_blank'
                href='https://github.com/YoBroBrewery/yobrobrewery.com'
              >
                <span className='h-4 w-4'>
                  <FaGithub />
                </span>
                <span className='sr-only'>Github</span>
              </Link>
            </li>
            <li>
              <Link
                className='text-white transition-colors duration-200 ease-in-out hover:text-maroon'
                target='_blank'
                href='https://www.youtube.com/@YoBroBrewery'
              >
                <span className='h-4 w-4'>
                  <FaYoutube />
                </span>
                <span className='sr-only'>YouTube</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
