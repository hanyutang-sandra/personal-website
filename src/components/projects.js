import Image from 'next/image';
import { useEffect } from 'react';

function Projects({setCurrentContent}) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-3 lg:grid-rows-2 gap-16 h-screen -mt-40">
            <div onClick={(e) => {
                e.preventDefault();
                setCurrentContent("yelp");
            }} className="cursor-pointer">
                <div className="yelp bg-yelp-red flex flex-col items-center justify-center content-center h-full w-full rounded-xl hover:bg-rose-700">
                    <Image src="yelpLogo.png" width="200" height="200" alt="Yelp logo" className="h-auto items-center justify-center content-center"></Image>
                    <h5 className="pt-12 text-base font-light text-center text-gray-50 hidden sm:inline">Highlights from my role as Senior Software Engineer @ Yelp,<br/> focusing on iOS development.</h5>
                </div>
            </div>

            <div onClick={(e) => {
                e.preventDefault();
                setCurrentContent("hmh");
            }} className="cursor-pointer">
                <div className="capstone bg-otter-blue flex flex-col items-center justify-center content-center h-full w-full rounded-xl hover:bg-blue-400">
                    <Image src="cmu+hmh.png" width="200" height="200" alt="Yelp logo" className="h-auto items-center justify-center content-center"></Image>
                    <h5 className="pt-6 text-base font-light text-center text-gray-50 hidden sm:inline">Final Caption Project @ CMU HCII/SCS, <br/> completed with Team Otter for HMH in 2019.</h5>
                </div>
            </div>

            <div className='col-span-1 lg:col-span-2 cursor-pointer' onClick={(e) => {
                e.preventDefault();
                setCurrentContent("personal");
            }}>
                <div className="personal bg-violet-400 flex flex-col items-center justify-center content-center h-full w-full rounded-xl hover:bg-violet-500">
                    <Image src="GourdyMeSimpsons.png" width="200" height="200" alt="Yelp logo" className="h-auto items-center justify-center content-center"></Image>
                    <h5 className="pt-6 text-base font-light text-center text-gray-50 hidden sm:inline">Hobby Projects I have worked on, <br/> iOS and Web based.</h5>
                </div>
            </div>
        </div>
    )
}

export default Projects