import { styled } from '@mui/material'

export const ArrowFatIcon = () => {
  return (
    <Svg
      width="50"
      height="23"
      viewBox="0 0 50 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M49.0607 12.5607C49.6464 11.9749 49.6464 11.0251 49.0607 10.4393L39.5147 0.893398C38.9289 0.307611 37.9792 0.307611 37.3934 0.893398C36.8076 1.47919 36.8076 2.42893 37.3934 3.01472L45.8787 11.5L37.3934 19.9853C36.8076 20.5711 36.8076 21.5208 37.3934 22.1066C37.9792 22.6924 38.9289 22.6924 39.5147 22.1066L49.0607 12.5607ZM0 13H48V10H0L0 13Z"
        fill="currentColor"
      />
    </Svg>
  )
}

const Svg = styled('svg')(() => ({
  zIndex: 1,
}))
