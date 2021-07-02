# Twitter-connectors-for-GDataStudio
Google Data Studio connectors to fetch data from Twitter API.

## To create a new Twitter connector
First, copy Users-followers connector as template.

Then you have 3 things to change :
1. Change `endpoint` and `subEndpoint` global vars to a GET method you want 
https://developer.twitter.com/en/docs/twitter-api/api-reference-index
```javascript
// core.gs
var endpoint = 'users';
var subEndpoint = 'followers';
```
2. Change `optionalFields` with the ones listed on the GET method page
(warning : the first element must be concatened to `?parameter.name=`)
```javascript
// core.gs
var optionalFields = ['?user.fields=created_at', 'description', ...];
```

3. Put fetchable fields from API
They can be the same as the optionalFields you put before.
```javascript
// fields.gs
function getFields(request) {
  var fields = cc.getFields();
  var types = cc.FieldType;
  var aggregations = cc.AggregationType;

  fields.newDimension()
    .setId('Users-followers_created_at')
    .setType(types.TEXT); // BOOLEAN, TEXT, ...
    
  fields.newDimension()
    .setId('Users-followers_X')
    .setType(types.TEXT); // BOOLEAN, NUMBER, ...
  
  // put all fetchable fields
  
  return fields;
}
```
4. Handle each data row
```javascript
// dataHandler.gs
function responseToRows(requestedFields, response) {

  // Filter for requested fields
  var fields = requestedFields.asArray();

  return response.map(function(dataElement) {
    var rows = [];
    
    fields.forEach(function (field) {

      switch (field.getId()) {
        case 'Users-followers_created_at':
          return rows.push(dataElement.created_at);
        case 'Users-followers_X':
          return rows.push(dataElement.X);
        // put all other cases
        default:
          break;
      }
    });

    return { values: rows };
  });
}
```



## If needed
Send me an email at alexandre.bouijoux@gmail.com :)
