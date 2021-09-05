import React from 'react';

import EnergyHeader from './EnergyHeader';
import EnergyControlPanel from './EnergyControlPanel';
import EnergyChart from './EnergyChart';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function EnergyMain() {
    return (

        <div>

            <EnergyHeader />
            <hr />

            <Container fluid>
                <Row>

                    <Col className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
                        <EnergyControlPanel />
                        <EnergyChart />

                    </Col>
                </Row>
            </Container>



        </div>


    )
}

export default EnergyMain;