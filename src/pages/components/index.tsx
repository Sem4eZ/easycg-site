import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'

import { services as servicesData } from 'entities/services/data'

import { RadioGroup, Select } from 'shared/ui/controls'
import { FilterLink, Link } from 'shared/ui/link'
import { LFont, XLFont, XXLFont, XXXLFont } from 'shared/ui/typography'

const ComponentsPage = () => {
  const budget = ['less than 500$', '500-2K$', '2K-5K$', 'over 5K']

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
        <FilterLink href="#" active>
          Filter link
        </FilterLink>
      </div>
    </div>
  )
}

export default ComponentsPage
