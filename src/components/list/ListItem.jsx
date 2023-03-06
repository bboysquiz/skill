import React from 'react'
import './list.sass'
import incomingGreenImg from '../../assets/incomingGreen.svg'
import incomingRedImg from '../../assets/incomingRed.svg'
import outcomingRedImg from '../../assets/outcomingRed.svg'
import outcomingBlueImg from '../../assets/outcomingBlue.svg'

const ListItem = (props) => {
    return (
        <tr className="list__table-row">
            <td align="center" className="list__table-data table-data__type">
                <img
                    src={props.in_out ? props.status === 'Дозвонился' ? incomingGreenImg : incomingRedImg : props.status === 'Дозвонился' ? outcomingBlueImg : outcomingRedImg}
                    alt="type"
                    className='table-data__type-img'
                />
            </td>
            <td align="center" className="list__table-data table-data__time">
                {props.date.substring(11, 16)}
            </td>
            <td align="center" className="list__table-data table-data__collaborator">
                <img src={props.person_avatar} alt="no avatar" className="table-data__collaborator-img" />
            </td>
            <td align="center" className="list__table-data table-data__call">
                +{props.partner_data.phone}
            </td>
            <td align="center" className="list__table-data table-data__source">
                {props.from_site ? props.from_site : 'нет данных'}
            </td>
            <td align="center" className="list__table-data table-data__assesment">
                <button className="table-data__assesment-button">Распознать</button>
            </td>
            <td align="center" className="list__table-data table-data__duration">
                {(props.time !== 0) ? (props.time - Math.floor(props.time / 60) * 60) > 9 ? `${Math.floor(props.time / 60)}:${props.time - Math.floor(props.time / 60) * 60}` : `${Math.floor(props.time / 60)}:0${props.time - Math.floor(props.time / 60) * 60}` : ' '}
            </td>
        </tr>
    )
}

export default ListItem