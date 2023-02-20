import { Button, ButtonProps } from '@mui/material'
import { TouchRippleActions } from '@mui/material/ButtonBase/TouchRipple'
import { FC, SyntheticEvent, useRef } from 'react'

export const ButtonRipple: FC<ButtonProps> = ({ children, ...rest }) => {
  const touchRippleRef = useRef<TouchRippleActions>(null)
  const onMouseEnter = (e: SyntheticEvent<HTMLButtonElement>) =>
    touchRippleRef.current?.start(e)
  const onMouseLeave = (e: SyntheticEvent<HTMLButtonElement>) =>
    touchRippleRef.current?.stop(e)

  return (
    <Button
      style={{ justifySelf: 'start' }}
      type="submit"
      variant="contained"
      touchRippleRef={touchRippleRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...rest}>
      <span>{children}</span>
    </Button>
  )
}
