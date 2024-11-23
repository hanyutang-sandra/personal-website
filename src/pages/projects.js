import SVG from 'next/image';
import Link from 'next/link';

function Projects() {
    return (
        <>
            <div className="bg-white flex flex-col items-center justify-center content-center">
                <h1 className="text-7xl font-semibold text-center">HANYU TANG</h1>
                <h5 className="text-base font-thin text-gray-900 text-center pt-6">
                    Hello there! Welcome to my website :)
                </h5>
            </div>

            <Link href="/yelp">
                <div className="yelp pt-80 bg-white items-center justify-center content-center">
                    <div className="bg-yelp-red flex flex-col items-center justify-center content-center h-auto w-full rounded-lg hover:shadow-md hover:bg-rose-700">
                        <SVG src="/yelp_logo_dark_bg.svg" width="300" height="200" alt="Yelp logo" priority={true} className="pt-80 h-auto items-center justify-center content-center"></SVG>
                        <h5 className="pt-12 pb-80 text-base font-light text-center text-gray-300">Highlights from my role as a Senior Software Engineer @ Yelp Inc.,<br/> focusing on iOS development with various technologies.</h5>
                    </div>
                </div>
            </Link>

            <Link href="/otter">
                <div className="capstone pt-16 bg-white items-center justify-center content-center">
                    <div className="bg-otter-blue flex flex-col items-center justify-center content-center h-auto w-full rounded-md hover:shadow-md hover:bg-blue-300">
                        <div className='flex items-center justify-center content-center space-x-11 pt-80'>
                            <SVG src="/HMH_logo.png" width="150" height="150" alt="HMH logo" priority={true} className="h-auto items-center justify-center content-center"></SVG>
                            <h2 className="text-base font-semibold text-gray-50">+</h2>
                            <SVG src="/cmu_logo.png" width="150" height="150" alt="HMH logo" priority={true} className="h-auto items-center justify-center content-center"></SVG>
                        </div>
                        <h5 className="pt-12 pb-80 text-base font-light text-center text-gray-50">Final Caption Project @ CMU HCII, <br/> done with Team Otter for HMH in 2019.</h5>
                    </div>
                </div>
            </Link>

            <div className="school pt-16 bg-white items-center justify-center content-center">
            <div className="bg-violet-400 flex-col items-center justify-center content-center h-auto w-full rounded-md hover:shadow-md ">
                <h3 className="pt-96 text-lg font-medium text-center text-gray-400">Misc</h3>
                <h5 className="pb-96 text-base font-light text-center text-gray-300">Small things here and there.</h5>
            </div>
            </div>
        </>
    )
}

export default Projects