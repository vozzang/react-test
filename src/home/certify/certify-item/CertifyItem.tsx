import { CertifyItemProps } from "../Certify.types";
import StyledHomeCertifyItem from "./CertifyItem.styled";

function HomeCertifyItem(props: CertifyItemProps) {
  return (
    <StyledHomeCertifyItem href={props.item.url} target="_blank" rel="noopener noreferrer">
      <div className="corner"></div>
      {props.item.title}
      {props.item.grade && <><br /> ({props.item.grade})</>}
    </StyledHomeCertifyItem>
  );
}

export default HomeCertifyItem;