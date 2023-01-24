import CloseIcon from '@mui/icons-material/Close'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { useGetDevice } from 'shared/lib/use-get-device'
import { spaceArr } from 'shared/theme'

import { Language } from '../language'

interface Props extends Omit<DialogProps, 'title'> {
  title: React.ReactNode
  hideTitle?: boolean
  hideLanguage?: boolean
  children: React.ReactNode
  actionsContent?: React.ReactNode
}

export const Modal = ({
  title,
  hideTitle = false,
  hideLanguage = false,
  onClose,
  children,
  actionsContent,
  ...rest
}: Props) => {
  const { isMobileS, isMobileLandscape, isMobile, isMobileSLandscape } =
    useGetDevice()

  const showLanguageButton =
    (isMobileS || isMobileLandscape || isMobile || isMobileSLandscape) &&
    !hideLanguage

  return (
    <DialogStyled aria-labelledby="customized-dialog-title" {...rest}>
      <DialogTitleStyled id="customized-dialog-title">
        {showLanguageButton && (
          <LanguageButton>
            <Language type="modal" />
          </LanguageButton>
        )}

        <Title data-hidden={hideTitle}>{title}</Title>
        {onClose && (
          <CloseButton onClick={e => onClose(e, 'escapeKeyDown')}>
            <CloseIcon />
          </CloseButton>
        )}
      </DialogTitleStyled>
      <DialogContent dividers>{children}</DialogContent>
      {actionsContent && (
        <DialogActionStyled>{actionsContent}</DialogActionStyled>
      )}
    </DialogStyled>
  )
}

const DialogStyled = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    paddingTop: 10,
    paddingBottom: 10,
  },
}))

const DialogTitleStyled = styled(DialogTitle)(({ theme }) => ({
  ...getBreakpointsStylesByArray(theme, {
    minHeight: [112],
  }),
}))
const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '64px',
  svg: {
    ...getBreakpointsStylesByArray(theme, {
      width: [32, null, null, null, 39, null, 44],
      height: [32, null, null, null, 39, null, 44],
    }),
  },
  ...getBreakpointsStylesByArray(theme, {
    right: spaceArr.map(space => space - 16),
    top: [40, 64, 48, 64, 72, 56, 62, null, 110],
  }),
}))

const LanguageButton = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '64px',
  padding: '14px 8px 14px 0',
  svg: {
    ...getBreakpointsStylesByArray(theme, {
      width: [32, null, null, null, 39, null, 44],
      height: [32, null, null, null, 39, null, 44],
    }),
  },
  ...getBreakpointsStylesByArray(theme, {
    left: spaceArr,
    top: [40, 64, 48, 64, 72, 56, 62, null, 110],
  }),
}))

const DialogActionStyled = styled(DialogActions)(({ theme }) => ({
  marginTop: '40px',
  ...getBreakpointsStylesByArray(theme, {
    marginTop: [25, null, 61, null, 40, null, 40, null, 116],
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
