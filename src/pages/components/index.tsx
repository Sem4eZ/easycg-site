import { LFont, XLFont, XXLFont, XXXLFont } from 'shared/ui/typography'

const ComponentsPage = () => {
  return (
    <div>
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
    </div>
  )
}

export default ComponentsPage
