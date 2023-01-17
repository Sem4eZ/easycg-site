export const getSectionScroll = (
  section: HTMLElement,
  offsetHeight = 0,
): number => {
  const persentage =
    (window.innerHeight - section.getBoundingClientRect().top - offsetHeight) /
    section.offsetHeight

  if (persentage < 0) {
    return 0
  }

  if (persentage > 1) {
    return 1
  }

  return persentage
}
