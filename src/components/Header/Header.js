import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLInk/CustomLink';

const Header = () => {
  return (
    <div>
       <h2>Wellcome to my fancy Routing Website</h2>
       <nav>
         <CustomLink to="/">Home</CustomLink>
         <CustomLink to="/friends">Friends</CustomLink>
         <CustomLink to="/about">About</CustomLink>
       </nav>
    </div>
  );
};

export default Header;