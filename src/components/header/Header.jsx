import React from 'react'
import searchImg from '../../assets/search.svg'
import contextImg from '../../assets/context.svg'
import avatarImg from '../../assets/avatar.png'
import './header.sass'

const Header = () => {
  return (
    <header className='header'>
      <div className="header__container">

        <span className="header__date">Среда, 13 окт</span>

        <div className="header__analyst">
          <div className="header__analyst-item">
            <p className="header__analyst-title">
              Новые звонки
              <span className="header__analyst-title_distinct-green"> 20 из 30 шт</span>
            </p>
            <div className="header__analyst-bar-wrapper">
              <div className="header__analyst-bar header__analyst-bar_green"></div>
            </div>
          </div>

          <div className="header__analyst-item">
            <p className="header__analyst-title">
              Качество разговоров
              <span className="header__analyst-title_distinct-yellow"> 40%</span>
            </p>
            <div className="header__analyst-bar-wrapper">
              <div className="header__analyst-bar header__analyst-bar_yellow"></div>
            </div>
          </div>

          <div className="header__analyst-item">
            <p className="header__analyst-title">
              Конверсия в заказ
              <span className="header__analyst-title_distinct-red"> 67%</span>
            </p>
            <div className="header__analyst-bar-wrapper">
              <div className="header__analyst-bar header__analyst-bar_red"></div>
            </div>
          </div>
        </div>

        <img src={searchImg} alt="search" className="header__search-icon" width={16} height={16} />

        <div className="header__name-wrapper">
          <span className="header__name">ИП Сидорова Александра Михайловна</span>
          <img src={contextImg} alt="context" className="header__name-icon" width={12} height={7.41} />
        </div>

        <div className="header__profile">
          <img src={avatarImg} alt="avatar" className="header__photo" />
          <img src={contextImg} alt="context" className="header__icon" />
        </div>
      </div>
    </header>
  )
}

export default Header;