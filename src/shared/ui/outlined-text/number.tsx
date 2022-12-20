import { Props, TextOutlined } from './text'

export const NumberOutlined = ({ children }: Omit<Props, 'viewBoxWidth'>) => (
  <TextOutlined viewBoxWidth={680}>{children}</TextOutlined>
)
