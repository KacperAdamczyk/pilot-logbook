import { FC } from 'react';
import {
  Container,
  createStyles,
  Group,
  Header as MantineHeader,
  Title,
} from '@mantine/core';
import { UserMenu } from '@components/UserMenu';
import { Navigation } from '@components/Navigation';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
    }`,
  },
  title: {
    [theme.fn.smallerThan('xs')]: {
      fontSize: '1rem',
    },
  },
}));

const Header: FC = () => {
  const { classes, theme } = useStyles();

  return (
    <MantineHeader height={105} p="xs" className={classes.header}>
      <Container fluid px="xl">
        <Group position="apart" pb={theme.spacing.sm}>
          <Title order={1} className={classes.title}>
            Logbook
          </Title>
          <UserMenu />
        </Group>
      </Container>
      <Container>
        <Navigation />
      </Container>
    </MantineHeader>
  );
};

export default Header;
