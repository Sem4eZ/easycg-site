import { styled } from '@mui/material'
import { useEffect, useRef, useState } from 'react'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetIsTouchableVersion } from 'shared/lib/use-get-is-touchable-version'
import { useRevealBlock } from 'shared/lib/use-reveal-block'
import { spaceObj } from 'shared/theme'

import { Link } from '../link'

interface Props {
  title: string
  items: string[]
}

const getZeroObject = (items: string[]) => {
  const obj: { [x: string]: 0 | 1 } = {}
  items.forEach(item => {
    obj[item] = 0
  })

  return obj
}

export const HorizontalList = ({ title, items }: Props) => {
  const isTouchableVersion = useGetIsTouchableVersion()
  const containerRef = useRef<HTMLDivElement | null>(null)
  const listContainerRef = useRef<HTMLUListElement | null>(null)
  const timeoutsRef = useRef<NodeJS.Timeout[]>([])
  useRevealBlock({ ref: containerRef })

  const [activatedItems, setActivatedItems] = useState(getZeroObject(items))

  const activateText = () => {
    const listContainer = listContainerRef.current
    if (!listContainer) return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          while (timeoutsRef.current.length) {
            clearTimeout(timeoutsRef.current.pop())
          }

          setActivatedItems(getZeroObject(items))

          return
        }

        let time = 600

        items.forEach(item => {
          const index = setTimeout(() => {
            setActivatedItems(value => ({ ...value, [item]: 1 }))
          }, time)
          timeoutsRef.current.push(index)

          time += 300
        })
      })
    })

    observer.observe(listContainer)
  }

  useEffect(() => {
    window.addEventListener('scroll', activateText)
    return () => {
      window.removeEventListener('scroll', activateText)
    }
  }, [])

  return (
    <Container ref={containerRef}>
      {isTouchableVersion ? <b>{title}</b> : title}
      <List ref={listContainerRef}>
        {items.map(item => (
          <li key={item}>
            <Link active={isTouchableVersion ? 1 : activatedItems[item]}>
              {item}
            </Link>
          </li>
        ))}
      </List>
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
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

const List = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  listStyle: 'none',
  paddingLeft: 0,
  marginBottom: 0,
  gridColumnGap: 25,
  gridRowGap: 24,

  ...getBreakpointsStylesByArray(theme, {
    marginTop: [26, 16, null, null, null, null, 8],
  }),
  ' a': {
    marginRight: 3,
    '&:hover': {
      marginRight: 0,
    },
  },
}))
