import React from "react";
import Layout from "./MainLayout";
import styled from "styled-components";

const DiaryContent = styled.div`
  padding: 20px;
  width: 100%;
`;

const DiaryEntry = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const DiaryDate = styled.div`
  color: #13d621;
  font-size: 14px;
  margin-bottom: 10px;
`;

const DiaryTitle = styled.h3`
  color: #337ab7;
  margin-bottom: 10px;
`;

const DiaryText = styled.p`
  color: #666;
  line-height: 1.6;
`;

const DiaryPage: React.FC = () => {
  return (
    <Layout>
      <DiaryContent>
        <DiaryEntry>
          <DiaryDate>2025.03.14</DiaryDate>
          <DiaryTitle>화이트 데이</DiaryTitle>
          <DiaryText>
            오늘은 날씨가 좋아서 기분이 좋아! 유부초밥을 먹었는데 녀무너무
            맛있었다! 그리고 시즈니한테 사탕을 줬다!!
          </DiaryText>
        </DiaryEntry>
        <DiaryEntry>
          <DiaryDate>2025.03.15</DiaryDate>
          <DiaryTitle>료의 선물</DiaryTitle>
          <DiaryText>
            료가 교토에서 사준 선물들.. 제로콜라+초밥키티+모찌+황금똥키링+안대!
            료 고..고마워!
          </DiaryText>
        </DiaryEntry>
      </DiaryContent>
    </Layout>
  );
};

export default DiaryPage;
