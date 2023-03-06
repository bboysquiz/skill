import React, { useState, useEffect, useRef } from 'react'
import contextImg from '../../../assets/context.svg'

const AssesmentsFilter = () => {
    const [contextAssesments, setContextAssesments] = useState('')
    const [triangleAssesments, setTriangleAssesments] = useState('')
    const [assesmentsCurrent, setAssesmentsCurrent] = useState('Все оценки')

    const toggleContextAssesments = () => {
        if (contextAssesments === '') {
            setContextAssesments('active')
            setTriangleAssesments('list-header__filters-icon_active')
        } else {
            setContextAssesments('')
            setTriangleAssesments('')
        }
    }
    const assesmentsRef = useRef(null)

    useEffect(() => {
        const onClick = (e) => {
            if (!assesmentsRef.current.contains(e.target)) {
                if (contextAssesments === 'active') {
                    setContextAssesments('')
                    setTriangleAssesments('')
                }
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, [contextAssesments]);

    const changeTitle = (value) => {
        if (value) {
            setAssesmentsCurrent(value)
        }
    }
    return (
        <li ref={assesmentsRef} className="list-header__filters-item" onClick={toggleContextAssesments}>
            {assesmentsCurrent}
            <img src={contextImg} alt="context" className={`list-header__filters-icon ${triangleAssesments}`} />
            <div ref={assesmentsRef} className={`filters-item__context-assesments ${contextAssesments}`}>
                <div onClick={() => { changeTitle('Все оценки') }} className="filters-item__context-field filters-item__context-assesments_active">
                    Все оценки
                </div>
                <div onClick={() => { changeTitle('Распознать') }} className="filters-item__context-field">
                    Распознать
                </div>
                <div onClick={() => { changeTitle('Скрипт не использован') }} className="filters-item__context-field">
                    Скрипт не использован
                </div>
                <div onClick={() => { changeTitle('Плохо') }} className="filters-item__context-field">
                    <div className="filters-item__context-field-assesments_bad">Плохо</div>
                </div>
                <div onClick={() => { changeTitle('Хорошо') }} className="filters-item__context-field">
                    <div className="filters-item__context-field-assesments_good">Хорошо</div>
                </div>
                <div onClick={() => { changeTitle('Отлично') }} className="filters-item__context-field">
                    <div className="filters-item__context-field-assesments_perfect">Отлично</div>
                </div>
            </div>
        </li>
    )
}

export default AssesmentsFilter