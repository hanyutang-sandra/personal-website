import Head from 'next/head';
import Link from 'next/link';
import Nav from '@/components/nav';
import HMH from '@/components/hmh';

function HMHPage() {
  return (
    <>
      <Head>
        <title>CMU & HMH Projects - Hanyu Tang</title>
        <meta name="title" content="CMU & HMH Projects - Hanyu Tang" />
        <meta name="description" content="Final Capstone Project at CMU HCII/SCS, completed with Team Otter for HMH in 2019." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hanyutang-sandra.site/projects/hmh" />
        <meta property="og:title" content="CMU & HMH Projects - Hanyu Tang" />
        <meta property="og:description" content="Final Capstone Project at CMU HCII/SCS, completed with Team Otter for HMH in 2019." />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      <header className="bg-white fixed top-0 z-50 h-16 w-dvw drop-shadow-md flex flex-row items-center justify-between content-center">
        <Link href="/" className="pl-8 cursor-pointer text-gray-800 hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <Nav className="flex-end" leadingAlignment={false}/>
      </header>

      <main className="h-auto w-full pt-16 bg-white p-0 bg-center">
        <HMH />
      </main>

      <footer className="bg-white opacity-75">
        <Nav leadingAlignment={true}/>
      </footer>
    </>
  )
}

export default HMHPage
