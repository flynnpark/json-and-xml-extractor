import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import DataSet from '../DataSet';
import SupplierList from '../SupplierList';
import Preview from '../Preview';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: #ECF0F1;
  }
  h2 {
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 1em;
  }
  h3 {
    font-size: 1.3em;
    font-weight: 500;
    margin-bottom: 1em;
  }
`;

const Container = styled.div`
  display: flex;
  padding: 50px;
  flex-direction: column;
`;

const InfoWrapper = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 15px #e3e3e3;
  margin-top: 30px;
`;

const AppPresenter = props => {
  const {
    checkedList,
    supplierList,
    dataSet,
    extractFormatList,
    handleSetData,
    jsonResult,
    xmlResult,
    downloadResult
  } = props;
  return (
    <Container>
      <GlobalStyle />
      <DataSet dataSet={dataSet} />
      <SupplierList
        checkedList={checkedList}
        supplierList={supplierList}
        dataSet={dataSet}
        handleSetData={handleSetData}
      />
      <InfoWrapper>
        <h2>지원 데이터 포맷</h2>
        {extractFormatList.map(extractFormat => (
          <span key={extractFormat}>{extractFormat}</span>
        ))}
      </InfoWrapper>
      <Preview jsonResult={jsonResult} xmlResult={xmlResult} />
      <InfoWrapper>
        <h2>다운로드</h2>
        <div>
          <button onClick={() => downloadResult('json')}>Download JSON</button>
          <button onClick={() => downloadResult('xml')}>Download XML</button>
        </div>
      </InfoWrapper>
    </Container>
  );
};

export default AppPresenter;
