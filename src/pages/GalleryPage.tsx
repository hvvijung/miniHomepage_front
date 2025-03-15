import React from "react";
import Layout from "./MainLayout";
import styled from "styled-components";

const GalleryContent = styled.div`
  padding: 20px;
  width: 100%;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
  padding: 10px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const GalleryImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GalleryTitle = styled.h2`
  color: #337ab7;
  margin-bottom: 20px;
  text-align: center;
`;

const GalleryPage: React.FC = () => {
  const images = [
    "https://i.pinimg.com/736x/2d/45/7d/2d457de4dea7baadd325586535c8931d.jpg",
    "https://i.pinimg.com/736x/c5/19/59/c5195927525748b7e5b6defb2a630845.jpg",
    "https://i.pinimg.com/736x/22/a8/07/22a807bfe6b8d0cba5bc2c4badb10f6e.jpg",
    "https://i.pinimg.com/736x/b5/01/6f/b5016f68e71c865ba6177ec1d740746b.jpg",
    "https://i.pinimg.com/736x/4b/72/6d/4b726d53ac7536502d878c9f20dc5ff5.jpg",
    "https://i.pinimg.com/736x/7f/b6/32/7fb632fc6dd3577a0bd95de41c2bbea0.jpg",
  ];

  return (
    <Layout>
      <GalleryContent>
        <GalleryTitle>대영이의 갤러리임니다~</GalleryTitle>
        <GalleryGrid>
          {images.map((image, index) => (
            <ImageContainer key={index}>
              <GalleryImage src={image} alt={`Gallery image ${index + 1}`} />
            </ImageContainer>
          ))}
        </GalleryGrid>
      </GalleryContent>
    </Layout>
  );
};

export default GalleryPage;
