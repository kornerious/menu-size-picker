import React from 'react'
import { Layout } from 'antd'
import './CatalogHeader.scss'
import Logo from '../../assets/icon/logo.svg'
const { Header } = Layout

const CatalogHeader = () => {
  return (
    <Header className="header">
      <div className="logo">
        <Logo />
      </div>
    </Header>
  )
}

export default CatalogHeader
