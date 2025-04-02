export default function getResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({
          statusCode: 200,
          body: 'Success',
        });
      } else {
        reject(new Error('The API call failed'));
      }
    });
  }