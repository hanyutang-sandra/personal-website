import Head from 'next/head';
import Projects from '@/components/projects';
import Intro from '@/components/intro';
import Nav from '@/components/nav';
import Image from 'next/image';

function Home() {
  return(
    <>
      <Head>
        <title>Hanyu Tang - Software Engineer Portfolio</title>
        <meta name="title" content="Hanyu Tang - Software Engineer Portfolio" />
        <meta name="description" content="Portfolio of Hanyu Tang, Senior Software Engineer at Yelp specializing in iOS development, AI/ML, and full-stack web applications." />
        <meta name="keywords" content="Hanyu Tang, Software Engineer, iOS Developer, Yelp, Carnegie Mellon, Full Stack Developer, Machine Learning" />
        <meta name="author" content="Hanyu Tang" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hanyutang-sandra.site/" />
        <meta property="og:title" content="Hanyu Tang - Software Engineer Portfolio" />
        <meta property="og:description" content="Portfolio of Hanyu Tang, Senior Software Engineer at Yelp specializing in iOS development, AI/ML, and full-stack web applications." />
        <meta property="og:image" content="https://hanyutang-sandra.site/GourdyMe.JPG" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hanyutang-sandra.site/" />
        <meta property="twitter:title" content="Hanyu Tang - Software Engineer Portfolio" />
        <meta property="twitter:description" content="Portfolio of Hanyu Tang, Senior Software Engineer at Yelp specializing in iOS development, AI/ML, and full-stack web applications." />
        <meta property="twitter:image" content="https://hanyutang-sandra.site/GourdyMe.JPG" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>

      <header className="bg-white fixed top-0 z-50 h-16 w-dvw drop-shadow-md flex flex-row items-center justify-end content-center">
          <Nav className="flex-end" leadingAlignment={false}/>
      </header>

      <main className="h-auto w-full pt-16 bg-white pl-16 pr-16 pb-8 bg-center">
        <Image src="/backdrop.png" width="100" height="100" alt="Background pattern" className="h-screen w-full block absolute top-16 left-0 right-0"></Image>
        <div className="z-10 relative">
          <Intro/>
          <Projects/>
        </div>
      </main>

      <footer className="bg-white opacity-75">
        <Nav leadingAlignment={true}/>
      </footer>
    </>
  )
}

export default Home