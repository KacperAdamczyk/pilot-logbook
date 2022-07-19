import { FC } from 'react';
import { Card, Col, Container, Row, Text } from '@nextui-org/react';
import { UserProfile } from '@components/UserProfile';

const Navbar: FC = () => {
  return (
    <Card
      variant="bordered"
      css={{
        btrr: 0,
        btlr: 0,
        bgColor: '$gray100',
      }}
    >
      <Card.Body>
        <Container fluid display="flex">
          <Row>
            <Col>
              <Text h3>Logbook</Text>
            </Col>
            <Col>
              <Row justify="flex-end">
                <UserProfile />
              </Row>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default Navbar;
