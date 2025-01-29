import SVG from 'next/image';

/// The page header for each page
export const PageHeader = ({bgColor, svgSrc}) => (
    <div className={`${bgColor} w-full h-64 flex items-center justify-center content-center`}>
        <SVG src={svgSrc} width="300" height="200" alt="Yelp logo" priority={true} className="h-auto items-center justify-center content-center"></SVG>
    </div>
)

// The intro sction for each page
export const IntroSection = ({svgSrc, svgAlt, text}) => (
    <div className="intro p-72 pt-24 pb-0 flex items-center justify-end content-center space-x-36">
        <SVG src={svgSrc} width="500" height="500" alt={svgAlt} priority={true} className="h-auto items-center justify-center content-center"></SVG>
        <h3 className="text-base font-light text-gray-900 leading-relaxed">
            {text}
        </h3>
    </div>
)

/// Different levels of titles
export const HighlightsTitle = ({title}) => (
    <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
)
export const SectionTitle = ({title}) => (<h2 className="text-xl font-normal text-gray-900 pl-72 pb-8">{title}</h2>)

/// Different kinds of Blocks
export const HighlightsBlock = ({children}) => (
    <div className="highlights pt-24 flex flex-col items-center justify-end content-center pb-24">{children}</div>
)
export const SingleSectionBlockDark = ({children}) => (
    <div className="bg-stone-50 mt-16 pt-8 pb-8">{children}</div>
)
export const SingleSectionBlockLight = ({children}) => (
    <div className="bg-white mt-16 pt-8 pb-8">{children}</div>
)
export const SingleProjectBlock = ({children}) => (
    <div className="SERP-grid flex flex-row items-center justify-end content-center space-x-36 pl-72 pr-72">{children}</div>
)
export const SingleProjectBlockReversed = ({children}) => (
    <div className="A11y flex flex-row-reverse space-x-36 space-x-reverse items-center justify-end content-center pl-72 pr-72">{children}</div>
)

/// In-block components
export const BetweenProjectSpace = () => (<div className="w-full h-auto mt-16 pt-8 pb-8"/>)
export const Paragraph = ({text}) => (<h3 className="text-base font-light text-gray-900 leading-relaxed">{text}</h3>)
export const SideImg = ({src}) => (<SVG src={src} width="300" height="400" alt="Grid component" priority={true} className="h-auto"/>)
export const SideVideo = ({src}) => (
    <video width="300" height="400" controls>
        <source src={src} type="video/mp4"/>
    </video>
)
export const SectionFootnote = ({text}) => (<div className="pl-72 pr-72 pt-16 text-sm font-light text-gray-900 leading-relaxed italic">{text}</div>)