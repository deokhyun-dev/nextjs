import Axios from "axios";
import { useRouter } from "next/router";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

export default function Login() {
  const router = useRouter();

  async function login() {
    const okay = {
      id: "된다",
      pass: "된다고",
    };
    Axios.post("/api/login", okay).then((res) => {
      if (res.status === 200) {
        router.push("/admin");
      } else {
      }
    });
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="/logo.png" /> Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button color="blue" fluid size="large" onClick={login}>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
}
