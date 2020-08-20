import count from './count'

exports.handler = async event => {
    return {
      statusCode: 200,
      body: `Count is ${count}!`,
    }
  }