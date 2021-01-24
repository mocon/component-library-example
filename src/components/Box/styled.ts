import styled from 'styled-components/macro'
import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'styled-system'

export const BoxStyled = styled.div<any>`
  display: block;
  font-family: ${({ theme }) => theme.fontFamilies.body};
  ${background};
  ${border};
  ${color};
  ${flexbox};
  ${grid};
  ${layout};
  ${position};
  ${shadow};
  ${space};
  ${typography};
`
