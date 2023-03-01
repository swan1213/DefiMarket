import React from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import styles from './chain.module.css';
import Header from '../layout/Header';

import { useRouter } from 'next/router';

const Stake = () => {
    const router = useRouter();
    const hadleClick = (e) => {
        e.preventDefault();
        router.push("/");
    }
    return (
        <Container>
            <Header />
            <Row className={styles.m5 + " justify-content-center"}>
                <Col className={styles.cardBox}>
                    <Card>
                        <Card.Header style={{ height: 60, marginTop: 20 }}>
                            <Row>
                                <Col sm={3}>
                                    <a style={{ marginLeft: 20 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#565A69" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="NavigationTabs__StyledArrowLeft-sc-17q0q28-4 fnSvAt"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                                    </a>
                                </Col>
                                <Col sm={6} className='text-center'>
                                    <h5>Add Liquidity</h5>
                                </Col>
                                <Col sm={3} className='text-center'>
                                    <a style={{ marginRight: 20, color: "#1c79fc" }}>
                                        Clear All
                                    </a>
                                    <a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="Settings__StyledMenuIcon-sc-fxnuer-0 llccoy"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                    </a>
                                </Col>
                            </Row>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <h6>Select Pair</h6>
                                    <Row>
                                        <Col>
                                            <Button className={styles.btn1} style={{ width: "100%" }}>Edit</Button>
                                        </Col>
                                        <Col>
                                            <Button className={styles.btn2} style={{ width: "100%" }}>Select a token</Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>Fee tier</p>
                                            <span>The % you will earn in fees</span>
                                        </Col>
                                        <Col>
                                            <p>Edit</p>
                                        </Col>
                                    </Row>
                                    <h6>Deposit Amounts</h6>
                                    <Row>
                                        <Col>
                                            <p>0.00</p>
                                        </Col>
                                        <Col>
                                            <p>Edit</p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>0.00</p>
                                        </Col>
                                        <Col>
                                            <p>Select a token</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Stake;