import React from "react";
import Layout from "./MainPage";
import styled from "styled-components";

const ProfileContent = styled.div`
  padding: 20px;
`;

const ProfilePage: React.FC = () => {
  return (
    <Layout>
      <ProfileContent>
        <h2>About Me</h2>
        <p>안녕하세요! 저는 음악을 사랑하는 보컬리스트입니다.</p>
        <h3>관심사</h3>
        <ul>
          <li>보컬 트레이닝</li>
          <li>작사/작곡</li>
          <li>퍼포먼스</li>
        </ul>
      </ProfileContent>
    </Layout>
  );
};

export default ProfilePage;
