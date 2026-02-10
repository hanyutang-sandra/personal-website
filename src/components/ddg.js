import * as T from '../templates';
import * as C from '../contents/ddg';
import { useEffect } from 'react';

function DDG() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 

    return (
        <>
            <T.PageHeader bgColor="bg-ddg-orange" src='/ddg_logo_text.png' />

            <T.IntroSection src='/ddg_logo.png' alt="DuckDuckGo Logo" text={C.introSection} />

            <T.HighlightsBlock>
                <T.HighlightsTitle title='Project Highlights'/>
             
                <T.SingleSectionBlockDark>
                    <T.SectionTitle title='Platform Improvements'/>
                    
                    <T.SingleProjectBlockReversed>
                        <T.SideImgHorizontal src='/grafana-sample.png' />
                        <T.Paragraph text={C.instrumentation}/>
                    </T.SingleProjectBlockReversed>
                </T.SingleSectionBlockDark>
            
            </T.HighlightsBlock>
        </>
    )
}

export default DDG