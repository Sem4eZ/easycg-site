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

  return (
    <Container isMobile={isMobileWidth}>
      <ContactHeader title="let's start a project" isMobile={isMobileWidth} />
      <ProjectForm />
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
