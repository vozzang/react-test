import StyledHomePersonality from "./Personality.styled";

function HomePersonality() {
  return (
    <StyledHomePersonality>
      <div className="container">
        <h2 className="section-title">Personality</h2>
        <div className="personality-content">
          <ul>
            <li>타인에게 피해 주기 싫어하지만 피해를 받는 것도 싫어함.</li>
            <li>친구가 별로 없지만 별로 없는 그 친구들과의 친밀도는 매우 높음.</li>
            <li>관심 있는 분야에 깊이 빠지는 탓에 매니아(이웃 나라 표현으로 오타쿠) 기질 있음.</li>
            <li>장황한 서술 보다 핵심을 찌르는 한마디를 좋아함.</li>
          </ul>
        </div>
      </div>
    </StyledHomePersonality>
  );
}

export default HomePersonality;