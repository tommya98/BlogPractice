import { StoryFn, Meta } from '@storybook/react';
import { BlogTitle } from '.';

export default {
  title: 'Atoms/BlogTitle',
  component: BlogTitle,
} as Meta<typeof BlogTitle>;

const Template: StoryFn<typeof BlogTitle> = (args) => <BlogTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '블로그 제목',
};
