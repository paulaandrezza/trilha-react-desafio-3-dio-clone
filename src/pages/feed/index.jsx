import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Paula Marinho" image="https://avatars.githubusercontent.com/u/43113952?v=4" percentual={25}/>
                <UserInfo nome="Paula Marinho" image="https://avatars.githubusercontent.com/u/43113952?v=4" percentual={65}/>
                <UserInfo nome="Paula Marinho" image="https://avatars.githubusercontent.com/u/43113952?v=4" percentual={45}/>
                <UserInfo nome="Paula Marinho" image="https://avatars.githubusercontent.com/u/43113952?v=4" percentual={75}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 
