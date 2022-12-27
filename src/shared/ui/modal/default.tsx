import CloseIcon from '@mui/icons-material/Close'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { spaceArr } from 'shared/theme'

interface Props extends Omit<DialogProps, 'title'> {
  title: React.ReactNode
  hideTitle?: boolean
  children: React.ReactNode
  actionsContent?: React.ReactNode
}

export const Modal = ({
  title,
  hideTitle = false,
  onClose,
  children,
  actionsContent,
  ...rest
}: Props) => {
  return (
    <Dialog aria-labelledby="customized-dialog-title" {...rest}>
      <DialogTitle id="customized-dialog-title">
        <Title data-hidden={hideTitle}>{title}</Title>
        {onClose && (
          <CloseButton onClick={e => onClose(e, 'escapeKeyDown')}>
            <CloseIcon />
          </CloseButton>
        )}
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      {actionsContent && (
        <DialogActionStyled>{actionsContent}</DialogActionStyled>
      )}
    </Dialog>
  )
}

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '64px',
  svg: {
    width: '32px',
    height: '32px',
  },
  ...getBreakpointsStylesByArray(theme, {
    right: spaceArr.map(space => space - 16),
    top: [40, 64, 48, 64, 72, 56, 62, 110],
  }),
}))

const DialogActionStyled = styled(DialogActions)(({ theme }) => ({
  marginTop: '40px',
  ...getBreakpointsStylesByArray(theme, {
    marginTop: [25, null, 61, null, 40, null, 40, 116],
  }),
}))

const Title = styled('div')(() => ({
  '&[data-hidden="true"]': {
    opacity: 0,
    overflow: 'hidden',
    height: 0,
    width: 0,
  },
}))
