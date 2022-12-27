import { Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

import { services as servicesData } from 'entities/services/data'

import { getBreakpointsStylesByArray } from 'shared/lib/get-breakpoints-styles-by-array'
import { Accordion } from 'shared/ui/accordion'
import { RadioGroup, Select } from 'shared/ui/controls'
import { FilterLink, Link } from 'shared/ui/link'
import { Modal } from 'shared/ui/modal/default'
// import { NumberOutlined } from 'shared/ui/outlined-text/number'
// import { TextOutlined } from 'shared/ui/outlined-text/text'
import { LFont, XLFont, XXLFont, XXXLFont } from 'shared/ui/typography'

const ComponentsPage = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const budget = ['less than 500$', '500-2K$', '2K-5K$', 'over 5K']

  return (
    <div>
      <button onClick={handleOpen}>Call modal</button>
      <ModalStyled
        open={open}
        onClose={handleClose}
        title={<XLFont>what budget do you have?</XLFont>}
        actionsContent={
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        }>
        <Typography gutterBottom>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </Typography>
      </ModalStyled>
      <Accordion
        name="services"
        items={servicesData.map(serviceData => ({
          title: serviceData.name,
          titleExplanation: serviceData.nameExplanation,
          content: serviceData.description,
        }))}
      />
      {/* <TextOutlined viewBoxWidth={1480} type="header">
        blog.
      </TextOutlined>
      <TextOutlined viewBoxWidth={1480}>blog.</TextOutlined>

      <NumberOutlined type="header">01</NumberOutlined>
      <NumberOutlined>01</NumberOutlined>

      <TextOutlined viewBoxWidth={1470}>work</TextOutlined>
      <TextOutlined viewBoxWidth={2220} animate>
        contact
      </TextOutlined> */}

      <Select
        label="select type of project (you can chose few)"
        field="project-type"
        options={servicesData.map(serviceData => ({
          value: serviceData.type,
          label: serviceData.name,
          labelExplanation: serviceData.nameExplanation,
        }))}
      />

      <Select
        label="select type of project"
        explanation="(you can chose few)"
        field="project-type-2"
        options={servicesData.map(serviceData => ({
          value: serviceData.type,
          label: serviceData.name,
          labelExplanation: serviceData.nameExplanation,
        }))}
        error="Error"
      />

      <div>
        <TextField id="address" label="address" variant="standard" />
        <TextField id="address2" label="address2" variant="standard" disabled />
      </div>

      <div>
        <RadioGroup
          type="budget"
          label="what budget
do you have?"
          options={budget.map(budgetItem => ({
            value: budgetItem,
            label: budgetItem,
            labelExplanation: '(labelExplanation)',
          }))}
        />
      </div>

      <XXXLFont variant="h1">
        XXLFont h1 tag: Page header
        <br />
        Example: work
      </XXXLFont>
      <XXXLFont>
        XXLFont: Page header
        <br />
        Example: don’t worry. we’re friendly
        <br />
        like this guy
      </XXXLFont>
      <XXLFont variant="h1">
        XXLFont h1 tag: Detail page header
        <br />
        Example: 10 UI/UX trends in 2022
      </XXLFont>
      <XXLFont>XXLFont: 10 UX/UI trends</XXLFont>
      <XLFont>XLFont: hello there! it’s EASY </XLFont>
      <LFont>LFont: web, CGI</LFont>
      <p>Common text</p>

      <Button>Primary button: learn more</Button>
      <Button disabled>Primary button: learn more</Button>
      <div>
        <Link href="#">Link</Link>
        <FilterLink href="#">Filter link </FilterLink>
        <FilterLink href="#" active={1}>
          Filter link
        </FilterLink>
      </div>
    </div>
  )
}

export default ComponentsPage

export const ModalStyled = styled(Modal)(({ theme }) => ({
  '& .MuiDialog-paper': {
    width: '100%',
    ...getBreakpointsStylesByArray(theme, {
      maxWidth: ['100%', null, null, null, null, null, '871px', '871px'],
      margin: [0, null, null, null, null, null, '32px'],
      maxHeight: ['100%', null, null, null, null, null, 'calc(100% - 64px)'],
      height: ['100%'],
    }),
  },
}))
