function getAuthType() {
  var AuthTypes = cc.AuthType;
  return cc
    .newAuthTypeResponse()
    .setAuthType(AuthTypes.NONE)
    .build();
}

function isAdminUser() {
  return true;
}

function checkForValidCredentials(endpoint, subEndpoint, optionalFields, request) {

  var response = connect(endpoint, subEndpoint, optionalFields, request);

  if (response.getResponseCode() == 200) {
    return true;
  }
    
  if (response.getResponseCode() == 401) {
    cc.newUserError()
    .setText('Bearer token not valid. Try to generate another.')
    .throwException();
  }

  cc.newUserError()
    .setText('Credentials are not valids.')
    .throwException();
}
