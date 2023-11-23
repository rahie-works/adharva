import React from 'react';
import '../../../App.css';
import Cards from '../../cards/Cards'
import {SERVICE_CARDS_DATA, SERVICES_TITLE} from './ServicesConstant'

export default function Services() {

  const SectionData = {
    section: "SERVICES",
    title: SERVICES_TITLE,
  }
  return (
    <Cards cardData={SERVICE_CARDS_DATA} sectionData={SectionData}/>
  )
}