const exportToJSON = (statusCode, status, message, data) => {
  // return response.status(statusCode).json({
  //   status: status,
  //   message: message,
  //   data: data,
  // });

  return Response.status(statusCode).json({
    status: status,
    message: message,
    data: data,
  });
};

module.exports = exportToJSON;
