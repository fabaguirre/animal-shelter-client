interface RegisterInput {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  role?: string;
}

interface LoginInput {
  email: string;
  password: string;
}

interface Animal {
  id: number;
  name: string;
  age: number;
  breed: string;
  type: string;
  status: string;
}
