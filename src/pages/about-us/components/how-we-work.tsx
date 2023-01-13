import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { SwimOutContentFromRight } from 'shared/ui/containers'

export const AboutUsPageHowWeWork = () => {
  return (
    <div>
      <SwimOutContentFromRight
        title={['this pucture is about', 'how we work on']}
        content={
          <ContentContainer>
            <img src="/assets/images/How we work.png" alt="" />
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
  '& img': {
    height: '90%',
    width: '100%%',
  },
}))
