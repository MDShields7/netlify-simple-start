import sumoRank from 'sumo-rank'



exports.handler = async event => {
    const subject = event.queryStringParameters.name || 'Y1E'
    var rank = `${subject}`.sumoRank("Nn # Dd")
    return {
      statusCode: 200,
      body: `Rank is ${rank}!`,
    }
  }

