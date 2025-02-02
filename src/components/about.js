import * as T from '../templates';
import * as C from '../contents/about';

function AboutMe() {
    return (
        <>
            <div className="bg-while w-full h-dvh flex items-center justify-center content-center -mt-20">
                <div className="bg-[url(/GourdyMe.JPG)] bg-center bg-cover w-full h-5/6"/>
            </div>

            <T.HighlightsBlock>
                <T.SingleSectionBlockLight>
                    <h2 className="text-lg font-light text-gray-900 leading-relaxe pl-8 xl:pl-72 md:pl-40 sm:pl-24 pr-8 xl:pr-72 md:pr-40 sm:pr-24 -mt-36 lg:-mt-56">{C.aboutMe}</h2>
                    <T.BetweenProjectSpace/>
                    <h2 className="text-lg font-light text-gray-900 leading-relaxe pl-8 xl:pl-72 md:pl-40 sm:pl-24 pr-8 xl:pr-72 md:pr-40 sm:pr-24 -mt-20 lg:-mt-24">{C.connect}</h2>
                </T.SingleSectionBlockLight>
            </T.HighlightsBlock>
        </>
    )
}

export default AboutMe;