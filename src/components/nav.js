import Link from 'next/link';
import { useRouter } from 'next/router';

function Nav({leadingAlignment}) {
    const router = useRouter();
    const isActive = (path) => router.pathname === path;

    return (
        <nav className={`flex items-center ${leadingAlignment ? `justify-start` : `justify-end`} content-center space-x-20 pt-4 pb-4 pr-16 pl-16`}>
            <Link href="/" className={`poiret-one-regular text-lg font-thin leading-6 ${isActive('/') ? `text-gray-900` : `text-gray-400`} hover:text-gray-300`}>
                Projects
            </Link>
            <Link href="/about" className={`poiret-one-regular text-lg font-thin leading-6 ${isActive('/about') ? `text-gray-900` : `text-gray-400`} hover:text-gray-300`}>
                About Me
            </Link>
            <a href="https://blog.hanyutang-sandra.site" target="_blank" rel="noopener noreferrer" className="poiret-one-regular text-lg font-thin leading-6 text-gray-400 hover:text-gray-300">
                Blog
            </a>
        </nav>
    )
}

export default Nav