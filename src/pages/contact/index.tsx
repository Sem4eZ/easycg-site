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
  <PageStyled
    title={
      <>
        let's do something
        <br />
        legendary
      </>
    }
    titleSize="small"
    decorationText={
      <OutlinedTextSTyled viewBoxWidth={2510} type="headerSmall">
        contacts
      </OutlinedTextSTyled>
    }>
    <Content>
      {/* <section>
        <ContactPageHeader title="let’s discuss your project" />
        <LeaveProjectDetailsPlain />
      </section> */}

      <div>
        <ContactPageHeader title="keep in touch with us" />
        <ContactPageContactInfo />
      </div>

      <ContactPageAskEverything />
    </Content>
  </PageStyled>
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
    paddingBottom: [64, 46, 64, 64, 24, 60, 114, null, 6, 235],
    paddingTop: [85, 51, 34, 122, 32, 38, 88, null, 191, 286],
    gap: [70, 100, 100, 124, 127, 124, 200, 250, 300],
  }),
}))

const OutlinedTextSTyled = styled(TextOutlined)(() => ({}))

const PageStyled = styled(Page)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    left: [-350, -370, -330, -170, -220, -280, -480, -300, -660, -300],
    top: [-146, null, null, -141, -196, -196, -266, null, -380],
  }),
}))
