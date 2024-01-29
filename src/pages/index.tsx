import { lazy } from 'react'
import { Route, Routes } from 'react-router'

import { PAGES } from 'shared/config'

import AdminLoginPage from './admin/login'
import Dashboard from './admin/posts'
import PrivateRoute from './admin/private-route'
import Projects from './admin/projects'

const HomePage = lazy(() => import('./home'))

const ProjectsPage = lazy(() => import('./projects'))
const ProjectDetailPage = lazy(() => import('./project-detail'))

const ServicesPage = lazy(() => import('./services'))

const AboutUsPage = lazy(() => import('./about-us'))

const BlogPage = lazy(() => import('./blog'))
const PostPage = lazy(() => import('./post'))

const ContactPage = lazy(() => import('./contact'))

const Error404Page = lazy(() => import('./error404'))

const ComponentsPage = lazy(() => import('./components'))

const Pages = () => (
  <Routes>
    <Route path={PAGES.HomePage} element={<HomePage />} />

    <Route path={PAGES.Projects} element={<ProjectsPage />} />
    <Route path={`${PAGES.Projects}/:id`} element={<ProjectDetailPage />} />

    <Route path={PAGES.Services} element={<ServicesPage />} />

    <Route path={PAGES.AboutUs} element={<AboutUsPage />} />

    <Route path={PAGES.Blog} element={<BlogPage />} />
    <Route path={`${PAGES.Blog}/:id`} element={<PostPage />} />

    <Route path={PAGES.Contact} element={<ContactPage />} />

    <Route element={<PrivateRoute />}>
      <Route path={PAGES.Dashboard} element={<Dashboard />} />
      <Route path={PAGES.AdminProjects} element={<Projects />} />
    </Route>
    <Route path={PAGES.AdminLogin} element={<AdminLoginPage />} />

    <Route path={PAGES.Components} element={<ComponentsPage />} />

    <Route path="*" element={<Error404Page />} />
  </Routes>
)

export default Pages
