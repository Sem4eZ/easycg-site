import { styled } from '@mui/material/styles'

import { getImageSrcSetByImageObj } from 'entities/image/types'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { spaceArr, spaceObj } from 'shared/theme'
import { SwimOutContentFromRight } from 'shared/ui/containers'

export const MainPageCeoSection = () => {
  const imageSrcSet = getImageSrcSetByImageObj({
    path: '/assets/images/',
    name: 'How-we-work',
    fileType: 'png',
    alt: '',
  })
  return (
    <SwimOutContentFromRight
      title={['don’t worry. your project', 'is in food hands']}
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

              <img src="./assets/images/How-we-work.png" alt="ceo" />
            </picture>
          </ContentContainer>
          {/* <Caption>
            <span>By the way, he's our CEO,&nbsp;</span>
            <span> and his best friend works here too</span>
          </Caption> */}
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
  height: '100vh', // Set height to full viewport height
  margin: 0, // Remove margin
  '& picture': {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',

    img: {
      width: '100%', // Set width to 100% to span the entire container
      height: 'auto', // Maintain aspect ratio
      objectFit: 'cover', // Cover the entire container while maintaining aspect ratio
      objectPosition: 'bottom', // Adjust as needed
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
