import styled from 'styled-components';

const StyledForm = styled.div`
form {
   max-width: 500px;
   min-width: 300px;
   max-height: 1000px;
   width: 60%;
   height: 60%;
   margin: 100px auto;
   background-color: #ffff;
   border-radius: 25px;
 }
 
 header {
   text-align: center;
   padding: 2rem 0;
   margin: 0;
   font-size: 2rem;
 }
 
 div {
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-top: 2rem;
   max-width: 100%;
 }
 
  input {
   width: 80%;
   box-sizing: border-box;
   border: none;
   font-size: 1.3rem;
   padding-left: 1.5rem;
   padding-bottom: 1rem;
   box-shadow: inset 0px -3px 0px 0px rgba(187, 187, 187, 0.2);
   transition: box-shadow 0.2s ease-in;
   
   &:focus {
     box-shadow: inset 0px -3px 0px 0px ${pr => pr.theme.greenBlue};
     outline: none;
    }

    &::-webkit-input-placeholder {
      opacity: 1;
      transition: opacity 0.25s ease-out;
    }

  }
 
//*  input::-webkit-input-placeholder {
//*    opacity: 1;
//*    transition: opacity 0.25s ease-out;
//*  }
 
 input:hover::-webkit-input-placeholder,
 input:focus::-webkit-input-placeholder {
   opacity: 0;
 }
 
 label {
   align-self: start;
   padding-left: 2rem;
   padding-bottom: 0.5rem;
   color: rgba(187, 187, 187, 0.9);
 }
 
`

//USE THIS FOR CHECKBOXES
const StyledCheckbox = styled.div`
   div {
      justify-self: center;
      border-bottom: none;
   }
   label {
      padding-left: 0;
   }
   input {
      box-shadow: none;
      &:focus{
         //! fixed the shadow on the Terms Checkbox
         box-shadow: none;
      }
   }
`

const StyledHome = styled.div`

`
//USE THIS FOR BUTTONS
const StyledButton = styled.div`

 button {
   border-radius: 25px;
   width: 80%;
   height: 40px;
   font-size: 1.3rem;
   color: white;
   font-weight: 700;
   background: ${pr => pr.theme.greenBlue};
   border: 0px;
   cursor: pointer;
   transition: opacity 0.25s ease-out;
   margin-bottom: 2rem;
 }
 
 button:hover {
   opacity: 0.6;
 }


`

const StyledBurger = styled.button`
  position: absolute;
  top: 7%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${pr => pr.theme.white};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
  `;

const StyledMenu = styled.nav`
  transform: translateX(100%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`


export { StyledForm, StyledCheckbox, StyledButton, StyledBurger, StyledMenu }