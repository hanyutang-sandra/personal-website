import SVG from 'next/image';
import * as T from '../templates';

function Yelp() {
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

            <div className="bg-yelp-red w-full h-64 flex items-center justify-center content-center">
                <SVG src="/yelp_logo_dark_bg.svg" width="300" height="200" alt="Yelp logo" priority={true} className="h-auto items-center justify-center content-center"></SVG>
            </div>

            <div className="intro p-72 pt-24 pb-0 flex items-center justify-end content-center space-x-36">
                <SVG src="/yelp_burst.svg" width="500" height="500" alt="Yelp burst" priority={true} className="h-auto items-center justify-center content-center"></SVG>
                <h3 className="text-base font-light text-gray-900 leading-relaxed">
                    Yelp connects people with great local businesses. 
                    Founded in San Francisco in 2004, Yelp provides a platform where users can discover and review a wide range of services, 
                    including restaurants, bars, boutiques, salons, dentists, mechanics, plumbers and more. 
                    The Yelp consumer iOS app was launched on the App Store on July 11th, 2008.
                    <br/> <br/>
                    My journey at Yelp started in Jan. 2020 right after graduation. I joined as a Software Engineer in the SearchUX team (now SearchUX Mobile). 
                    My team is both a feature team and a flatform team, owning the UX infrastructure of the search experience at Yelp consumer side. 
                    With hundreds of millions of global visits each week, search is one of the most heavily trafficked screens on Yelp.
                </h3>
            </div>

            <div className="highlights pt-24 flex flex-col items-center justify-end content-center pb-24">
                <h1 className="text-2xl font-semibold text-gray-900">Project Highlights</h1>
                <div className="product_features bg-stone-50 mt-16 pt-8 pb-8">
                    <T.SubSectionTitle title='Product features' />
                    <T.SingleProjectBlock>
                        <T.SideImg src='/yelp_refinement.png' />
                        <T.Paragraph>
                            In 2022, I spearheaded the introduction of a new grid system as an innovative layout option for the consumer app, 
                            enabling dynamic display of multiple visual elements on mobile screens. 
                            Designed with <T.BoldedPhrase text='high level of abstraction'/>, this system supports multiple content types, 
                            making it <T.BoldedPhrase text='flexible, extensible, and developer-friendly'/>. 
                            The UI system includes comprehensive <T.BoldedPhrase text='logging and tracking'/> capabilities using Yelp's in-house experiment logging solution, 
                            which is utilized for <T.BoldedPhrase text='performance monitoring and post-experiment analysis'/>. 
                            This ensures that the system not only enhances user experience but also provides valuable insights for continuous improvement.
                            {T.LineBreak}
                            The component utilizing this grid system was first implemented in the "People also search for" section on the search screen, rolled out in iOS version 23.34. 
                            This feature highlights other popular search options and has been well-received by users, 
                            driving a <T.BoldedPhrase text='more than 1% increase'/> in searches per user per session, based on a substantial user base.
                            {T.LineBreak}
                            Since its launch, the grid system has been extensively adopted across various screens and workflows within the consumer app, 
                            enabling the presentation of diverse content with minimal client-side modifications. 
                            The system was embraced by the <T.BoldedPhrase text='Android consumer app and the mobile web'/>, 
                            adhering to the same design principles and ideation.
                            {T.LineBreak}
                            In 2023, the component was rewritten using <T.BoldedPhrase text='SwiftUI'/>, becoming the very first component to utilize SwiftUI on the search screen. 
                            This modernization effort further improved the component's performance and maintainability.
                            {T.LineBreak}
                            In 2024, the component was then rewritten to use <T.BoldedPhrase text='GraphQL'/> instead of the REST API, making it the first component on the search screen to leverage GQL. 
                            This transition to GraphQL improved data fetching efficiency and provided a more flexible and powerful querying capability.
                            </T.Paragraph>
                        </T.SingleProjectBlock>
                    <T.SectionFootnote>
                        My work has been featured in Yelp product press releases regularly. Check out the <T.UrlLink href='https://blog.yelp.com/news/winter-product-release-2024/' text='winter project release 2024'/> for the new visual search experience 
                        or this <T.UrlLink href="https://blog.yelp.com/news/yelp-helps-businesses-communicate-vaccination-requirements/" text='report'/> on displaying business vaccination requirements during the pandemic.
                    </T.SectionFootnote>
                </div>

                <div className="platform_improvements mt-16 pt-8 pb-8">
                    <h2 className="text-xl font-normal text-gray-900 pl-72 pb-8">Platform Improvements</h2>
                        <div className="A11y flex flex-row-reverse space-x-36 space-x-reverse items-center justify-end content-center pl-72 pr-72">
                            <video width="300" height="300" controls>
                                <source src="yelp_vo.mp4" type="video/mp4"/>
                            </video>
                            <h3 className="text-base font-light text-gray-900 leading-relaxed">
                                In 2022, as part of Yelp's broader initiative to improve <b className='font-medium'>accessibility</b>, 
                                I spearheaded a significant project to enhance the iOS search screen. 
                                This endeavor aimed to create a more inclusive and user-friendly search experience for all Yelp users. 
                                The project was extensive, involving the transformation of hundreds of view types, 
                                including <b className='font-medium'>maps, tables, images, buttons, dropdown menus, and carousels</b>.
                                <br/> <br/>
                                Starting from almost zero, the project took several months to complete. 
                                We utilized a variety of iOS accessibility tools, such as <b className='font-medium'>dynamic fonts and VoiceOver</b>, 
                                to ensure a comprehensive and fully accessible experience. 
                                The result was a thoroughly accessible iOS search interface that exceeded accessibility standards.
                                <br/> <br/>
                                After completion, the project underwent rigorous testing by numerous users well-versed in accessibility features, 
                                along with Accessibility Engineers from Apple, including one visually impaired engineer who focused specifically on voiceover functionality. 
                                Their collective response was <b className='font-medium'>overwhelmingly positive</b>. These testers, who had been Yelp users for many years,
                                expressed their astonishment for the significant enhancements and the substantial investment of time and effort to elevate the user experience.
                                <br/> <br/>
                                <i className='text-sm font-light text-gray-900 leading-relaxed italic pt-16'>
                                    This has been one of the most rewarding experiences for me at Yelp. 
                                    The purpose of technology should always be creating a better world for all. 
                                    And this project did just that.
                                </i>
                            </h3>
                        </div>

                    <div className="w-full h-auto mt-16 pt-8 pb-8">
                        <div className="Memory_leak flex flex-row items-center justify-end content-center space-x-36 pl-72 pr-72">
                            <div className="flex flex-col items-center justify-end content-center">
                                <SVG src="/memoryGraph_sample.png" width="300" height="300" alt="Grid component" priority={true} className="h-auto"/>
                                <p className="pt-8 text-sm font-light text-gray-900 leading-relaxed">Sample stock image for illustrative purposes.</p>
                            </div>
                            <h3 className="text-base font-light text-gray-900 leading-relaxed w-3/4">
                                In 2023, as part of the strategic "search as a platform" initiative and in anticipation of implementing memory-intensive features, 
                                I worked on a project aimed at eliminating <b className='font-medium'>Out of Memory (OOM) crashes</b> and reducing <b className='font-medium'>memory leaks</b> within the consumer iOS search. 
                                Over a three-month period, our team successfully identified and resolved over 15 memory leaks using XCode internal tools. 
                                By the project's conclusion, we had not only enhanced the system's stability but also compiled our insights and methodologies into a comprehensive guide published in our internal wiki page. 
                                This guide was shared across the organization, empowering other teams to undertake similar improvements and foster a culture of continuous enhancement in performance and reliability.
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="observability bg-stone-50 mt-16 pt-8 pb-8">
                    <h2 className="text-xl font-normal text-gray-900 pl-72 pb-8">Obervability</h2>
                    <div className="A11y flex flex-row-reverse space-x-36 space-x-reverse items-center justify-end content-center pl-72 pr-72">
                        <div className="flex flex-col items-center justify-end content-center">
                            <SVG src="/splunk_sample.png" width="400" height="300" alt="Grid component" priority={true}/>
                            <p className="pt-8 text-sm font-light text-gray-900 leading-relaxed">Sample stock image for illustrative purposes.</p>
                        </div>
                        <h3 className="text-base font-light text-gray-900 leading-relaxed w-1/2">
                            As the platform owner, maintaining a robust observability system has been a pivotal focus for our team. 
                            Effective <b className='font-medium'>logging and alerting systems</b> are essential, as they enable us to promptly detect and respond to critical failures and UI degradation that could potentially lead to revenue loss. 
                            These systems, when paired with thoughtfully designed metrics, facilitate efficient project experimentation and iteration.
                            <br/><br/>
                            I have consistently championed the importance of an advanced observability system, incorporating comprehensive code-side logging and dynamic data visualization using tools like <b className='font-medium'>Splunk and Grafana</b>. 
                            I advocated for expanding our observability to include not only engineering metrics, such as <b className='font-medium'>error rates and performance</b>, 
                            but also key product metrics like <b className='font-medium'>click-through rates</b> on essential components. This approach provides more nuanced, real-time insights for both engineers and product teams.
                            <br/><br/>
                            Moreover, I regularly designed and implemented dashboards providing various functionality, one of which offers a <b className='font-medium'>quick overview of live experiments impacting our platform</b>. 
                            These dashboard has been embraced by multiple teams across the organization and have become instrumental in our weekly platform sync meetings, 
                            enhancing our effectiveness as platform owners. They are particularly valuable during incidents affecting internal users; 
                            the clear visualizations help us swiftly diagnose potential issues triggered by new changes and take corrective actions,
                            such as performing rollbacks to mitigate further losses. This proactive approach not only improves our operational efficiency but also strengthens the overall resilience of our platform.
                        </h3>
                    </div>
                </div>
            </div>

            <nav className="flex items-center justify-end content-center space-x-20 p-6 pt-18 pr-24">
                <a href="#" className="text-base font-thin leading-6 text-gray-900 hover:text-gray-300">
                    Projects
                </a>
                <a href="#" className="text-base font-thin leading-6 text-gray-900 hover:text-gray-300">
                    About Me
                </a>
            </nav>
        </>
    )
}

export default Yelp