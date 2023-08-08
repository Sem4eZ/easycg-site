import { styled } from '@mui/material/styles'

import { getImageSrcSetByImageObj } from 'entities/image/types'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { SwimOutContentFromRight } from 'shared/ui/containers'

export const AboutUsPageHowWeWork = () => {
  const imageSrcSet = getImageSrcSetByImageObj({
    path: '/assets/images/',
    name: 'How we work',
    fileType: 'png',
    alt: '',
  })
  return (
    <SwimOutContentFromRight
      title={['this pucture is about', 'how we work on']}
      content={
        <ContentContainer>
          <picture>
            {imageSrcSet.map(imageSrcSetData => {
              return (
                <source
                  key={imageSrcSetData.path}
                  srcSet={imageSrcSetData.path}
                  media={imageSrcSetData.media}></source>
              )
            })}

            <img src="/assets/images/How we work-1920w.png" alt="" />
          </picture>
        </ContentContainer>
      }
    />
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
