import { Props, TextOutlined } from './text'

export const NumberOutlined = ({
  children,
  ...rest
}: Omit<Props, 'viewBoxWidth'>) => (
  <TextOutlined viewBoxWidth={680} {...rest}>
    {children}
  </TextOutlined>
)
