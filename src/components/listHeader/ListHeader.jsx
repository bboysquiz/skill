import React, { useState } from 'react'
import './listHeader.sass'
import balanceImg from '../../assets/balance.svg'
import arrowImg from '../../assets/arrow.svg'
import calendarImg from '../../assets/calendar.svg'
import searchImg from '../../assets/search.svg'
import contextImg from '../../assets/context.svg'
import closeImg from '../../assets/close.svg'
import incomingGreenImg from '../../assets/incomingGreen.svg'
import incomingRedImg from '../../assets/incomingRed.svg'
import outcomingRedImg from '../../assets/outcomingRed.svg'
import outcomingBlueImg from '../../assets/outcomingBlue.svg'

const ListHeader = () => {
    const [dateFilter, setDateFilter] = useState('')
    const [search, setSearch] = useState('')
    const [dateFilterTitle, setDateFilterTitle] = useState('')
    const [close, setClose] = useState('')
    const [contextType, setContextType] = useState('')
    const [triangleType, setTriangleType] = useState('')
    const [contextCollaborators, setContextCollaborators] = useState('')
    const [triangleCollaborators, setTriangleCollaborators] = useState('')
    const [contextCalls, setContextCalls] = useState('')
    const [triangleCalls, setTriangleCalls] = useState('')
    const [contextSources, setContextSources] = useState('')
    const [triangleSources, setTriangleSources] = useState('')
    const [contextAssesments, setContextAssesments] = useState('')
    const [triangleAssesments, setTriangleAssesments] = useState('')
    const [contextErrors, setContextErrors] = useState('')
    const [triangleErrors, setTriangleErrors] = useState('')

    const toggleDateFilter = () => {
        if (dateFilter === '') {
            setDateFilter('active')
            setDateFilterTitle('list-header__date_active')
        } else {
            setDateFilter('')
            setDateFilterTitle('')
        }
    }

    const focusSearch = () => {
        setSearch('list-header__search-wrapper_active')
        setClose('active')
    }
    const focusoutSearch = () => {
        setSearch('')
        setClose('')
    }

    const toggleContextType = () => {
        if (contextType === '') {
            setContextType('active')
            setTriangleType('list-header__filters-icon_active')
        } else {
            setContextType('')
            setTriangleType('')
        }
    }
    const toggleContextCollaborators = () => {
        if (contextCollaborators === '') {
            setContextCollaborators('active')
            setTriangleCollaborators('list-header__filters-icon_active')
        } else {
            setContextCollaborators('')
            setTriangleCollaborators('')
        }
    }
    const toggleContextCalls = () => {
        if (contextCalls === '') {
            setContextCalls('active')
            setTriangleCalls('list-header__filters-icon_active')
        } else {
            setContextCalls('')
            setTriangleCalls('')
        }
    }
    const toggleContextSources = () => {
        if (contextSources === '') {
            setContextSources('active')
            setTriangleSources('list-header__filters-icon_active')
        } else {
            setContextSources('')
            setTriangleSources('')
        }
    }
    const toggleContextAssesments = () => {
        if (contextAssesments === '') {
            setContextAssesments('active')
            setTriangleAssesments('list-header__filters-icon_active')
        } else {
            setContextAssesments('')
            setTriangleAssesments('')
        }
    }
    const toggleContextErrors = () => {
        if (contextErrors === '') {
            setContextErrors('active')
            setTriangleErrors('list-header__filters-icon_active')
        } else {
            setContextErrors('')
            setTriangleErrors('')
        }
    }
    return (
        <div className='list-header'>
            <div className="list-header__container">
                <div className="list-header__main-data-wrapper">
                    <div className="list-header__main-data">
                        <button className="list-header__balance-button">
                            Баланс:
                            <span className="list-header__balance">272 ₽</span>
                            <img src={balanceImg} alt="balance" className="list-header__balance-icon" />
                        </button>

                        <div className="list-header__date-filter" onClick={toggleDateFilter}>
                            <img src={arrowImg} alt="arrowLeft" className="list-header__button-left" />
                            <div className={`list-header__date ${dateFilterTitle}`}>
                                <img src={calendarImg} alt="calendar" className="list-header__date-icon" />
                                3 дня
                            </div>
                            <img src={arrowImg} alt="arrowRight" className="list-header__button-right" />
                        </div>
                        <div className={`date-filter__context ${dateFilter}`}>
                            <div className="date-filter__context-field date-filter__context-field_active" onClick={toggleDateFilter}>3 дня</div>
                            <div className="date-filter__context-field" onClick={toggleDateFilter}>Неделя</div>
                            <div className="date-filter__context-field" onClick={toggleDateFilter}>Месяц</div>
                            <div className="date-filter__context-field" onClick={toggleDateFilter}>Год</div>
                            <div className="date-filter__context-custom">
                                <span className="date-filter__context-custom-title">Указать даты</span>
                                <input type="text" className="date-filter__context-custom-input" placeholder='__.__.__-__.__.__' />
                                <img src={calendarImg} alt="calendar" className="date-filter__context-custom-img" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className={`list-header__search-wrapper ${search}`}>
                    <img src={searchImg} alt="search" className="list-header__search-icon" width={16} height={16} />
                    <input type="text" className="list-header__search-input" placeholder='Поиск по звонкам' onFocus={focusSearch} onBlur={focusoutSearch} />
                    <img src={closeImg} alt="close" className={`list-header__search-close ${close}`} width={14} height={14} onClick={focusoutSearch} />
                </div>

                <ul className="list-header__filters-list">
                    <li className="list-header__filters-item" onClick={toggleContextType}>
                        Все типы
                        <img src={contextImg} alt="context" className={`list-header__filters-icon ${triangleType}`} />
                    </li>
                    <div className={`filters-item__context-type ${contextType}`}>
                        <div className="filters-item__context-field">
                            Все типы
                        </div>
                        <div className="filters-item__context-field">
                            <img src={incomingGreenImg} alt="incomingGreen" className="filters-item__context-img" />
                            Входящие принятые
                        </div>
                        <div className="filters-item__context-field">
                            <img src={incomingRedImg} alt="incomingRed" className="filters-item__context-img" />
                            Входящие непринятые
                        </div>
                        <div className="filters-item__context-field">
                            <img src={outcomingBlueImg} alt="outcomingBlue" className="filters-item__context-img" />
                            Исходящие принятые
                        </div>
                        <div className="filters-item__context-field">
                            <img src={outcomingRedImg} alt="outcomingRed" className="filters-item__context-img" />
                            Исходящие непринятые
                        </div>
                    </div>

                    <li className="list-header__filters-item" onClick={toggleContextCollaborators}>
                        Все сотрудники
                        <img src={contextImg} alt="context" className={`list-header__filters-icon ${triangleCollaborators}`} />
                    </li>
                    <div className={`filters-item__context-collaborators ${contextCollaborators}`}>
                        <div className="filters-item__context-field">Все сотрудники</div>
                        <div className="filters-item__context-field">
                            <img src="https://lk.skilla.ru/img/noavatar.jpg" alt="avatar" className="filters-item__context-img" />
                            Константин К.
                        </div>
                    </div>

                    <li className="list-header__filters-item" onClick={toggleContextCalls}>
                        Все звонки
                        <img src={contextImg} alt="context" className={`list-header__filters-icon ${triangleCalls}`} />
                    </li>
                    <div className={`filters-item__context-calls ${contextCalls}`}>
                        context
                    </div>

                    <li className="list-header__filters-item" onClick={toggleContextSources}>
                        Все источники
                        <img src={contextImg} alt="context" className={`list-header__filters-icon ${triangleSources}`} />
                    </li>
                    <div className={`filters-item__context-sources ${contextSources}`}>
                        context
                    </div>

                    <li className="list-header__filters-item" onClick={toggleContextAssesments}>
                        Все оценки
                        <img src={contextImg} alt="context" className={`list-header__filters-icon ${triangleAssesments}`} />
                    </li>
                    <div className={`filters-item__context-assesments ${contextAssesments}`}>
                        context
                    </div>

                    <li className="list-header__filters-item" onClick={toggleContextErrors}>
                        Все ошибки
                        <img src={contextImg} alt="context" className={`list-header__filters-icon ${triangleErrors}`} />
                    </li>
                    <div className={`filters-item__context-errors ${contextErrors}`}>
                        context
                    </div>
                </ul>

            </div>
        </div>
    )
}

export default ListHeader