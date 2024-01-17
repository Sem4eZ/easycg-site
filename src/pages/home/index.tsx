import { useRef } from 'react'

import useProjects from 'entities/project/data'
import { ServicesHeroMenu } from 'entities/services/ui/services-hero-menu'

import {
  CenterWithSectionNumber,
  FreeRightPartContainer,
} from 'shared/ui/containers'
import { Flow } from 'shared/ui/flow'
import { Footer } from 'shared/ui/footer'
import { Header } from 'shared/ui/header'
import { Hero } from 'shared/ui/hero'
import { HorizontalList } from 'shared/ui/horizontal-list'
import { TextOutlined } from 'shared/ui/outlined-text'

import { MainPageCeoSection } from './components/ceo-section'
import { ParallaxFullWidth } from './components/parallax-fullwidth'
import { MainPageProjectsSlider } from './components/projects-slider'
import { MainPageServicesMenu } from './components/services-menu'
import { MainPageServicesSection } from './components/services-section'

const HomePage = () => {
  const processSectionRef = useRef<HTMLDivElement | null>(null)
  const projects = useProjects()
  return (
    <>
      <Header projectsCount={projects.length} />
      <main>
        <Hero menu={<ServicesHeroMenu />} />

        <FreeRightPartContainer
          number={
            <TextOutlined viewBoxWidth={680} animate>
              01
            </TextOutlined>
          }
          section="about us"
          title={[
            'hello there! it’s EASY on the air we are highly enthusiastic about immersive technologies and strive to share this passion with others',
          ]}
          description={[
            <>
              our purpose is&nbsp;
              <b>to help</b>
              &nbsp;entrepreneurs achieve digital transformation and reach a new
              level of business development
            </>,
          ]}
          content={
            <HorizontalList
              title="our work style is"
              items={['responsible', 'flexible', 'clear', 'honest']}
            />
          }
        />

        <ParallaxFullWidth />

        <MainPageServicesSection />

        <MainPageProjectsSlider />

        <CenterWithSectionNumber
          ref={processSectionRef}
          number={
            <TextOutlined viewBoxWidth={794} animate>
              03
            </TextOutlined>
          }
          section="process"
          title={['how we work']}
          content={<Flow sectionRef={processSectionRef} />}
        />

        <MainPageServicesMenu />

        <MainPageCeoSection />
      </main>
      <Footer projectsCount={projects.length} />
    </>
  )
}

export default HomePage
