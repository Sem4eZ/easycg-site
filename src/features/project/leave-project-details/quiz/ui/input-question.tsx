import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { XLFont } from 'shared/ui/typography'

interface Props {
  title?: React.ReactNode
  content: React.ReactNode
}

export const InputQuestion = ({ title, content }: Props) => {
  return (
    <div>
      {title && <Title>{title}</Title>}
      {content}
    </div>
  )
}
const Title = styled(XLFont)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    marginBottom: [48, null, 72, null, null, null, 104],
  }),
}))
