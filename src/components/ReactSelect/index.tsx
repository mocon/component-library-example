import React, { FC, forwardRef, useRef } from 'react'
import Select from 'react-select'
import clsx from 'clsx'
import { ReactSelectStyled, ReactSelectStyledProps } from './styled'
import useCombinedRefs from '../../utils/useCombinedRefs'

export type ReactSelectProps = ReactSelectStyledProps

export const ReactSelect: FC<ReactSelectProps> = forwardRef<FC, any>(
  ({ as = 'div', ...other }, ref) => {
    const innerRef = useRef()
    const resolvedRef = useCombinedRefs(ref, innerRef)

    return (
      <ReactSelectStyled
        as={as}
        className={clsx('ReactSelect')}
        ref={resolvedRef}
      >
        <Select
          className="ReactSelectStyles"
          classNamePrefix="ReactSelectStyles"
          {...other}
        />
      </ReactSelectStyled>
    )
  },
)
