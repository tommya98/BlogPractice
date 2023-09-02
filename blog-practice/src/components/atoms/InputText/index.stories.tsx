import { StoryFn, Meta } from '@storybook/react';
import { InputText } from '.';

export default {
  title: 'Atoms/InputText',
  component: InputText,
} as Meta<typeof InputText>;

const Template: StoryFn<typeof InputText> = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '리액트란?',
};
