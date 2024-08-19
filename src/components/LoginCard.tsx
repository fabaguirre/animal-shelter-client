import { Paper } from '@mantine/core';

const LoginCard: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Paper shadow="md" radius="md" p="xl" withBorder>
    {children}
  </Paper>
);

export default LoginCard;
