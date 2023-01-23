import { styled } from '@mui/material/styles'
import { useState } from 'react'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { Link } from 'shared/ui/link'

type View = 'carousel' | 'list'

export const useProjectViewPicker = () => {
  const [view, setView] = useState<View>('carousel')
  const {
    isMobileS,
    isMobileSLandscape,
    isMobileLandscape,
    isTablet,
    isTabletLandscape,
  } = useGetDevice()

  return {
    template: (
      <Container>
        <Link
          style={{ fontWeight: 700 }}
          active={view === 'carousel' ? 1 : 0}
          onClick={() => setView('carousel')}>
          {isMobileS ||
          isMobileSLandscape ||
          isMobileLandscape ||
          isTablet ||
          isTabletLandscape
            ? 'scroll'
            : 'carousel'}
        </Link>
        <Link
          style={{ fontWeight: 700 }}
          active={view === 'list' ? 1 : 0}
          onClick={() => setView('list')}>
          list
        </Link>
      </Container>
    ),
    view,
  }
}

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  ...getBreakpointsStylesByArray(theme, {
    gap: [32, 56, 32, 72, null, null, 80, null, 76, 80],
  }),
}))
