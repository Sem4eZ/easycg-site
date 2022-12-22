import CloseIcon from '@mui/icons-material/Close'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'

interface Props extends Omit<DialogProps, 'title'> {
  title: React.ReactNode
  hideTitle?: boolean
  children: React.ReactNode
  actionsContent: React.ReactNode
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
        {title}
        {onClose && (
          <CloseButton onClick={e => onClose(e, 'escapeKeyDown')}>
            <CloseIcon />
          </CloseButton>
        )}
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActionStyled>{actionsContent}</DialogActionStyled>
    </Dialog>
  )
}

const CloseButton = styled(IconButton)(() => ({
  position: 'absolute',
  right: '96px',
  top: '64px',
  svg: {
    width: '32px',
    height: '32px',
  },
}))

const DialogActionStyled = styled(DialogActions)(({ theme }) => ({
  marginTop: '40px',
  ...getBreakpointsStylesByArray(theme, {
    marginTop: [25, null, 61, null, 40, null, 40, 116],
  }),
}))
