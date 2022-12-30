import { styled } from '@mui/material/styles'
import { useEffect, useRef } from 'react'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetSectionScroll } from 'shared/lib/use-get-section-scroll'

interface Props {
  sectionRef: React.MutableRefObject<HTMLElement | null>
}

export const Flow = ({ sectionRef }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const reserchRef = useRef<HTMLDivElement>(null)
  const brainstormRef = useRef<HTMLDivElement>(null)
  const designRef = useRef<HTMLDivElement>(null)
  const readyRef = useRef<HTMLDivElement>(null)
  const cycleRef = useRef<HTMLDivElement>(null)

  const progressBarRef = useRef<SVGCircleElement>(null)

  const getSectionScroll = useGetSectionScroll(
    sectionRef,
    window.innerHeight / 4,
  )

  function setProgress() {
    const container = containerRef.current
    const section = sectionRef.current
    if (!container || !section) return

    const percentage = getSectionScroll()

    function activateElement(
      elementRef: React.RefObject<HTMLElement | SVGCircleElement>,
      startPercentage: number,
    ) {
      if (elementRef.current) {
        if (percentage >= startPercentage) {
          elementRef.current.classList.add('active')
        } else {
          elementRef.current.classList.remove('active')
        }
      }
    }

    if (percentage === 1) {
      container.classList.add('completed')
    } else {
      container.classList.remove('completed')
    }

    activateElement(reserchRef, 0.3)
    activateElement(brainstormRef, 0.4)
    activateElement(designRef, 0.5)

    activateElement(cycleRef, 0.7)
    activateElement(progressBarRef, 0.7)
    activateElement(readyRef, 0.9)
  }

  const doColoring = () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', setProgress)
        } else {
          window.removeEventListener('scroll', setProgress)
        }
      })
    })

    const section = sectionRef.current
    section && observer.observe(section)
  }

  useEffect(() => {
    doColoring()
  }, [])

  useEffect(() => {
    const progressBar = progressBarRef.current

    if (!progressBar) return

    const totalLength = progressBar.getTotalLength()

    progressBar.style.strokeDasharray = totalLength.toString()
    progressBar.style.strokeDashoffset = totalLength.toString()
  }, [])

  return (
    <Container ref={containerRef}>
      <Step ref={reserchRef}>
        <div className="title">reserch</div>
        <svg
          className="arrow"
          width="9"
          height="49"
          viewBox="0 0 9 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.14645 48.3536C4.34171 48.5488 4.65829 48.5488 4.85355 48.3536L8.03553 45.1716C8.2308 44.9763 8.2308 44.6597 8.03553 44.4645C7.84027 44.2692 7.52369 44.2692 7.32843 44.4645L4.5 47.2929L1.67157 44.4645C1.47631 44.2692 1.15973 44.2692 0.964466 44.4645C0.769204 44.6597 0.769204 44.9763 0.964466 45.1716L4.14645 48.3536ZM4 0L4 24H5L5 0L4 0ZM4 24L4 48H5L5 24H4Z"
            fill="currentColor"
          />
        </svg>
      </Step>

      <Step ref={brainstormRef}>
        <div className="title">brainstorm</div>
        <svg
          className="arrow"
          width="9"
          height="49"
          viewBox="0 0 9 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.14645 48.3536C4.34171 48.5488 4.65829 48.5488 4.85355 48.3536L8.03553 45.1716C8.2308 44.9763 8.2308 44.6597 8.03553 44.4645C7.84027 44.2692 7.52369 44.2692 7.32843 44.4645L4.5 47.2929L1.67157 44.4645C1.47631 44.2692 1.15973 44.2692 0.964466 44.4645C0.769204 44.6597 0.769204 44.9763 0.964466 45.1716L4.14645 48.3536ZM4 0L4 24H5L5 0L4 0ZM4 24L4 48H5L5 24H4Z"
            fill="currentColor"
          />
        </svg>
      </Step>

      <Step ref={designRef}>
        <div className="title">design</div>
        <svg
          className="arrow"
          width="9"
          height="49"
          viewBox="0 0 9 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.14645 48.3536C4.34171 48.5488 4.65829 48.5488 4.85355 48.3536L8.03553 45.1716C8.2308 44.9763 8.2308 44.6597 8.03553 44.4645C7.84027 44.2692 7.52369 44.2692 7.32843 44.4645L4.5 47.2929L1.67157 44.4645C1.47631 44.2692 1.15973 44.2692 0.964466 44.4645C0.769204 44.6597 0.769204 44.9763 0.964466 45.1716L4.14645 48.3536ZM4 0L4 24H5L5 0L4 0ZM4 24L4 48H5L5 24H4Z"
            fill="currentColor"
          />
        </svg>
      </Step>

      <Cycle ref={cycleRef}>
        <div className="top-step">
          <div className="title">built</div>
          <div className="circle" />
        </div>
        <div className="right-step">
          <div className="title">
            test &<br />
            evaluate
          </div>
          <div className="circle" />
        </div>
        <div className="bottom-step">
          <div className="title">find&nbsp;solution</div>
          <div className="circle" />
        </div>
        <div className="left-step">
          <div className="title">redesign</div>
          <div className="circle" />
        </div>

        <svg
          width="160"
          height="160"
          viewBox="0 0 100 100"
          xmlns="https://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="49"></circle>
          <circle
            ref={progressBarRef}
            className="progress-bar"
            cx="50"
            cy="50"
            r="49"></circle>
        </svg>
      </Cycle>

      <Step ref={readyRef} className="end-step">
        <svg
          className="arrow"
          width="9"
          height="49"
          viewBox="0 0 9 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.14645 48.3536C4.34171 48.5488 4.65829 48.5488 4.85355 48.3536L8.03553 45.1716C8.2308 44.9763 8.2308 44.6597 8.03553 44.4645C7.84027 44.2692 7.52369 44.2692 7.32843 44.4645L4.5 47.2929L1.67157 44.4645C1.47631 44.2692 1.15973 44.2692 0.964466 44.4645C0.769204 44.6597 0.769204 44.9763 0.964466 45.1716L4.14645 48.3536ZM4 0L4 24H5L5 0L4 0ZM4 24L4 48H5L5 24H4Z"
            fill="currentColor"
          />
        </svg>
        <div className="title">ready</div>
      </Step>
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  position: 'relative',
  minHeight: '500px',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  justifyContent: 'center',
  alignItems: 'center',
  ...getBreakpointsStylesByArray(theme, {
    gap: [16, null, null, null, null, null, 24],
  }),
  '& .title': {
    display: 'flex',
    alignItems: 'flex-end',
    position: 'relative',
    overflow: 'hidden',
    transition: 'font-size .5s, transform .5s, left .5s, right .5s',
    textAlign: 'center',
    ...getBreakpointsStylesByArray(theme, {
      fontSize: [16, null, null, null, null, 25],
      lineHeight: [20, null, null, null, null, 30],
      fontWeight: [700, null, null, null, null, 400],
      minHeight: [30, null, null, null, null, 51],
    }),
    '&:after': {
      position: 'absolute',
      content: "''",
      width: '100%',
      height: '3px',
      bottom: 0,
      left: 0,
      backgroundColor: theme.palette.accent,
      transform: 'translateX(-100%)',
      transition: 'transform .5s',
    },
  },
  '& .arrow': {
    ...getBreakpointsStylesByArray(theme, {
      height: [24, null, null, null, null, null, 48],
    }),
    transition: 'color .5s',
  },
  '& .active': {
    '& .arrow': {
      color: theme.palette.accent,
    },
    '& .title': {
      alignItems: 'flex-start',
      fontSize: 42,
      lineHeight: '51px',
      fontWeight: 700,
      ...getBreakpointsStylesByArray(theme, {
        fontSize: [25, null, null, null, null, 42],
        lineHeight: [30, null, null, null, null, 51],
      }),
      '&:after': {
        transform: 'translateX(0)',
      },
    },
  },
  '& .end-step .title': {
    transitionDelay: '0.5s',
  },
}))

const Cycle = styled('div')(({ theme }) => ({
  position: 'relative',
  ...getBreakpointsStylesByArray(theme, {
    marginTop: [46, null, null, null, null, null, 75],
    marginBottom: [46, null, null, null, null, null, 75],
  }),
  '& svg': {
    transform: 'rotate(-90deg)',
    '& circle': {
      stroke: theme.palette.text.primary,
      strokeWidth: '1px',
      strokeLinecap: 'round',
      fill: 'transparent',
    },
    '& .progress-bar': {
      stroke: theme.palette.accent,
      transition: 'stroke-dashoffset 1s',
      '&.active': {
        strokeDashoffset: '0 !important',
      },
    },
    '&.arrow': {
      transform: 'rotate(0deg)',
    },
  },
  '& .title': {
    position: 'absolute !important',
  },
  '& .circle': {
    position: 'absolute',
    backgroundColor: theme.palette.text.primary,
    zIndex: 1,
    width: '10px',
    height: '10px',
    borderRadius: '50%',
  },

  '& .top-step': {
    '& .circle': {
      top: '-2px',
      left: '50%',
      transform: 'translateX(-50%)',
      transitionDelay: '0.3s',
    },
    '& .title': {
      left: '50%',
      transform: 'translateX(-50%)',
      transitionDelay: '0.3s',
      ...getBreakpointsStylesByArray(theme, {
        top: [-50, null, null, null, null, null, -75],
      }),
    },
  },
  '& .right-step': {
    '& .circle': {
      top: '50%',
      transform: 'translateY(-50%)',
      right: '-3px',
      transitionDelay: '0.2s',
    },
    '& .title': {
      top: '50%',
      transform: 'translateY(-50%)',
      transitionDelay: '0.2s',
      ...getBreakpointsStylesByArray(theme, {
        right: [-90, null, null, null, null, null, -121],
      }),
    },
  },
  '& .bottom-step': {
    '& .circle': {
      bottom: '2px',
      left: '50%',
      transform: 'translateX(-50%)',
      transitionDelay: '0.1s',
    },
    '& .title': {
      left: '50%',
      transform: 'translateX(-50%)',
      transitionDelay: '0.1s',
      ...getBreakpointsStylesByArray(theme, {
        bottom: [-50, null, null, null, null, null, -75],
      }),
    },
  },
  '& .left-step': {
    '& .circle': {
      top: '50%',
      left: '-3px',
      transform: 'translateY(-50%)',
      transitionDelay: '0s',
    },
    '& .title': {
      top: '50%',
      transform: 'translateY(-50%)',
      transitionDelay: '0s',
      ...getBreakpointsStylesByArray(theme, {
        left: [-90, null, null, null, null, null, -121],
      }),
    },
  },

  '&.active': {
    '& .circle': {
      backgroundColor: theme.palette.accent,
    },
    '& .top-step .title': { transitionDelay: '0s' },
    '& .right-step .title': {
      transitionDelay: '0.1s',
      ...getBreakpointsStylesByArray(theme, {
        right: [-110, null, null, null, null, null, -184],
      }),
    },
    '& .bottom-step .title': { transitionDelay: '0.2s' },
    '& .left-step .title': {
      transitionDelay: '0.3s',
      ...getBreakpointsStylesByArray(theme, {
        left: [-110, null, null, null, null, null, -184],
      }),
    },
  },
}))

const Step = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  ...getBreakpointsStylesByArray(theme, {
    gap: [12, null, null, null, null, null, 24],
  }),
}))
