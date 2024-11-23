import Projects from './projects';

function Home() {
  return(
    <>
      <header className="bg-white">
        <Nav />
      </header>

      <main className="p-24 pt-80">
        <Projects/>
      </main>

      <footer className="bg-white">
        <Nav />
      </footer>
    </>
  )
}

function Nav() {
  return (
    <nav className="flex items-center justify-end content-center space-x-20 p-6 pt-18 pr-24">
      <a href="#" className="text-base font-thin leading-6 text-gray-900 hover:text-gray-300">
        Projects
      </a>
      <a href="#" className="text-base font-thin leading-6 text-gray-900 hover:text-gray-300">
        About Me
      </a>
    </nav>
  )
}

export default Home