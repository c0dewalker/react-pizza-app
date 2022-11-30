import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Icon } from './Icon'

export default {
	title: 'Components/Icon',
	component: Icon
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />

export const Example = Template.bind({})
Example.args = { type: 'check' }

export const AllIcons: ComponentStory<typeof Icon> = () => {
	return (
		<>
			<Icon type="arrowLeft" />
			<Icon type="check" />
			<Icon type="plus" />
			<Icon type="close" />
			<Icon type="account" />
			<Icon type="repeat" />
			<Icon type="delivery" />
			<Icon type="logout" />
		</>
	)
}
