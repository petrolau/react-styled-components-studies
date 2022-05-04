import { Container } from "./styles";
import { Card } from "../Card";
import content from "../content";

export const MiddleTextStyled = () => {
  return (
    <Container>
      {content.map((item, index) => (
        <Card key={index} item={item}></Card>
      ))}
    </Container>
  );
};
