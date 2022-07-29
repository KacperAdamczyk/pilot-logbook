import { FC, useCallback } from 'react';
import { signOut, useSession } from 'next-auth/react';
import {
  Avatar,
  createStyles,
  Group,
  Menu,
  Text,
  UnstyledButton,
} from '@mantine/core';
import { IconChevronDown, IconLogout } from '@tabler/icons';
import { useDisclosure } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },
  },
  userActive: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },
}));

const UserMenu: FC = () => {
  const { classes, cx } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const { data } = useSession();
  const { user } = data ?? {};

  const onLogout = useCallback<() => Promise<void>>(() => signOut(), []);

  if (!user) {
    return null;
  }

  return (
    <Menu
      width={260}
      position="bottom-end"
      transition="pop-top-right"
      onClose={open}
      onOpen={close}
    >
      <Menu.Target>
        <UnstyledButton
          className={cx(classes.user, {
            [classes.userActive]: opened,
          })}
        >
          <Group spacing={7}>
            <Avatar
              src={user.image}
              alt={user.name ?? ''}
              radius="xl"
              size={20}
            />
            <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
              {user.name}
            </Text>
            <IconChevronDown size={12} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          icon={<IconLogout size={14} stroke={1.5} />}
          onClick={onLogout}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserMenu;
