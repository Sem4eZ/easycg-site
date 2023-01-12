import { styled } from '@mui/material/styles'
import { Fragment, useEffect, useRef } from 'react'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { useGetSectionScroll } from 'shared/lib/use-get-section-scroll'
import {
  WORD_CLASS,
  useRevealTextByWord,
} from 'shared/lib/use-reveal-text-by-word'
import { maxWidth, spaceArr, spaceObj } from 'shared/theme'

import { XLFont } from '../typography'

interface Props {
  title: string[]
  content: React.ReactNode
}

export const SwimOutContentFromRight = ({ title, content }: Props) => {
  const { isDesktopS, isLaptop, isMacbook, isDesktop } = useGetDevice()

  const doAnimate = isDesktopS || isLaptop || isMacbook || isDesktop

  const titleRef = useRef<HTMLParagraphElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  useRevealTextByWord({ ref: titleRef })

  const getSectionScroll = useGetSectionScroll(contentRef)

  const showContent = () => {
    const content = contentRef.current
    if (!content) return

    const percentage = getSectionScroll()

    let newPercentage = 100 - percentage * 100
    if (newPercentage > 40) newPercentage = 40

    setTimeout(() => {
      content.style.transform = `translateX(${newPercentage}%)`
    }, 0)
  }

  useEffect(() => {
    if (!doAnimate) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', showContent)
        } else {
          window.removeEventListener('scroll', showContent)
        }
      })
    })

    const content = contentRef.current
    content && observer.observe(content)
  }, [])

  return (
    <Container>
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
      <Content>
        <ContentAnimationBlock ref={contentRef}>
          {content}
        </ContentAnimationBlock>
      </Content>
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    paddingTop: [84, 74, 56, 140, 150, 112, 140, null, 181, 200],
    paddingBottom: [50, 74, 56, 140, 150, 112, 165, null, 208, 176],
  }),
}))

const Title = styled(XLFont)(({ theme }) => ({
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  ...getBreakpointsStylesByArray(theme, {
    paddingRight: spaceArr,
    paddingLeft: [
      spaceObj.se,
      spaceObj.se_horizontal,
      spaceObj.ip13,
      spaceObj.ip13_horizontal,
      '40%',
      null,
      null,
      null,
      760,
    ],
    marginBottom: [56, 72, 31, 72, 104, null, 72, null, 82, 100],
  }),
}))

const Content = styled('div')(() => ({
  maxWidth: maxWidth,
  marginLeft: 'auto',
  marginRight: 'auto',
  overflow: 'hidden',
}))

const ContentAnimationBlock = styled('div')(({ theme }) => ({
  '& img': {
    width: '100%',
    objectFit: 'contain',
    objectPosition: 'bottom',
  },
  ...getBreakpointsStylesByArray(theme, {
    transform: ['unset', null, null, null, null, null, 'translateX(40%)'],
  }),
}))
