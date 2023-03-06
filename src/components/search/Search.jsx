import React, { useState } from 'react'
import searchImg from '../../assets/search.svg'
import closeImg from '../../assets/close.svg'

const Search = () => {
    const [search, setSearch] = useState('')
    const [close, setClose] = useState('')

    const focusSearch = () => {
        setSearch('list-header__search-wrapper_active')
        setClose('active')
    }
    const focusoutSearch = () => {
        setSearch('')
        setClose('')
    }
    
    return (
        <div className={`list-header__search-wrapper ${search}`}>
            <img src={searchImg} alt="search" className="list-header__search-icon" width={16} height={16} />
            <input type="text" className="list-header__search-input" placeholder='Поиск по звонкам' onFocus={focusSearch} onBlur={focusoutSearch} />
            <img src={closeImg} alt="close" className={`list-header__search-close ${close}`} width={14} height={14} onClick={focusoutSearch} />
        </div>
    )
}

export default Search