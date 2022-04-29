import React, { useEffect, useState } from 'react'
import { Typography, Divider, Input, Collapse, Checkbox, DatePicker  } from 'antd';
export default function Filter({
  data,
  setSearchData
}) {
  const { Title } = Typography;
  const { Panel } = Collapse;
  const { Search } = Input;
  const [search, setSearch] = useState('');
  const onSearch =(e)=>{
    setSearch(e.target.value)
  }
  useEffect(()=>{
    let value = search?.toLowerCase();
    let result = [];
    if( value === '' ) {
      setSearchData(data);
    }else {
      result = data?.map((e)=> e).filter((item) => {
        return item?.pname?.toLowerCase().search(value) !== -1;
      });
      setSearchData(result);
    }
  },[data, search, setSearchData])
  return(
    <div className='border'>
      <Title 
        level={3} 
        className='text-center mt-3'
      >
        FILTERS
      </Title>
      <Divider />
      <div className='px-1'>
        <Search 
          placeholder="input search text" 
          onChange={onSearch} 
          enterButton 
          size="large"
        />
      </div>
      <div className='mt-2'>
        <Collapse>
          <Panel header="Departments">
            <p><Checkbox>Panchakarma</Checkbox></p>
            <p><Checkbox>Shalya Tantra</Checkbox></p>
            <p><Checkbox>Kayachikitsa</Checkbox></p>
            <p><Checkbox>Shalya Tantra - Eye</Checkbox></p>
          </Panel>
        </Collapse>
        <Collapse>
          <Panel header="Doctors">
            <p><Checkbox>Dr. Harsha</Checkbox></p>
            <p><Checkbox>Dr. Doshi</Checkbox></p>
            <p><Checkbox>Dr. Tyrion</Checkbox></p>
            <p><Checkbox>Dr. Jamee</Checkbox></p>
          </Panel>
        </Collapse>
        <Collapse>
          <Panel header="Diagnosis">
            <p><Checkbox>Example 1</Checkbox></p>
            <p><Checkbox>Example 1</Checkbox></p>
            <p><Checkbox>Example 1</Checkbox></p>
            <p><Checkbox>Example 1</Checkbox></p>
          </Panel>
        </Collapse>
        <Collapse>
          <Panel header="Date Filters">
            <DatePicker />
          </Panel>
        </Collapse>
      </div>
      
    </div>
  )
}