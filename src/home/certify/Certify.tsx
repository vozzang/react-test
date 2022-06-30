import HomeCertifyItem from "./certify-item/CertifyItem";
import StyledHomeCertify from "./Certify.styled";
import { CertifyItem } from "./Certify.types";

function HomeCertify() {
  const certifyItems: CertifyItem[] = [
    {
      title: 'Angular',
      grade: 'Basic',
      url: 'https://www.hackerrank.com/certificates/2b1dfa17d24a'
    },
    {
      title: 'Javascript',
      grade: 'Basic',
      url: 'https://www.hackerrank.com/certificates/be0b2fbc6d1f'
    },
    {
      title: 'CSS',
      url: 'https://www.hackerrank.com/certificates/3ab42a3012eb'
    },
    {
      title: 'Problem Solving',
      grade: 'Basic',
      url: 'https://www.hackerrank.com/certificates/3e9a8a63aec2'
    },
    {
      title: 'SQL',
      grade: 'Basic',
      url: 'https://www.hackerrank.com/certificates/b6c6b0cedf26'
    }
  ];
  return (
    <StyledHomeCertify id="certify">
      <div className="container">
        <h2 className="section-title">HackerRank Certify</h2>
        <div className="items">
          {certifyItems.map(item => <HomeCertifyItem item={item} />)}
        </div>
      </div>
    </StyledHomeCertify>
  );
}

export default HomeCertify;