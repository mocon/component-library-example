import styled from 'styled-components/macro'
import { Box } from '../Box'

type OptionType = {
  value: string
  label: string
}

export type ReactSelectStyledProps = {
  as?: any
  ref?: any
  placeholder?: string
  options: OptionType[]
}

export const ReactSelectStyled = styled(Box)<ReactSelectStyledProps>`
  display: block;
  font-family: ${({ theme }) => theme.fontFamilies.body};
  color: ${({ theme }) => theme.colors.text};

  .ReactSelectStyles__control--is-focused {
    border-color: ${({ theme }) => theme.colors.primary} !important;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary};
  }

  .ReactSelectStyles__option--is-selected,
  .ReactSelectStyles__option--is-selected.ReactSelectStyles__option--is-focused {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .ReactSelectStyles__option--is-focused {
    background-color: rgba(0, 0, 0, 0.05);
  }
`
