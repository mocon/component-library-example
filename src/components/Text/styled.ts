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

export const TextStyled = styled.p<any>`
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
