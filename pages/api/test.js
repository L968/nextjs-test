import axios from 'axios';

async function Test(request, response) {
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    //const x = await axios.get('http://localhost:14741/test');

    //console.log(x.data);

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    return response.json({ dynamicDateString });
}

export default Test;