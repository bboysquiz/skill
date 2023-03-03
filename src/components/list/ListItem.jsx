import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './list.sass'
import incomingGreenImg from '../../assets/incomingGreen.svg'
import incomingRedImg from '../../assets/incomingRed.svg'
import outcomingRedImg from '../../assets/outcomingRed.svg'
import outcomingBlueImg from '../../assets/outcomingBlue.svg'

const ListItem = () => {
    const list = 'https://api.skilla.ru/mango/getList'
    const [listArray, setListArray] = useState([])
    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = 'Bearer testtoken'    
        axios
            .post(list)
            .then(data => {
                setListArray(data.data.results)
            })
        setTimeout(() => { }, 2000)
    }, [])
console.log(listArray)
    return (
        listArray.map((item, index) => {
            return (
                <tr key={index} className="list__table-row">
                    <td align="center" className="list__table-data table-data__type">
                        <img 
                            src={item.in_out ? item.status==='Дозвонился' ? incomingGreenImg : incomingRedImg : item.status==='Дозвонился' ? outcomingBlueImg : outcomingRedImg} 
                            alt="type" 
                            className='table-data__type-img'
                        />
                    </td>
                    <td align="center" className="list__table-data table-data__time">
                        {item.date.substring(11,16)}
                    </td>
                    <td align="center" className="list__table-data table-data__collaborator">
                        <img src={item.person_avatar} alt="no avatar" className="table-data__collaborator-img" />
                    </td>
                    <td align="center" className="list__table-data table-data__call">
                        +{item.partner_data.phone}
                    </td>
                    <td align="center" className="list__table-data table-data__source">
                        {item.from_site ? item.from_site : 'нет данных'}
                    </td>
                    <td align="center" className="list__table-data table-data__assesment">
                        <button className="table-data__assesment-button">Распознать</button>
                    </td>
                    <td align="center" className="list__table-data table-data__duration">
                        {(item.time !== 0) ? (item.time - Math.floor(item.time/60)*60) > 9 ? `${Math.floor(item.time/60)}:${item.time - Math.floor(item.time/60)*60}` : `${Math.floor(item.time/60)}:0${item.time - Math.floor(item.time/60)*60}` : ' '} 
                    </td>
                </tr>
            )
        })
    )
}

export default ListItem