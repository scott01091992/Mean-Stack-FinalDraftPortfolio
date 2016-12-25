myApp.config(function ($routeProvider){
  $routeProvider
    .when('/',{
      templateUrl: '../html/main.html'
    })
    .otherwise({
      redirectTo: '/'
    })
});
