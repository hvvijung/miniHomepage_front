import React, { useEffect, useState } from "react";
import Layout from "./MainLayout";
import styled from "styled-components";
import axios from "axios";

export const youtubeApi = axios.create({
  baseURL: "https://www.youtube.googleapis.com/youtube/v3",
  params: {
    key: "AIzaSyBk-QfjWSRlr14rjuTXxgSVdUC2HyJaVkQ",
  },
});

const getYoutubeVideos = async () => {
  try {
    const response = await youtubeApi.get("playlistItems", {
      params: {
        playlistId: "PL4cUxeGkcC9i9Ae2A62Hiqf7Y861Y8Y2L",
        part: "snippet",
        maxResults: 30,
      },
    });
    console.log(response.data.items);
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
  }
};

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
  font-size: 1.2rem;
`;

const VideoDescription = styled.p`
  color: #666;
  margin: 0;
  font-size: 1rem;
`;

const Video: React.FC = () => {
  return (
    <Layout>
      <VideoContent>
        <VideoContainer>
          <VideoTitle>
            [#최애직캠] NCT WISH JAEHEE (엔시티 위시 재희) – Miracle | 쇼!
            음악중심 | MBC250125
          </VideoTitle>
          <VideoDescription>노랑색 찰떡 대요이</VideoDescription>
          <iframe
            width="320"
            height="180"
            src="https://youtube.com/embed/yz_0cRJtTKk"
            title="YouTube video player"
          ></iframe>
        </VideoContainer>
        <VideoContainer>
          <VideoTitle>
            [얼빡직캠 4K] 비장함과 귀여움을 겸비한 강아지🐶 재희 직캠
            'Steady'(NCT WISH JAEHEE Facecam)
          </VideoTitle>
          <VideoDescription>이 강아지 지나치면 나쁜사람</VideoDescription>
          <iframe
            width="320"
            height="180"
            src="https://youtube.com/embed/33FiMKwIBnA"
            title="YouTube video player"
          ></iframe>
        </VideoContainer>
        <VideoContainer>
          <VideoTitle>
            [4K] 240721 가요대전 Summer 으쌰으쌰 NCT WISH 재희 직캠
          </VideoTitle>
          <VideoDescription>여러분 을사을사 파이팅!</VideoDescription>
          <iframe
            width="320"
            height="180"
            src="https://www.youtube.com/embed/wRKiWnd4QlA"
            title="YouTube video player"
          ></iframe>
        </VideoContainer>
      </VideoContent>
    </Layout>
  );
};

export default Video;
