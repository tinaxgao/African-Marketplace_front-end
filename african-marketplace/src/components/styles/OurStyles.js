import styled from 'styled-components';

const StyledForm = styled.div`
.container {
   max-width: 500px;
   min-width: 300px;
   max-height: 700px;
   width: 30%;
   height: 60%;
   margin: 100px auto;
   background-color: #ffff;
   border-radius: 25px;
 }
 
 .loginHeader {
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
 }
 
 input:focus {
   box-shadow: inset 0px -3px 0px 0px ${pr => pr.theme.greenBlue};
   outline: none;
 }
 
 input::-webkit-input-placeholder {
   opacity: 1;
   transition: opacity 0.25s ease-out;
 }
 
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

const StyledHome = styled.div`

`

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
 }
 
 button:hover {
   opacity: 0.6;
 }

 #submitBtn {
   margin-bottom: 2rem;
 }


`

export { StyledForm, StyledHome, StyledButton }