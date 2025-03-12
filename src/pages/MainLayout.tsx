import styled, { createGlobalStyle } from "styled-components";
import profile from "../assets/profile-1.jpg";
import { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Cafe24Ohsquareair';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2202@1.0/Cafe24Ohsquareair.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Cafe24Ohsquareair', Arial, sans-serif;
  }
`;

const Container = styled.div`
  background: #4cec72;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
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
  font-family: "Cafe24Ohsquareair", "Courier", cursive, sans-serif;
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
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: -35px;
`;

const IndexTab = styled(NavLink)<{ color?: string }>`
  background: #13d621;
  border: 2px solid #c7c7c7;
  padding: 10px;
  width: 80px;
  cursor: pointer;
  font-size: 14px;
  color: white;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  transition: 0.3s;
  text-decoration: none;

  &.active {
    background: white;
    color: #13d621;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
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
            <Notebook>{children}</Notebook>
            <IndexTabs>
              <IndexTab to="/" color="white">
                Home
              </IndexTab>
              <IndexTab to="/profile" color="#13d621">
                Profile
              </IndexTab>
              <IndexTab to="/diary" color="#13d621">
                Diary
              </IndexTab>
              <IndexTab to="/gallery" color="#13d621">
                Gallery
              </IndexTab>
              <IndexTab to="/video" color="#13d621">
                Video
              </IndexTab>
              <IndexTab to="/visitors" color="#13d621">
                Visitors
              </IndexTab>
            </IndexTabs>
          </Notebooks>
        </Board>
      </Container>
    </>
  );
};

export default Layout;
