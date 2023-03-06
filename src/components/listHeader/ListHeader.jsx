import React from 'react'
import './listHeader.sass'
import TypeFilter from '../filters/typeFilter/TypeFilter'
import CollaboratorsFilter from '../filters/collaboratorsFilter/CollaboratorsFilter'
import CallsFilter from '../filters/callsFilter/CallsFilter'
import SourcesFilter from '../filters/sourcesFilter/SourcesFilter'
import AssesmentsFilter from '../filters/assesmentsFilter/AssesmentsFilter'
import ErrorsFilter from '../filters/errorsFilter/ErrorsFilter'
import DateFilter from '../filters/dateFilter/DateFilter'
import BalanceButton from '../balanceButton/BalanceButton'
import Search from '../search/Search'

const ListHeader = () => {
    return (
        <div className='list-header'>
            <div className="list-header__container">
                <div className="list-header__main-data-wrapper">
                    <div className="list-header__main-data">
                        <BalanceButton />
                        <DateFilter />
                    </div>
                </div>
                <Search />
                <ul className="list-header__filters-list">
                    <TypeFilter />
                    <CollaboratorsFilter />
                    <CallsFilter />
                    <SourcesFilter />
                    <AssesmentsFilter />
                    <ErrorsFilter />
                </ul>
            </div>
        </div>
    )
}

export default ListHeader