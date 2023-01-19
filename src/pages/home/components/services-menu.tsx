import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

import { LeaveProjectDetails } from 'features/project/leave-project-details/quiz'

import { ServicesMenu } from 'entities/services/ui/services-menu'

import { COMPANY_EMAIL } from 'shared/config/environment-variables'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { pxToRem } from 'shared/lib/px-to-rem'
import { maxWidth, spaceArr } from 'shared/theme'
import { visuallyHiddenStyles } from 'shared/ui/accesibility'
import { XXLFont } from 'shared/ui/typography'

export const MainPageServicesMenu = () => {
  return (
    <Container>
      <HiddenTitle>Services menu</HiddenTitle>
      <Title>
        let’s create
        <br /> a legendary project
      </Title>

      <ServicesMenu />

      <Footer>
        <Button href={`mailto:${COMPANY_EMAIL}`}>say hello</Button>
        <LeaveProjectDetails buttonText="discuss a project" />
      </Footer>
    </Container>
  )
}

const Container = styled('section')(({ theme }) => ({
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
    paddingBottom: [84, 74, 56, 140, 150, 112, 140, null, 181, 200],
    paddingTop: [97, 85, 41, 208],
  }),
}))

const HiddenTitle = styled('h2')(() => visuallyHiddenStyles)

const Title = styled(XXLFont)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    marginBottom: [24, 32, 24, null, 48, null, 112],
  }),
  [theme.breakpoints.between('mobile_s_landscape', 'mobile_landscape')]: {
    fontSize: pxToRem(25),
    lineHeight: pxToRem(30),
  },
  [theme.breakpoints.between('mobile_s', 'mobile')]: {
    fontSize: pxToRem(25),
    lineHeight: pxToRem(30),
  },
}))

const Footer = styled('footer')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  ...getBreakpointsStylesByArray(theme, {
    flexDirection: ['column', 'row'],
    marginTop: [56, 64, 56, 81, 96, null, 112],
    gap: [48, 20, null, 247, 80, null, 275, 460, 275],
    justifyContent: ['space-between', null, null, 'flex-start'],
  }),
}))
