import { Spotlight } from '@/components/ui/Spotlight';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between '>
      <div className='h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-blue antialiased bg-grid-white/[0.02] relative overflow-hidden'>
        <Spotlight
          className='-top-50 left-0 md:left-60 md:-top-20'
          fill='white'
        />
        <div className=' p-4 max-w-7xl  mx-auto relative  w-full pt-40 md:pt-20 md:pt-0'>
          <h1 className='text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50'>
            Yo Bro Brewery 🍺
          </h1>
          <p className='mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto'>
            Yo Bro Brewery is a new brewery based in Fountain Hills, Arizona. We are 
            a team of passionate brewers who love to make beer. Our grand opening is
            planned to be in June of 2024.
          </p>
        </div>
      </div>
    </main>
  );
}
