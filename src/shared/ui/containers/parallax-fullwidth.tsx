import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'

export const ParallaxFullWidth = () => {
  return (
    <div>
      <Parallax></Parallax>
    </div>
  )
}

const Parallax = styled('div')(({ theme }) => ({
  backgroundImage: `url("/assets/images/Parallax ${theme.palette.mode}.png")`,
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  ...getBreakpointsStylesByArray(theme, {
    height: [214, 266, 260, 391, 389, null, 902, null, 833],
  }),
}))
