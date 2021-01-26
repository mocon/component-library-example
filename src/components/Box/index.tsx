import React, { FC, forwardRef, useRef } from 'react'
import clsx from 'clsx'
import { BoxStyled, BoxStyledProps } from './styled'
import useCombinedRefs from '../../utils/useCombinedRefs'

export type BoxProps = BoxStyledProps

export const Box: FC<BoxProps> = forwardRef<FC, any>(
  ({ as = 'div', children, ...other }, ref) => {
    const innerRef = useRef()
    const resolvedRef = useCombinedRefs(ref, innerRef)

    return (
      <BoxStyled as={as} className={clsx('Box')} ref={resolvedRef} {...other}>
        {children}
      </BoxStyled>
    )
  },
)
