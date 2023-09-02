import styled from '@emotion/styled';

interface Props {
  readonly title: string;
}

export const BlogTitle = ({ title }: Props) => {
  return <Title>{title}</Title>;
};

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;
