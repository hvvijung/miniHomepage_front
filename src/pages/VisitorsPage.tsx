import React from "react";
import Layout from "./MainLayout";
import styled from "styled-components";

const VisitorsContent = styled.div`
  padding: 20px;
  width: 100%;
`;

const VisitorEntry = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const VisitorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #13d621;
  font-size: 14px;
`;

const VisitorName = styled.span`
  font-weight: bold;
`;

const VisitorDate = styled.span`
  color: #666;
`;

const VisitorMessage = styled.p`
  color: #333;
  line-height: 1.6;
`;

const VisitorForm = styled.form`
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  background: #13d621;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
`;

const VisitorsPage: React.FC = () => {
  return (
    <Layout>
      <VisitorsContent>
        <VisitorForm>
          <Input type="text" placeholder="이름" />
          <Textarea placeholder="방명록 메시지를 남겨주세요" />
          <SubmitButton type="submit">등록하기</SubmitButton>
        </VisitorForm>

        <VisitorEntry>
          <VisitorHeader>
            <VisitorName>Dimu</VisitorName>
            <VisitorDate>2025.03.16</VisitorDate>
          </VisitorHeader>
          <VisitorMessage>
            대영이 파이팅!!! 항상 응원해~ 대영이 좋아해~
          </VisitorMessage>
        </VisitorEntry>

        <VisitorEntry>
          <VisitorHeader>
            <VisitorName>silnonnim</VisitorName>
            <VisitorDate>2025.03.16</VisitorDate>
          </VisitorHeader>
          <VisitorMessage>내남자김대영</VisitorMessage>
        </VisitorEntry>
      </VisitorsContent>
    </Layout>
  );
};

export default VisitorsPage;
