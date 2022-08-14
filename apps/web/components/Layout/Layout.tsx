import { FC, PropsWithChildren } from 'react';
import { useSession } from 'next-auth/react';
import { AppShell } from '@mantine/core';
import { Header } from '@components/Header';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { status } = useSession();
  const isSessionLoading = status === 'loading';

  return (
    <AppShell
      padding="md"
      header={<Header />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.white,
        },
      })}
    >
      {children}
    </AppShell>
  );
};

export default Layout;
