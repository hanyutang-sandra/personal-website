export const introSection = (
    <>
        DuckDuckGo is an independent search engine and web browser focused on protecting user privacy. 
        Founded in 2008, DuckDuckGo has grown to serve over <b className='font-semibold'>3 billion monthly searches</b> and <b className='font-semibold'>9 million monthly downloads</b> across mobile and desktop platforms. 
        Unlike traditional browsers that track search history for data monetization, DuckDuckGo blocks ad trackers, prevents cookie-based profiling, and maintains no search history—offering users a truly private browsing experience.
        <br/> <br/>
        With the DuckDuckGo browser available on <b className='font-semibold'>iOS, macOS, Android, and Windows</b>, 
        the platform has established a significant presence in the privacy-focused browser market. 
        Apple's integration of DuckDuckGo as a built-in search option in Safari has further expanded its reach among iOS and macOS users, 
        serving millions who prioritize data protection. 
        The browser maintains a <b className='font-semibold'>4.8-star average rating</b> across app stores, 
        showing strong user satisfaction and trust in its privacy-first approach.
    </>
)

export const instrumentation = (
    <>
        At DuckDuckGo, respecting user privacy means imposing strict constraints on data collection practices.
        Unlike traditional tech companies that join analytics events using persistent user or device identifiers to track complete user journeys,
        DuckDuckGo deliberately rejects this approach, as such tracking may benefit product analytics but also enables individual user identification.
        To maintain privacy while still gaining product insights, I co-led the development of an <b className='font-semibold'>in-house privacy-preserving instrumentation system</b> centered on local, on-device data processing.
        <br/> <br/>

        The system stores analytics data in <b className='font-semibold'>iOS and macOS user defaults</b>,
        preprocessing all information locally before transmitting anonymized metrics to the backend via GET requests.
        Leveraging my experience in observability, I productionalized and expanded the framework into a <b className='font-semibold'>company-wide standard</b> spanning <b className='font-semibold'>iOS, macOS, Android, Windows and Web Frontend</b>.
        This involved driving cross-platform alignment to establish consistent measurement methodologies and privacy guarantees across all client applications.
        <br/> <br/>

        The framework evolved from a prototype into a <b className='font-semibold'>widely adopted infrastructure</b> used throughout the organization,
        delivering privacy-repecting insights across critical user flows including <b className='font-semibold'>VPN setup and configuration, bookmark import, and data clearing</b>.
        These instrumentation capabilities informed company-wide objectives and directly drove product improvements, all while maintaining DuckDuckGo's commitment to user privacy.
        <br/> <br/>
    </>
)