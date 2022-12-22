import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { PricesBlock, PricesBlockProps } from 'shared/ui/prices-block'
import { XXLFont } from 'shared/ui/typography'

interface Props {
  title: string
  icon: React.ReactNode
  pricesBlock: PricesBlockProps
}

export const ServiceCard = ({ title, icon, pricesBlock }: Props) => {
  return (
    <Container>
      <Icon>{icon}</Icon>
      <Title variant="h2">{title}</Title>
      <PricesBlock {...pricesBlock} />
    </Container>
  )
}

const Container = styled('div')(({ theme }) => ({
  position: 'relative',
}))

const Title = styled(XXLFont)(({ theme }) => ({
  position: 'relative',
  ...getBreakpointsStylesByArray(theme, {
    marginBottom: [20, null, null, null, null, 40, 64],
  }),
}))

const Icon = styled('div')(({ theme }) => ({
  position: 'absolute',
  color: theme.palette.inverted,
  zIndex: 0,
  top: 0,
  ...getBreakpointsStylesByArray(theme, {
    height: [150, null, null, null, 250, null, 375],
    left: [-15, null, null, null, -30, null, -30],
  }),
  '& svg': {
    height: '100%',
    width: 'auto',
  },
}))
