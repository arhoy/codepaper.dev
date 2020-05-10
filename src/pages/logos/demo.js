import React from 'react';
import styled from '@emotion/styled';
import Layout from '../../components/layouts/Layout';
import AnimatedIcons from '../../logos/AnimatedIcons';
import { LordIconsFree } from '../../logos/LordIconsFree';
import { ReadyToGetStarted } from '../../components/reusableComponents/general/ReadyToGetStarted';

const Section = styled.div`
  margin: 5rem 0;
  & .attribution {
    margin: 3rem 0;
  }
  & .community {
    max-width: 100rem;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    opacity: 0.8;
    padding: 1rem 2rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 3px;
`;

const Demo = () => {
  return (
    <Layout>
      <Section>
        <TitleContainer>
          <h2> Various Animated Icons </h2>
          <p>Hover over each icon to see the micro interactions</p>
        </TitleContainer>
        <AnimatedIcons width="100px" height="100px" />
        <TitleContainer>
          <h2> Get animated icons designed </h2>
          <p>
            For your project download a theme or get custom animated icons
            designed
          </p>
        </TitleContainer>
        <LordIconsFree width="100px" height="100px" />
        <div className="attribution">
          <p className="community">
            Need animated icons for your project? Get in touch with us today for
            a free quote and consultation. Get a single animation or a whole
            pack of animations for your project.
          </p>
          <p className="community">
            Many animations are tiny, some under 3kb. In comparison, many images
            and videos on websites are hundreds or even thousands of times
            larger, causing slow page loads and poor user experience.
          </p>

          <p className="community">
            Each animation we do is ensured to be compressed and optimized for
            page speed and great user experience. Be at the forefront of cutting
            edge design and animation for the web. Interactive designs with
            blazingly fast speed page loads.
          </p>

          <p className="community">
            Special Thanks to the Lottie Community and Lord Icons
          </p>
        </div>
      </Section>
      <ReadyToGetStarted />
    </Layout>
  );
};

export default Demo;
