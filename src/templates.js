import Image from 'next/image';

/// The page header for each page
export const PageHeader = ({bgColor, src}) => (
    <div className={`${bgColor} w-full h-64 flex items-center justify-center content-center`}>
        <Image src={src} width="300" height="200" alt="Header Image" className="h-auto items-center justify-center content-center"></Image>
    </div>
)

// The intro sction for each page
export const IntroSection = ({src, alt, text}) => (
    <div className="intro p-8 pt-24 pb-0 xl:pl-72 md:pl-40 sm:pl-24 xl:pr-72 md:pr-40 sm:pr-24 flex flex-col lg:flex-row items-center justify-end content-center space-y-0 lg:space-x-36">
        <Image src={src} width="500" height="500" alt={alt} className="h-auto items-center justify-center content-center hidden lg:inline"></Image>
        <h3 className="text-base font-normal text-gray-900 leading-relaxed">
            {text}
        </h3>
    </div>
)

/// Different levels of titles
export const HighlightsTitle = ({title}) => (
    <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
)
export const SectionTitle = ({title}) => (<h2 className="text-xl font-normal text-gray-900 pl-8 xl:pl-72 md:pl-40 sm:pl-24 pb-8">{title}</h2>)

/// Different kinds of Blocks
export const HighlightsBlock = ({children}) => (
    <div className="highlights pt-8 lg:pt-24 flex flex-col items-center justify-end content-center">{children}</div>
)
export const SingleSectionBlockDark = ({children}) => (
    <div className="bg-stone-50 mt-16 pt-8 pb-8">{children}</div>
)
export const SingleSectionBlockLight = ({children}) => (
    <div className="bg-white mt-16 pt-8 pb-8">{children}</div>
)
export const SingleProjectBlock = ({children}) => (
    <div className="SERP-grid flex flex-col lg:flex-row items-center justify-end content-center space-y-16 lg:space-x-36 pl-8 xl:pl-72 md:pl-40 sm:pl-24 pr-8 xl:pr-72 md:pr-40 sm:pr-24">{children}</div>
)
export const SingleProjectBlockReversed = ({children}) => (
    <div className="A11y flex flex-col lg:flex-row-reverse items-center justify-end content-center space-y-16 lg:space-x-36 lg:space-x-reverse pl-8 xl:pl-72 md:pl-40 sm:pl-24 pr-8 xl:pr-72 md:pr-40 sm:pr-24">{children}</div>
)

/// In-block components
export const BetweenProjectSpace = () => (<div className="w-full h-auto mt-16 pt-8 pb-8"/>)
export const Paragraph = ({text}) => (<h3 className="text-base font-light text-gray-900 leading-relaxed">{text}</h3>)
export const SideImgVertical = ({src}) => (<Image src={src} width="300" height="300" alt="Side Image" className="h-1/2"/>)
export const SideImgHorizontal = ({src}) => (<Image src={src} width="300" height="300" alt="Side Image" className="w-1/2"/>)
export const SideVideo = ({src}) => (
    <video width="300" height="400" controls>
        <source src={src} type="video/mp4"/>
    </video>
)
export const SectionFootnote = ({text}) => (<div className="pl-8 xl:pl-72 md:pl-40 sm:pl-24 pr-8 xl:pr-72 md:pr-40 sm:pr-24 pt-16 text-sm font-light text-gray-900 leading-relaxed italic">{text}</div>)