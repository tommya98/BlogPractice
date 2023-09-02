import { StoryFn, Meta } from '@storybook/react';
import { Input } from '.';

export default {
  title: 'Molecules/Input',
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Title',
  value: '블로그 제목',
};
