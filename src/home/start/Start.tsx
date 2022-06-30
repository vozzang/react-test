import StyledHomeStart from "./Start.styled";
import ImgAvatar from '../../shared/images/avatar.jpg';

function HomeStart() {
  return (
    <StyledHomeStart id="home">
      <div className="container">
        <div className="intro">
          <div className="avatar">
            <img src={ImgAvatar} alt="권효주" />
          </div>
          <h1>권효주</h1>
          <p>#남편 #아빠 #개발자</p>
        </div>
        <div className="scroll-down">
          <a href="#about" className="mouse-wrapper">
            <span>Scroll Down</span>
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </a>
        </div>
      </div>
    </StyledHomeStart>
  );
}

export default HomeStart;