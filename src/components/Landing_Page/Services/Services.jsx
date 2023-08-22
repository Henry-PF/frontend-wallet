import styles from './Services.module.css';
import { Row, Col, Card, Button } from "react-bootstrap";
import { financialProducts } from './data';

const Services = () => {
    return (
      <div className={styles.servicesContainer}>
        <h2>Planes Premium</h2>
        <span style={{margin:'20px'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad molestiae
          debitis ut.
        </span>
        <br />
        <Row className={`g-4 ${styles.cardRow}`}>
          {financialProducts.map((product, idx) => (
          <Col key={idx} xs={12} md={4} className={styles.cardCol}>
          <Card  className={styles.card} style={{ background: idx === 1 ? 'linear-gradient(to top, #458eec, #1fccd3)' : 'linear-gradient(to top, #cccece,  #f5f8f8)' }}>

                <Card.Body>
                  <Card.Title className={styles.cardTitle}>
                    {product.TITLE}
                  </Card.Title>
                  <div className={styles.divider}></div>
                  <Card.Text
                    className={`${styles.cardTitle} ${styles.cardText}`}
                  >
                    <p>
                      <strong>{product.PRICE}</strong>
                    </p>
                    <span
                      style={{
                        fontSize: "12px",
                        marginLeft: "4px",
                        padding: "2px",
                      }}
                    >
                      por mes
                    </span>
                  </Card.Text>
                  <br />
                  <div className={styles.descriptionContainer}>
                    {product.DESCRIPCION}
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

export default Services