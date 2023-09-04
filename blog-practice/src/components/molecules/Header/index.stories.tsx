import { StoryFn, Meta } from '@storybook/react';
import { Header } from '.';

export default {
  title: 'Molecules/Header',
  component: Header,
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = () => <Header />;

export const Default = Template.bind({});
