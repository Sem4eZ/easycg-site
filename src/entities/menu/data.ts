import { PAGES } from 'shared/config'

interface MenuItem {
  title: string
  path: string
  resourcesCount?: number
}

interface GetMenuSchema {
  projectsCount: number
}

export const getMenuSchema = ({ projectsCount }: GetMenuSchema): MenuItem[] => {
  return [
    {
      title: 'home',
      path: PAGES.HomePage,
    },
    {
      title: 'work',
      path: PAGES.Projects,
      resourcesCount: projectsCount,
    },
    {
      title: 'services',
      path: PAGES.Services,
    },
    {
      title: 'about us',
      path: PAGES.AboutUs,
    },
    {
      title: 'blog.',
      path: PAGES.Blog,
    },
    {
      title: 'contacts',
      path: PAGES.Contact,
    },
  ]
}
