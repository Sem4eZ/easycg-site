import { FreeRightPartContainer } from 'shared/ui/containers'
import { HorizontalList } from 'shared/ui/horizontal-list'
import { TextOutlined } from 'shared/ui/outlined-text'
import { Page } from 'shared/ui/page-templates'

import { CertificateCompany } from './components/certificate-company'
import { AboutUsPageOurTeam } from './components/our-team'
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
      section="beginning"
      title={['just know us better', 'we’re really easy guys']}
      description={[
        <>we focus only on what matters turning</>,
        <>complex ideas into easy solutions </>,
      ]}
      content={
        <HorizontalList
          title="we are"
          items={[
            'customer-focused',
            'enthusiastic',
            'fast-thinking',
            'experienced',
          ]}
        />
      }
    />

    <AboutUsPageValueStystem />

    <AboutUsPageOurTeam />

    {/* <AboutUsPageHowWeWork /> */}
    <CertificateCompany />
  </Page>
)

export default AboutUsPage
