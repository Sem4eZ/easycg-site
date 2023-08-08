export const getSectionScroll = (
  section: HTMLElement,
  offsetHeight = 0,
  cropDiapason = true,
): number => {
  const persentage =
    (window.innerHeight - section.getBoundingClientRect().top - offsetHeight) /
    section.offsetHeight

  if (persentage < 0 && cropDiapason) {
    return 0
  }

  if (persentage > 1 && cropDiapason) {
    return 1
  }

  return persentage
}
