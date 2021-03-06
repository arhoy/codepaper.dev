import React, { useState } from 'react';
import styled from '@emotion/styled';

import { H3 } from '../../reusableStyles/typography/Typography';
import NoStyleLink from '../../Links/NoStyleLink';

import facebook from '../../../../images/svg/services/facebook.svg';
import onlineshopping from '../../../../images/svg/services/online-shopping.svg';
import sushi from '../../../../images/svg/services/sushi.svg';
import deliveryTruck from '../../../../images/svg/services/delivery-truck.svg';
import crane from '../../../../images/svg/services/crane.svg';
import homeRun from '../../../../images/svg/services/home-run.svg';

const Title = styled(H3)`
  font-size: 2.2rem;
  margin-bottom: 1rem;
`;

const Blurb = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.black};
  opacity: 0.9;
  font-weight: 500;
  & span {
    font-weight: 700;
  }
`;

const ImageContainer = styled.div`
  border: 4px solid ${props => props.theme.colors.secondary};
  background: ${props => props.theme.colors.lightgrey};
  border-radius: 50%;
  padding: 1rem;
  width: 10rem;
  height: 10rem;
  &.animation2 {
    &:hover {
      & img {
        transition: all 0.4s ease-in;
        transform: translateY(-2rem) rotateY(180deg);
      }
    }
  }
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  &.animation1 {
    transform: rotate(-15deg);
    transition: all 0.1s ease-in;
    &:hover {
      transform: rotate(0);
    }
  }

  &.animation3 {
    transition: all 0.1s ease-in;
    &:hover {
      transform: translateY(-5px);
    }
  }
  &.animation4 {
    transition: all 0.1s ease-in;
    &:hover {
      transform: translateX(5px);
    }
  }
  &.animation5 {
    transition: all 0.2s ease-in;
    &:hover {
      transform: scale(1.1);
    }
  }
  &.animation6 {
    transform: rotate(0deg);
    transition: all 0.1s ease-in;
    &:hover {
      transform: rotate(15deg);
    }
  }
`;

const Card = styled(NoStyleLink)`
  max-width: 40rem;
  margin: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${props => props.theme.screenSize.mobileL}) {
    margin: 2rem 0;
  }
  transition: all 0.5s ease-in;
  &:hover {
    background: ${props => props.theme.colors.lightgrey};
    border-radius: 10%;
  }
`;

export const Card1 = () => {
  const [text, setText] = useState('Marketing Website');

  return (
    <Card
      onMouseEnter={() => setText('Click To Learn More')}
      onMouseLeave={() => setText('Marketing Website')}
      to="/websites/marketing-website"
    >
      <ImageContainer>
        <Img className="animation1" src={facebook} />
      </ImageContainer>

      <Title>{text}</Title>
      <Blurb>
        Custom, high converting marketing website leading to more calls and
        messages. Custom contact forms integrated with your email, website chat
        or other features as needed
      </Blurb>
    </Card>
  );
};

export const Card2 = () => {
  const [text, setText] = useState('Ecommerce');
  return (
    <Card
      onMouseEnter={() => setText('Start Selling Fast')}
      onMouseLeave={() => setText('Ecommerce')}
      to="/websites/ecommerce-websites"
    >
      <ImageContainer className="animation2">
        <Img src={onlineshopping} />
      </ImageContainer>

      <Title>{text}</Title>
      <Blurb>
        Looking to sell products online? We will discuss your business and help
        you decide what Ecommerce platform is best for you and then build it
        whether that is on Shopify, WooCommerce or a custom Stripe solution
      </Blurb>
    </Card>
  );
};

export const Card3 = () => {
  const [text, setText] = useState('Restaurant Website');
  return (
    <Card
      onMouseEnter={() => setText('Online Menu and Orders')}
      onMouseLeave={() => setText('Restaurant Website')}
      to="/websites/restaurant-website"
    >
      <ImageContainer>
        <Img className="animation3" src={sushi} />
      </ImageContainer>

      <Title>{text}</Title>
      <Blurb>
        Restaurant and coffee shops looking for effective and profitable online
        solutions for takeout/pickup and delivery. Avoid greedy Skip The Dishes/
        DoorDash fees with an unlimited, realtime, zero commission ordering
        platform.
      </Blurb>
    </Card>
  );
};

export const Card4 = () => {
  const [text, setText] = useState('Service Website');
  return (
    <Card
      onMouseEnter={() => setText('Book More Appointments')}
      onMouseLeave={() => setText('Service Website')}
      to="/websites/service-website"
    >
      <ImageContainer>
        <Img className="animation4" src={deliveryTruck} />
      </ImageContainer>
      <Title>{text}</Title>
      <Blurb>
        Are you a salon, spa, massage place or barbershop? Book people through
        your website today, with a highly optimized checkout process and low
        fees. Make payments online with no monthly fees.
      </Blurb>
    </Card>
  );
};

export const Card5 = () => {
  const [text, setText] = useState('Realtor Specials');
  return (
    <Card
      onMouseEnter={() => setText('Sell More Houses')}
      onMouseLeave={() => setText('Realtor Website')}
      to="/websites/realtor-website"
    >
      <ImageContainer>
        <Img className="animation5" src={homeRun} />
      </ImageContainer>

      <Title>{text}</Title>
      <Blurb>
        Realtor websites with MLS listings and personal branding to help you
        attract more leads and sales online. Get a blazingly fast and customized
        website along with SEO and Social Media ads so that you can be the go to
        realtor for your niche market. {` `}
        <span>We specialize in realtor websites.</span>
        {` `}
        Lets work together to attract top tier clients so that you can sell more
        houses in any market.
      </Blurb>
    </Card>
  );
};

export const Card6 = () => {
  const [text, setText] = useState('Construction Website');
  return (
    <Card
      onMouseEnter={() => setText('Attract Highend Clients')}
      onMouseLeave={() => setText('Construction Website')}
      to="/websites/construction-website"
    >
      <ImageContainer>
        <Img className="animation6" src={crane} />
      </ImageContainer>

      <Title>{text}</Title>
      <Blurb>
        With tough times looming ahead in Alberta, it is a better time now more
        than ever to invest long term and build up your online business presence
        and website. If you are construction company in Canada, learn about or
        special rates and discount services from web design and development, SEO
        and online advertising.
      </Blurb>
    </Card>
  );
};
