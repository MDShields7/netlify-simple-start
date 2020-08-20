var count = 0;

exports.handler = async event => {
    const subject = event.queryStringParameters.name || 1
    let num = parseInt(subject)
    count += num
    return {
      statusCode: 200,
      body: `Count is ${count}!`,
    }
  }

exports.count = count;