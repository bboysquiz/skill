import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ListHeader from '../listHeader/ListHeader.jsx'
import ListItem from '../list/ListItem.jsx'
import './list.sass'

const List = () => {


  return (
    <section className='list'>
      <div className="list__container">
        <ListHeader />
        <div className="list__table-wrapper">
          <table className="list__table">
            <thead>
              <tr className="list__table-row-title">
                <th className="list__table-head">Тип</th>
                <th className="list__table-head">Время</th>
                <th className="list__table-head">Сотрудник</th>
                <th className="list__table-head">Звонок</th>
                <th className="list__table-head">Источник</th>
                <th className="list__table-head">Оценка</th>
                <th className="list__table-head">Длительность</th>
              </tr>
            </thead>
            <tbody>
              <ListItem />
            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}

export default List