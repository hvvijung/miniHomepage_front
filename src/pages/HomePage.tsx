import React from "react";
import Layout from "./MainLayout";
import styled from "styled-components";

const HomeContent = styled.div`
  padding: 20px;
`;

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HomeContent>
        <h2>안뇽하세요</h2>
        <p>시즈니 안녕~ 째히에여</p>
      </HomeContent>
    </Layout>
  );
};

export default HomePage;
