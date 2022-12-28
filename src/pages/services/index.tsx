import { styled } from '@mui/material'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ServicesPage = () => {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const serviceContainer = document.querySelector(hash)
    if (!serviceContainer) return
    serviceContainer.scrollIntoView()
  }, [])

  return (
    <div>
      <div id="services_mobile">
        mobile
        <Block />
      </div>
      <div id="services_web">
        web
        <Block />
      </div>
      <div id="services_cgi">
        CGI
        <Block />
      </div>
      <div id="services_vr">
        VR
        <Block />
      </div>
      <div id="services_ar">
        AR
        <Block />
      </div>
    </div>
  )
}

export default ServicesPage

const Block = styled('div')`
  height: 1000px;
  background-color: yellow;
`
