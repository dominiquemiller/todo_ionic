// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.service('ToDo', function(){
  var todos = [
        {'title': 'Test1', 'date': '', 'done': 'false'},
        {'title': 'Test2', 'date': '', 'done': 'false'},
        {'title': 'Test3', 'date': '', 'done': 'true'},
        {'title': 'Test4', 'date': '', 'done': 'true'}];

  this.list = function() {
    return todos;
  };

  this.add = function(todo) {
    todos.splice(0, 0, todo);
  };

  this.delete = function(index){
    todos.splice(index, 1);
  };

})

.controller('TodoController', ['$scope', 'ToDo', function($scope, ToDo){
    $scope.todos = ToDo.list();

    var todoDate = function() {
        var d = new Date();
        var month = d.getMonth() + 1;
        var year = d.getFullYear();
        var day = d.getDate();
        var newDate = month + '/' + day + '/' + year;
        return newDate;
    };

    $scope.addTodo = function(todo) {
      todo.done = false;
      todo.date = todoDate();
      ToDo.add(angular.copy(todo));
      todo.title = '';
    };

    $scope.deleteTodo = function(index) {
      console.log(index);
      ToDo.delete(index);
    };

}]);
