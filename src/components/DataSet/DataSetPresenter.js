import React from 'react';
import styled from 'styled-components';

const DataSetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
          <DataItem>{data}</DataItem>
        ))}
      </DataSetList>
    </DataSetWrapper>
  );
};

export default DataSetPresenter;
