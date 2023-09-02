import styled from '@emotion/styled';

interface Props {
  readonly body: string;
}

export const BlogBody = ({ body }: Props) => {
  return <Body>{body}</Body>;
};

const Body = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
