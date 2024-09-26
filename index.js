const axios = require('axios');
async function test() {
    const options = {
        method: 'GET',
        url: 'https://twitter154.p.rapidapi.com/user/details',
        params: {
            username: 'omarmhaimdat',
            user_id: '96479162'
        },
        headers: {
            'X-RapidAPI-Key': '97863a30famsh3047ae4feae0e1dp164810jsnc468d232b7c6',
            'X-RapidAPI-Host': 'twitter154.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

test();