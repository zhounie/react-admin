import React, { useState } from 'react'
import { Layout, Menu, Avatar, Breadcrumb } from 'antd'
const { Header, Sider, Content } = Layout
const { SubMenu } = Menu
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined
} from '@ant-design/icons'
import { useHistory, Link } from 'react-router-dom'

import './layout.less'

import { connect } from 'react-redux'
import { pushBreadcrumd } from '../../store/index'
const routes = []

function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={route.path}>{route.breadcrumbName}</Link>
    );
  }
  
function LayoutContent (props) {
    const [collapsed, setCollapsed] = useState(false)
    const history = useHistory()
    const onSelect = ({ item, key }) => {
        let index = routes.findIndex(route => route.breadcrumbName === key)
        if (index !== -1) {
            routes.splice(index, 1)
        }
        routes.push({ path: key, breadcrumbName: key })
        props.pushBreadcrumd(key)
        history.push(key)
    }
    const handleClick = ({ key }) => {
        if (key === 'logout') {
            onLogout()
        }
    }
    const onLogout = () => {
        history.push('/login')
    }
    
    return (
        <Layout className="layout_wrap">
            <Sider className="sider_wrap"  collapsed={collapsed}>
                <div className="logo" />
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['/statistics']}
                    style={{ borderRight: 0 }}
                    onSelect={onSelect}
                >
                    <Menu.Item key="statistics" icon={<PieChartOutlined />}>
                        统计
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                        <Menu.Item key="list">List</Menu.Item>
                        <Menu.Item key="about">About</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout>
                <Header className="header">
                    {
                        React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed)
                        })
                    }
                    <div className="message">
                        <Menu onClick={handleClick} mode="horizontal">
                            <SubMenu title={
                                <Avatar className="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                            }>
                                <Menu.Item key="logout" >Logout</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </div>
                </Header>
                <Content className="content">
                    <Breadcrumb itemRender={itemRender} routes={routes}></Breadcrumb>
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    )
}




const mapStateToProps = (state, ownProps) => {
    return {
        breadcrumd: state.breadcrumd
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        pushBreadcrumd: (path) => {
            dispatch(pushBreadcrumd(path))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LayoutContent)