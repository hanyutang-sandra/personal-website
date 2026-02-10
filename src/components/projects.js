import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

function Projects() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-3 lg:grid-rows-2 gap-16 h-screen -mt-40">
            <Link href="/projects/ddg" className="cursor-pointer">
                <div className="ddg bg-ddg-orange flex flex-col items-center justify-center content-center h-full w-full rounded-xl hover:bg-ddg-orange-light">
                    <Image src="/ddg_logo.png" width="120" height="120" alt="DuckDuckGo logo" className="h-auto items-center justify-center content-center"></Image>
                    <h5 className="pt-12 text-base font-light text-center text-gray-50 hidden sm:inline">Highlights from my role as Senior Software Engineer @ DuckDuckGo,<br/> leading development across mobile platforms.</h5>
                </div>
            </Link>

            <Link href="/projects/yelp" className="cursor-pointer">
                <div className="yelp bg-yelp-red flex flex-col items-center justify-center content-center h-full w-full rounded-xl hover:bg-rose-700">
                    <Image src="/yelpLogo.png" width="200" height="200" alt="Yelp logo" className="h-auto items-center justify-center content-center"></Image>
                    <h5 className="pt-12 text-base font-light text-center text-gray-50 hidden sm:inline">Highlights from my role as Senior Software Engineer @ Yelp,<br/> focusing on iOS development.</h5>
                </div>
            </Link>

            <Link href="/projects/hmh" className="cursor-pointer">
                <div className="capstone bg-otter-blue flex flex-col items-center justify-center content-center h-full w-full rounded-xl hover:bg-blue-400">
                    <Image src="/cmu+hmh.png" width="200" height="200" alt="CMU + HMH logo" className="h-auto items-center justify-center content-center"></Image>
                    <h5 className="pt-6 text-base font-light text-center text-gray-50 hidden sm:inline">Final Caption Project @ CMU HCII/SCS, <br/> completed with Team Otter for HMH in 2019.</h5>
                </div>
            </Link>

            <Link href="/projects/personal" className='cursor-pointer'>
                <div className="personal bg-violet-400 flex flex-col items-center justify-center content-center h-full w-full rounded-xl hover:bg-violet-500">
                    <Image src="/GourdyMeSimpsons.png" width="200" height="200" alt="Personal projects illustration" className="h-auto items-center justify-center content-center"></Image>
                    <h5 className="pt-6 text-base font-light text-center text-gray-50 hidden sm:inline">Hobby Projects I have worked on, <br/> iOS and Web based.</h5>
                </div>
            </Link>
        </div>
    )
}

export default Projects