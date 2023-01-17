import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { FreeRightPartContainer } from 'shared/ui/containers'
import { HorizontalList } from 'shared/ui/horizontal-list'
import { TextOutlined } from 'shared/ui/outlined-text'
import { Page } from 'shared/ui/page-templates'

import { AboutUsPageHowWeWork } from './components/how-we-work'
import { AboutUsPageOurTeam } from './components/our-team'
import { AboutUsPageProjectInGoodHands } from './components/project-in-good-hands'

const AboutUsPage = () => (
  <Page
    title="about us"
    decorationText={
      <TextOutlined viewBoxWidth={797} type="header" animate>
        04
      </TextOutlined>
    }>
    <FreeRightPartContainer
      number={
        <SectionNumber viewBoxWidth={680} animate>
          01
        </SectionNumber>
      }
      section="beggining"
      title={['just know us better', 'we’re really nice guys']}
      description={[
        <>some people think pages “about us” are boring</>,
        <>AR/VR? wait for it... we can do it, too</>,
      ]}
      content={
        <HorizontalList
          title="we are"
          items={['friendly', 'innovate', 'quick thinking', 'funny']}
        />
      }
    />

    <AboutUsPageOurTeam />

    <AboutUsPageHowWeWork />

    <AboutUsPageProjectInGoodHands />
  </Page>
)

export default AboutUsPage

const SectionNumber = styled(TextOutlined)(({ theme }) => ({
  position: 'absolute',

  ...getBreakpointsStylesByArray(theme, {
    display: ['none', null, null, null, 'block'],
    top: [0, null, null, null, null],
    left: [null, null, null, null, '-2vw', '-0.1vw', '-0.1vw', '-4vw'],
    transform: [null, null, null, null, 'scale(0.6)', null, 'scale(0.424)'],
  }),
}))
