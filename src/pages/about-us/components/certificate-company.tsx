import { Button, Typography, TypographyProps } from '@mui/material'
import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { maxWidth, spaceArr, spaceObj } from 'shared/theme'
import { LFont } from 'shared/ui/typography'

export const CertificateCompany = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a')
    downloadLink.href =
      'https://firebasestorage.googleapis.com/v0/b/easy-admin-28c89.appspot.com/o/Certificate%20Standard%20KBLI%2062011-PT%20Easycg%20Immersive%20Workshop.pdf?alt=media&token=e895495f-90c5-499b-85ac-7350603fa026'
    downloadLink.download =
      'Certificate Standard KBLI 62011-PT Easycg Immersive Workshop'
    downloadLink.target = '_blank' // Открывает ссылку в новом окне или вкладке
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  return (
    <Container>
      <Content>
        <XLFont>here’s why we are really serious guys</XLFont>

        <ContainerPlace>
          <ContainerInfo>
            <LFont>corporate profile for a detailed insight</LFont>
            <TextName>
              our investment status, address and a glimpse into our dynamic
              realm of operations, highlighting our impactful contributions in
              the industry
            </TextName>
          </ContainerInfo>
          <ButtonDownload onClick={handleDownload}>
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_3745_5104)">
                <rect width="80" height="80" rx="40" fill="#323545" />
                <circle cx="40" cy="73" r="40" fill="#AFD624" />
                <g clipPath="url(#clip1_3745_5104)">
                  <path
                    d="M38.6667 25V43.8933L33.88 39.12L32 41L40 49L48 41L46.12 39.12L41.3333 43.8933V25H38.6667Z"
                    fill="#F9F9FB"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_3745_5104">
                  <rect width="80" height="80" rx="40" fill="white" />
                </clipPath>
                <clipPath id="clip1_3745_5104">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                    transform="matrix(0 -1 1 0 24 53)"
                  />
                </clipPath>
              </defs>
            </svg>
          </ButtonDownload>
        </ContainerPlace>
        <hr></hr>
      </Content>
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    // paddingTop: [84, 74, 56, 140, 150, 112, 140, null, 181, 200],
    paddingBottom: [50, 74, 56, 100, 100, 0, 0, null, 60, 60],
  }),
}))

const ContainerPlace = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

const ContainerInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '70%',
}))

const TextName = styled('div')(({ theme }) => ({
  paddingTop: '20px',
}))

const ButtonDownload = styled('div')(({ theme }) => ({
  cursor: 'pointer',
  '& svg': {
    ...getBreakpointsStylesByArray(theme, {
      width: [40, 42, 45, 50, 60, 70, 80],
      height: [40, 42, 45, 50, 60, 70, 80],
    }),
  },
}))

const XLFont = styled(Typography)<TypographyProps>(({ theme }) => ({
  maxWidth: '800px',
  fontWeight: 700,
  ...getBreakpointsStylesByArray(theme, {
    fontSize: [25, null, null, null, 42, null, 68],
    lineHeight: [30, null, null, null, 51, null, 83],
  }),
}))

const Content = styled('div')(({ theme }) => ({
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  flexDirection: 'column',
  ...getBreakpointsStylesByArray(theme, {
    paddingLeft: spaceArr,
    paddingRight: spaceArr,
    paddingBottom: [123, 46, 64, 0, 0, 113, 112, null, 6, 112],
    gap: [30, 30, 30, 30, 30, 30, 40, null, 60],
  }),
}))
