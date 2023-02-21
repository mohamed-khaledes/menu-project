import React from 'react'
import { Col, Row } from 'react-bootstrap';

const Category = ({filtring,allCategories}) => {
  // filtring card using categoreis
  const onFilter =(cat)=>{
    filtring(cat)
  }
  return (
    <Row className='my-5'>
        <Col className='justify-content-center'>
          {/*diplay btns of categories automaticly depends of categories in data */}
          {
            allCategories.length>=1?(allCategories.map((btn)=>{
              return (
                <button key={Math.random()} onClick={()=>onFilter(btn)} className='category-btn'>{btn}</button>
              )
            })) : <h4>لا يوجد تصنيفات</h4>
          }
        </Col>
    </Row>
  )
}
export default Category; 