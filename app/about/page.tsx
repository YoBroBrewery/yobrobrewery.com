'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { LampContainer } from '@/components/ui/lamp';

export default function About() {
  return (
    <div className='flex-row min-h-screen'>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className='mt-8 bg-gradient-to-br from-white to-blue py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'
        >
          Our Team
        </motion.h1>
      </LampContainer>
      <div className='flex flex-row flex-wrap items-start'>
        <div className='flex flex-col m-10 p-3 max-w-sm bg-slate-700 rounded-lg'>
          <img className='rounded-lg' src='./vinny_profile.webp' alt="Vinny the brewer"></img>
          <p className='mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto'>
            "Yo Bro Brewing is our passion for beer; it's our take at building something together as
            friends. We've started from scratch, we've gone deep into unknown waters (with yeast, and
            malt, and hops) to figure out what works and what doesn't work. Anything great takes time
            and the fermentation process is an art. Running a business isn't easy, there's always more
            work to be done, but make sure you stick with your bros and talk shit over a beer. Follow
            the golden rule (use Pilsner malt)!" -&nbsp;Vinny
          </p>
        </div>
        <div className='flex flex-col m-10 p-3 max-w-sm bg-slate-700 rounded-lg'>
          <img className='rounded-lg' src='./nick_profile.webp' alt="Nick the brewer"></img>
          <p className='flex mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto'>
            "Any dedicated brewer will tell you that it takes immense hard work and heart to brew a fine beer at Yo
            Bro Brewery we agree. In an industry where the product is king, countless hours of research need to be
            dedicated to even the smallest of processes to ensure all the details are tuned perfectly to make every
            brew day successful in resulting in the best-tasting beer possible time and time again. Add running a
            business on top of the already complex nature of brewing and execution becomes even more strenuous
            and demanding. Here at Yo Bro Brewery, we strongly believe leveraging organization not only as a
            mantra but as a tool gives us the greatest opportunity at achieving our goal. At
            the end of the day, our goal here at Yo Bro Brewery is to passionately ensure all our clients have a
            delicious, refreshing, and well-crafted brew to enjoy amongst friends." -&nbsp;Nick
          </p>
        </div>
        <div className='flex flex-col m-10 p-3 max-w-sm bg-slate-700 rounded-lg'>
          <img className='rounded-lg' src='./jason_profile.webp' alt="Jason the brewer"></img>
          <p className='flex mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto'>
            "Science has been a passion of mine since I was a child. Ever since I can remember I have been striving to
            learn and improve. Constantly looking for a worthwhile avenue to invest my time in and strive for greatness.
            Yo Bro is that avenue. Where precision measurements and experimentation are at the forefront of our process.
            Iterating on something for thousands of hours and nearing perfection, but never quite reaching it.
            A process I aim to follow for the rest of my life. Creating beer that I can proudly drink.
            We will never be satisfied and that is our biggest strength as brewers." -&nbsp;Jason
          </p>
        </div>
      </div>
    </div>
  );
}
