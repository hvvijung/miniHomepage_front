import styled from "styled-components";
import profile from "../assets/profile-1.jpg";

const Container = styled.div`
  background: #4cec72;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  font-family: Arial, sans-serif;
  overflow: hidden;

  &::before {
    content: "I ❤️ JH ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
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

const Board = styled.div`
  background: linear-gradient(to left, #d0f0ff, #b6ffa4);
  width: 100%;
  max-width: 90%;
  height: 80%;
  border: 2px solid #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Notebooks = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  gap: 20px;
`;
interface NotebookProps {
  boxWidth?: string;
}

const Notebook = styled.div<NotebookProps>`
  background-color: white;
  width: ${(props) => (props.boxWidth ? props.boxWidth : "100%")};
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  min-height: 200px;
  border: 2px solid #c7c7c7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  color: #337ab7;
  text-align: center;
  font-size: 40px;
  font-family: "Courier", cursive, sans-serif;
  margin: 0 0 20px 0;
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
  font-weight: bold;
  font-family: "Courier", cursive, sans-serif;
`;

const SpiralBinding = styled.div`
  position: absolute;
  left: 33%;
  height: 65%;
  width: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 2;
`;

const SpiralRing = styled.div`
  width: 52px;
  height: 12px;
  background: linear-gradient(to right, #c7c7c7, #ffffff);
  border: 2px solid #c7c7c7;
  border-radius: 20px;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Board>
        <Title>JH</Title>
        <Notebooks>
          <Notebook boxWidth="40%">
            <Image src={profile} alt="profile" />
            <Text>JH</Text>
            <Text>最高のボーカルになりたい</Text>
          </Notebook>
          <SpiralBinding>
            {[...Array(8)].map((_, index) => (
              <SpiralRing key={index} />
            ))}
          </SpiralBinding>
          <Notebook></Notebook>
        </Notebooks>
      </Board>
    </Container>
  );
};

export default App;
