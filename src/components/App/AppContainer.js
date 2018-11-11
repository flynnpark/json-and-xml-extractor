import React, { Component } from 'react';
import js2xml from 'js2xmlparser';
import AppPresenter from './AppPresenter';

class AppContainer extends Component {
  state = {
    extractFormatList: ['XML', 'JSON'],
    supplierList: [
      {
        id: 'supplier A',
        name: '공급사 A',
        data: []
      },
      {
        id: 'supplier B',
        name: '공급사 B',
        data: []
      },
      {
        id: 'supplier C',
        name: '공급사 C',
        data: []
      },
      {
        id: 'supplier D',
        name: '공급사 D',
        data: []
      }
    ],
    dataSet: [
      '카메라',
      'TV',
      'Computer',
      'Macbook',
      'iPhone X',
      'S9',
      'G7',
      '벤츠',
      '볼펜'
    ]
  };

  handleSetData = (supplierId, data) => {
    const newSupplierList = this.state.supplierList.map(supplier => {
      if (supplier.id === supplierId) {
        if (supplier.data.includes(data)) {
          supplier.data.splice(supplier.data.indexOf(data), 1);
        } else {
          supplier.data.push(data);
        }
      }
      return supplier;
    });
    this.setState({
      ...this.state,
      supplierList: newSupplierList
    });
  };

  getJsonResult = () => {
    const { supplierList } = this.state;
    const supplierResult = [];
    supplierList.map(supplier => {
      if (supplier.data.length > 0) {
        supplierResult.push(supplier);
        return null;
      }
      return null;
    });
    const result = {
      supplierList: supplierResult,
      dataFormat: 'JSON'
    };
    return JSON.stringify(result, null, 2);
  };

  getXmlResult = () => {
    const { supplierList } = this.state;
    const supplierResult = [];
    supplierList.map(supplier => {
      if (supplier.data.length > 0) {
        supplierResult.push(supplier);
        return null;
      }
      return null;
    });
    const result = {
      supplier: supplierResult,
      dataFormat: 'XML'
    };
    return js2xml.parse('result', result);
  };

  downloadResult = resultType => {
    const element = document.createElement('a');
    let result;
    if (resultType === 'json') {
      result = new Blob([this.getJsonResult()], {
        type: 'plain/text;charset=utf-8;'
      });
    } else if (resultType === 'xml') {
      result = new Blob([this.getXmlResult()], {
        type: 'plain/text;charset=utf-8;'
      });
    }
    if (result !== null) {
      element.href = URL.createObjectURL(result);
      element.download = `result.${resultType}`;
      element.click();
    }
  };

  render() {
    const { supplierList, dataSet, extractFormatList } = this.state;
    return (
      <AppPresenter
        supplierList={supplierList}
        dataSet={dataSet}
        extractFormatList={extractFormatList}
        handleSetData={this.handleSetData}
        jsonResult={this.getJsonResult()}
        xmlResult={this.getXmlResult()}
        downloadResult={this.downloadResult}
      />
    );
  }
}

export default AppContainer;
