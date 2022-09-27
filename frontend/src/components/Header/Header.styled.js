import styled from "styled-components"

export const HeaderStyled = styled.header`
    font-family: inherit;
    padding: 0 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: inherit;
    background-color: darkgrey;
    color: white;
`

export const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    height: inherit;
    
    & > a {
        text-decoration: none;
        color: white;
    }
`

export const HeaderUl = styled.ul`
    display: flex;
    flex-direction: row;
    width: 200px;
    justify-content: space-between;
    height: inherit;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
`


export const HeaderLi = styled.li`
    display: flex;
    align-items: center;
    height: inherit;
    list-style: none;
    & > a {
        text-decoration: none;
        color: white;
    }
`
export const HeaderButton = styled.button`
    cursor: pointer;
    font-family: inherit;
    background-color: darkgray;
    border: none;
    text-decoration: none;
    color: white;
`