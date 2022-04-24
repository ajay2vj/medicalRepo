import React from 'react'
import { Tabs } from 'antd';
export default function TabComponent({setTab}){

  const { TabPane } = Tabs;
  const onchangeTab = (key)=> {
    setTab(key)
  }
  return(
    <Tabs type="card" onChange={onchangeTab}>
      <TabPane tab="Home" key="1">
        
      </TabPane>
      <TabPane tab="Out Patient" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="In Patient" key="3">
        Content of Tab Pane 3
      </TabPane>
      <TabPane tab="Pharmacy" key="4">
        Content of Tab Pane 4
      </TabPane>
      <TabPane tab="Laboratory" key="5">
        Content of Tab Pane 5
      </TabPane>
      <TabPane tab="Diet" key="6">
        Content of Tab Pane 6
      </TabPane>
      <TabPane tab="Reports" key="7">
        Content of Tab Pane 7
      </TabPane>
      <TabPane tab="Statistics" key="8">
        Content of Tab Pane 8
      </TabPane>
      <TabPane tab="Settings" key="9">
        Content of Tab Pane 9
      </TabPane>
    </Tabs>
  )
}