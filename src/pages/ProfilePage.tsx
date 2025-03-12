import React from "react";
import Layout from "./MainLayout";
import styled from "styled-components";

const ProfileContent = styled.div`
  padding: 20px;
`;

const ProfilePage: React.FC = () => {
  return (
    <Layout>
      <ProfileContent>
        <h2>Profile Page</h2>
        <p>여기는 프로필 페이지입니다.</p>
      </ProfileContent>
    </Layout>
  );
};

export default ProfilePage;
