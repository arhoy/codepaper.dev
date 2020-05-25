import React from 'react';
import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';

import {
  Container1000,
  SectionGrey,
} from '../../reusableStyles/sections/Sections';

import { CircularImage } from './CircularImages';

import { Card1, Card2, Card3, Card4 } from './Card';

const Container = styled.div`
  display: grid;
  margin: 2rem 0;
  grid-template-columns: 4fr 6fr;
  &.reverse {
    grid-template-columns: 6fr 4fr;
    @media (max-width: ${props => props.theme.screenSize.mobileL}) {
      grid-template-columns: 1fr;
      & .imageContainer {
        grid-row: 1/2;
      }
    }
  }
  grid-gap: 2rem;
  & .imageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .blurbContainer {
  }
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    grid-template-columns: 1fr;
  }
`;

export const Section2 = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "_about/alex-hoy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "_about/abdo-houchami.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "_about/ibinaldo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image4: file(relativePath: { eq: "_about/woman_silloutte.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <SectionGrey>
      <Container1000>
        <Container>
          <div className="imageContainer">
            <CircularImage fluid={data.image1.childImageSharp.fluid} />
          </div>
          <div className="blurbContainer">
            <Card1 />
          </div>
        </Container>
        <Container className="reverse">
          <div className="blurbContainer">
            <Card2 />
          </div>
          <div className="imageContainer">
            <CircularImage fluid={data.image2.childImageSharp.fluid} />
          </div>
        </Container>
        <Container>
          <div className="imageContainer">
            <CircularImage fluid={data.image3.childImageSharp.fluid} />
          </div>
          <div className="blurbContainer">
            <Card3 />
          </div>
        </Container>
        <Container className="reverse">
          <div className="blurbContainer">
            <Card4 />
          </div>
          <div className="imageContainer">
            <CircularImage fluid={data.image4.childImageSharp.fluid} />
          </div>
        </Container>
      </Container1000>
    </SectionGrey>
  );
};
