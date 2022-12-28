import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { PricesBlock, PricesBlockProps } from 'shared/ui/prices-block'
import { XXLFont } from 'shared/ui/typography'

interface Props {
  title: string
  pricesBlock: PricesBlockProps
}

export const ServiceCard = ({ title, pricesBlock }: Props) => {
  return (
    <Container>
      <Title variant="h2">{title}</Title>
      <PricesBlock {...pricesBlock} />
    </Container>
  )
}

const Container = styled('div')(() => ({
  position: 'relative',
}))

const Title = styled(XXLFont)(({ theme }) => ({
  position: 'relative',
  ...getBreakpointsStylesByArray(theme, {
    marginBottom: [24, 40, 48, 92, 40, null, 116, null, null, 208],
  }),
}))
