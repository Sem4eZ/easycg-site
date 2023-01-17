import { styled } from '@mui/material/styles'

import { getImageSrcSetByImageObj } from 'entities/image/types'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { SwimOutContentFromRight } from 'shared/ui/containers'
import { TextOutlined } from 'shared/ui/outlined-text'

export const AboutUsPageHowWeWork = () => {
  const imageSrcSet = getImageSrcSetByImageObj({
    path: '/assets/images/',
    name: 'How we work',
    fileType: 'png',
  })
  return (
    <div style={{ position: 'relative' }}>
      <SectionNumber viewBoxWidth={795} animate>
        03
      </SectionNumber>
      <SwimOutContentFromRight
        title={['this pucture is about', 'how we work on']}
        content={
          <ContentContainer>
            <picture>
              {imageSrcSet.map(imageSrcSetData => {
                return (
                  <source
                    srcSet={imageSrcSetData.path}
                    media={imageSrcSetData.media}></source>
                )
              })}

              <img src="/assets/images/How we work-1920w.png" alt="" />
            </picture>
          </ContentContainer>
        }
      />
    </div>
  )
}

const ContentContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.inverted : 'white',
  ...getBreakpointsStylesByArray(theme, {
    height: [219, 331, 282, 494, 453, 521, 934, null, 1082, 1134],
  }),

  '& picture': {
    display: 'flex',
    justifyContent: 'center',
    height: '90%',
    width: '100%',
    img: {
      height: '100%',
      width: '100%',
      objectFit: 'contain',
      objectPosition: 'bottom',
    },
  },
}))

const SectionNumber = styled(TextOutlined)(({ theme }) => ({
  position: 'absolute',
  top: '19px',
  left: '-84px',
  ...getBreakpointsStylesByArray(theme, {
    display: ['none', null, null, null, 'block'],
    top: [null, null, null, null, 88, 43, -104, null, -142],
    left: [null, null, null, null, -84, null, '-20%', '-16%', '-14%'],
    transform: [null, null, null, null, 'scale(0.6)', null, 'scale(0.424)'],
  }),
}))
