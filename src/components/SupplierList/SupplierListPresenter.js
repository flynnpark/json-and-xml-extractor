import React from 'react';
import styled from 'styled-components';

const SupplierListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SupplierRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const SupplierName = styled.div`
  display: flex;
  font-weight: bold;
  margin-right: 10px;
`;

const DataItem = styled.label`
  display: flex;
  margin-right: 8px;
  :last-child {
    margin-right: 0;
  }
`;

const SupplierListPresenter = props => {
  const { supplierList, dataSet, handleSetData } = props;
  return (
    <SupplierListWrapper>
      <h2>공급사별 데이터</h2>
      {supplierList.map(supplier => (
        <SupplierRow key={supplier.id}>
          <SupplierName>{supplier.name}</SupplierName>
          {dataSet.map(data => (
            <DataItem key={data}>
              <input
                type="checkbox"
                name={data}
                value={data}
                checked={supplier.data.includes(data) ? true : false}
                onChange={event => handleSetData(supplier.id, data)}
              />
              {data}
            </DataItem>
          ))}
        </SupplierRow>
      ))}
    </SupplierListWrapper>
  );
};

export default SupplierListPresenter;
