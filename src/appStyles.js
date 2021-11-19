import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f7fafc;
`;

export const ContainerImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 300px) and (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 500px;
`;

export const ContainerLogin = styled.div`
  background-color: #fff;
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 300px) and (max-width: 768px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  margin-top: 215px;
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Small = styled.small`
  font-size: 16px;
  font-weight: normal;
  width: 350px;
  margin-bottom: 7px;
  text-align: left;
`;

export const FormTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: left;
  width: 350px;
  margin-bottom: 39px;
`;

export const Label = styled.label`
  width: 350px;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: normal;
`;

export const Input = styled.input`
  width: 350px;
  margin-bottom: 12px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  padding-left: 10px;
  font-size: 14px;
`;

export const SmallOptions = styled.div`
  width: 350px;
  margin: 28px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LabelCheckbox = styled.label`
  font-size: 16px;
  font-weight: normal;
`;

export const Checkbox = styled.input`
  border: 1px solid #e8e8e8;
  margin-right: 12px;
`;

export const A = styled.a`
  text-decoration: none;
`;

export const Button = styled.button`
  width: 350px;
  height: 50px;
  background-color: #04c45c;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 5px;
  margin-bottom: 31px;
`;

export const ButtonGoogle = styled.button`
  width: 350px;
  height: 50px;
  background-color: #1a202c;
  font-size: 16px;
  color: white;
  border: none;
  border-radius: 5px;
  margin-bottom: 31px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
`;

export const ImgGoogle = styled.img`
  width: 25px;
`;

export const Reminder = styled.p`
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 50px;
  color: #1a202c;
`;
