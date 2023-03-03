import React from 'react'
import './sidebar.sass'
import logoImg from '../../assets/logo.svg' 
import totalImg from '../../assets/total.svg' 
import ordersImg from '../../assets/orders.svg' 
import messagesImg from '../../assets/messages.svg' 
import callsImg from '../../assets/calls.svg' 
import clientsImg from '../../assets/clients.svg' 
import documentsImg from '../../assets/documents.svg' 
import workersImg from '../../assets/workers.svg' 
import reportsImg from '../../assets/reports.svg' 
import knowledgeBaseImg from '../../assets/knowledge-base.svg' 
import settingsImg from '../../assets/settings.svg' 
import paymentImg from '../../assets/payment.svg'
import addImg from '../../assets/add.svg'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar__container">
            <img src={logoImg} alt="logo" className="sidebar__logo" height={28} width={109} />

            <nav className="sidebar__nav">
                <ul className="sidebar__menu-list">
                    <li className="sidebar__menu-item">
                        <img src={totalImg} alt="total" className="sidebar__menu-icon" />
                        <span className="sidebar__menu-title">Итоги</span>
                    </li>
                    <li className="sidebar__menu-item">
                        <img src={ordersImg} alt="orders" className="sidebar__menu-icon" />
                        <span className="sidebar__menu-title">Заказы</span>
                    </li>
                    <li className="sidebar__menu-item">
                        <img src={messagesImg} alt="messages" className="sidebar__menu-icon" />
                        <span className="sidebar__menu-title">Сообщения</span>
                    </li>
                    <li className="sidebar__menu-item sidebar__menu-item_active">
                        <img src={callsImg} alt="calls" className="sidebar__menu-icon" />
                        <span className="sidebar__menu-title">Звонки</span>
                    </li>
                    <li className="sidebar__menu-item">
                        <img src={clientsImg} alt="clients" className="sidebar__menu-icon" />
                        <span className="sidebar__menu-title">Контрагенты</span>
                    </li>
                    <li className="sidebar__menu-item">
                        <img src={documentsImg} alt="documents" className="sidebar__menu-icon" />
                        <span className="sidebar__menu-title">Документы</span>
                    </li>
                    <li className="sidebar__menu-item">
                        <img src={workersImg} alt="workers" className="sidebar__menu-icon" />
                        <span className="sidebar__menu-title">Исполнители</span>
                    </li>
                    <li className="sidebar__menu-item">
                        <img src={reportsImg} alt="reports" className="sidebar__menu-icon" />
                        <span className="sidebar__menu-title">Отчеты</span>
                    </li>
                    <li className="sidebar__menu-item">
                        <img src={knowledgeBaseImg} alt="knowledgeBase" className="sidebar__menu-icon" />
                        <span className="sidebar__menu-title">База знаний</span>
                    </li>
                    <li className="sidebar__menu-item">
                        <img src={settingsImg} alt="setting" className="sidebar__menu-icon" />
                        <span className="sidebar__menu-title">Настройки</span>
                    </li>
                </ul>
            </nav>

            <div className="sidebar__buttons-wrapper">

                <button className="sidebar__button sidebar__button-add">
                    Добавить заказ 
                    <img src={paymentImg} alt="add" className="sidebar__button-icon" />
                </button>
                
                <button className="sidebar__button sidebar__button-pay">
                    Оплата 
                    <img src={addImg} alt="add" className="sidebar__button-icon" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar