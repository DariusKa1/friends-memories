import styled from "styled-components"

export const RegisterStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: 100%;
`

export const RegisterHeading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const HeadingH1 = styled.h1`
    display: flex;
    justify-content: center;
    color: black;
`

export const HeadingP = styled.p`
    display: flex;
    justify-content: center;
    color: gray;
`

export const RegisterForm = styled.form`
    width: 500px;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const FormInput = styled.input`
    width: 80%;
    margin: 10px 0;
    padding: 0 5%;
    height: 20px;
    border: 1px solid black;
    border-radius: 25px;
`

export const FormButton = styled.button`
    background-color: black;
    margin: 10px 0;
    color: white;
    border-radius: 25px;
    width: 90%;
    height: 25px;
    transition: all 0.5s ease-in-out;

    &:hover{
        cursor: pointer;
        background-color: grey;
        border-color: grey;
    }
`