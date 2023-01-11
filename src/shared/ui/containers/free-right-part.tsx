import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Fragment, forwardRef, useRef } from 'react'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { pxToRem } from 'shared/lib/px-to-rem'
import { useRevealBlock } from 'shared/lib/use-reveal-block'
import {
  WORD_CLASS,
  useRevealTextByWord,
} from 'shared/lib/use-reveal-text-by-word'
import { maxWidth, spaceObj } from 'shared/theme'

import { XLFont } from '../typography'

interface Props {
  number?: React.ReactNode
  section: string
  title: string[]
  description?: Array<React.ReactNode | string>
  content?: React.ReactNode
  footer?: React.ReactNode
}

export const FreeRightPartContainer = forwardRef<HTMLDivElement, Props>(
  ({ number, section, title, description, content, footer }: Props, ref) => {
    const titleRef = useRef<HTMLDivElement | null>(null)
    const descriptionRef = useRef<HTMLDivElement | null>(null)

    useRevealTextByWord({ ref: titleRef })
    useRevealBlock({ ref: descriptionRef })

    return (
      <Container ref={ref}>
        <div>{number && <NumberContainer>{number}</NumberContainer>}</div>
        <RightPart>
          <Section variant="h2">{section}</Section>
          <Title ref={titleRef}>
            {title.map((line, j) => (
              <Fragment key={j}>
                {line.split(' ').map((word, i) => (
                  <span key={i} className={WORD_CLASS}>{`${word} `}</span>
                ))}
                <br />
              </Fragment>
            ))}
          </Title>
          {description && (
            <Description ref={descriptionRef}>
              {description.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </Description>
          )}
          {content && <Content>{content}</Content>}
          {footer && <Footer>{footer}</Footer>}
        </RightPart>
      </Container>
    )
  },
)

const Container = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  ...getBreakpointsStylesByArray(theme, {
    paddingTop: [71, 63, 71, 63, 72, null, 87, null, 181, 166],
    paddingBottom: [71, 63, 71, 63, 72, null, 87, null, 181, 166],
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
    width: [
      '100%',
      null,
      null,
      null,
      '561px',
      '640px',
      '864px',
      null,
      '1077px',
      '1087px',
    ],
  }),
}))

const NumberContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  ...getBreakpointsStylesByArray(theme, {
    top: [46, 40, 48, 38, '6%', null, '-4%', null, '-1%'],
    left: [
      spaceObj.se,
      spaceObj.se_horizontal,
      spaceObj.ip13,
      spaceObj.ip13_horizontal,
      '-5%',
      null,
      '-18%',
      '-10%',
      '-8%',
    ],
  }),
}))

const Section = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: pxToRem(51),
  ...getBreakpointsStylesByArray(theme, {
    marginBottom: [51, null, 35, 36, 20, null, 48, null, 56],
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
      spaceObj.desktop_s,
      spaceObj.laptop,
      spaceObj.macbook,
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
      spaceObj.desktop_s,
      spaceObj.laptop,
      spaceObj.macbook,
      spaceObj.desktop,
    ],
    marginTop: [24, 48, 32, 40, 48, null, 48, 56],
  }),
}))

const Content = styled('div')(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    marginTop: [32, null, 40, 32, null, 48, 56, null, 64],
  }),
}))

const Footer = styled('div')(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    marginTop: [102],
  }),
}))
