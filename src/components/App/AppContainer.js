import React, { Component } from 'react';
import js2xml from 'js2xmlparser';
import AppPresenter from './AppPresenter';

class AppContainer extends Component {
  state = {
    extractFormatList: ['XML', 'JSON'],
    checkedList: [],
    supplierList: [
      {
        id: 'supplierA',
        name: '공급사 A',
        data: ['카메라', 'Macbook', 'S9', '볼펜']
      },
      {
        id: 'supplierB',
        name: '공급사 B',
        data: ['TV', 'Computer', 'iPhone X']
      },
      {
        id: 'supplierC',
        name: '공급사 C',
        data: ['Macbook', 'iPhone X', 'G7', '벤츠']
      },
      {
        id: 'supplierD',
        name: '공급사 D',
        data: ['iPhone X', 'S9', 'G7']
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

  handleSetData = supplierId => {
    const { checkedList, supplierList } = this.state;
    supplierList.map(supplier => {
      if (supplier.id === supplierId) {
        if (checkedList.includes(supplierId)) {
          checkedList.splice(checkedList.indexOf(supplierId), 1);
        } else {
          checkedList.push(supplierId);
        }
      }
      return supplier;
    });
    this.setState({
      ...this.state,
      checkedList
    });
  };

  getJsonResult = () => {
    const { checkedList, supplierList } = this.state;
    const supplierResult = [];
    supplierList.map(supplier => {
      if (checkedList.includes(supplier.id)) {
        supplierResult.push(supplier);
        return null;
      }
      return null;
    });
    const result = {
      supplierResult,
      dataFormat: 'JSON'
    };
    return JSON.stringify(result, null, 2);
  };

  getXmlResult = () => {
    const { checkedList, supplierList } = this.state;
    let supplierResult = {};
    supplierList.map(supplier => {
      if (checkedList.includes(supplier.id)) {
        supplierResult = {
          ...supplierResult,
          [supplier.id]: {
            data: supplier.data
          }
        };
        return null;
      }
      return null;
    });
    const result = {
      ...supplierResult,
      dataFormat: 'XML'
    };
    return js2xml.parse('result', result);
  };

  downloadResult = resultType => {
    // const element = document.createElement('a');
    const reader = new FileReader();
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
      reader.onload = e => {
        window.location.href = reader.result;
      };
      reader.readAsDataURL(result);
      // element.href = URL.createObjectURL(result);
      // element.download = `result.${resultType}`;
      // element.click();
    }
  };

  render() {
    const {
      checkedList,
      supplierList,
      dataSet,
      extractFormatList
    } = this.state;
    return (
      <AppPresenter
        checkedList={checkedList}
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
