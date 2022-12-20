import { Button } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import TextField from '@mui/material/TextField'

import { services as servicesData } from 'entities/services/data'

import { Select } from 'shared/ui/controls'
import { FilterLink, Link } from 'shared/ui/link'
import { LFont, XLFont, XXLFont, XXXLFont } from 'shared/ui/typography'

const ComponentsPage = () => {
  return (
    <div>
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
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            kind a project you have in mind?
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group">
            <FormControlLabel
              value="mobile"
              control={<Radio />}
              label="mobile app"
            />
            <FormControlLabel value="web" control={<Radio />} label="web" />
            <FormControlLabel
              value="CGI"
              control={<Radio />}
              label="CGI (computer graphics)"
            />
          </RadioGroup>
        </FormControl>
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
        <FilterLink href="#" active>
          Filter link
        </FilterLink>
      </div>
    </div>
  )
}

export default ComponentsPage
