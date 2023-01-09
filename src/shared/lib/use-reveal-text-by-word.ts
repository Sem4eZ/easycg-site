import React, { useEffect } from 'react'

interface Props {
  ref: React.MutableRefObject<HTMLDivElement | null>
}
export const WORD_CLASS = 'word'

export const useRevealTextByWord = ({ ref }: Props) => {
  function revealText() {
    const title = ref.current
    if (!title) return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const letter = Array.from(
            title.getElementsByClassName(
              WORD_CLASS,
            ) as HTMLCollectionOf<HTMLElement>,
          )

          const persentage =
            (window.innerHeight - title.getBoundingClientRect().top) /
            title.offsetHeight

          setTimeout(() => {
            letter.forEach(function (l, i) {
              if (persentage - i * 0.1 > 1) l.style.setProperty('opacity', '1')
              else if (persentage - i < 0.2)
                l.style.setProperty('opacity', '0.2')
              else
                l.style.setProperty(
                  'opacity',
                  (persentage - i * 0.1).toString(),
                )
            })
          })
        }
      })
    })

    observer.observe(title)
  }

  useEffect(() => {
    window.addEventListener('scroll', revealText)
    return () => {
      window.removeEventListener('scroll', revealText)
    }
  }, [])

  useEffect(() => {
    const title = ref.current
    if (!title) return

    const letter = Array.from(
      title.getElementsByClassName(WORD_CLASS) as HTMLCollectionOf<HTMLElement>,
    )

    letter.map(l => {
      l.style.setProperty('transition', 'opacity .2s')
      l.style.setProperty('opacity', '0.2')
    })
  })
}
