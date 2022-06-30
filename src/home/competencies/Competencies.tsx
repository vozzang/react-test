import StyledHomeCompetencies from "./Competencies.styled";
import IconFrontend from '../../shared/svg/icon-front-end.svg';
import IconBackend from '../../shared/svg/icon-back-end.svg';

function HomeCompetencies() {
  return (
    <StyledHomeCompetencies>
      <div className="container">
        <h2 className="section-title">Core competencies</h2>
        <div className="competencies-content">
          <div className="item item-front">
            <i>
              <img src={IconFrontend} alt="" />
            </i>
            <h3>Front-End Development</h3>
            <p>
              그래픽 디자인과 기술 구현간의 격차를 해소하고, UI/UX 디자인 와이어프레임을 실제 코드로 변환합니다.
              재사용 가능한 코드 및 라이브러리를 작성하여 빠른 속도로 확장 가능한 애플리케이션을 개발 합니다.
            </p>
          </div>
          <div className="item item-back">
            <i>
              <img src={IconBackend} alt="" />
            </i>
            <h3>Back-End Development</h3>
            <p>
              보안 및 디버깅에 중점을 두고, 기능적이고 일관된 코드를 설계하여 지속 가능한 애플리케이션을 개발 합니다.
              Node.js 환경에서 NestJS와 TypeORM을 도입해 개발 안정성 및 속도와 유지보수 생산성을 향상 시킵니다.
            </p>
          </div>
        </div>
      </div>
    </StyledHomeCompetencies>
  );
}

export default HomeCompetencies;