import {
  Container,
  Image,
  ContainerLogin,
  Form,
  Small,
  FormTitle,
  Label,
  Input,
  SmallOptions,
  Checkbox,
  Text,
  Button,
  ButtonGoogle,
  Reminder,
} from "./appStyles";
import LoginImage from "./assets/img/image.svg";

export function App() {
  return (
    <Container>
      <Image src={LoginImage} />
      <ContainerLogin>
        <Form>
          <Small>Bem vindo de volta</Small>
          <FormTitle>Faça login na sua conta</FormTitle>
          <Label>E-mail</Label>
          <Input />
          <Label>Senha</Label>
          <Input />
          <SmallOptions>
            <Checkbox value="Lembre de mim " />
            <a href="#">Esqueceu sua senha? </a>
          </SmallOptions>
          <Button>Entrar</Button>
          <ButtonGoogle>Ou faça login com o Google </ButtonGoogle>
        </Form>
        <Reminder>
          Não tem uma conta? <a href="#">Cadastre-se</a>
        </Reminder>
      </ContainerLogin>
    </Container>
  );
}
