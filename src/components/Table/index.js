import React from 'react'
import { Table } from 'antd';
import { columns, data } from '../../mock';
export default function TableComponent(){
  
  return(
    <div>
      <Table 
        columns={columns} 
        dataSource={data} 
      />
    </div>
  )
}