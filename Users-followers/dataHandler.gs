function responseToRows(requestedFields, response) {

  // Transform parsed data and filter for requested fields
  var fields = requestedFields.asArray();

  return response.map(function(dataElement) {
    var rows = [];
    
    fields.forEach(function (field) {
      
      switch (field.getId()) {
        case 'Users_followers_created_at':
          return rows.push(dataElement.created_at);
        case 'Users_followers_description':
          return rows.push(dataElement.description);
        case 'Users_followers_entities':
          return rows.push(dataElement.entities);
        case 'Users_followers_id':
          return rows.push(dataElement.id);
        case 'Users_followers_location':
          return rows.push(dataElement.location);
        case 'Users_followers_name':
          return rows.push(dataElement.name);
        case 'Users_followers_pinned_tweet_id':
          return rows.push(dataElement.pinned_tweet_id);
        case 'Users_followers_profile_image_url':
          return rows.push(dataElement.profile_image_url);
        case 'Users_followers_protected':
          return rows.push(dataElement.protected);
        case 'Users_followers_public_metrics':
          return rows.push(dataElement.public_metrics);
        case 'Users_followers_url':
          return rows.push(dataElement.url);
        case 'Users_followers_username':
          return rows.push(dataElement.username);
        case 'Users_followers_verified':
          return rows.push(dataElement.verified);
        case 'Users_followers_withheld':
          return rows.push(dataElement.withheld);
        default:
          break;
      }
    });

    return { values: rows };
  });
}
