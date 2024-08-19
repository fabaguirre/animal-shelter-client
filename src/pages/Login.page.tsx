import { Center } from '@mantine/core';
import LoginCard from '@/components/LoginCard';
import LoginForm from '@/components/LoginForm';

const LoginPage: React.FC = () => (
  <Center component="main" h="100vh">
    <LoginCard>
      <LoginForm />
    </LoginCard>
  </Center>
);

export default LoginPage;
