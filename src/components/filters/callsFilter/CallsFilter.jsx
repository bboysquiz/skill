import React, { useState, useEffect, useRef } from 'react'
import contextImg from '../../../assets/context.svg'

const CallsFilter = () => {
    const [callsCurrent, setCallsCurrent] = useState('Все звонки')
    const [contextCalls, setContextCalls] = useState('')
    const [triangleCalls, setTriangleCalls] = useState('')
    
    const callsRef = useRef(null)

    useEffect(() => {
        const onClick = (e) => {
            if (!callsRef.current.contains(e.target)) {
                if (contextCalls === 'active') {
                    setContextCalls('')
                    setTriangleCalls('')
                }
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, [contextCalls]);

    const toggleContextCalls = () => {
        if (contextCalls === '') {
            setContextCalls('active')
            setTriangleCalls('list-header__filters-icon_active')
        } else {
            setContextCalls('')
            setTriangleCalls('')
        }
    }

    const changeTitle = (value) => {
        if (value) {
            setCallsCurrent(value)
        }
    }

    return (
        <li ref={callsRef} className="list-header__filters-item" onClick={toggleContextCalls}>
            {callsCurrent}
            <img src={contextImg} alt="context" className={`list-header__filters-icon ${triangleCalls}`} />
            <div ref={callsRef} className={`filters-item__context-calls ${contextCalls}`}>
                <div onClick={() => { changeTitle('Все звонки') }} className="filters-item__context-field filters-item__context-calls_active">
                    Все звонки
                </div>
                <div onClick={() => { changeTitle('Все клиенты') }} className="filters-item__context-field">
                    Все клиенты
                </div>
                <div onClick={() => { changeTitle('Новые клиенты') }} className="filters-item__context-field">
                    Новые клиенты
                </div>
                <div onClick={() => { changeTitle('Все исполнители') }} className="filters-item__context-field">
                    Все исполнители
                </div>
                <div onClick={() => { changeTitle('Через приложение') }} className="filters-item__context-field">
                    Через приложение
                </div>
                <div onClick={() => { changeTitle('Прочие звонки') }} className="filters-item__context-field">
                    Прочие звонки
                </div>
            </div>
        </li>
    )
}

export default CallsFilter