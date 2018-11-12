import React from 'react';
import styled from 'styled-components';

const DataSetWrapper = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 15px #e3e3e3;
  margin-top: 30px;
`;

const DataSetList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const DataItem = styled.span`
  margin-right: 10px;
  :last-child {
    margin: 0;
  }
`;

const DataSetPresenter = props => {
  const { dataSet } = props;
  return (
    <DataSetWrapper>
      <h2>데이터셋</h2>
      <DataSetList>
        {dataSet.map(data => (
          <DataItem key={data}>{data}</DataItem>
        ))}
      </DataSetList>
    </DataSetWrapper>
  );
};

export default DataSetPresenter;
