import { FC } from 'react';
import { Container, Link, Row } from '@nextui-org/react';
import NextLink from 'next/link';

const Navigation: FC = () => {
  return (
    <Container
      css={{
        bgColor: '$blue500',
      }}
      fluid
      justify="center"
      display="flex"
    >
      <Row justify="center">
        <NextLink href="/docs/components/button">
          <Link block color="secondary">
            Go to Button
          </Link>
        </NextLink>
      </Row>
    </Container>
  );
};

export default Navigation;
