import React from 'react';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import styles from './bnb.module.css';
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
                    <Card className={styles.cards + " text-center"}>
                        <Card.Body>
                            <h2 className={styles.h2}>Access Request</h2>
                            <p className={styles.p2}>Do you wish to connect Ankr Earn to your wallet?</p>
                            <Button className={styles.accessBtn + " col-md-12"}>Grant Access</Button>
                            <p className={styles.greyTxt}>Click and select a wallet to connect</p>
                            <p className={styles.boldTxt}>Ensure your wallet is connected to the following networks:</p>
                            <button className={styles.buttons}>
                                <img src='/img.png' width={48}></img>
                                <p className={styles.m2}>Binance</p>
                                <p>Smart Chain</p>
                            </button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Stake;