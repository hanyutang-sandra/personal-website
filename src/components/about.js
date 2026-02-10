import * as T from '../templates';
import * as C from '../contents/about';
import { useEffect } from 'react';
import Image from 'next/image';

function AboutMe() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 
    
    return (
        <>
            <div className="bg-while w-full h-96 lg:h-svh flex items-start justify-center content-start align-center -mt-8 lg:-mt-72">
                <Image src="/GourdyMe.JPG" width="500" height="100" alt="Hanyu Tang photo" className="h-auto w-full"></Image>
            </div>

            <T.HighlightsBlock>
                <T.SingleSectionBlockLight>
                    <h2 className="text-lg font-light text-gray-900 leading-relaxe pl-8 xl:pl-72 md:pl-40 sm:pl-24 pr-8 xl:pr-72 md:pr-40 sm:pr-24 -mt-24 lg:mt-0">{C.aboutMe}</h2>
                    <T.BetweenProjectSpace/>
                    <h2 className="text-lg font-light text-gray-900 leading-relaxe pl-8 xl:pl-72 md:pl-40 sm:pl-24 pr-8 xl:pr-72 md:pr-40 sm:pr-24 -mt-20 lg:-mt-24">{C.connect}</h2>
                </T.SingleSectionBlockLight>
            </T.HighlightsBlock>
        </>
    )
}

export default AboutMe;