import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CourseDemo = ({project}) => {
    const {balance, picture, name, title} = project
    console.log(project)
    return (
        <div data-aos='zoom-in' className='single-project'>
            <Card className='shadow-lg'>
                <Card.Img style={{width:'80%', height:'300px', margin:'10px auto'}} variant="top" src={picture} />
                <Card.Body>
                    <Card.Title className='text-muted'>{name}</Card.Title>
                    <Card.Text>
                        {title}
                    </Card.Text>
                    <h4><strong>Projcet Price: </strong>{balance}</h4>
                    <Button className='w-50 mx-auto my-3 d-block' variant="outline-danger">Order Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDemo;