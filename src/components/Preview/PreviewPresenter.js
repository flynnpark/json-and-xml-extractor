import React from 'react';
import styled from 'styled-components';

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PreviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const PreviewPresenter = props => {
  const { jsonResult, xmlResult } = props;
  return (
    <PreviewWrapper>
      <h2>미리보기</h2>
      <PreviewContainer>
        <ResultWrapper>
          <h3>JSON</h3>
          <pre>{jsonResult}</pre>
        </ResultWrapper>
        <ResultWrapper>
          <h3>XML</h3>
          <pre>{xmlResult}</pre>
        </ResultWrapper>
      </PreviewContainer>
    </PreviewWrapper>
  );
};

export default PreviewPresenter;
