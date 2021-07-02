function fetchDataFromAPI(requestedFields, request) {
  var rawRows = TwitterCore.fetchDataFromAPI(request, endpoint, subEndpoint, optionalFields);
  
  return responseToRows(requestedFields, rawRows);
}
