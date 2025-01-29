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

export const grid = (
    <>
        In 2022, I spearheaded the introduction of a new grid system as an innovative layout option for the consumer app, 
        enabling dynamic display of multiple visual elements on mobile screens. 
        Designed with <b className='font-semibold'>high level of abstraction</b>, this system supports multiple content types, 
        making it <b className='font-semibold'>flexible, extensible, and developer-friendly</b>. 
        The UI system includes comprehensive <b className='font-semibold'>logging and tracking</b> capabilities using Yelp's in-house experiment logging solution, 
        which is utilized for <b className='font-semibold'>performance monitoring and post-experiment analysis</b>. 
        This ensures that the system not only enhances user experience but also provides valuable insights for continuous improvement.
        <br/> <br/>

        The component utilizing this grid system was first implemented in the "People also search for" section on the search screen for RFN (restaurants, food, nightlift) searches, rolled out in iOS version 23.34. 
        This feature highlights other popular search options and has been well-received by users, 
        driving a <b className='font-semibold'>more than 1% increase</b> in searches per user per session, based on a substantial user base.
        <br/> <br/>

        Since its launch, the grid system has been extensively adopted across various screens and workflows within the consumer app, 
        enabling the presentation of diverse content with minimal client-side modifications. 
        The system was embraced by the <b className='font-semibold'>Android consumer app and the mobile web</b>, 
        adhering to the same design principles and ideation.
        <br/> <br/>

        In 2023, the component was rewritten using <b className='font-semibold'>SwiftUI</b>, becoming the very first component to utilize SwiftUI on the search screen. 
        This modernization effort further improved the component's performance and maintainability.
        <br/> <br/>

        In early 2024, the component was then rewritten to use <b className='font-semibold'>GraphQL</b> instead of the REST API, making it the first component on the search screen to leverage GQL. 
        This transition to GraphQL improved data fetching efficiency and provided a more flexible and powerful querying capability. 
        Later that same year, the feature was extended to additional search categories through another project. 
        This expansion was efficiently implemented by backend developers <b className='font-semibold'>without the need for client involvement or an app release cycle</b>, demonstrating its extensibility.
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
        Starting from almost zero, the project took several months to complete. 
        We utilized a variety of iOS accessibility tools, such as <b className='font-semibold'>dynamic fonts and VoiceOver</b>, 
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
        In 2023, as part of the strategic "search as a platform" initiative and in anticipation of implementing memory-intensive features, 
        I worked on a project aimed at eliminating <b className='font-semibold'>Out of Memory (OOM) crashes</b> and reducing <b className='font-semibold'>memory leaks</b> within the consumer iOS search. 
        Over a three-month period, our team successfully identified and resolved over 15 memory leaks using XCode internal tools. 
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
        but also key product metrics like <b className='font-semibold'>click-through rates</b> on essential components. This approach provides more nuanced, real-time insights for both engineers and product teams.
        <br/><br/>
        Moreover, I regularly designed and implemented dashboards providing various functionality, one of which offers a <b className='font-semibold'>quick overview of live experiments impacting our platform</b>. 
        These dashboard has been embraced by multiple teams across the organization and have become instrumental in our weekly platform sync meetings, 
        enhancing our effectiveness as platform owners. They are particularly valuable during incidents affecting internal users; 
        the clear visualizations help us swiftly diagnose potential issues triggered by new changes and take corrective actions,
        such as performing rollbacks to mitigate further losses. This proactive approach not only improves our operational efficiency but also strengthens the overall resilience of our platform.

        <br/><br/>

        <i className='text-sm font-light text-gray-900 leading-relaxed italic pt-16'>
            * Sample image for demonstration purpose
        </i>
    </>
)