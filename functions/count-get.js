import {count} from './count'

exports.handler = async event => {
    // let keys = Object.keys(count);
    // let values = Object.values(count);
    // let text = '';
    // console.log('hi')
    // for ( let i = 0; i < values.length; i++){
    //     text += keys[i] + ': ' + values[i] + '.'
    // }
    return {
      statusCode: 200,
    //   body: `Object is ${text}!`,
      body: `Count is ${count}!`,
    }
  }