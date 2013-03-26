Meteor.serveHead(function(req) {
  var urlSplitted = req.url.split('/');
  var postId = urlSplitted[urlSplitted.length - 1];
  var post = null;
  try {
    post = Posts.findOne(postId);
  } catch (e) {
  }
  if (post) {
    return '<meta property="og:title" content="' + post.headline + '" />' +
           '<meta property="og:description" content="' + post.body + '" />' +
           '<meta property="og:image" content="' + Meteor.absoluteUrl() + 'img/brasil.png" />' +
           '<meta property="og:site_name" content="Hacker News Brasil" />' + 
           '<meta property="og:url" content="' + Meteor.absoluteUrl() + req.url + '" />';
  } else {
    return '<meta property="og:title" content="Hacker News Brasil" />' +
           '<meta property="og:image" content="' + Meteor.absoluteUrl() + 'img/brasil.png" />' +
           '<meta property="og:site_name" content="Hacker News Brasil" />'+
           '<meta property="og:url" content="' + Meteor.absoluteUrl() + req.url + '" />';
  }
});
