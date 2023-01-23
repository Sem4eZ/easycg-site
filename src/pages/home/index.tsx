import { useRef } from 'react'

import { projects } from 'entities/project/data'
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
            'hello there! it’s EASY on the air',
            'we don’t speak about digital',
            ' we DO digital',
          ]}
          description={[
            <>
              let us quess! are you looking for a mobile app or website?
              <b>it’s for us</b>
            </>,
            <>
              AR/VR? wait for it... <b>we can do it, too</b>
            </>,
            <>
              we create <b>simple solutions</b> for serious buisness since 2018
            </>,
          ]}
          content={
            <HorizontalList
              title="our style is"
              items={['locanic', 'simple', 'clear', 'accessible']}
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
