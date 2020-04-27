import React from 'react'
import styled from 'styled-components/macro'
import { Button } from './Button'

const TopBarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  background: ${(props) => (props.background || '#212121')};
  color: ${(props) => (props.color || '#fff')};
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`

const Navigation = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 32px;
  align-items: center;
  font-size: 20px;
`

const Title = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 400;
`

const ActionItems = styled.div`
  display: flex;
  font-size: 20px;
`

const ChildrenContainer = styled.div`
  display: flex;
  align-items: center;
`

export const TopBar = ({ menuButtonClick, background, color, menuIcon, title, children }) => {
  return (
    <TopBarContainer background={background} color={color}>
      <Navigation>
        <Button onClick={menuButtonClick}>{menuIcon}</Button>
        {title && <Title>{title}</Title>}
      </Navigation>

      {children &&
        <ActionItems>
          <ChildrenContainer>{children}</ChildrenContainer>
        </ActionItems>
      }
    </TopBarContainer>
  )
}