import React from 'react';
import { StyledMenu } from '../styles/OurStyles';
import { bool } from 'prop-types'; 

const Menu = (props) => {
   
   return (
     <StyledMenu open={props.open}>
       <a href="/homepage">
         {/* <span role="img" aria-label="about us">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span> */}
         About us
       </a>
       <a href="/">
         {/* <span role="img" aria-label="price">&#x1f4b8;</span> */}
         Log Out
         </a>
       <a href="/addproduct">
         {/* <span role="img" aria-label="contact">&#x1f4e9;</span> */}
         Add Product
         </a>
     </StyledMenu>
   )
 }
 Menu.propTypes = {
    open: bool.isRequired,
 }
 export default Menu;