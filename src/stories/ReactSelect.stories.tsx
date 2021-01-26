import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ReactSelect, ReactSelectProps } from '../components'

const meta: Meta = {
  title: 'ReactSelect',
  component: ReactSelect,
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

const Template: Story<ReactSelectProps> = args => <ReactSelect {...args} />

export const Default = Template.bind({})

Default.args = {
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ],
}
