import { styled } from '@mui/material/styles'
import { FC } from 'react'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'

import { ContactHeader } from './contact-header'
import { ProjectForm } from './form'

export const StartProjectForm: FC = ({}) => {
  const {
    isMobileS,
    isMobileSLandscape,
    isMobileLandscape,
    isMobile,
    isTablet,
    isTabletLandscape,
  } = useGetDevice()

  const isMobileWidth =
    isMobileS ||
    isMobileSLandscape ||
    isMobileLandscape ||
    isMobile ||
    isTablet ||
    isTabletLandscape

  const handleDownload = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()
    const downloadLink = document.createElement('a')
    downloadLink.href =
      'https://firebasestorage.googleapis.com/v0/b/easy-admin-28c89.appspot.com/o/terms_of_service.pdf?alt=media&token=aeefe42a-f799-41e3-8ba6-df75091b1084'
    downloadLink.download = 'Terms and Conditions'
    downloadLink.target = '_blank'
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  const handlePrivacyPolicyClick: React.MouseEventHandler<
    HTMLDivElement
  > = e => {
    e.stopPropagation()
  }

  return (
    <Container isMobile={isMobileWidth}>
      <ContactHeader title="let's start a project" isMobile={isMobileWidth} />
      <div>
        <ProjectForm />
        <PrivacyPolicyContainer onClick={handlePrivacyPolicyClick}>
          By sending this message you agree <br />
          to our <button onClick={handleDownload}>privacy policy</button> of
          personal data
        </PrivacyPolicyContainer>
      </div>
    </Container>
  )
}

const Container = styled('section')<{ isMobile: boolean }>(
  ({ theme, isMobile }) => ({
    display: isMobile ? 'block' : 'flex',
    ...getBreakpointsStylesByArray(theme, {
      gap: [null, null, null, null, null, 280, null, 334, null],
    }),
  }),
)

const PrivacyPolicyContainer = styled('div')(({ theme }) => ({
  marginTop: '10px',
  marginLeft: '1rem',
  '& button': {
    cursor: 'pointer',
    border: 'none',
    textDecoration: 'underline',
  },
  ...getBreakpointsStylesByArray(theme, {
    paddingBottom: [146, 142, 240, null, 222, null, 247, null, 274],
  }),
}))
