import * as T from '../templates';
import * as C from '../contents/yelp';

function Yelp() {
    return (
        <>
            <T.PageHeader bgColor="bg-yelp-red" svgSrc='/yelp_logo_dark_bg.svg' />

            <T.IntroSection svgSrc='/yelp_burst.svg' svgAlt="Yelp Logo" text={C.introSection} />

            <T.HighlightsBlock>
                <T.HighlightsTitle title='Project Highlights'/>
                <T.SingleSectionBlockDark>
                    <T.SectionTitle title='Product features' />
                    
                    <T.SingleProjectBlockReversed>
                        <T.SideImgVertical src='/yelp-videos.png' />
                        <T.Paragraph text={C.videos}/>
                    </T.SingleProjectBlockReversed>

                    <T.BetweenProjectSpace/>

                    <T.SingleProjectBlock>
                        <T.SideImgVertical src='/yelp_refinement.png' />
                        <T.Paragraph text={C.grid}/>
                    </T.SingleProjectBlock>

                    <T.SectionFootnote text={C.productProjectsFootnote}/>
                </T.SingleSectionBlockDark>

                <T.SingleSectionBlockLight>
                    <T.SectionTitle title='Platform Improvements'/>
                    
                    <T.SingleProjectBlockReversed>
                        <T.SideVideo src='yelp_vo.mp4' />
                        <T.Paragraph text={C.a11y}/>
                    </T.SingleProjectBlockReversed>

                    <T.BetweenProjectSpace/>

                    <T.SingleProjectBlock>
                        <T.SideImgHorizontal src='/memoryGraph.png' />
                        <T.Paragraph text={C.memoryLeak} />
                    </T.SingleProjectBlock>
                </T.SingleSectionBlockLight>

                <T.SingleSectionBlockDark>
                    <T.SectionTitle title='Obervability'/>

                    <T.SingleProjectBlockReversed>
                        <T.SideImgHorizontal src='/splunk_sample.png' />
                        <T.Paragraph text={C.splunk}/>
                    </T.SingleProjectBlockReversed>

                </T.SingleSectionBlockDark>
            
            </T.HighlightsBlock>
        </>
    )
}

export default Yelp