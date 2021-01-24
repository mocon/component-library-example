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

type StyledProps = {
  as: string
}

export const TextStyled = styled.p<StyledProps>`
  display: block;
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
