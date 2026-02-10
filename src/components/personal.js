import * as T from '../templates';
import * as C from '../contents/personal';
import { useEffect } from 'react';

function PersonalProjects() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 

    return (
        <>
            <T.PageHeader bgColor="bg-violet-400" src='/GourdyMeSimpsonsWide.png' />

            <T.HighlightsBlock>
                <T.SingleSectionBlockLight>
                    <T.SectionTitle title='Web' />
                    
                    <T.SingleProjectBlockReversed>
                        <T.SideImgVertical src='/blogMock.png' />
                        <T.Paragraph text={C.blog}/>
                    </T.SingleProjectBlockReversed>

                    <T.BetweenProjectSpace/>

                    <T.SingleProjectBlock>
                        <T.SideImgVertical src='/portfolioMock.png' />
                        <T.Paragraph text={C.portfolio}/>
                    </T.SingleProjectBlock>
                </T.SingleSectionBlockLight>
            </T.HighlightsBlock>
        </>
    )
}

export default PersonalProjects