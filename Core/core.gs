var cc = DataStudioApp.createCommunityConnector();

function getSchema(request, rawFields, endpoint, subEndpoint, optionalFields) {

  // Check credentials
  checkForValidCredentials(endpoint, subEndpoint, optionalFields, request);

  // return fields to retrieve
  var fields = rawFields.build();
  return { schema: fields };
}

function getRequestedFields(request, fields) {

  // Create schema for requested fields
  try {

    requestedFieldIds = request.fields.map(function(field) {
      return field.name;
    });
    
    return fields.forIds(requestedFieldIds);
    
  } catch (e) {
    cc.newUserError()
      .setDebugText('Error requesting fields. ' + e)
      .setText('There was an error requesting fields. File an issue.')
      .throwException();
  }
}

function getConfig() {
  var config = cc.getConfig();
  
  setConfig(config);
  
  config.setDateRangeRequired(false);
  return config.build();
}

function connect(endpoint, subEndpoint, optionalFields, request) {
  var url = 'https://api.twitter.com/2/' + endpoint + '/' + request.configParams.account_ID + '/' + subEndpoint + optionalFields.toString();
  var options = {
    'method' : 'GET',
    'headers': {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + request.configParams.bearer_token
    },
    'muteHttpExceptions':true
  };

  // Fetch data
  return UrlFetchApp.fetch(url, options);
}
