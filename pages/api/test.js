import axios from 'axios';

async function Test(request, response) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    const x = await axios.get('http://104.131.19.106:13444/test');

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    return response.json({ dynamicDateString, x: x.data.date });
}

export default Test;