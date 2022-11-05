const exportToJSON = (response, statusCode, status, message, data) => {
  return response.status(statusCode).json({
    status: status,
    message: message,
    data: data,
  });
};

module.exports = exportToJSON;
