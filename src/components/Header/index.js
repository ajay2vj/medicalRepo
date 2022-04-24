import { Col, Row, Typography } from 'antd'
import React from 'react'
import logo from '../../assets/img/placeholder-image.png';
import './style.css';
export default function Header() {
  const { Title } = Typography
  return(
    <div className='text-center'>
      <Row>
        <Col span={6}>
          <img src={logo} alt='logo' className='image-place'/>
        </Col>
        <Col span={13}>
          <Title
            level={2}
            style={{color: '#ab2415'}}
          >
            ANNA GOWRI AYURVEDHA MEDICAL COLLEGE HOSPITAL
          </Title>
          <p>B48, G.W.T Road Opp Rajiv Gandhi Memorial, Sriperumbudur, Kanchipuram District, Tamil Nadu, India</p>
        </Col>
        <Col span={5} className='second-logo'>
          <img src={logo} alt='logo' className='image-place'/>
        </Col>
      </Row>
      
    </div>
  )
}