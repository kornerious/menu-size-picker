import React from 'react'
import { Layout } from 'antd'
import './CatalogHeader.scss'
import logo from '../../assets/icon/logo.png'
const { Header } = Layout

const CatalogHeader = () => {
  return (
    <Header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" />
      </div>
    </Header>
  )
}

export default CatalogHeader
