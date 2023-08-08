export const pxToRem = (px: number): string => {
  // 0.0625 коэффициент для 16px
  return `${0.0625 * px}rem`
}
