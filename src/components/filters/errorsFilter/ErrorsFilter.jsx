import React, { useState, useEffect, useRef } from 'react'
import contextImg from '../../../assets/context.svg'

const ErrorsFilter = () => {
    const [errorsCurrent, setErrorsCurrent] = useState('Все ошибки')
    const [contextErrors, setContextErrors] = useState('')
    const [triangleErrors, setTriangleErrors] = useState('')

    const toggleContextErrors = () => {
        if (contextErrors === '') {
            setContextErrors('active')
            setTriangleErrors('list-header__filters-icon_active')
        } else {
            setContextErrors('')
            setTriangleErrors('')
        }
    }
    const errorsRef = useRef(null)

    useEffect(() => {
        const onClick = (e) => {
            if (!errorsRef.current.contains(e.target)) {
                if (contextErrors === 'active') {
                    setContextErrors('')
                    setTriangleErrors('')
                }
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, [contextErrors]);

    const changeTitle = (value) => {
        if (value) {
            setErrorsCurrent(value)
        }
    }
    return (
        <li ref={errorsRef} className="list-header__filters-item" onClick={toggleContextErrors}>
            {errorsCurrent}
            <img src={contextImg} alt="context" className={`list-header__filters-icon ${triangleErrors}`} />
            <div ref={errorsRef} className={`filters-item__context-errors ${contextErrors}`}>
                <div onClick={() => { changeTitle('Все ошибки') }} className="filters-item__context-field filters-item__context-errors_active">
                    Все ошибки
                </div>
                <div onClick={() => { changeTitle('Приветствие') }} className="filters-item__context-field">
                    Приветствие
                </div>
                <div onClick={() => { changeTitle('Имя') }} className="filters-item__context-field">
                    Имя
                </div>
                <div onClick={() => { changeTitle('Цена') }} className="filters-item__context-field">
                    Цена
                </div>
                <div onClick={() => { changeTitle('Скидка') }} className="filters-item__context-field">
                    Скидка
                </div>
                <div onClick={() => { changeTitle('Предзаказ') }} className="filters-item__context-field">
                    Предзаказ
                </div>
                <div onClick={() => { changeTitle('Благодарность') }} className="filters-item__context-field">
                    Благодарность
                </div>
                <div onClick={() => { changeTitle('Стоп слова') }} className="filters-item__context-field">
                    Стоп слова
                </div>
            </div>
        </li>
    )
}

export default ErrorsFilter