import { FC, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { Dropdown, User } from '@nextui-org/react';
import { signOut } from 'next-auth/react';

enum Action {
  Logout = 'logout',
}

const UserProfile: FC = () => {
  const { data } = useSession();
  const { user } = data ?? {};

  const onAction = useCallback<(action: string | number) => Promise<void>>(
    async (action) => {
      if (action === Action.Logout) {
        await signOut();
      }
    },
    [],
  );

  if (!user) {
    return null;
  }

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <User
          name={user?.name}
          src={user?.image ?? undefined}
          bordered
          color="gradient"
        />
      </Dropdown.Trigger>
      <Dropdown.Menu onAction={onAction}>
        <Dropdown.Item key={Action.Logout} color="error">
          Log Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserProfile;
