import React, { useState, useEffect, useRef } from 'react'
import contextImg from '../../../assets/context.svg'

const TypeFilter = () => {
    const [typeCurrent, setTypeCurrent] = useState('Все типы')
    const [contextType, setContextType] = useState('')
    const [triangleType, setTriangleType] = useState('')

    const toggleContextType = () => {
        if (contextType === '') {
            setContextType('active')
            setTriangleType('list-header__filters-icon_active')
        } else {
            setContextType('')
            setTriangleType('')
        }
    }

    const typeRef = useRef(null)

    useEffect(() => {
        const onClick = (e) => {
            if (!typeRef.current.contains(e.target)) {
                if (contextType === 'active') {
                    setContextType('')
                    setTriangleType('')
                }
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, [contextType]);

    const changeTitle = (value) => {
        if (value) {
            setTypeCurrent(value)
        }
    }
    return (
        <li ref={typeRef} className="list-header__filters-item" onClick={toggleContextType}>
            {typeCurrent}
            <img src={contextImg} alt="context" className={`list-header__filters-icon ${triangleType}`} />

            <div ref={typeRef} className={`filters-item__context-type ${contextType}`}>
                <div onClick={() => { changeTitle('Все типы') }} className="filters-item__context-field filters-item__context-type_active">
                    Все типы
                </div>
                <div onClick={() => { changeTitle('Входящие принятые') }} className="filters-item__context-field">
                    Входящие принятые
                </div>
                <div onClick={() => { changeTitle('Входящие непринятые') }} className="filters-item__context-field">
                    Входящие непринятые
                </div>
                <div onClick={() => { changeTitle('Исходящие принятые') }} className="filters-item__context-field">
                    Исходящие принятые
                </div>
                <div onClick={() => { changeTitle('Исходящие непринятые') }} className="filters-item__context-field">
                    Исходящие непринятые
                </div>
            </div>
        </li>

    )
}

export default TypeFilter