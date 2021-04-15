// A simple component that renders the app header and accepts a title prop

import { useState } from 'react';
import { Searchbar } from './../Search/Search';
import './Header.css';

export const Header = params => {

    return (
      <>
        <div className="HeaderContainer">
            <h2 className="HeaderLogo">FinProH8</h2>

            <Searchbar setSearchQuery={params.setSearchQuery}/>
        </div>
      </>  
    );
}