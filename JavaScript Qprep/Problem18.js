/*Fetch in Javascript

The fetch() method in JavaScript is used to request to the server and load the information in the webpages. 
The request can be of any APIs that returns the data of the format JSON or XML. This method returns a promise. */

async function getCommentsByUserId(userId) {
    var arr = [];
    const data = await fetch('/api/comments');
    const comments = await data.json();
    for(let i=0; i<comments.length;i++){
        if(comments[i].userId == userId){
            arr.push(comments[i].data);
        }
    }
    return arr;
}


const mockFetch = (url, responseData) => {
    const mockJsonPromise = Promise.resolve(responseData);
    const mockFetchPromise = (callUrl) => {
        if (url === callUrl) {
            return Promise.resolve({
                json: () => mockJsonPromise
             });
        } else {
            return Promise.reject('404: No such url')
        }
    }
    global.fetch = mockFetchPromise;
}

const successResponse = [
    {
        'userId': '1',
        "data": 'This looks slick!'
    },
    {
        'userId': '2',
        "data": 'I think this can be improved.'
    },
    {
        'userId': '1',
        "data": 'What kind of improvement?'
    }];
mockFetch('/api/comments', successResponse);

module.exports = getCommentsByUserId;


getCommentsByUserId("1").then((res) => {
  console.log(res);
});