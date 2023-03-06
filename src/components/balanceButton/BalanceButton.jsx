import React from 'react'
import balanceImg from '../../assets/balance.svg'

const BalanceButton = () => {
    return (
        <button className="list-header__balance-button">
            Баланс:
            <span className="list-header__balance">272 ₽</span>
            <img src={balanceImg} alt="balance" className="list-header__balance-icon" />
        </button>
    )
}

export default BalanceButton