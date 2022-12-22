import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { pxToRem } from 'shared/lib/px-to-rem'
import { maxWidth, spaceObj } from 'shared/theme'

import { NumberOutlined } from '../outlined-text'
import { XLFont } from '../typography'

interface Props {
  number?: number
  section: string
  title: React.ReactNode | string
  description?: Array<React.ReactNode | string>
  content: React.ReactNode
}

export const FreeRightPartContainer = ({
  number,
  section,
  title,
  description,
  content,
}: Props) => {
  return (
    <Container>
      <div>
        {number && (
          <NumberOutlinedStyled animate>
            {number < 10 ? '0' + number : '' + number}
          </NumberOutlinedStyled>
        )}
      </div>
      <RightPart>
        <Section>{section}</Section>
        <Title>{title}</Title>
        {description && (
          <Description>
            {description.map(line => (
              <p>{line}</p>
            ))}
          </Description>
        )}
        <Content>{content} </Content>
      </RightPart>
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  ...getBreakpointsStylesByArray(theme, {
    paddingTop: [71, 63, 71, 63, 72, null, 87, 166],
    paddingBottom: [71, 63, 71, 63, 72, null, 87, 166],
    paddingLeft: [
      spaceObj.se,
      spaceObj.se_horizontal,
      spaceObj.ip13,
      spaceObj.ip13_horizontal,
      0,
      spaceObj.tablet_horizontal,
      0,
      0,
    ],
    paddingRight: [
      spaceObj.se,
      spaceObj.se_horizontal,
      spaceObj.ip13,
      spaceObj.ip13_horizontal,
      0,
      spaceObj.tablet_horizontal,
      0,
      0,
    ],
  }),
}))

const RightPart = styled('div')(({ theme }) => ({
  position: 'relative',
  ...getBreakpointsStylesByArray(theme, {
    width: ['100%', null, null, null, '561px', '640px', '864px', '1087px'],
  }),
}))

const NumberOutlinedStyled = styled(NumberOutlined)(({ theme }) => ({
  position: 'absolute',
  ...getBreakpointsStylesByArray(theme, {
    top: [46, 40, 48, 38, '6%', null, '-4%', '-1%'],
    left: [0, null, null, null, '-5%', null, '-10%', '-8%'],
  }),
}))

const Section = styled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: pxToRem(51),
  ...getBreakpointsStylesByArray(theme, {
    marginBottom: [51, null, 35, 36, 20, null, 48, 56],
  }),
}))

const Title = styled(XLFont)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    marginRight: [
      0,
      0,
      0,
      0,
      spaceObj.tablet,
      0,
      spaceObj.laptop,
      spaceObj.desktop,
    ],
  }),
}))

const Description = styled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
  p: { marginTop: 0, marginBottom: pxToRem(6) },
  b: { color: theme.palette.text.primary, fontWeight: 400 },
  ...getBreakpointsStylesByArray(theme, {
    marginRight: [
      0,
      0,
      0,
      0,
      spaceObj.tablet,
      0,
      spaceObj.laptop,
      spaceObj.desktop,
    ],
    marginTop: [24, 48, 32, 40, 48, null, 48, 56],
  }),
}))

const Content = styled('div')(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    marginTop: [32, null, 40, 32, null, 48, 56],
  }),
}))
