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
  Button,
  ButtonGoogle,
  Reminder,
  ContainerImage,
  LabelCheckbox,
  A,
  ImgGoogle,
} from "./appStyles";
import LoginImage from "./assets/img/image.svg";
import Google from "./assets/img/g.png";

export function App() {
  return (
    <Container>
      <ContainerImage>
        <Image src={LoginImage} />
      </ContainerImage>
      <ContainerLogin>
        <Form>
          <Small>Bem vindo de volta</Small>
          <FormTitle>Faça login na sua conta</FormTitle>
          <Label>E-mail</Label>
          <Input type="text" />
          <Label>Senha</Label>
          <Input type="password" />
          <SmallOptions>
            <div>
              <Checkbox type="checkbox" />
              <LabelCheckbox>Lembre de mim </LabelCheckbox>
            </div>
            <A href="#">Esqueceu sua senha? </A>
          </SmallOptions>
          <Button>Entrar</Button>
          <ButtonGoogle>
            <ImgGoogle src={Google} />
            Ou faça login com o Google{" "}
          </ButtonGoogle>
        </Form>
        <Reminder>
          Não tem uma conta? <A href="#">Cadastre-se</A>
        </Reminder>
      </ContainerLogin>
    </Container>
  );
}
