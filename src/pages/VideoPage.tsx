import React from "react";
import Layout from "./MainLayout";
import styled from "styled-components";

const VideoContent = styled.div`
  padding: 20px;
  width: 100%;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const VideoTitle = styled.h2`
  color: #337ab7;
  margin-bottom: 15px;
`;

const VideoDescription = styled.p`
  color: #666;
  margin-bottom: 10px;
`;

const Video: React.FC = () => {
  return (
    <Layout>
      <VideoContent>
        <VideoContainer>
          <VideoTitle>My Videos</VideoTitle>
          <VideoDescription>
            제가 부른 노래와 공연 영상을 모아둔 공간입니다.
          </VideoDescription>
          {/* 여기에 실제 비디오 컨텐츠를 추가할 수 있습니다 */}
        </VideoContainer>
      </VideoContent>
    </Layout>
  );
};

export default Video;
