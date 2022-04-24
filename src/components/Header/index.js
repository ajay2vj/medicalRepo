import { Typography } from 'antd'
import React from 'react'

export default function Header() {
  const { Title } = Typography
  return(
    <div className='text-center'>
      <Title
        level={2}
      >
        DHARMA AYURVEDHA MEDICAL COLLEGE HOSPITAL
      </Title>
      <p>B48, G.W.T Road Opp Rajiv Gandhi Memorial, Sriperumbudur, Kanchipuram District, Tamil Nadu, India</p>
    </div>
  )
}