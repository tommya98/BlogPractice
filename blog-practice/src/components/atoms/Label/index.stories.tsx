import { StoryFn, Meta } from '@storybook/react';
import { Label } from '.';

export default {
  title: 'Atoms/Label',
  component: Label,
} as Meta<typeof Label>;

const Template: StoryFn<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '블로그 제목',
};
