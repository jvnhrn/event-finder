import React from 'react'; 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'; 
import { Container, Row } from 'react-bootstrap';
import userProfilTest from './userProfilTest.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProfilPage.css';
import Yoga from '../Categories/Yoga/hotpodyoga.png';

function ProfilPage (){

    return(
        <Container>
            <Row>
                {userProfilTest.map((loggedinUser) => {

                    return(

                        /* <Card id="userProfil"key={loggedinUser.userid}> 
                        <Card.Img src={loggedinUser.img}/> */

                        <Card key={loggedinUser.userid}>
                            <Card.Img src={Yoga}/>
                            <Card.Body>
                                <Card.Title>Hallo</Card.Title>
                                <Card.Title>{loggedinUser.firstname} {loggedinUser.lastname}</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>
                                            Email address
                                        </li>
                                        <li>
                                            Password
                                        </li>
                                        <li>
                                            I dont what to do 
                                        </li>
                                    </ul>
                                </Card.Text>
                                <Button variant="primary">checkout something??</Button>
                            </Card.Body>

                        </Card>
                )})}

            </Row>
            <Row>
                <Button>Passed Events</Button>
                <Button>Upcoming Events</Button>
                <Card>

                </Card>
            </Row>
            
        </Container>
    )
}

export default ProfilPage; 