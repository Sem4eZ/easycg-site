import { Theme } from '@mui/material'

import { pxToRem } from './px-to-rem'

export const getBreakpointsStylesByArray = (
  theme: Theme,
  styles: { [key: string]: Array<string | number | null> },
) => {
  const propsToRem = [
    'margin',
    'marginTop',
    'marginBottom',
    'marginLeft',
    'marginRight',
    'padding',
    'paddingTop',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
    'lineHeight',
    'gridColumnGap',
    'gridRowGap',
  ]
  const getNotNullValue = (
    values: Array<string | number | null | undefined>,
    berakpointIndex: number,
  ): string | number => {
    for (let i = berakpointIndex; i >= 0; i--) {
      const value = values[i]
      if (value === null || value === undefined) {
        if (i === 0) return '1px'
        return getNotNullValue(values, berakpointIndex - 1)
      }
      return value
    }
    return '1px'
  }
  const getValue = (
    style: string,
    value: string | number | null | undefined,
    berakpointIndex: number,
  ): string | number => {
    let notNullValue = getNotNullValue(styles[style], berakpointIndex)
    if (typeof notNullValue === 'number' && propsToRem.includes(style)) {
      notNullValue = pxToRem(notNullValue)
    }
    return notNullValue
  }

  const getStyle = (berakpointIndex: number) => {
    const result: { [key: string]: string | number } = {}
    for (const key in styles) {
      result[key] = getValue(key, styles[key][berakpointIndex], berakpointIndex)
    }
    return result
  }

  return {
    [theme.breakpoints.up('mobile_s')]: getStyle(0),
    [theme.breakpoints.up('mobile_s_landscape')]: getStyle(1),
    [theme.breakpoints.up('mobile')]: getStyle(2),
    [theme.breakpoints.up('mobile_landscape')]: getStyle(3),
    [theme.breakpoints.up('tablet')]: getStyle(4),
    [theme.breakpoints.up('tablet_landscape')]: getStyle(5),
    [theme.breakpoints.up('desktop_s')]: getStyle(6),
    [theme.breakpoints.up('laptop')]: getStyle(7),
    [theme.breakpoints.up('macbook')]: getStyle(8),
    [theme.breakpoints.up('desktop')]: getStyle(9),
  }
}
