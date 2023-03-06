import React, { useState, useEffect, useRef } from 'react'
import contextImg from '../../../assets/context.svg'

const SourcesFilter = () => {
    const [sourcesCurrent, setSourcesCurrent] = useState('Все источники')
    const [contextSources, setContextSources] = useState('')
    const [triangleSources, setTriangleSources] = useState('')

    const toggleContextSources = () => {
        if (contextSources === '') {
            setContextSources('active')
            setTriangleSources('list-header__filters-icon_active')
        } else {
            setContextSources('')
            setTriangleSources('')
        }
    }
    const sourcesRef = useRef(null)

    useEffect(() => {
        const onClick = (e) => {
            if (!sourcesRef.current.contains(e.target)) {
                if (contextSources === 'active') {
                    setContextSources('')
                    setTriangleSources('')
                }
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, [contextSources]);

    const changeTitle = (value) => {
        if (value) {
            setSourcesCurrent(value)
        }
    }
    return (
        <li ref={sourcesRef} className="list-header__filters-item" onClick={toggleContextSources}>
            {sourcesCurrent}
            <img src={contextImg} alt="context" className={`list-header__filters-icon ${triangleSources}`} />
            <div ref={sourcesRef} className={`filters-item__context-sources ${contextSources}`}>
                <div onClick={() => { changeTitle('Все источники') }} className="filters-item__context-field filters-item__context-sources_active">
                    Все источники
                </div>
                <div onClick={() => { changeTitle('Нет данных') }} className="filters-item__context-field">
                    Нет данных
                </div>
            </div>
        </li>
    )
}

export default SourcesFilter