import React from "react";
import Layout from "./MainLayout";
import styled from "styled-components";

const VideoContent = styled.div`
  width: 100%;
  overflow-y: auto;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const VideoTitle = styled.h2`
  color: #337ab7;
  margin: 0;
`;

const VideoDescription = styled.p`
  color: #666;
  margin: 0;
`;

const Video: React.FC = () => {
  return (
    <Layout>
      <VideoContent>
        <VideoContainer>
          <VideoTitle>Video 1</VideoTitle>
          <VideoDescription>description of the video</VideoDescription>
          <iframe
            width="320"
            height="180"
            src="https://www.youtube.com/embed/1w7OgIMMRc4"
            title="YouTube video player"
          ></iframe>
        </VideoContainer>
        <VideoContainer>
          <VideoTitle>Video 1</VideoTitle>
          <VideoDescription>description of the video</VideoDescription>
          <iframe
            width="320"
            height="180"
            src="https://www.youtube.com/embed/1w7OgIMMRc4"
            title="YouTube video player"
          ></iframe>
        </VideoContainer>
        <VideoContainer>
          <VideoTitle>Video 1</VideoTitle>
          <VideoDescription>description of the video</VideoDescription>
          <iframe
            width="320"
            height="180"
            src="https://www.youtube.com/embed/1w7OgIMMRc4"
            title="YouTube video player"
          ></iframe>
        </VideoContainer>
      </VideoContent>
    </Layout>
  );
};

export default Video;
