import React from 'react'
import Herosection from '../Components/Herosection'
import Main1st from '../Components/Main1st'
import Main2nd from '../Components/Main2nd'
import Updates from '../Components/Updates'
import { useParams } from 'react-router-dom'

export default function Index() {
  const {id}=useParams()
  return (
    <>
    <h2>{id}</h2>
      <Herosection />
      <Main1st />
      <Main2nd />
    </>
  )
}
