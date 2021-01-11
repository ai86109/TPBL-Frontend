import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY_SM, MEDIA_QUERY_MD, MEDIA_QUERY_LG } from '../../constants/breakpoint';
import { useTranslation } from 'react-i18next';

const Root = styled.div`
  width: 100%;
  max-width: 1600px;
  min-height: 700px;
  font-size: 16px;
  margin: 100px auto 0 auto;
  color: ${props => props.theme.light.text.black_200};
  ${MEDIA_QUERY_LG} {
    margin: 70px auto 0 auto;
  }
`

const Container = styled.div``

const Header = styled.div`
  padding: 2rem;
  background-color: ${props => props.theme.light.background.white_100};
  box-shadow: 1px 3px 10px ${props => props.theme.light.background.black_100};
`

const PageTitle = styled.h1`
  font-weight: 700;
  color: ${props => props.theme.light.text.black_100};
  margin-bottom: 2rem;
  ${MEDIA_QUERY_SM} {
    font-size: 3rem;
  }
  ${MEDIA_QUERY_MD} {
    font-size: 4rem;
  }
`

const NewsContainer = styled.div`
  background-color: ${props => props.theme.light.background.white_300};
  ${MEDIA_QUERY_LG} {
    display: flex;
  }
`

const NewsBlockContainer = styled.div`
  ${MEDIA_QUERY_LG} {
    height: 1000px;
    overflow: scroll;
    margin: 20px;
  }
`

const NewsBlock = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  background-color: ${props => props.theme.light.background.white_100};
  box-shadow: 1px 3px 5px ${props => props.theme.light.background.light_gray};
  & + & {
    margin-top: 20px;
    ${MEDIA_QUERY_LG} {
      margin: 0;
    }
  }
  ${MEDIA_QUERY_LG} {
    width: 400px;
    flex-direction: row;
    padding: 15px;
    &:hover {
      background-color: ${props => props.theme.light.background.light_gray};
    }
  }
`

const NewsImg = styled.image`
  & img {
    width: 100%;
  }
  ${MEDIA_QUERY_LG} {
    width: 200px;
  }
`

const NewsTitle = styled.h1`
  color: ${props => props.theme.light.text.black_300};
  font-size: 2.5rem;
  font-weight: 700;
  padding: 2rem 2rem 1rem 2rem;
  cursor: pointer;
  ${MEDIA_QUERY_MD} {
    font-size: 3rem;
  }
  ${MEDIA_QUERY_LG} {
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.5;
    width: 300px;
    display: flex;
    &:hover {
      color: ${props => props.theme.light.text.white_opacity10};
    }
  }
`

const ReadMore = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid ${props => props.theme.light.background.light_gray};
  padding: 12px 40px;
  margin: 10px auto;
  color: ${props => props.theme.light.text.black_100};
  font-weight: 500;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${props => props.theme.light.background.light_gray};
    color: ${props => props.theme.light.text.white_opacity08};
  }
  ${MEDIA_QUERY_LG} {
    display: none;
  }
`

const WholeArticle = styled.div`
  display: none;
  ${MEDIA_QUERY_LG} {
    overflow: scroll;
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 1020px;
    background-color: ${props => props.theme.light.background.white_200}
  }
`

const ArticleTitle = styled.h1`
  color: ${props => props.theme.light.text.black_300};
  font-size: 3rem;
  font-weight: 700;
  padding: 2rem;
`

const ArticleDate = styled.div`
  font-size: 1.6rem;
  padding: 1rem 2rem;
`

const ArticleImg = styled.image`
  & img {
    width: 100%;
  }
`

const ArticleContent = styled.div`
  line-height: 1.5;
  padding: 2rem;
  font-size: 1.75rem;
`

function News() {
  return (
    <NewsContainer>
      <NewsBlockContainer>
        <NewsBlock>
          <NewsImg>
            <img src="https://i.imgur.com/uAOXfQl.jpg" />
          </NewsImg>
          <NewsTitle>It's 2021! Let's get to work</NewsTitle>
          <ReadMore>看更多</ReadMore>
        </NewsBlock>
        <NewsBlock>
          <NewsImg>
            <img src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w2208/mlb/ylp2mqpnal6acpq9sum4" />
          </NewsImg>
          <NewsTitle>Mets deal for Lindor, Cookie in blockbuster</NewsTitle>
          <ReadMore>看更多</ReadMore>
        </NewsBlock>
        <NewsBlock>
          <NewsImg>
            <img src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w2208/mlb/t32czsotb3fovdh1extv" />
          </NewsImg>
          <NewsTitle>Dodgers icon Tommy Lasorda dies at 93</NewsTitle>
          <ReadMore>看更多</ReadMore>
        </NewsBlock>
        <NewsBlock>
          <NewsImg>
            <img src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w2208/mlb/uqxy7iigpyfgfffincf3" />
          </NewsImg>
          <NewsTitle>'A legend': Baseball world mourns Lasorda</NewsTitle>
          <ReadMore>看更多</ReadMore>
        </NewsBlock>
        <NewsBlock>
          <NewsImg>
            <img src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w2208/mlb/j07scgfhr0osl1zs6ywd" />
          </NewsImg>
          <NewsTitle>Another star trade target on Mets' radar?</NewsTitle>
          <ReadMore>看更多</ReadMore>
        </NewsBlock>
        <NewsBlock>
          <NewsImg>
            <img src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w2208/mlb/krgzw69osyspmzyjgwrx" />
          </NewsImg>
          <NewsTitle>Here are the ripple effects of Mets' big trade</NewsTitle>
          <ReadMore>看更多</ReadMore>
        </NewsBlock>
        <NewsBlock>
          <NewsImg>
            <img src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w2208/mlb/fbmq1ciqe2lxoll91hws" />
          </NewsImg>
          <NewsTitle>Bauer, in Mets cap, praises blockbuster</NewsTitle>
          <ReadMore>看更多</ReadMore>
        </NewsBlock>
        <NewsBlock>
          <NewsImg>
            <img src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w2208/mlb/qzerlqdvqfye6byy5pym" />
          </NewsImg>
          <NewsTitle>2021 breakout prospects -- 1 for each team</NewsTitle>
          <ReadMore>看更多</ReadMore>
        </NewsBlock>
        <NewsBlock>
          <NewsImg>
            <img src="https://img.mlbstatic.com/mlb-images/image/private/t_16x9/t_w2208/mlb/d2zsfw7hehqtv7zptsgp" />
          </NewsImg>
          <NewsTitle>Remembering Lasorda's 11 funniest moments</NewsTitle>
          <ReadMore>看更多</ReadMore>
        </NewsBlock>
      </NewsBlockContainer>
      <WholeArticle>
        <ArticleTitle>It's 2021! Let's get to work</ArticleTitle>
        <ArticleDate>2020/1/9</ArticleDate>
        <ArticleImg>
          <img src="https://i.imgur.com/uAOXfQl.jpg" />
        </ArticleImg>
        <ArticleContent>
          NEW YORK -- When Steve Cohen purchased the Mets in November, his promises -- both spoken and unspoken -- were manifold. With Cohen leading, the baseball world expected the Mets to enter a new era of excess, playing at the top of the free-agent and trade markets as they looked to build a consistent winner.

That vision is rapidly coming true. In by far the boldest stroke of the Cohen era to date, New York acquired All-Star shortstop Francisco Lindor and starting pitcher Carlos Carrasco from Cleveland on Thursday. The six-player deal sent infielders Amed Rosario and Andrés Giménez and two prospects to the Tribe.

Mets get: SS Francisco Lindor, RHP Carlos Carrasco
Indians get: INF Andrés Giménez, INF Amed Rosario, RHP Josh Wolf, OF Isaiah Greene

Projected Mets lineup for 2021
Jeff McNeil LF
Francisco Lindor SS
Michael Conforto RF
Dom Smith DH*
Pete Alonso 1B
Brandon Nimmo CF
J.D. Davis 3B
James McCann C
Luis Guillorme 2B

*if there is a DH in the National League in 2021

NEW YORK -- When Steve Cohen purchased the Mets in November, his promises -- both spoken and unspoken -- were manifold. With Cohen leading, the baseball world expected the Mets to enter a new era of excess, playing at the top of the free-agent and trade markets as they looked to build a consistent winner.

That vision is rapidly coming true. In by far the boldest stroke of the Cohen era to date, New York acquired All-Star shortstop Francisco Lindor and starting pitcher Carlos Carrasco from Cleveland on Thursday. The six-player deal sent infielders Amed Rosario and Andrés Giménez and two prospects to the Tribe.

Mets get: SS Francisco Lindor, RHP Carlos Carrasco
Indians get: INF Andrés Giménez, INF Amed Rosario, RHP Josh Wolf, OF Isaiah Greene

Projected Mets lineup for 2021
Jeff McNeil LF
Francisco Lindor SS
Michael Conforto RF
Dom Smith DH*
Pete Alonso 1B
Brandon Nimmo CF
J.D. Davis 3B
James McCann C
Luis Guillorme 2B

*if there is a DH in the National League in 2021

NEW YORK -- When Steve Cohen purchased the Mets in November, his promises -- both spoken and unspoken -- were manifold. With Cohen leading, the baseball world expected the Mets to enter a new era of excess, playing at the top of the free-agent and trade markets as they looked to build a consistent winner.

That vision is rapidly coming true. In by far the boldest stroke of the Cohen era to date, New York acquired All-Star shortstop Francisco Lindor and starting pitcher Carlos Carrasco from Cleveland on Thursday. The six-player deal sent infielders Amed Rosario and Andrés Giménez and two prospects to the Tribe.

Mets get: SS Francisco Lindor, RHP Carlos Carrasco
Indians get: INF Andrés Giménez, INF Amed Rosario, RHP Josh Wolf, OF Isaiah Greene

Projected Mets lineup for 2021
Jeff McNeil LF
Francisco Lindor SS
Michael Conforto RF
Dom Smith DH*
Pete Alonso 1B
Brandon Nimmo CF
J.D. Davis 3B
James McCann C
Luis Guillorme 2B

*if there is a DH in the National League in 2021

NEW YORK -- When Steve Cohen purchased the Mets in November, his promises -- both spoken and unspoken -- were manifold. With Cohen leading, the baseball world expected the Mets to enter a new era of excess, playing at the top of the free-agent and trade markets as they looked to build a consistent winner.

That vision is rapidly coming true. In by far the boldest stroke of the Cohen era to date, New York acquired All-Star shortstop Francisco Lindor and starting pitcher Carlos Carrasco from Cleveland on Thursday. The six-player deal sent infielders Amed Rosario and Andrés Giménez and two prospects to the Tribe.

Mets get: SS Francisco Lindor, RHP Carlos Carrasco
Indians get: INF Andrés Giménez, INF Amed Rosario, RHP Josh Wolf, OF Isaiah Greene

Projected Mets lineup for 2021
Jeff McNeil LF
Francisco Lindor SS
Michael Conforto RF
Dom Smith DH*
Pete Alonso 1B
Brandon Nimmo CF
J.D. Davis 3B
James McCann C
Luis Guillorme 2B

*if there is a DH in the National League in 2021

NEW YORK -- When Steve Cohen purchased the Mets in November, his promises -- both spoken and unspoken -- were manifold. With Cohen leading, the baseball world expected the Mets to enter a new era of excess, playing at the top of the free-agent and trade markets as they looked to build a consistent winner.

That vision is rapidly coming true. In by far the boldest stroke of the Cohen era to date, New York acquired All-Star shortstop Francisco Lindor and starting pitcher Carlos Carrasco from Cleveland on Thursday. The six-player deal sent infielders Amed Rosario and Andrés Giménez and two prospects to the Tribe.

Mets get: SS Francisco Lindor, RHP Carlos Carrasco
Indians get: INF Andrés Giménez, INF Amed Rosario, RHP Josh Wolf, OF Isaiah Greene

Projected Mets lineup for 2021
Jeff McNeil LF
Francisco Lindor SS
Michael Conforto RF
Dom Smith DH*
Pete Alonso 1B
Brandon Nimmo CF
J.D. Davis 3B
James McCann C
Luis Guillorme 2B

*if there is a DH in the National League in 2021
        </ArticleContent>
      </WholeArticle>
    </NewsContainer>
  )
}

export default function NewsPage() {
  const { t, i18n } = useTranslation();

  return (
    <Root>
      <Container>
        <Header>
          <PageTitle>{t('navbar.news')}</PageTitle>
        </Header>
        <News />
      </Container>
    </Root>
  )
}
