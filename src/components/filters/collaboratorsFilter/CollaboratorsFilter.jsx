import React, { useState, useEffect, useRef } from 'react'
import contextImg from '../../../assets/context.svg'

const CollaboratorsFilter = () => {
    const [collaboratorsCurrent, setCollaboratorsCurrent] = useState('Все сотрудники')
    const [contextCollaborators, setContextCollaborators] = useState('')
    const [triangleCollaborators, setTriangleCollaborators] = useState('')

    const toggleContextCollaborators = () => {
        if (contextCollaborators === '') {
            setContextCollaborators('active')
            setTriangleCollaborators('list-header__filters-icon_active')
        } else {
            setContextCollaborators('')
            setTriangleCollaborators('')
        }
    }

    const collaboratorsRef = useRef(null)

    useEffect(() => {
        const onClick = (e) => {
            if (!collaboratorsRef.current.contains(e.target)) {
                if (contextCollaborators === 'active') {
                    setContextCollaborators('')
                    setTriangleCollaborators('')
                }
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, [contextCollaborators]);

    const changeTitle = (value) => {
        if (value) {
            setCollaboratorsCurrent(value)
        }
    }
    return (
        <li ref={collaboratorsRef} className="list-header__filters-item" onClick={toggleContextCollaborators}>
            {collaboratorsCurrent}
            <img src={contextImg} alt="context" className={`list-header__filters-icon ${triangleCollaborators}`} />
            <div ref={collaboratorsRef} className={`filters-item__context-collaborators ${contextCollaborators}`}>
                <div onClick={() => { changeTitle('Все сотрудники') }} className="filters-item__context-field">Все сотрудники</div>
                <div onClick={() => { changeTitle('Константин К.') }} className="filters-item__context-field">
                    <img src="https://lk.skilla.ru/img/noavatar.jpg" alt="avatar" className="filters-item__context-img" />
                    Константин К.
                </div>
            </div>
        </li>
    )
}

export default CollaboratorsFilter