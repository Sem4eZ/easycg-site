import { styled } from '@mui/material/styles'
import { useEffect, useRef } from 'react'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { useGetSectionScroll } from 'shared/lib/use-get-section-scroll'

interface Props {
  sectionRef: React.MutableRefObject<HTMLElement | null>
}

export const Flow = ({ sectionRef }: Props) => {
  const {
    isTablet,
    isTabletLandscape,
    isDesktopS,
    isLaptop,
    isMacbook,
    isDesktop,
  } = useGetDevice()
  const doAnimate =
    isTablet ||
    isTabletLandscape ||
    isDesktopS ||
    isLaptop ||
    isMacbook ||
    isDesktop

  const containerRef = useRef<HTMLDivElement>(null)

  const reserchRef = useRef<HTMLDivElement>(null)
  const brainstormRef = useRef<HTMLDivElement>(null)
  const designRef = useRef<HTMLDivElement>(null)
  const developmentRef = useRef<HTMLDivElement>(null)
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

    activateElement(reserchRef, 0.2)
    activateElement(brainstormRef, 0.35)
    activateElement(designRef, 0.5)

    activateElement(cycleRef, 0.6)
    activateElement(progressBarRef, 0.6)
    activateElement(developmentRef, 0.75)
    activateElement(readyRef, 0.9)
  }

  const doColoring = () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setProgress()
        }
      })
    })

    const section = sectionRef.current
    section && observer.observe(section)
  }

  useEffect(() => {
    if (!doAnimate) return
    window.addEventListener('scroll', doColoring)
    return () => {
      window.removeEventListener('scroll', doColoring)
    }
  }, [doAnimate])

  useEffect(() => {
    const progressBar = progressBarRef.current

    if (!progressBar) return

    const totalLength = progressBar.getTotalLength()

    progressBar.style.strokeDasharray = totalLength.toString()
    progressBar.style.strokeDashoffset = totalLength.toString()
  }, [])

  return (
    <Container ref={containerRef}>
      <ReserchBrainstormContainer>
        <Step ref={reserchRef} className="reserch">
          <div className="title">reserch</div>
          <Arrow />
        </Step>

        <Step ref={brainstormRef} className="brainstorm">
          <div className="title">brainstorm</div>
          <Arrow />
        </Step>
      </ReserchBrainstormContainer>

      <Step ref={designRef}>
        <div className="title">design</div>
        <Arrow />
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

      <Step ref={developmentRef} className="end-step">
        <Arrow />
        <div className="title">development</div>
      </Step>

      <Step ref={readyRef} className="end-step">
        <Arrow />
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
    transition: 'font-size 1s, transform 1s, left 1s, right 1s',
    textAlign: 'center',
    ...getBreakpointsStylesByArray(theme, {
      fontSize: [16, null, null, null, null, null, 25],
      lineHeight: [20, null, null, null, null, null, 30],
      fontWeight: [700, null, null, null, null, null, 400],
      minHeight: [30, null, null, null, null, null, 51],
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
      fontWeight: 700,
      ...getBreakpointsStylesByArray(theme, {
        fontSize: [25, null, null, null, null, null, 42],
        lineHeight: [30, null, null, null, null, null, 51],
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

const ReserchBrainstormContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  ...getBreakpointsStylesByArray(theme, {
    flexDirection: ['row', null, null, null, null, null, 'column'],
    gap: [104, null, null, null, null, null, 24],
  }),
  [theme.breakpoints.down('desktop_s')]: {
    '& .reserch': {
      position: 'relative',
      '& .arrow': {
        position: 'absolute',
        top: '9px',
        right: '-57px',
        transform: 'rotate(270deg)',
      },
      '&.active': {
        '& .arrow': {
          top: '5px',
        },
      },
    },
    '& .brainstorm .arrow': {
      transform: 'rotate(45deg)',
    },
  },
}))

const Cycle = styled('div')(({ theme }) => ({
  position: 'relative',
  ...getBreakpointsStylesByArray(theme, {
    width: [88, null, null, null, null, null, 160],
    height: [88, null, null, null, null, null, 160],
    marginTop: [46, null, null, null, null, null, 75],
    marginBottom: [46, null, null, null, null, null, 75],
  }),
  '& svg': {
    width: '100%',
    height: '100%',
    transform: 'rotate(-90deg)',
    '& circle': {
      stroke: theme.palette.text.primary,
      strokeWidth: '1px',
      strokeLinecap: 'round',
      fill: 'transparent',
    },
    '& .progress-bar': {
      stroke: theme.palette.accent,
      transition: 'stroke-dashoffset 1.5s',
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
    zIndex: 1,
    borderRadius: '50%',
    ...getBreakpointsStylesByArray(theme, {
      width: [8, null, null, null, null, null, 10],
      height: [8, null, null, null, null, null, 10],
      backgroundColor: [
        theme.palette.accent,
        null,
        null,
        null,
        null,
        null,
        theme.palette.text.primary,
      ],
    }),
  },

  '& .top-step': {
    '& .circle': {
      top: '-2px',
      left: '50%',
      transform: 'translateX(-50%)',
      transitionDelay: '1.5s',
    },
    '& .title': {
      left: '50%',
      transform: 'translateX(-50%)',
      transitionDelay: '1.5s',
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
      transitionDelay: '1.125s',
    },
    '& .title': {
      top: '50%',
      transform: 'translateY(-50%)',
      transitionDelay: '1.125s',
      ...getBreakpointsStylesByArray(theme, {
        right: [-90, null, null, null, null, null, -121],
      }),
    },
  },
  '& .bottom-step': {
    '& .circle': {
      left: '50%',
      transform: 'translateX(-50%)',
      transitionDelay: '0.725s',
      ...getBreakpointsStylesByArray(theme, {
        bottom: [-2, null, null, null, null, null, -2, null, -3],
      }),
    },
    '& .title': {
      left: '50%',
      transform: 'translateX(-50%)',
      transitionDelay: '0.725s',
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
      transitionDelay: '0.275s',
    },
    '& .title': {
      top: '50%',
      transform: 'translateY(-50%)',
      transitionDelay: '0.275s',
      ...getBreakpointsStylesByArray(theme, {
        left: [-90, null, null, null, null, null, -121],
      }),
    },
  },

  '&.active': {
    '& .circle': {
      backgroundColor: theme.palette.accent,
    },
    '& .top-step ': {
      '& .circle': { transitionDelay: '0s' },
      '& .title': { transitionDelay: '0s' },
    },
    '& .right-step': {
      '& .circle': { transitionDelay: '0.175s' },
      '& .title': {
        transitionDelay: '0.275s',
        ...getBreakpointsStylesByArray(theme, {
          right: [-110, null, null, null, null, null, -184],
        }),
      },
    },
    '& .bottom-step': {
      '& .circle': { transitionDelay: '0.55s' },
      '& .title': { transitionDelay: '0.55s' },
    },
    '& .left-step': {
      '& .circle': {
        transitionDelay: '0.725s',
      },
      '& .title': {
        transitionDelay: '0.725s',
        ...getBreakpointsStylesByArray(theme, {
          left: [-110, null, null, null, null, null, -184],
        }),
      },
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

const Arrow = () => {
  return (
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
  )
}
