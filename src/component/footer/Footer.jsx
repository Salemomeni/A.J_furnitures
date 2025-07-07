import React from 'react'
import './footer.css'
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
    return (
        <div className='footerCon'>
            <div className='footer container'>
                <h3 className='footer-brand'>A.J Fornitures</h3>

                <div className='more'>
                    <div>
                        <h5>More</h5>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </div>
                    <div className=''>
                        <h5>Collections</h5>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </div>
                    <div className='about'>
                        <h5>About</h5>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </div>
                </div>

                <div className='newsletter'>
                    <h5>Subscribe To Newsletter</h5>
                    <Form>
                        <Row className='g-2'>
                            <Col xs={12} sm={8}>
                                <Form.Control
                                    type="email"
                                    placeholder="User@gmail.com"
                                    className="w-100"
                                />
                            </Col>
                            <Col xs={12} sm={4}>
                                <Button type="submit" className="w-100">
                                    <FontAwesomeIcon icon={faStar} /> Subscribe
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Footer;
