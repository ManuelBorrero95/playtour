import React from 'react'
import { useState } from 'react'

export const SearchBar = ({onSearch} ) => {


  return (
    <>        
    <input type="text" placeholder="Buscar evento..." onChange={(e) => onSearch(e.target.value)} 
    className='mb-2 border border-gray-300 w-full rounded shadow-md'/>
    </>
  )
}
