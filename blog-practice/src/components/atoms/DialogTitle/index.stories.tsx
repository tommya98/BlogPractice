import { StoryFn, Meta } from '@storybook/react';
import { DialogTitle } from '.';

export default {
  title: 'Atoms/DialogTitle',
  component: DialogTitle,
} as Meta<typeof DialogTitle>;

const Template: StoryFn<typeof DialogTitle> = (args) => <DialogTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '블로그 글 등록',
};
