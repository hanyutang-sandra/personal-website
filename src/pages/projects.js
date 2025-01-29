import SVG from 'next/image';
import Link from 'next/link';

function Projects() {
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-16 h-dvh">
            <Link href="/yelp">
                <div className="yelp bg-yelp-red flex flex-col items-center justify-center content-center h-full w-full rounded-xl hover:shadow-md hover:bg-rose-700">
                    <SVG src="/yelp_logo_dark_bg.svg" width="200" height="200" alt="Yelp logo" priority={true} className="h-auto items-center justify-center content-center"></SVG>
                    <h5 className="pt-12 text-base font-light text-center text-gray-300">Highlights from my role as a Senior Software Engineer @ Yelp Inc.,<br/> focusing on iOS development with various technologies.</h5>
                </div>
            </Link>

            <Link href="/otter">
                <div className="capstone bg-otter-blue flex flex-col items-center justify-center content-center h-full w-full rounded-xl hover:shadow-md hover:bg-blue-300">
                    <div className='flex items-center justify-center content-center space-x-11'>
                        <SVG src="/HMH_logo.png" width="100" height="100" alt="HMH logo" priority={true} className="h-auto items-center justify-center content-center"></SVG>
                        <h2 className="text-base font-semibold text-gray-50">+</h2>
                        <SVG src="/cmu_logo.png" width="100" height="100" alt="CMU logo" priority={true} className="h-auto items-center justify-center content-center"></SVG>
                    </div>
                    <h5 className="pt-6 text-base font-light text-center text-gray-50">Final Caption Project @ CMU HCII, <br/> done with Team Otter for HMH in 2019.</h5>
                </div>
            </Link>

            <Link href="/" className='col-span-2'>
            <div className="personal bg-violet-400 flex-col items-center justify-center content-center h-full w-full rounded-xl hover:shadow-md ">
                <h3 className="text-lg font-medium text-center text-gray-400">Misc</h3>
                <h5 className="text-base font-light text-center text-gray-300">Small things here and there.</h5>
            </div>
            </Link>
        </div>
    )
}

export default Projects