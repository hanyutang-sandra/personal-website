import Head from 'next/head';
import Nav from '@/components/nav';
import AboutMe from '@/components/about';

function About() {
  return (
    <>
      <Head>
        <title>About - Hanyu Tang</title>
        <meta name="title" content="About - Hanyu Tang" />
        <meta name="description" content="About Hanyu Tang - Software Engineer specializing in iOS development and full-stack applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hanyutang-sandra.site/about" />
        <meta property="og:title" content="About - Hanyu Tang" />
        <meta property="og:description" content="About Hanyu Tang - Software Engineer specializing in iOS development and full-stack applications." />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      <header className="bg-white fixed top-0 z-50 h-16 w-dvw drop-shadow-md flex flex-row items-center justify-end content-center">
        <Nav className="flex-end" leadingAlignment={false}/>
      </header>

      <main className="h-auto w-full pt-16 bg-white p-0 bg-center">
        <AboutMe />
      </main>

      <footer className="bg-white opacity-75">
        <Nav leadingAlignment={true}/>
      </footer>
    </>
  )
}

export default About
