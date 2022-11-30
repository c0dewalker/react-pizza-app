import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Field } from './Field'

export default {
	title: 'Components/Field',
	component: Field
} as ComponentMeta<typeof Field>

export const InputWithoutLabel: ComponentStory<typeof Field.Input> = args => <Field.Input {...args} />

export const InputWithLabel: ComponentStory<typeof Field> = args => (
	<Field {...args}>
		<Field.Label>Adress</Field.Label>
		<Field.Input />
	</Field>
)
