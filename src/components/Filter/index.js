import React from 'react'
import { Typography, Divider, Radio, Collapse, Checkbox  } from 'antd';
export default function Filter() {
  const { Title } = Typography;
  const { Panel } = Collapse;
  return(
    <div className='border'>
      <Title 
        level={3} 
        className='text-center mt-3'
      >
        FILTERS
      </Title>
      <Divider />
      <Title 
        level={5}
        className='px-2'
      >
        GENDER
      </Title>
      <hr className='mt-1 mb-1' />
      <div className='ml-12 mt-3'>
        <Radio.Group onChange={()=>{}} style={{ marginBottom: 10 }}>
          <Radio.Button value="top">Male</Radio.Button>
          <Radio.Button value="left">Women</Radio.Button>
        </Radio.Group>
      </div>
      <div className='mt-2'>
        <Collapse>
          <Panel header="This is panel header 1">
            <p><Checkbox>Example 1</Checkbox></p>
            <p><Checkbox>Example 1</Checkbox></p>
            <p><Checkbox>Example 1</Checkbox></p>
            <p><Checkbox>Example 1</Checkbox></p>
          </Panel>
        </Collapse>
        <Collapse>
          <Panel header="This is panel header 2">
            <p><Checkbox>Example 1</Checkbox></p>
            <p><Checkbox>Example 1</Checkbox></p>
            <p><Checkbox>Example 1</Checkbox></p>
            <p><Checkbox>Example 1</Checkbox></p>
          </Panel>
        </Collapse>
        <Collapse>
          <Panel header="This is panel header 1">
            <p><Checkbox>Example 1</Checkbox></p>
            <p><Checkbox>Example 1</Checkbox></p>
            <p><Checkbox>Example 1</Checkbox></p>
            <p><Checkbox>Example 1</Checkbox></p>
          </Panel>
        </Collapse>
      </div>
      
    </div>
  )
}