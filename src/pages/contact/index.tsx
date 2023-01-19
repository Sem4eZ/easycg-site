import { styled } from '@mui/material/styles'

import { LeaveProjectDetailsPlain } from 'features/project/leave-project-details/plain'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { maxWidth, spaceArr } from 'shared/theme'
import { TextOutlined } from 'shared/ui/outlined-text'
import { Page } from 'shared/ui/page-templates'

import { ContactPageAskEverything } from './components/ask-everithing'
import { ContactPageContactInfo } from './components/contact-info'
import { ContactPageHeader } from './components/header'

const ContactPage = () => (
  <Page
    title="lets do something legendary"
    titleSize="small"
    decorationText={
      <TextOutlined viewBoxWidth={2220} type="header" animate>
        contact
      </TextOutlined>
    }>
    <Content>
      <section>
        <ContactPageHeader title="let’s discuss your project" />
        <LeaveProjectDetailsPlain />
      </section>

      <div>
        <ContactPageHeader title="keep in touch with us" />
        <ContactPageContactInfo />
      </div>

      <ContactPageAskEverything />
    </Content>
  </Page>
)

export default ContactPage

const Content = styled('div')(({ theme }) => ({
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  flexDirection: 'column',
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
    paddingBottom: [123, 46, 64, 114, 241, 113, 245, null, 6, 235],
    paddingTop: [85, 51, 34, 122, 32, 38, 88, null, 191, 286],
    gap: [146, 120, 294, 234, 127, 194, 319, null, 360],
  }),
}))
