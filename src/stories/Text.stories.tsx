import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Text, TextProps } from '../components'

const meta: Meta = {
  title: 'Text',
  component: Text,
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

const Template: Story<TextProps> = args => <Text {...args} />

export const Default = Template.bind({})

Default.args = {
  backgroundColor: 'primary',
  children: 'Some standard text content.',
  color: 'background',
  fontFamily: 'monospace',
}
