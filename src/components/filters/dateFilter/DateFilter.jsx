import React, { useState, useEffect, useRef } from 'react'
import arrowImg from '../../../assets/arrow.svg'
import calendarImg from '../../../assets/calendar.svg'

const DateFilter = () => {
    const [dateCurrent, setDateCurrent] = useState('3 дня')
    const [dateFilter, setDateFilter] = useState('')
    const [dateFilterTitle, setDateFilterTitle] = useState('')

    const toggleDateFilter = () => {
        if (dateFilter === '') {
            setDateFilter('active')
            setDateFilterTitle('list-header__date_active')
        } else {
            setDateFilter('')
            setDateFilterTitle('')
        }
    }
    const dateRef = useRef(null)

    useEffect(() => {
        const onClick = (e) => {
            if (!dateRef.current.contains(e.target)) {
                if (dateFilter === 'active') {
                    setDateFilter('')
                }
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, [dateFilter]);

    const changeTitle = (value) => {
        if (value) {
            setDateCurrent(value)
        }
    }
    return (
        <div ref={dateRef} className="list-header__date-filter" onClick={toggleDateFilter}>
            <img src={arrowImg} alt="arrowLeft" className="list-header__button-left" />
            <div className={`list-header__date ${dateFilterTitle}`}>
                <img src={calendarImg} alt="calendar" className="list-header__date-icon" />
                {dateCurrent}
            </div>
            <img src={arrowImg} alt="arrowRight" className="list-header__button-right" />
            <div ref={dateRef} className={`date-filter__context ${dateFilter}`}>
                <div className="date-filter__context-field date-filter__context-field_active" onClick={() => { changeTitle('3 дня') }}>3 дня</div>
                <div className="date-filter__context-field" onClick={() => { changeTitle('Неделя') }}>Неделя</div>
                <div className="date-filter__context-field" onClick={() => { changeTitle('Месяц') }}>Месяц</div>
                <div className="date-filter__context-field" onClick={() => { changeTitle('Год') }}>Год</div>
                <div className="date-filter__context-custom">
                    <span className="date-filter__context-custom-title">Указать даты</span>
                    <input type="text" className="date-filter__context-custom-input" placeholder='__.__.__-__.__.__' />
                    <img src={calendarImg} alt="calendar" className="date-filter__context-custom-img" />
                </div>
            </div>
        </div>
    )
}

export default DateFilter