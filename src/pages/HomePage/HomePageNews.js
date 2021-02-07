import React from 'react';
import styled from 'styled-components';

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: ${({theme}) => theme.background.white_100};
  border-radius: 4px;
`

const Headline = styled.div`
  border-radius: 4px;
`

const HeadlineImg = styled.image`
  & img {
    width: 100%;
    border-radius: 4px;
  }
`

const HeadlineTitle = styled.h1`
  color: ${({theme}) => theme.text.black_300};
  font-size: 2.5rem;
  font-weight: 700;
  padding: 2rem 2rem 1rem 2rem;
  cursor: pointer;
`

const HeadlineContent = styled.div`
  font-size: 1.75rem;
  padding: 1rem 2rem 1.75rem 2rem;
`

const Divider = styled.div`
  background-color: ${({theme}) => theme.background.white_200};
  width: 100%;
  height: 20px;
`

const LatestNews = styled.div`
  padding: 2rem;
`

const LatestNewsTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({theme}) => theme.text.black_100};
  padding-bottom: 2rem;
  border-bottom: 1px solid ${({theme}) => theme.background.dark_gray};
`

const NewsTitle = styled.div`
  cursor: pointer;
  font-size: 1.75rem;
  padding: 1.5rem 0;
  &::before {
    content: "・";
  }
`

export default function HomePageNews() {
  return (
    <NewsContainer>
      <Headline>
        <HeadlineImg>
          <img src="https://i.imgur.com/uAOXfQl.jpg" />
        </HeadlineImg>
        <HeadlineTitle>
          It's 2021! Let's get to work
        </HeadlineTitle>
        <HeadlineContent>
          A new year holds promise for all of us, but make no mistake, these teams have unfinished business.
        </HeadlineContent>
      </Headline>
      <Divider />
      <LatestNews>
        <LatestNewsTitle>LATEST NEWS</LatestNewsTitle>
        <NewsTitle>
          10 teams with unfinished Hot Stove business
        </NewsTitle>
        <NewsTitle>
          Sugano on US soil, decision is near (source)
        </NewsTitle>
        <NewsTitle>
          Dodgers still in LeMahieu sweepstakes?
        </NewsTitle>
        <NewsTitle>
          Here are the 1st Power Rankings of 2021
        </NewsTitle>
        <NewsTitle>
          Look for these 7 stars to bounce back in '21
        </NewsTitle>
        <NewsTitle>
          Tanaka explores all options -- including Japan
        </NewsTitle>
      </LatestNews>
    </NewsContainer>
  )
}
