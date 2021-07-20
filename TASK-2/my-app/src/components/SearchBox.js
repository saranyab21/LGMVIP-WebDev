import React from 'react';


const SearchBox=({searchfeild, searchChange})=>{
    return(
            <div className='pa2'>
                <input 
                className='pa3 ba b--white bg-rgb(206, 250, 229)'
                type="search" 
                placeholder='search by name' 
                onChange={searchChange}/>
            </div>
        );
}

export default SearchBox;
