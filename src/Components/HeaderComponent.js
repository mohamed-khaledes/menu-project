import React from 'react'
import { Row ,Col } from 'react-bootstrap';
const HeaderComponent = () => {
  return (
    <Row className='my-5'>
        <Col sm="12" className='justify-content-center text-center'>
        <div className='title-content'>
        <h1 className='logo'>قائمة الطعام</h1>
        </div>
        <div className='d-flex justify-content-center text-center'>
            <p className='underLine'></p>
        </div>
        </Col>
    </Row>
  )
}
export default HeaderComponent;