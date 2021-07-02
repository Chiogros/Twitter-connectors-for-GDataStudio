function setConfig(config) {
  
  config.newInfo()
    .setId('instructions')
    .setText('You need to have a Twitter developer account (for the bearer token) and the Twitter account ID to watch data');
  
  config.newTextInput()
    .setId('bearer_token')
    .setName('Enter Bearer token')
    .setHelpText('https://developer.twitter.com/en/docs/authentication/oauth-2-0/bearer-tokens')
    .setPlaceholder('Bearer token');

  config.newTextInput()
    .setId('account_ID')
    .setName('Enter account ID')
    .setHelpText('https://tweeterid.com/')
    .setPlaceholder('Account ID');
  
  return config;
}
