import { FC, PropsWithChildren } from 'react';
import { Container, Loading, Row } from '@nextui-org/react';
import { Navbar } from '@components/Navbar';
import { useSession } from 'next-auth/react';
import { Navigation } from '@components/Navigation';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { status } = useSession();
  const isSessionLoading = status === 'loading';

  return (
    <Container
      fluid
      css={{
        p: 0,
        bgColor: '$gray50',
        minHeight: '100vh',
      }}
    >
      <Row css={{ bgColor: '$blue600' }}>
        <Navbar />
      </Row>
      <Row>
        <Navigation />
      </Row>
      <Row>
        <Container>
          {isSessionLoading ? <Loading size="xl" /> : children}
        </Container>
      </Row>
    </Container>
  );
};

export default Layout;
