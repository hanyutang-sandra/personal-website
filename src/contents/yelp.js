export const introSection = (
    <>
        Yelp connects people with great local businesses. Founded in San Francisco in 2004, 
        Yelp provides a platform where users can discover and review a wide range of services, 
        including restaurants, bars, boutiques, salons, dentists, mechanics, plumbers and more. 
        The Yelp consumer iOS app was launched on the App Store on July 11th, 2008.
        <br/> <br/>

        My journey at Yelp started in Jan. 2020 right after graduation. I joined as a Software Engineer in the SearchUX team (now SearchUX Mobile). 
        My team is both a feature team and a platform team, owning the UX infrastructure of the search experience at Yelp consumer side. 
        With hundreds of millions of global visits each week, search is one of the most heavily trafficked screens on Yelp.
    </>
)

export const videos = (
    <>
       Inspired by the popularity of short video platforms like TikTok and Instagram Reels, 
       Yelp introduced <b className='font-semibold'>short videos</b> into its search functionality to boost user engagement. 
       I led this pioneering project on iOS from scratch. Over six months, in collaboration with <b className='font-semibold'>four teams across two organizations</b>, 
       we launched a landmark feature that represents a significant milestone in the app's history.
       <br/> <br/>
        As <b className='font-semibold'>project lead</b>, I conducted weekly sync meetings to coordinate progress and discuss technical decisions,
        maintaining a detailed document to keep all stakeholders informed. 
        We transitioned our video hosting solutions twice to reduce costs and developed two backend endpoints to manage video data, 
        ensuring continuous monitoring of video performance and stability. 
        <br/> <br/>
        On the iOS client, we leveraged native <b className='font-semibold'>AVAssets</b>, supplemented by custom in-house modules, 
        to optimize <b className='font-semibold'>performance, quality, and latency</b>.
        <br/><br/>
        <i className='text-sm font-light text-gray-900 leading-relaxed italic pt-16'>Checkout <a href="https://hanyutang-sandra.github.io/blog/work/2024/08/02/project-leading-learnings/" className="underline text-sky-700 hover:text-red-700">my blog</a> for my reflections on leading this six-month long project. </i>
        <i className='text-sm font-light text-gray-900 leading-relaxed italic pt-16'>And <a href="https://blog.yelp.com/news/fall-product-release-2025/?utm_source=yelp_social&utm_campaign=Fall2025Product&utm_medium=organic&utm_content=consumer" className="underline text-sky-700 hover:text-red-700">Yelp's 2025 Fall Product Release</a> for the global rollout. </i>
    </>
)


export const grid = (
    <>
        In 2022, I led the development of a new grid system for the consumer app, 
        designed to dynamically display various visual elements on mobile screens. 
        This <b className='font-semibold'>highly abstract</b> system supports diverse content types, 
        enhancing <b className='font-semibold'>flexibility and developer ease of use</b>. 
        It incorporates Yelp's internal logging tools for <b className='font-semibold'>performance tracking and analysis</b>, 
        which aids ongoing enhancements and user experience improvements.
        <br/> <br/>
        The grid system debuted in the "People also search for" section during RFN (restaurants, food, nightlife) searches in the iOS app version 23.34. 
        This addition improved user engagement, evidenced by a more than <b className='font-semibold'>1% increase</b> in searches per session. 
        It has since been adopted widely across the app's various platforms, including <b className='font-semibold'>Android and mobile web</b>, 
        maintaining uniform design principles.
        <br/> <br/>
        In 2023, the component was updated using <b className='font-semibold'>SwiftUI</b> on the search screen. 
        By early 2024, it transitioned to using <b className='font-semibold'>GraphQL</b> over the <b className='font-semibold'>REST API</b> for more efficient and flexible data handling. 
        This component's extension to additional search categories later in the year showcased its <b className='font-semibold'>scalability</b>, 
        executed swiftly by backend teams <b className='font-semibold'>without client interaction or app updates</b>, 
        aligning with the company-wide investment in <b className='font-semibold'>Server-Driven UI</b>.
    </>
)

export const productProjectsFootnote = (
    <>
        My work has been featured in Yelp product press releases regularly. 
        Check out <a href="https://blog.yelp.com/news/end-of-year-product-release-2024/?utm_source=yelp_social&utm_campaign=endofyearproduct&utm_medium=linkedin&utm_content=corporate" className="underline text-sky-700 hover:text-red-700">Yelp's end-of-year product release </a>
        for the new AI-powered discovery and connection features. 
        <br/>
        For older projects, check out the <a href='https://blog.yelp.com/news/winter-product-release-2024/' className="underline text-sky-700 hover:text-red-700">winter project release 2024</a> for the new visual search experience 
        or this <a href="https://blog.yelp.com/news/yelp-helps-businesses-communicate-vaccination-requirements/" className="underline text-sky-700 hover:text-red-700">report</a> on displaying business vaccination requirements during the pandemic.
    </>
)

export const a11y = (
    <>
        In 2022, as part of Yelp's broader initiative to improve <b className='font-semibold'>accessibility</b>, 
        I spearheaded a significant project to enhance the iOS search screen. 
        This endeavor aimed to create a more inclusive and user-friendly search experience for all Yelp users. 
        The project was extensive, involving the transformation of hundreds of view types, 
        including <b className='font-semibold'>maps, tables, images, buttons, dropdown menus, and carousels</b>.
        <br/> <br/>
        Starting from almost zero, We utilized a variety of iOS accessibility tools, such as <b className='font-semibold'>dynamic fonts and VoiceOver</b>, 
        to ensure a comprehensive and fully accessible experience. 
        The result was a thoroughly accessible iOS search interface that exceeded accessibility standards.
        <br/> <br/>
        After completion, the project underwent rigorous testing by numerous users well-versed in accessibility features, 
        along with Accessibility Engineers from Apple, including one visually impaired engineer who focused specifically on voiceover functionality. 
        Their collective response was <b className='font-semibold'>overwhelmingly positive</b>. These testers, who had been Yelp users for many years,
        expressed their astonishment for the significant enhancements and the substantial investment of time and effort to elevate the user experience.
        <br/> <br/>
        <i className='text-sm font-light text-gray-900 leading-relaxed italic pt-16'>
            This has been one of the most rewarding experiences for me at Yelp. 
            The purpose of technology should always be creating a better world for all. 
            And this project did just that.
        </i>
    </>
)

export const memoryLeak = (
    <>
        In 2023, as part of the strategic "search as a platform" initiative and in anticipation of implementing memory-intensive features such as videos, 
        I worked on a project aimed at eliminating <b className='font-semibold'>Out of Memory (OOM) crashes</b> and reducing <b className='font-semibold'>memory leaks</b> within the consumer iOS search. 
        <br /><br />
        Over a three-month period, our team successfully identified and resolved <b className='font-semibold'>over 15 memory leaks</b> using XCode internal tools. 
        By the project's conclusion, we had not only enhanced the system's stability but also compiled our insights and methodologies into a comprehensive guide published in our internal wiki page. 
        This guide was shared across the organization, empowering other teams to undertake similar improvements and foster a culture of continuous enhancement in performance and reliability.

        <br /><br />

        <i className='text-sm font-light text-gray-900 leading-relaxed italic pt-16'>
            * Sample image for demonstration purpose
        </i>
    </>
)

export const splunk = (
    <> 
        As the platform owner, maintaining a robust observability system has been a pivotal focus for our team. 
        Effective <b className='font-semibold'>logging and alerting systems</b> are essential, as they enable us to promptly detect and respond to critical failures and UI degradation that could potentially lead to revenue loss. 
        These systems, when paired with thoughtfully designed metrics, facilitate efficient project experimentation and iteration.
        <br/><br/>
        I have consistently championed the importance of an advanced observability system, incorporating comprehensive code-side logging and dynamic data visualization using tools like <b className='font-semibold'>Splunk and Grafana</b>. 
        I advocated for expanding our observability to include not only engineering metrics, such as <b className='font-semibold'>error rates and performance</b>, 
        but also key product metrics like <b className='font-semibold'>click-through rates</b> on essential components.
        <br/><br/>
        Moreover, I regularly designed and implemented dashboards providing various functionality, one of which offers a <b className='font-semibold'>quick overview of live experiments impacting our platform</b>. 
        These dashboard has been embraced by multiple teams across the organization and have become instrumental in our weekly platform sync meetings, 
        enhancing our effectiveness as platform owners. They are particularly valuable during incidents; 
        the clear visualizations help us swiftly diagnose issues triggered by new changes and take corrective actions to mitigate further losses.

        <br/><br/>

        <i className='text-sm font-light text-gray-900 leading-relaxed italic pt-16'>
            * Sample image for demonstration purpose
        </i>
    </>
)