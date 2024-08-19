import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Group, Button, Checkbox, Anchor, Stack } from '@mantine/core';

export default function LoginCard() {
  const [type, toggle] = useToggle(['login', 'register']);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: false,
    },

    validate: {
      email: (value) => {
        const flags = 'gm';
        const pattern = '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}';
        const regexPattern = new RegExp(pattern, flags);
        return regexPattern.test(value) ? null : 'Invalid email';
      },
      password: (value) =>
        value.length >= 6 ? null : 'Password should include at least 6 characters',
      terms: (value) => (value ? null : 'You should accept terms and conditions'),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.debug('🚀 ~ handleSubmit ~ values:', values);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        {type === 'register' && (
          <TextInput
            required
            label="Name"
            placeholder="Your name"
            radius="md"
            {...form.getInputProps('name')}
          />
        )}

        <TextInput
          label="Email"
          placeholder="your@email.com"
          radius="md"
          {...form.getInputProps('email')}
        />

        <PasswordInput
          label="Password"
          placeholder="Your password"
          radius="md"
          {...form.getInputProps('password')}
        />

        {type === 'register' && (
          <Checkbox label="I accept terms and conditions" {...form.getInputProps('terms')} />
        )}
      </Stack>

      <Group justify="space-between" mt="xl">
        <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
          {type === 'register'
            ? 'Already have an account? Login'
            : "Don't have an account? Register"}
        </Anchor>
        <Button type="submit" radius="xl">
          {upperFirst(type)}
        </Button>
      </Group>
    </form>
  );
}
