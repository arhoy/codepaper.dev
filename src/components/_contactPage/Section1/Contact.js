import React from 'react';
import styled from '@emotion/styled';
import Zoom from 'react-reveal/Zoom';
import { H4 } from '../../reusableStyles/typography/Typography';
import { ContactForm } from './ContactForm';

const Container = styled.div`
  & p {
    font-weight: 300;
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 4rem;
    opacity: 0.9;
  }
`;

export const Contact = () => {
  return (
    <Zoom>
      <Container>
        <H4> Drop Us A Message </H4>
        <p>
          If you are already a customer, please reach out to your dedicated
          account representative
        </p>
        <ContactForm />
      </Container>
    </Zoom>
  );
};
