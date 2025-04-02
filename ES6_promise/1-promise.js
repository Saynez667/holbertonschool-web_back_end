export default function getResponseFromAPI(success) {
    return new Promise((resolve) => {
      resolve({
        statusCode: 200,
        body: 'Success',
      });
    });
  }