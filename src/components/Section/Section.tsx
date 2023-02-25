
import { Container, Title } from './Section.styled';
import { FC, ReactNode } from 'react';

type SectionType = {
  title: string,
  children: ReactNode,

}

export const Section: FC<SectionType> = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}
