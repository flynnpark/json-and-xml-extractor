import React from 'react';
import styled from 'styled-components';
import DataSet from '../DataSet';
import SupplierList from '../SupplierList';
import Preview from '../Preview';

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 50px;
  flex-direction: column;
`;

const AppPresenter = props => {
  const {
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
      <DataSet dataSet={dataSet} />
      <SupplierList
        supplierList={supplierList}
        dataSet={dataSet}
        handleSetData={handleSetData}
      />
      <div>
        <h2>지원 데이터 포맷</h2>
        {extractFormatList.map(extractFormat => (
          <span key={extractFormat}>{extractFormat}</span>
        ))}
      </div>
      <Preview jsonResult={jsonResult} xmlResult={xmlResult} />
      <div>
        <h2>다운로드</h2>
        <div>
          <button onClick={() => downloadResult('json')}>Download JSON</button>
          <button onClick={() => downloadResult('xml')}>Download XML</button>
        </div>
      </div>
    </Container>
  );
};

export default AppPresenter;
