import { styled } from '@mui/material/styles'

import { pxToRem } from 'shared/lib/px-to-rem'
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
  marginBottom: pxToRem(40),
  [theme.breakpoints.up('desktop_s')]: {
    fontSize: 58,
    lineHeight: '60px',
  },
}))
