import { createStyles } from '@mui/material'

export const visuallyHiddenStyles = createStyles(() => ({
  display: 'block',
  opacity: 0,
  height: 0,
  width: 0,
  overflow: 'hidden',
  margin: 0,
  padding: 0,
  visibility: 'hidden',
}))
