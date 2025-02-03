import * as T from '../templates';
import * as C from '../contents/hmh';
import { useEffect } from 'react';

function HMH() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 

    return (
        <>
            <T.PageHeader bgColor="bg-otter-blue" src='cmu+hmh.png' />

            <T.IntroSection src='HMH_logo.png' alt="HMH Logo" text={C.introSection} />

            <T.HighlightsBlock>
                <T.HighlightsTitle title='Project Highlights'/>

                <T.SingleSectionBlockLight>
                    <T.SectionTitle title='Team Website' />
                    <T.SingleProjectBlock>
                        <T.SideImgHorizontal src='OtterWebsiteMock.png' />
                        <T.Paragraph text={C.teamWebsite}/>
                    </T.SingleProjectBlock>
                </T.SingleSectionBlockLight>

                <T.SingleSectionBlockDark>
                    <T.SectionTitle title='Final Product' />
                    <T.SingleProjectBlockReversed>
                        <T.SideImgHorizontal src='hablameMock.png' />
                        <T.Paragraph text={C.finalProduct}/>
                    </T.SingleProjectBlockReversed>
                </T.SingleSectionBlockDark>

                <T.SingleSectionBlockLight>
                    <T.SectionTitle title='Other Explorations' />
                    
                    <T.SingleProjectBlock>
                        <T.SideImgHorizontal src='testingAR.png' />
                        <T.Paragraph text={C.AR}/>
                    </T.SingleProjectBlock>
                    
                    <T.BetweenProjectSpace/>
                    
                    <T.SingleProjectBlockReversed>
                        <T.SideImgHorizontal src='ASRMock.png' />
                        <T.Paragraph text={C.ASR}/>
                    </T.SingleProjectBlockReversed>
                </T.SingleSectionBlockLight>
            </T.HighlightsBlock>
        </>
    )
}

export default HMH