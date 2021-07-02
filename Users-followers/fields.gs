var cc = DataStudioApp.createCommunityConnector();

function getFields() {
  var fields = cc.getFields();
  var types = cc.FieldType;
  var aggregations = cc.AggregationType;

  fields.newDimension()
    .setId('Users_followers_created_at')
    .setType(types.TEXT);

  fields.newDimension()
    .setId('Users_followers_description')
    .setType(types.TEXT);

  fields.newDimension()
    .setId('Users_followers_entities')
    .setType(types.TEXT);

  fields.newDimension()
    .setId('Users_followers_id')
    .setType(types.NUMBER);

  fields.newDimension()
    .setId('Users_followers_location')
    .setType(types.TEXT);

  fields.newDimension()
    .setId('Users_followers_name')
    .setType(types.TEXT);

  fields.newDimension()
    .setId('Users_followers_pinned_tweet_id')
    .setType(types.NUMBER);

  fields.newDimension()
    .setId('Users_followers_profile_image_url')
    .setType(types.TEXT);

  fields.newDimension()
    .setId('Users_followers_protected')
    .setType(types.BOOLEAN);

  fields.newDimension()
    .setId('Users_followers_public_metrics')
    .setType(types.TEXT);

  fields.newDimension()
    .setId('Users_followers_url')
    .setType(types.TEXT);

  fields.newDimension()
    .setId('Users_followers_username')
    .setType(types.TEXT);

  fields.newDimension()
    .setId('Users_followers_verified')
    .setType(types.BOOLEAN);

  fields.newDimension()
    .setId('Users_followers_withheld')
    .setType(types.TEXT);

  return fields;
}
