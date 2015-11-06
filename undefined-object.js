if (Meteor.isClient) {
  // Server logs 'undefined'
  Template.body.onCreated(function() {
    this.subscribe('test', {});
  });

  // Works as expected, server logs an empty object {}
  // Meteor.subscribe('test', {});
}

if (Meteor.isServer) {
  Meteor.publish('test', function(options) {
    console.log(options);
  });
}
