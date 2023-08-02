import ReactHtmlParser from "react-html-parser";
import { descriptionStyle } from "./styles";

const Description = ({ description }: { description: string }) => {
  const parsedDescription = ReactHtmlParser(description);
  return <p css={descriptionStyle}>{parsedDescription}</p>;
};

export default Description;
