// see https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-followers
var endpoint = 'users';
var subEndpoint = 'followers';
var optionalFields = ['?user.fields=created_at', 'description', 'entities', 'id', 'location', 'name', 'pinned_tweet_id', 'profile_image_url', 'protected', 'public_metrics', 'url', 'username', 'verified', 'withheld'];

function getSchema(request) {
  return TwitterCore.getSchema(request, getFields(), endpoint, subEndpoint, optionalFields);
}

function getData(request) {

  // Create schema for requested fields
  var requestedFields = getRequestedFields(request);

  // Get rows
  var rows = fetchDataFromAPI(requestedFields, request);

  return {
    schema: requestedFields.build(),
    rows: rows
  };
}

function getRequestedFields(request) {
  return TwitterCore.getRequestedFields(request, getFields());
}

function getConfig(request) {
  return TwitterCore.getConfig();
}
