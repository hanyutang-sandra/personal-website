import SVG from 'next/image';

function Otter() {
    return (
        <>
             <nav className="flex items-center justify-end content-center space-x-20 p-6 pt-18 pr-24">
                <a href="#" className="text-base font-thin leading-6 text-gray-900 hover:text-gray-300">
                    Projects
                </a>
                <a href="#" className="text-base font-thin leading-6 text-gray-900 hover:text-gray-300">
                    About Me
                </a>
            </nav>

            <div className="bg-otter-blue w-full h-64 flex items-center justify-center content-center">
                <SVG src="/HMH_logo.png" width="300" height="200" alt="Yelp logo" priority={true} className="h-auto items-center justify-center content-center"></SVG>
            </div>

            <div className="intro p-72 pt-24 pb-0 flex items-center justify-end content-center space-x-36">
                <SVG src="/yelp_burst.svg" width="500" height="500" alt="Yelp burst" priority={true} className="h-auto items-center justify-center content-center"></SVG>
                <h3 className="text-base font-normal text-gray-900 leading-relaxed">
                    Houghton Mifflin Harcourt (HMH) is a leading global learning company dedicated to delivering innovative and impactful educational solutions,
                    specializing in K-12 education.
                    <br/> <br/>
                    In 2018, in the collaboration between CMU HCII and HMH, I together with a few class mates spent 9 months and created a interactive language learning system for HMH client.
                    The final product was delivered to HMH in Auguest, 2019.
                </h3>
            </div>

            <div className="highlights p-72 pt-24 flex flex-col items-center justify-end content-center">
                <h1 className="text-2xl font-semibold text-gray-900">Project Highlights</h1>
                <div className="product features pt-24">
                    <h2 className="text-lg font-normal text-gray-900">Product features</h2>
                    <li className="SERP-grid flex flex-row items-center justify-end content-center space-x-36 pt-16">
                        <SVG src="/yelp_burst.svg" width="300" height="300" alt="Yelp burst" priority={true} className="h-auto"/>
                        <h3 className="text-base font-light text-gray-900 leading-relaxed">
                            In 2022, I led the project to build a new grid system to introduce a new layout options 
                            for the consumer app to display multiple visual elements apart from the traditional carousel layout. 
                            The system was designed in a manner that is flexible, extensible and easy to use. 
                            The first concrete component on SERP using the grid system is under "People also search for" section, 
                            showcasing other popular search options. The feature is popular among users, increasing the searches per user per session for above 1%.
                            The grid system has since been widely used across multiple screens and workflows on the consumer app, showcasing different content with little to no client side changes. 
                            It was later adopted by Android consumer app and mobile WWW site.
                        </h3>
                    </li>
                </div>
                <div className="product features pt-24">
                    <h2 className="text-lg font-normal text-gray-900">Platform Improvements</h2>
                    <li className="A11y flex flex-row-reverse space-x-36 space-x-reverse items-center justify-end content-center pt-16">
                        <SVG src="/yelp_burst.svg" width="300" height="300" alt="Yelp burst" priority={true} className="h-auto"/>
                        <h3 className="text-base font-light text-gray-900 leading-relaxed">
                            In 2022, I led the project to build a new grid system to introduce a new layout options 
                            for the consumer app to display multiple visual elements apart from the traditional carousel layout. 
                            The system was designed in a manner that is flexible, extensible and easy to use. 
                            The first concrete component on SERP using the grid system is under "People also search for" section, 
                            showcasing other popular search options. The feature is popular among users, increasing the searches per user per session for above 1%.
                            The grid system has since been widely used across multiple screens and workflows on the consumer app, showcasing different content with little to no client side changes. 
                            It was later adopted by Android consumer app and mobile WWW site.
                        </h3>
                    </li>
                    <li className="SERP-IA flex flex-row items-center justify-end content-center space-x-36 pt-16">
                        <SVG src="/yelp_burst.svg" width="300" height="300" alt="Yelp burst" priority={true} className="h-auto"/>
                        <h3 className="text-base font-light text-gray-900 leading-relaxed">
                            In 2022, I led the project to build a new grid system to introduce a new layout options 
                            for the consumer app to display multiple visual elements apart from the traditional carousel layout. 
                            The system was designed in a manner that is flexible, extensible and easy to use. 
                            The first concrete component on SERP using the grid system is under "People also search for" section, 
                            showcasing other popular search options. The feature is popular among users, increasing the searches per user per session for above 1%.
                            The grid system has since been widely used across multiple screens and workflows on the consumer app, showcasing different content with little to no client side changes. 
                            It was later adopted by Android consumer app and mobile WWW site.
                        </h3>
                    </li>
                    <li className="Memory-Leak flex flex-row-reverse items-center justify-end content-center space-x-36 space-x-reverse pt-16">
                        <SVG src="/yelp_burst.svg" width="300" height="300" alt="Yelp burst" priority={true} className="h-auto"/>
                        <h3 className="text-base font-light text-gray-900 leading-relaxed">
                            In 2022, I led the project to build a new grid system to introduce a new layout options 
                            for the consumer app to display multiple visual elements apart from the traditional carousel layout. 
                            The system was designed in a manner that is flexible, extensible and easy to use. 
                            The first concrete component on SERP using the grid system is under "People also search for" section, 
                            showcasing other popular search options. The feature is popular among users, increasing the searches per user per session for above 1%.
                            The grid system has since been widely used across multiple screens and workflows on the consumer app, showcasing different content with little to no client side changes. 
                            It was later adopted by Android consumer app and mobile WWW site.
                        </h3>
                    </li>
                </div>
                <div className="observability pt-24">
                    <h2 className="text-lg font-normal text-gray-900">Obervability</h2>
                    <li className="Memory-Leak flex flex-row items-center justify-end content-center space-x-36 pt-16">
                        <SVG src="/yelp_burst.svg" width="300" height="300" alt="Yelp burst" priority={true} className="h-auto"/>
                        <h3 className="text-base font-light text-gray-900 leading-relaxed">
                            In 2022, I led the project to build a new grid system to introduce a new layout options 
                            for the consumer app to display multiple visual elements apart from the traditional carousel layout. 
                            The system was designed in a manner that is flexible, extensible and easy to use. 
                            The first concrete component on SERP using the grid system is under "People also search for" section, 
                            showcasing other popular search options. The feature is popular among users, increasing the searches per user per session for above 1%.
                            The grid system has since been widely used across multiple screens and workflows on the consumer app, showcasing different content with little to no client side changes. 
                            It was later adopted by Android consumer app and mobile WWW site.
                        </h3>
                    </li>
                </div>
            </div>
        </>
    )
}

export default Otter