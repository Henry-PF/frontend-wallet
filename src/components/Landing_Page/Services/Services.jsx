import { useEffect } from 'react';
import styles from './Services.module.css';
import { Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, connect, useSelector } from "react-redux";
import { getAllPlanes } from '../../../redux/actions';

const Services = (prop) => {
  const dispatch = useDispatch();
  const plans = useSelector(state => state.plans)
  console.log(plans);

  useEffect(() => {
    dispatch(getAllPlanes());
  }, []);

  return (
    <div className={styles.servicesContainer}>
      <h2>Nuestros Planes</h2>
      <br />
      <Row className={`g-4 ${styles.cardRow}`}>
        {plans.map((product, idx) => (
          <Col key={idx} xs={12} md={4} className={styles.cardCol}>
            <Card className={styles.card} style={{ background: idx === 1 ? 'linear-gradient(to top, #458eec, #1fccd3)' : 'linear-gradient(to top, #cccece,  #f5f8f8)' }}>

              <Card.Body>
                <Card.Title className={styles.cardTitle}>
                  {product.nombre}
                </Card.Title>
                <div className={styles.divider}></div>
                <Card.Text
                  className={`${styles.cardTitle} ${styles.cardText}`}
                >
                  <p>
                    <strong>$ {product.costo}</strong>
                  </p>
                  <span
                    style={{
                      fontSize: "12px",
                      marginLeft: "4px",
                      padding: "2px 10px",
                    }}
                  > POR MES
                  </span>
                </Card.Text>
                <br />
                <div className={styles.descriptionContainer}>
                  {product.planes_detalles[0].contenido}
                </div>
                <div className={styles.buttonSuscribe}>
                  <Button
                    variant="dark"
                    onClick={() => {
                      alert("ingresa a tu cuenta para adquirir el plan");
                    }}
                  >
                    Planificar
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>

    // <div>
    //   <Login/>
    // </div>
  );
};

const mapStateToProps = (state) => {
  return { planes: state.planes };
}
export default connect(mapStateToProps, null)(Services);