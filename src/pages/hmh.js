import SVG from 'next/image';
import Nav from './nav';
import * as T from '../templates';
import * as C from '../contents/hmh';

function HMH() {
    return (
        <>
            <Nav/>

            <T.PageHeader bgColor="bg-otter-blue" svgSrc='/cmu+hmh.png' />

            <T.IntroSection svgSrc='/HMH_logo.png' svgAlt="HMH Logo" text={C.introSection} />

            <T.HighlightsBlock>
                <T.HighlightsTitle title='Project Highlights'/>

                <T.SingleSectionBlockLight>
                    <T.SectionTitle title='Team Website' />
                    <T.SingleProjectBlock>
                        <T.SideImgHorizontal src='/Otter Website.png' />
                        <T.Paragraph text={C.teamWebsite}/>
                    </T.SingleProjectBlock>
                </T.SingleSectionBlockLight>

                <T.SingleSectionBlockDark>
                    <T.SectionTitle title='Final Product' />
                    <T.SingleProjectBlockReversed>
                        <T.SideImgHorizontal src='/hablame.png' />
                        <T.Paragraph text={C.finalProduct}/>
                    </T.SingleProjectBlockReversed>
                </T.SingleSectionBlockDark>

                <T.SingleSectionBlockLight>
                    <T.SectionTitle title='Fun Explorations in the Process' />
                    
                    <T.SingleProjectBlock>
                        <T.SideImgHorizontal src='/testingAR.png' />
                        <T.Paragraph text={C.AR}/>
                    </T.SingleProjectBlock>
                    
                    <T.BetweenProjectSpace/>
                    
                    <T.SingleProjectBlockReversed>
                        <T.SideImgHorizontal src='/ASR.png' />
                        <T.Paragraph text={C.ASR}/>
                    </T.SingleProjectBlockReversed>
                </T.SingleSectionBlockLight>
            </T.HighlightsBlock>

           <Nav/>
        </>
    )
}

export default HMH