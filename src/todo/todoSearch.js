import React from 'react';
import './css/todoSearch.css';

function TodoSearch({search,setSearchValue}) {
  let onSearchValueChange =(evt)=>{
    console.log(evt.target.value);
    setSearchValue(evt.target.value)
  }
  return (
<React.Fragment>
    <input  value={search} onChange={onSearchValueChange} className="TodoSearch" placeholder="Cebolla" />
    {search}
    </React.Fragment>    
  );
}

export { TodoSearch };