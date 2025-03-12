import React from "react";
import Layout from "./MainPage";
import styled from "styled-components";

const HomeContent = styled.div`
  padding: 20px;
`;

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HomeContent>
        <h2>Welcome to My Homepage!</h2>
        <p>이곳은 제 미니홈페이지의 메인 공간입니다.</p>
      </HomeContent>
    </Layout>
  );
};

export default HomePage;
