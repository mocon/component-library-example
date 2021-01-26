import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Box, BoxProps, Text } from '../components'

const meta: Meta = {
  title: 'Box',
  component: Box,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<BoxProps> = args => (
  <Box {...args}>
    <Text>Contents</Text>
  </Box>
)

export const Default = Template.bind({})

Default.args = {
  backgroundColor: 'lightgray',
  p: 4,
}
