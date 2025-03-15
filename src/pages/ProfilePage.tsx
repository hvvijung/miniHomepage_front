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
        <p>프로필을 적어주세여</p>
      </ProfileContent>
    </Layout>
  );
};

export default ProfilePage;
