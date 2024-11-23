import SVG from 'next/image';

export const LineBreak = (<><br/> <br/></>)
export const BoldedPhrase = ({text}) => (
    <b className='font-medium'>{text}</b>
)

const headerBg = (src) => (
    <div className="bg-yelp-red w-full h-64 flex items-center justify-center content-center">
        <SVG src={src} width="300" height="200" alt="Yelp logo" priority={true} className="h-auto items-center justify-center content-center"></SVG>
    </div>
)

const introSection = (
    logoSrc,
    text
) => (
    <div className="intro p-72 pt-24 pb-0 flex items-center justify-end content-center space-x-36">
        <SVG src={logoSrc} width="500" height="500" alt="Yelp burst" priority={true} className="h-auto items-center justify-center content-center"></SVG>
        <h3 className="text-base font-light text-gray-900 leading-relaxed">
            {text}
        </h3>
    </div>
)

export const SectionTitle = ({title}) => (<h1 className="text-2xl font-semibold text-gray-900">{title}</h1>)
export const SubSectionTitle = ({title}) => (<h2 className="text-xl font-normal text-gray-900 pl-72 pb-8">{title}</h2>)
export const SideImg = ({src}) => (<SVG src={src} width="200" height="300" alt="Grid component" priority={true} className="h-auto"/>)
const sideVideo = (src) => (
    <video width="300" height="300" controls>
        <source src={src} type="video/mp4"/>
    </video>
)
export const Paragraph = ({children}) => (<h3 className="text-base font-light text-gray-900 leading-relaxed">{children}</h3>)
export const UrlLink = ({href, text}) => (<a href={href} className="underline text-sky-700 hover:text-red-700">{text}</a>)
export const SectionFootnote = ({children}) => (<div className="pl-72 pr-72 pt-16 text-sm font-light text-gray-900 leading-relaxed">{children}</div>)
const italicFootnote = (text) => (<i className='text-sm font-light text-gray-900 leading-relaxed italic pt-16'>{text}</i>)

export const SingleProjectBlock = ({children}) => (
    <div className="SERP-grid flex flex-row items-center justify-end content-center space-x-36 pl-72 pr-72">{children}</div>
)
export const SinglePorjectBlockReversed = ({children}) => (
    <div className="A11y flex flex-row-reverse space-x-36 space-x-reverse items-center justify-end content-center pl-72 pr-72">{children}</div>
)
const singleSectionBlock = (content) => (
    <div className="product_features bg-stone-50 mt-16 pt-8 pb-8">{content}</div>
)