angular.module('shortly.shorten', ['shortly.services'])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here



  $scope.link = {};
  $scope.addLink = function (url) {
    var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;
    if (url.match(rValidUrl)) {  
      var newUrl = {url: url};
      Links.addOne(newUrl).then(function(newLink) {
        $scope.link = newLink.data;
      });
    } else {
      alert('bad url, please verify');
    }
  };

  $scope.signout = function() {
    Auth.signout();
    $location.path('/signin');
  };
});
