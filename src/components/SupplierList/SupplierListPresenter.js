import React from 'react';
import styled from 'styled-components';

const SupplierListWrapper = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 0px 15px #e3e3e3;
  margin-top: 30px;
`;

const SupplierRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const SupplierName = styled.div`
  display: flex;
  font-weight: bold;
  margin-right: 10px;
`;

const DataItem = styled.span`
  display: flex;
  margin-left: 8px;
  :last-child {
    margin-left: 0;
  }
`;

const SupplierListPresenter = props => {
  const { checkedList, supplierList, handleSetData } = props;
  return (
    <SupplierListWrapper>
      <h2>공급사별 데이터</h2>
      {supplierList.map(supplier => (
        <SupplierRow key={supplier.id}>
          <input
            type="checkbox"
            name={supplier.id}
            value={supplier.id}
            checked={checkedList.includes(supplier.id) ? true : false}
            onChange={() => handleSetData(supplier.id)}
          />
          <SupplierName>{supplier.name}</SupplierName>
          {supplier.data.map(item => (
            <DataItem key={item}>{item}</DataItem>
          ))}
        </SupplierRow>
      ))}
    </SupplierListWrapper>
  );
};

export default SupplierListPresenter;
