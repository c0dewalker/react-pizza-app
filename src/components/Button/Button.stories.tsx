import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './'

export default {
	title: 'Components/Button',
	component: Button,
	args: {
		children: 'Order Pizza'
	}
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})

export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary' }

export const Ghost = Template.bind({})
Ghost.args = { variant: 'ghost' }

export const Large = Template.bind({})
Large.args = { size: 'large' }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }

export const FullWidth = Template.bind({})
FullWidth.args = { isFullWidth: true }
