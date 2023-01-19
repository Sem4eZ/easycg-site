import { styled } from '@mui/material/styles'

import { getImageSrcSetByImageObj } from 'entities/image/types'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { spaceArr, spaceObj } from 'shared/theme'
import { SwimOutContentFromRight } from 'shared/ui/containers'

export const MainPageCeoSection = () => {
  const imageSrcSet = getImageSrcSetByImageObj({
    path: '/assets/images/',
    name: 'ceo',
    fileType: 'png',
    alt: '',
  })
  return (
    <SwimOutContentFromRight
      title={['don’t worry. we’re friendly', 'like this guy']}
      content={
        <figure style={{ margin: 0 }}>
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

              <img src="/assets/images/ceo-1920w.png" alt="ceo" />
            </picture>
          </ContentContainer>
          <Caption>
            <span>By the way, he’s our СEO&nbsp;</span>
            <span>with his best friend</span>
          </Caption>
        </figure>
      }
    />
  )
}

const ContentContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  backgroundColor:
    theme.palette.mode === 'dark'
      ? theme.palette.inverted
      : theme.palette.text.disabled,
  ...getBreakpointsStylesByArray(theme, {
    height: [260, null, 269, 359, 406, null, 990, null, 833, 990],
    marginBottom: [24, 32, null, null, null, null, 72, null, 48, 64],
  }),
  '& picture': {
    height: '90%',
    width: '90%',
    display: 'flex',
    justifyContent: 'center',

    img: {
      height: '100%',
      objectFit: 'contain',
      objectPosition: 'bottom',
    },
  },
}))

const Caption = styled('figcaption')(({ theme }) => ({
  display: 'flex',
  color: theme.palette.text.secondary,
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
    flexDirection: ['column', null, null, 'row'],
    gap: [5, null, null, 0],
  }),
}))
