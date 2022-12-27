import { Theme, useTheme } from '@mui/material'

interface Props {
  type?: 'page' | 'modal'
}

const getColors = (
  theme: Theme,
  type: 'page' | 'modal',
): {
  rectFill: string
  rectStroke: string
  textFill: string
} => {
  if (type === 'modal') {
    return {
      rectFill: 'transparent',
      rectStroke: theme.palette.text.secondary,
      textFill: theme.palette.text.secondary,
    }
  }
  return {
    rectFill:
      theme.palette.mode === 'dark'
        ? theme.palette.text.primary
        : 'transparent',
    rectStroke: theme.palette.text.primary,
    textFill:
      theme.palette.mode === 'dark'
        ? theme.palette.inverted
        : theme.palette.text.primary,
  }
}

export const Language = ({ type = 'page' }: Props) => {
  const theme = useTheme()

  const colors = getColors(theme, type)

  return (
    <div>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect
          x="1.28125"
          y="1.28125"
          width="45.4375"
          height="45.4375"
          rx="3.84375"
          fill={colors.rectFill}
          stroke={colors.rectStroke}
          stroke-width="2.5625"
        />
        <path
          d="M16.6021 32.3C14.7354 32.3 13.1937 31.7167 11.9771 30.55C10.7604 29.3833 10.1521 27.85 10.1521 25.95C10.1521 24.1667 10.7354 22.6667 11.9021 21.45C13.0854 20.2333 14.5854 19.625 16.4021 19.625C18.2021 19.625 19.6604 20.2417 20.7771 21.475C21.8937 22.6917 22.4521 24.2917 22.4521 26.275V26.975H13.4771C13.5771 27.775 13.9354 28.4417 14.5521 28.975C15.1687 29.5083 15.9687 29.775 16.9521 29.775C17.4854 29.775 18.0604 29.6667 18.6771 29.45C19.3104 29.2333 19.8104 28.9417 20.1771 28.575L21.5771 30.625C20.3604 31.7417 18.7021 32.3 16.6021 32.3ZM19.3771 24.825C19.3271 24.1417 19.0521 23.525 18.5521 22.975C18.0687 22.425 17.3521 22.15 16.4021 22.15C15.5021 22.15 14.8021 22.425 14.3021 22.975C13.8021 23.5083 13.5104 24.125 13.4271 24.825H19.3771ZM36.0704 32H32.8954V24.7C32.8954 23.2 32.1537 22.45 30.6704 22.45C29.5204 22.45 28.6037 22.925 27.9204 23.875V32H24.7454V19.925H27.9204V21.5C28.9704 20.25 30.3787 19.625 32.1454 19.625C33.4454 19.625 34.4204 19.9667 35.0704 20.65C35.7371 21.3333 36.0704 22.275 36.0704 23.475V32Z"
          fill={colors.textFill}
        />
      </svg>
    </div>
  )
}
