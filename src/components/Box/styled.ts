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
  as: String
}

export const BoxStyled = styled.div<StyledProps>`
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
