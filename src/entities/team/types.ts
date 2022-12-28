export interface Teammate {
  id: string
  name: string
  description: string
  image: {
    main: string
    hidden: string
  }
  date: Date
  position: string
}
