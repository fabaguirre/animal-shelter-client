import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Group, Button, Anchor, Stack, Checkbox } from '@mantine/core';

const ROLES = {
  ADOPTER: 'adopter',
  VOLUNTEER: 'volunteer',
} as const;

export default function LoginCard() {
  const [type, toggle] = useToggle(['login', 'register']);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      isVolunteer: false,
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
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    const API_URL = import.meta.env.VITE_API_URL;
    const input: Record<string, unknown> = {
      email: values.email,
      password: values.password,
    };

    if (type === 'register') {
      input.first_name = values.firstName;
      input.last_name = values.lastName;
      input.role = values.isVolunteer ? ROLES.VOLUNTEER : ROLES.ADOPTER;
    }

    fetch(API_URL.concat('/api/auth/', type, '/'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        {type === 'register' && (
          <>
            <TextInput
              required
              label="Name"
              placeholder="Your name"
              radius="md"
              {...form.getInputProps('firstName')}
            />
            <TextInput
              required
              label="Last Name"
              placeholder="Yourlast name"
              radius="md"
              {...form.getInputProps('lastName')}
            />
          </>
        )}

        <TextInput
          withAsterisk={type === 'register'}
          label="Email"
          placeholder="your@email.com"
          radius="md"
          {...form.getInputProps('email')}
        />

        <PasswordInput
          withAsterisk={type === 'register'}
          label="Password"
          placeholder="Your password"
          radius="md"
          {...form.getInputProps('password')}
        />

        {type === 'register' && (
          <Checkbox
            size="xs"
            label={`You are a ${ROLES.VOLUNTEER}?`}
            labelPosition="left"
            {...form.getInputProps('role')}
          />
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
