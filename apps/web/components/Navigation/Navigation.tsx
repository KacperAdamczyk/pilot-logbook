import { FC, useCallback } from 'react';
import { createStyles, Tabs } from '@mantine/core';
import { useRouter } from 'next/router';
import { TabsProviderProps } from '@mantine/core/lib/Tabs/TabsProvider';

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
  tab: {
    fontWeight: 500,
    height: 38,
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    },

    '&[data-active]': {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      borderColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[2],
    },
  },
}));

const tabs: { name: string; path: string }[] = [
  { name: 'Log', path: '/' },
  { name: 'Planes', path: '/planes' },
];

const Navigation: FC = () => {
  const { classes } = useStyles();
  const router = useRouter();
  console.log(router);

  const onNavigate = useCallback<NonNullable<TabsProviderProps['onTabChange']>>(
    (path) => {
      if (path) {
        router.push(path);
      }
    },
    [router],
  );

  return (
    <Tabs
      value={router.route}
      variant="outline"
      classNames={{ tab: classes.tab }}
      onTabChange={onNavigate}
    >
      <Tabs.List>
        {tabs.map(({ name, path }) => (
          <Tabs.Tab value={path} key={path}>
            {name}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  );
};

export default Navigation;
