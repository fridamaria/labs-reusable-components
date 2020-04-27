import React from 'react'
import styled from 'styled-components'
import { TopBar } from 'lib/TopBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faBarcode } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Button } from 'lib/Button'

const TopBarButton = styled(Button)`
  margin-left: 10px;
`

const Link = styled.a`
  margin-right: 5px;                                                                               
  color: #fff;
`

const SearchInput = styled.input`
  border:none;
  background: none;
  outline:none;
  float:left;
  padding: 0;
  color: white;
  font-size: 16px;
  transition: 0.4s;
  line-height: 40px;
  width: 0px;
`

const SearchContainer = styled.form`
  background: none;
  height: 40px;
  border-radius: 40px;

  &:hover {
    background: #fff;
  }

  &:hover > ${SearchInput} {
    width: 250px;
    padding: 0 12px;
    color: #000;
    transition: 0.4s;
  }

  &:hover > ${TopBarButton} {
    background: #ece7e2;
    color: #000;
    transition: 0.2s;
  }
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 90px;
  font-size: 18px;
`

const BlackButton = styled(Button)`
  width: 140px;
  height: 110px;
  border: 1px solid #000;
  border-radius: 6px;
  color: #000;
  font-size: 100px;
`

export const App = () => {
  return (
    <>
      <TopBar
        menuIcon={<FontAwesomeIcon icon={faBars} />}
        title="Title">

        <Link href="https://twitter.com/explore">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>

        <SearchContainer>
          <SearchInput
            aria-label="Type your search and press enter."
            type="text"
            placeholder="Search" />
          <TopBarButton aria-label="Hover to open search field.">
            <FontAwesomeIcon icon={faSearch} />
          </TopBarButton>
        </SearchContainer>

      </TopBar>

      <Main>
        <BlackButton>
          <FontAwesomeIcon icon={faBarcode} />
        </BlackButton>
      </Main>
    </>
  )
}
