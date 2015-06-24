;(function () {

  'use strict';

  angular.module('CoolModule', [])

  .controller('CoolController', ['$scope',
    function($scope) {

      $scope.allTasks = [];

      var Todo = function(taskItem) {
        this.task = taskItem;
        this.complete = false;
      };

      $scope.remaining = function() {
        var remainingItems = _.filter($scope.allTasks, function(t) {
          return t.complete === false;
        });
        return remainingItems.length;
      };

      $scope.addTodo = function(x) {
        var t = new Todo(x.item);
        $scope.allTasks.push(t);
        $scope.task = {};
      };

      $scope.toggleStatus = function(y) {
        y.complete = (y.complete) ? false : true;
      };

    }

  ]);

}());
