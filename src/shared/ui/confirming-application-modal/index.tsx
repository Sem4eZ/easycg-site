import { styled } from '@mui/material/styles'
import { ComponentProps } from 'react'

import { SnowflakeIcon } from 'shared/icons/snowflake'
import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'

import { Modal } from '../modal/default'
import { LFont, XXLFont } from '../typography'

type Props = Pick<ComponentProps<typeof Modal>, 'open' | 'onClose'>

export const ConfirmingApplicationModal = (props: Props) => (
  <StyledModal title="ready!" hideTitle {...props}>
    <Container>
      <XXLFont>ready!</XXLFont>

      <Icon>
        <SnowflakeIcon />
      </Icon>

      <Description>we'll get back to you in writing</Description>
    </Container>
  </StyledModal>
)

const StyledModal = styled(Modal)(({ theme }) => ({
  '& #customized-dialog-title': {
    minHeight: 0,
    height: 0,
    padding: 0,
    '[data-hidden="true"]': {
      display: 'none',
    },
  },
  '& .MuiDialogContent-root': {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  '& .MuiDialog-paper': {
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
    ...getBreakpointsStylesByArray(theme, {
      height: [390, null, 500, null, 703, null, 776],
      paddingLeft: [50, null, 98, null, 112, null, null],
      paddingRight: [50, null, 98, null, 112, null, null],
      width: ['100%', null, null, '100%', '64%', null, null],
    }),
  },
}))

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  ...getBreakpointsStylesByArray(theme, {
    gap: [28, null, 56, null, null, null, 64],
  }),
}))

const Icon = styled('div')(({ theme }) => ({
  display: 'flex',
  color: theme.palette.accent,
  ...getBreakpointsStylesByArray(theme, {
    height: [32, null, 64, null, 72, null, null],
  }),
  '& svg': {
    height: '100%',
    width: 'auto',
  },
}))

const Description = styled(LFont)(({ theme }) => ({
  color:
    theme.palette.mode === 'dark'
      ? theme.palette.text.primary
      : theme.palette.text.secondary,
}))
