import { StyledHomeAbout } from "./About.styled";
import ImgAvatar from '../../shared/images/avatar.jpg';

function HomeAbout() {
  return (
    <StyledHomeAbout id="about">
      <div className="container">
        <h2 className="section-title">
          About Me
          <a href="./vozzang.github.io.pdf" className="pdf-down">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
            </svg>
            <span>
              이력서 PDF 다운로드
            </span>
          </a>
        </h2>
        <div className="about-content">
          <div className="thumb">
            <img src={ImgAvatar} alt="권효주" />
          </div>
          <div className="content">
            <div className="text">
              <h3 className="mb-2 print-block">권효주 <small>(1980.11.20.)</small></h3>
              저는 지속 가능한 코드에 중점을 둔 Front-End 개발자 권효주 입니다.
              10년 이상의 Front-End 개발 경험과 3년 이상의 Back-End 개발 경험이 있으며, 모바일 우선 접근 방식을 신뢰합니다.
              개발 경험에 비례한 문제 해결능력을 갖추고 있습니다.
            </div>
            <div className="bars">
              <div className="bar-row">
                <div className="title">
                  <h3>Front-End Development</h3>
                  <span>95%</span>
                </div>
                <div className="bar bar-warning">
                  <div style={{width: '95%'}}></div>
                </div>
              </div>
              <div className="bar-row">
                <div className="title">
                  <h3>Back-End Development</h3>
                  <span>70%</span>
                </div>
                <div className="bar bar-danger">
                  <div style={{width: '70%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-fun-facts">
          <div className="item">
            <i className="clock"></i>
            <div className="detail">
              <div className="number" id="workingHours">5678</div>
              <div className="title">Working hours</div>
            </div>
          </div>
          <div className="item">
            <i className="coffee"></i>
            <div className="detail">
              <div className="number" id="cupOfCoffee">10123</div>
              <div className="title">Cup of coffee</div>
            </div>
          </div>
          <div className="item">
            <i className="page"></i>
            <div className="detail">
              <div className="number" id="webPages">5678</div>
              <div className="title">Web pages</div>
            </div>
          </div>
          <div className="item">
            <i className="phone"></i>
            <div className="detail">
              <div className="number" id="applications">5</div>
              <div className="title">Applications</div>
            </div>
          </div>
        </div>
      </div>
    </StyledHomeAbout>
  );
}

export default HomeAbout;