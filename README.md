# Twitter connectors for GDataStudio
Google Data Studio connectors to fetch data from Twitter API.

## Connectors organization
There is a main connector called `Core`: it retrieves and handles data to bring it properly for GDS and it sets the authentication method.
Children connectors (like Users-followers) use Core functions and also have specific functions for their API endpoint.

## How to use them on GDS

### Setup Core connector
1. Go to [Google Apps Script](https://script.google.com)
2. Create a new project
3. Name it
4. Go to project settings
5. Check `Display appsscript.json manifest file`
6. Take note about Script ID (useful for children connectors)
7. Go back to code window
8. Create files and set code for Core connector

### Setup child connector
1. Go to [Google Apps Script](https://script.google.com)
2. Create a new project
3. Name it
4. Go to project settings
5. Check `Display appsscript.json manifest file`
7. Go back to code window
8. Create files and set code for the child connector
9. In `appsscript.json`, change `Dependencies` > `Libraries` > `LibraryID` to the Core script ID you took note
10. Deploy it (easiest by going through `Use old editor` button > `Publish` > `Publish from manifest file`)

### Use connectors in GDS
1. Go to [Google Data Studio](https://datastudio.google.com)
2. Create > Data source
3. Search for your deployed child connector
4. Fill credentials
5. Now you can import it in your GDS reports

## Get access token
1. Create a Twitter developer account
2. On your developer portal, create an app
3. Check app permissions that must match with your needs
4. Take note of the Bearer token for your app (since you cannot view it again, or past token will be overwritten)
5. Use it to fill your connector credentials

## How to create a new Twitter connector
First, copy Users-followers connector as template.

Then you have 3 things to change :
1. Change `endpoint` and `subEndpoint` global vars to the GET method you want 
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
