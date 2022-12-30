export const useGetSectionScroll = (
  sectionRef: React.MutableRefObject<HTMLElement | null>,
  offsetHeight = 0,
) => {
  return (): number => {
    const section = sectionRef.current
    if (!section) return 0

    const persentage =
      (window.innerHeight -
        section.getBoundingClientRect().top -
        offsetHeight) /
      section.offsetHeight

    if (persentage < 0) {
      return 0
    }

    if (persentage > 1) {
      return 1
    }

    return persentage
  }
}
