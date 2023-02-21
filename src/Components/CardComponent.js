import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { Zoom } from 'react-reveal';
const CardComponent = ({cardData}) => {
  return (
    <Row>
  {cardData.length>=1? (
   cardData.map((card)=>{
    return(
      <Col sm="12" md="6" lg="3" className='my-2' key={card.id}>
      {/*from react revael search on it */}
      <Zoom>
      <Card className='card-content' key={card.id}>
      <Card.Img className='card-img' variant="top" src={card.img}  />
      <Card.Body>
          <Card.Title className='card-text'>
              {card.title} 
              <p className='price my-2'>{card.price} جنيه</p>
          </Card.Title>
        <Card.Text className='card-text'>
          {card.discription}
        </Card.Text>
      </Card.Body>
    </Card>
    </Zoom>
      </Col>
    )
   })
   ):<h2>لا يوجد بيانات</h2> }
   </Row>
  )
}
export default CardComponent;
