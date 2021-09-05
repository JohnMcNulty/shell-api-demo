import React, { useState, useEffect } from 'react';

import EnergyHeader from './EnergyHeader';
import EnergyControlPanel from './EnergyControlPanel';
import EnergyChart from './EnergyChart';
import { requestType } from '../helpers/constants';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const EnergyMain = () => {

  const [activeRequest, setActiveRequest] = useState()
  const [chartData, setChartData] = useState([])

  // button click on child component
  const onClick = (idx) => {
    const selected = requestType.find(t => t.index === idx)
    setActiveRequest(selected)
  }

  // hook to fetch new data when request type changes (i.e. user clicks button)
  useEffect(() => {
    if (activeRequest) {
      fetch(`/api/${activeRequest.value}`)
        .then((res) => res.json())
        .then((json) => {
          setChartData(json);
        })
    }
  }, [activeRequest])

  return (
    <div>
      <EnergyHeader />

      <Container fluid>
        <Row>
          <Col className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
            <EnergyControlPanel onClick={onClick} activeRequest={activeRequest} />
            <EnergyChart chartData={chartData} activeRequest={activeRequest} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default EnergyMain;