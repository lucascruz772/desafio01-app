import { ButtonStyled } from "../../styles";

const Button = ({ label, onClick }) => {
  return <ButtonStyled onClick={onClick}>{label}</ButtonStyled>;
};

export default Button;
