import React from 'react'
import Header from "../header/Header";
import List from "../list/List";
import './main.sass'

const Main = () => {
    return (
        <div className='main'>
            <div className="main__container">
                <Header />
                <List />
            </div>
        </div>
    )
}

export default Main