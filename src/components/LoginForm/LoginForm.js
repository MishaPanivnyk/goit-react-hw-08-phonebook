import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Form,
  Label,
  Button,
  Title,
  Input,
  Container,
} from 'components/LoginForm/LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Title>Sign In</Title>
      <Label>
        Email
        <Input type="email" name="email" />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" />
      </Label>
      <Container>
        <Button type="submit">Log In</Button>
      </Container>
    </Form>
  );
};
