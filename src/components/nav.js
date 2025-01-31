function Nav({leadingAlignment, currentContent, setCurrentContent}) {
    return (
        <nav className={`flex items-center ${leadingAlignment ? `justify-start` : `justify-end`} content-center space-x-20 pt-4 pb-4 pr-16 pl-16`}>
            <a href="/" className={`poiret-one-regular text-lg font-thin leading-6 ${currentContent != 'about' ? `text-gray-400` : `text-gray-900`} hover:text-gray-300`} onClick={(e) => {
                   e.preventDefault(); 
                   setCurrentContent("projects");
            }}>
                Projects
            </a>
            <a href="/" className={`poiret-one-regular text-lg font-thin leading-6 ${currentContent == 'about' ? `text-gray-400` : `text-gray-900`} hover:text-gray-300`} onClick={(e) => {
                   e.preventDefault(); 
                   setCurrentContent("about");
            }}>
                About Me
            </a>
        </nav>
    )
}

export default Nav