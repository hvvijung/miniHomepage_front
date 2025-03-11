import styled from "styled-components";
import profile from "../assets/profile-1.jpg";

const Container = styled.div`
  background: #4cec72;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  font-family: Arial, sans-serif;
`;

const Board = styled.div`
  background: linear-gradient(to left, #d0f0ff, #b6ffa4);
  width: 80%;
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
  left: 32%;
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

const IndexTabs = styled.div`
  position: absolute;
  top: 25%;
  right: 1%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const IndexTab = styled.button`
  background: ${(props) => props.color || "#ccc"};
  border: 2px solid #c7c7c7;
  padding: 10px;
  width: 80px;
  cursor: pointer;
  font-size: 14px;
  color: #007bff;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
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
          <IndexTabs>
            <IndexTab color="white">Home</IndexTab>
            <IndexTab color="#13d621">About</IndexTab>
            <IndexTab color="#13d621">Contact</IndexTab>
          </IndexTabs>
        </Notebooks>
      </Board>
    </Container>
  );
};

export default App;
