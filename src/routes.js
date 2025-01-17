const routes = (handler) => [
    {
        method: 'POST',
        path: '/predict',
        handler: handler.getPredictResult,
        options: {
          payload: {
            allow: 'multipart/form-data',
            multipart: true,
            output: 'stream'
          }
        }
      },
  ];
   
  module.exports = routes;