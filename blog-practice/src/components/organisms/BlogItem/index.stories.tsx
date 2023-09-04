import { StoryFn, Meta } from '@storybook/react';
import { BlogItem } from '.';

export default {
  title: 'Organisms/BlogItem',
  component: BlogItem,
} as Meta<typeof BlogItem>;

const Template: StoryFn<typeof BlogItem> = (args) => <BlogItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: '블로그 글 제목',
  body: '블로그 글 본문',
};
