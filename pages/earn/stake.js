import React from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import styles from './stake.module.css';
import Header from '../layout/Header';

import { useRouter } from 'next/router';

const Stake = () => {
    const router = useRouter();
    const hadleClick = (e) => {
        e.preventDefault();
        router.push("/earn/bnb");
    }
    return (
        <Container>
            <Header />
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <Card className={styles.cardBox}>
                        <Card.Body>
                            <img src="/img.PNG"></img>
                            <Card.Text style={{ fontSize: 25, fontWeight: "bold" }}>
                                Polygon (MATIC)
                            </Card.Text>
                            <div className={styles.hideTxt}>
                                <p className={styles.context}>
                                    APY
                                </p>
                                <p className={styles.percent}>
                                    8.51%
                                </p>
                            </div>
                            <Button className={styles.BtnStake} onClick={hadleClick} variant="primary" style={{ width: "100%" }}>Stake</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card className={styles.cardBox}>
                        <Card.Body>
                            <img src="/img.PNG"></img>
                            <Card.Text style={{ fontSize: 25, fontWeight: "bold" }}>
                                Polygon (MATIC)
                            </Card.Text>
                            <div className={styles.hideTxt}>
                                <p className={styles.context}>
                                    APY
                                </p>
                                <p className={styles.percent}>
                                    8.51%
                                </p>
                            </div>
                            <Button className={styles.BtnStake} onClick={hadleClick} variant="primary" style={{ width: "100%" }}>Stake</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card className={styles.cardBox}>
                        <Card.Body>
                            <img src="/img.PNG"></img>
                            <Card.Text style={{ fontSize: 25, fontWeight: "bold" }}>
                                Polygon (MATIC)
                            </Card.Text>
                            <div className={styles.hideTxt}>
                                <p className={styles.context}>
                                    APY
                                </p>
                                <p className={styles.percent}>
                                    8.51%
                                </p>
                            </div>
                            <Button className={styles.BtnStake} onClick={hadleClick} variant="primary" style={{ width: "100%" }}>Stake</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card className={styles.cardBox}>
                        <Card.Body>
                            <img src="/img.PNG"></img>
                            <Card.Text style={{ fontSize: 25, fontWeight: "bold" }}>
                                Polygon (MATIC)
                            </Card.Text>
                            <div className={styles.hideTxt}>
                                <p className={styles.context}>
                                    APY
                                </p>
                                <p className={styles.percent}>
                                    8.51%
                                </p>
                            </div>
                            <Button className={styles.BtnStake} onClick={hadleClick} variant="primary" style={{ width: "100%" }}>Stake</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card className={styles.cardBox}>
                        <Card.Body>
                            <img src="/img.PNG"></img>
                            <Card.Text style={{ fontSize: 25, fontWeight: "bold" }}>
                                Polygon (MATIC)
                            </Card.Text>
                            <div className={styles.hideTxt}>
                                <p className={styles.context}>
                                    APY
                                </p>
                                <p className={styles.percent}>
                                    8.51%
                                </p>
                            </div>
                            <Button className={styles.BtnStake} onClick={hadleClick} variant="primary" style={{ width: "100%" }}>Stake</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card className={styles.cardBox}>
                        <Card.Body>
                            <img src="/img.PNG"></img>
                            <Card.Text style={{ fontSize: 25, fontWeight: "bold" }}>
                                Polygon (MATIC)
                            </Card.Text>
                            <div className={styles.hideTxt}>
                                <p className={styles.context}>
                                    APY
                                </p>
                                <p className={styles.percent}>
                                    8.51%
                                </p>
                            </div>
                            <Button className={styles.BtnStake} onClick={hadleClick} variant="primary" style={{ width: "100%" }}>Stake</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={4}>
                    <Card className={styles.cardBox}>
                        <Card.Body>
                            <img src="/img.PNG"></img>
                            <Card.Text style={{ fontSize: 25, fontWeight: "bold" }}>
                                Polygon (MATIC)
                            </Card.Text>
                            <a href='#' onClick={hadleClick} className={styles.txtVersion}>Stake at old version</a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Stake;