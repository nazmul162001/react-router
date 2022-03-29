import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLInk/CustomLink';

const Header = () => {
  return (
    <div>
       <h2>Wellcome to my fancy Routing Website</h2>
       <nav style={{display: 'flex', justifyContent: 'center', backgroundColor: 'indigo', padding: '20px 0'}}>

         <CustomLink  to="/"><span style={{color: 'white', paddingRight: '10px', fontSize: '22px'}}>Home</span></CustomLink>

         <CustomLink  to="/friends"><span style={{color: 'white', paddingRight: '10px', fontSize: '22px'}}>Friends</span></CustomLink>

         <CustomLink  to="/post"><span style={{color: 'white', paddingRight: '10px', fontSize: '22px'}}>Post</span></CustomLink>

         <CustomLink  to="/countries"><span style={{color: 'white', paddingRight: '10px', fontSize: '22px'}}>Countries</span></CustomLink>

         <CustomLink  to="/about"><span style={{color: 'white', paddingRight: '10px', fontSize: '22px'}}>About</span></CustomLink>
       </nav>
    </div>
  );
};

export default Header;