import styled from 'styled-components/macro'
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  compose,
} from 'styled-system'

export type TextStyledProps = BackgroundProps &
  BorderProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  TypographyProps & { as?: any; ref?: any; children?: any }

export const TextStyled = styled.p<TextStyledProps>`
  display: block;
  font-family: ${({ theme }) => theme.fontFamilies.body};
  ${compose(background, border, color, flexbox, grid, layout, position, shadow, space, typography)};
`
