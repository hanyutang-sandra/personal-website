import Projects from '@/components/projects';
import Intro from '@/components/intro';
import Nav from '@/components/nav';
import Yelp from '@/components/yelp';
import HMH from '@/components/hmh';
import PersonalProjects from '@/components/personal';
import AboutMe from '@/components/about';
import { useState } from 'react';

function Home() {
  const [currentContent, setCurrentContent] = useState('projects');
  
  const renderMainContent = (setCurrentContent) => {
    switch (currentContent) {
      case 'projects':
        return (
        <>
          <Intro/>
          <Projects setCurrentContent={setCurrentContent}/>
        </>
      )
      case 'yelp':
        return <Yelp />;
      case 'hmh':
        return <HMH />;
      case 'personal':
        return <PersonalProjects />;
      case 'about':
        return <AboutMe />;
      default:
        return (
          <>
            <Intro/>
            <Projects/>
          </>
        );
    }
  };

  const renderBackButton = (currentContent) => {
    if (currentContent !== 'projects' && currentContent !== 'about') {
      return (
        <span className={`pl-8 cursor-pointer text-gray-800 hover:text-gray-300`} onClick={(e) => {
          setCurrentContent("projects");
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
        </span>
      )
    }
  }

  return(
    <>
      <header className={`bg-white fixed h-16 w-dvw drop-shadow-md flex flex-row items-center ${currentContent === 'projects' || currentContent === 'about' ? `justify-end` : `justify-between`} content-center`}>
          {renderBackButton(currentContent)}
          <Nav className="flex-end" leadingAlignment={false} currentContent={currentContent} setCurrentContent={setCurrentContent}/>
      </header>

      <main className= {`h-auto w-full pt-16 ${currentContent == "projects"? `bg-[url(/public/backdrop.png)] pl-16 pr-16 pb-8` : `bg-white p-0`} bg-center`}>
        {renderMainContent(setCurrentContent)}
      </main>

      <footer className="bg-white opacity-75">
        <Nav leadingAlignment={true} currentContent={currentContent} setCurrentContent={setCurrentContent}/>
      </footer>
    </>
  )
}

export default Home