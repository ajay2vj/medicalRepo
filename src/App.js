import React, {useState} from 'react'
import 'antd/dist/antd.min.css';
import './App.css'
import { data } from './mock';
import { Col, Row, Table, Button } from 'antd';
import Filter from './components/Filter';
import Header from './components/Header';
import ConfirmModal from './components/Modal'
import TabComponent from './components/Tabs';
function App() {
  const [modal, setModal] = useState(false)
  const [tabActive, setTabActive] = useState('1');
  const clickModal = ()=>{
    setModal(true)
  }
  const columns = [
    {
      title: 'Presc',
      dataIndex: 'presc',
      key: 'presc',
      render: text => <Button>{text}</Button>,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'OP No.',
      dataIndex: 'opno',
      key: 'opno'
    },
    {
      title: 'Patient Name',
      key: 'pname',
      dataIndex: 'pname',
    },
    {
      title: 'Age',
      key: 'age',
      dataIndex: 'age'
    },
    {
      title: 'Sex',
      key: 'sex',
      dataIndex: 'sex'
    },
    {
      title: 'New/Old',
      key: 'new_old',
      dataIndex: 'new_old',
      render: newOld => (
        <>
          {newOld.map((item, index) => {
             let color = item === 'New' ? '#02b802' : '#faaa55';
            return (
              <span
                key={index}
                style={{
                background: color, 
                padding: '0px 3px 0px 3px'
                }}
                className='text-white'
              >
                {item}
              </span>
            );
          })}
        </>
      ),
    },
    {
      title: 'Department',
      key: 'department',
      dataIndex: 'department'
    },
    {
      title: 'Diagnosis',
      key: 'diagnosis',
      dataIndex: 'diagnosis'
    },
    {
      title: 'Doctor',
      key: 'doctor',
      dataIndex: 'doctor'
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex: 'action',
      render: textButton => (
        <>
          <ConfirmModal
            showModal={modal}
            setShowModal={setModal}
          />
          <Button onClick={()=> clickModal()}>{textButton}</Button>
        </>
      )
    },
  ];
  return (
    <div className='px-5 pt-5'>
      <Row>
        <Col span={24}>
          <Header />        
        </Col>
        <Col span={24}>
          <TabComponent 
            setTab={setTabActive}
          />        
        </Col>
      </Row>
      {tabActive === '1' && (
        <Row>
          <Col span={4}>
            <Filter />
          </Col>
          <Col span={20}>
            <Table
              columns={columns}
              dataSource={data}
            />
          </Col>
        </Row>
      )}
      
    </div>
  );
}

export default App;
