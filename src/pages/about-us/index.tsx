import { FreeRightPartContainer } from 'shared/ui/containers'
import { HorizontalList } from 'shared/ui/horizontal-list'
import { TextOutlined } from 'shared/ui/outlined-text'
import { Page } from 'shared/ui/page-templates'

import { AboutUsPageHowWeWork } from './components/how-we-work'
import { AboutUsPageOurTeam } from './components/our-team'
import { AboutUsPageProjectInGoodHands } from './components/project-in-good-hands'
import { AboutUsPageValueStystem } from './components/value-system'

const AboutUsPage = () => (
  <Page
    title="about us"
    decorationText={
      <TextOutlined viewBoxWidth={797} type="header">
        04
      </TextOutlined>
    }>
    <FreeRightPartContainer
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

    <AboutUsPageValueStystem />

    <AboutUsPageOurTeam />

    <AboutUsPageHowWeWork />

    <AboutUsPageProjectInGoodHands />
  </Page>
)

export default AboutUsPage
