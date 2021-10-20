import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

import styled from "styled-components";

import { StyledForm, StyledButton } from "./styles/OurStyles";

const StyledFormSignup = styled.div`


`

const initialFormVals = {
   name:'',
   email: "",
   username: "",
   password: "",
   terms: false,
}


export default function SignUp(props){
   const [ user, setUser ] = useState([]);
   const [ formVals, setFormVals ] = useState(initialFormVals);
   
   const history = useHistory();

   //submit new user
   const onSubmit = (evt) =>{
      evt.preventDefault()
      submit(formVals)
   }

   const submit = () =>{
      const newUser = {
         name: formVals.name .trim(),
         email: formVals.email.trim(),
         username: formVals.username.trim(),
         password: formVals.password.trim(),
         terms: !!formVals.terms
      }
      postNewUser(newUser)
      // console.log(newUser) //! proof of working
   }

   // useEffect(() => {
      const postNewUser = (newUser) =>{
         axios.post('https://reqres.in/api/users', newUser)
            .then(res =>{
               setUser([res.data, ...user]) // will we actually need to spread this here?
            })
            .catch( err => console.error(err))
            .finally(() => history.push('/'))
      }
   //    postNewUser(user)

   //  }, [])

   // Changes here
   const onChange = (evt) =>{
      const {name, value, type, checked } = evt.target;
      const valToUse = type === 'checkbox' ? checked : value;
      update( name, valToUse );
   }
   const update = ( name, value ) =>{
      //! validate( name, value );
      setFormVals({...formVals, [name]: value})
   }

   return (
      <StyledForm>
     <form id="signUp" onSubmit={onSubmit}>
        <header> Sign Up </header>
      
      <section>
         <div>
            <label> Full Name (first last): </label>
            <input
               type='text'
               name='name'
               value={formVals.name}
               onChange={onChange}
               />
         </div>
         <div >
            <label> Email: </label>
            <input
               type='email'
               name='email'
               value={formVals.email}
               onChange={onChange}
               />
         </div>
         <div>
            <label> Username:</label>
            <input
               type='text'
               name='username'
               value={formVals.username}
               onChange={onChange}
               />
         </div>
         <div >
            <label> Password: </label>
            <input
               type='password'
               name='password'
               value={formVals.password}
               onChange={onChange}
               placeholder= 'hello im david'
               />
         </div>
         <div>
            <label> Terms of service </label>
            <input
               type='checkbox'
               name='terms'
               checked={formVals.terms}
               onChange={onChange}
               />   
         </div>
         <StyledButton>
            <button id='submitBtn' type='submit'> Sign Up </button> 
         </StyledButton>
      </section>
      </form>
     
   </StyledForm>
   );
}