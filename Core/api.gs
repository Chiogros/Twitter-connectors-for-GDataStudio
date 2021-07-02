function fetchDataFromAPI(request, endpoint, subEndpoint, optionalFields) {

  // will contains all fetched rows
  var parsedResponses = new Array();

  try {

    // Fetch data
    var response = connect(endpoint, subEndpoint, optionalFields, request);
    parsedResponses = JSON.parse(response);
    
  } catch (e) {
    cc.newUserError()
      .setDebugText('Error fetching data from API. ' + e)
      .setText('There was an error communicating with Twitter. Try again later.')
      .throwException();
  }

  return parsedResponses.data;
}
