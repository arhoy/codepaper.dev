import React from 'react';
import styled from '@emotion/styled';
import { H3 } from '../../reusableStyles/typography/Typography';

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Subtitle = styled.h4`
  text-align: center;
  color: ${props => props.theme.colors.grey};
`;

const Blurb = styled.div`
  text-align: center;
  max-width: 50rem;
  & p {
    color: ${props => props.theme.colors.grey};
    font-weight: 300;
    margin: 1rem 3px;
  }
`;

export const Card1 = () => {
  return (
    <Container>
      <H3>Alex Hoy</H3>
      <Subtitle>Executitve Account Manager</Subtitle>
      <Blurb>
        <p>
          I work with a group and network of other developers, designers and
          agencies to provide custom but cost effective agency services.
        </p>
        <p>
          Through this network we can provide custom solutions to your business
          at scale. We are looking to grow to and expand, and I believe right
          now is the ripe opportunity to do so
        </p>
        <p>
          I have worked with companies large and smale such as Go Auto, Finning
          Canada and Mindable in roles such as Analyst, Developer and Digital
          Marketing Expert.
        </p>
      </Blurb>
    </Container>
  );
};

export const Card2 = () => {
  return (
    <Container>
      <H3>Abdel (Abdo) Houchami</H3>
      <Subtitle>Business Development Strategist</Subtitle>
      <Blurb>
        <p>
          Abdo is a larger than life local business consultant . He knows a
          large network of local businesses in the Edmonton area and is a former
          construction company owner that built secondary suits around the city.
        </p>
        <p>
          Before that he went to the University of Alberta and completed a
          Geophysics specialization degree. Where he found his love the writing
          code and mathematics.
        </p>
        <p>
          He keeps up to date with the latest business industry and technical
          knowledge and is a proud father of 2 kids.
        </p>
      </Blurb>
    </Container>
  );
};

export const Card3 = () => {
  return (
    <Container>
      <H3>Ibinabo Bestman</H3>
      <Subtitle>Data Analytics & Visualization Expert</Subtitle>
      <Blurb>
        <p>
          Recent graduate from the University of Alberta with a MSc in
          Geophysics. I have programming experience using Python, MATLAB and R
          for data analysis
        </p>
        <p>
          Familiar with python libraries such as Numpy, pandas and matplotlib
          for machine learning. Proficient in data visualization using Tableau
          and data wrangling using postgre SQL.
        </p>
      </Blurb>
    </Container>
  );
};

export const Card4 = () => {
  return (
    <Container>
      <H3>Natisha Persuad</H3>
      <Subtitle> Designer and lllustrator </Subtitle>
      <Blurb>
        <p>
          Natisha is a Designer and lllustrator specializing in custom web
          illustrations and motion graphics that will personalize brands and
          allow them to tell their stories through unique, eye-capturing imagery
        </p>
        <p>
          She is dedicated to designing clean, modern websites with high quality
          visuals that will engage and captivate audiences. She approaches all
          design solutions creatively, methodically and authentically, while
          factoring in user ability, visual hierarchy, interactive experiences
          and responsiveness.
        </p>
      </Blurb>
    </Container>
  );
};
