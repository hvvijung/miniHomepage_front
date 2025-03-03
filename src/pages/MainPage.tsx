import styled from "styled-components";
import profile from "../assets/profile-1.jpg";

const Container = styled.div`
  background: #66ff00;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  font-family: Arial, sans-serif;

  &::before {
    content: "I ❤️ JH ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background: #66ff00;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    color: black;
    white-space: nowrap;
    overflow: hidden;
    animation: marquee 10s linear infinite;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

const Notebook = styled.div`
  background: linear-gradient(to right, #d0f0ff, #c7ffb9);
  width: 70%;
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #337ab7;
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
`;

const LeftPanel = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RightPanel = styled.div`
  flex: 2;
  background: white;
  border-radius: 10px;
  padding: 20px;
  min-height: 200px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: #007bff;
  text-align: center;
  font-size: 16px;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Notebook>
        <Title>JAEHEE</Title>
        <Content>
          <LeftPanel>
            <Image src={profile} alt="profile" />
            <Text>NCT WISH 재희</Text>
            <Text>最高のボーカルになりたい</Text>
          </LeftPanel>
          <RightPanel></RightPanel>
        </Content>
      </Notebook>
    </Container>
  );
};

export default App;
