import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
import CatalogHeader from '../../components/CatalogHeader/CatalogHeader'
import CatalogFilter from '../CatalogFilter/CatalogFilter'
import './App.scss'
import { Layout } from 'antd'

const { Content } = Layout

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout>
          <CatalogHeader />
          <Content id="container">
            <CatalogFilter />
          </Content>
        </Layout>
      </Provider>
    )
  }
}
