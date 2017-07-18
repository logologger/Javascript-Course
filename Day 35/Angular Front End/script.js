var app=angular.module("myapp",[]);

angular.module("myapp").controller("TodoCtrl",TodoCtrl);

function TodoCtrl($scope,$http) {
  
  $scope.todos = [
    {text:'Learn AngularJS', done:false},         
    {text: 'Build an app', done:false},
    {text:'Buy Vegetables',done:false}
  ];


  $http.get("http://localhost:3000/task")
    .then(function(response){
    $scope.todos=response.data;
  });
  
  $scope.getTotalTodos = function () {
    return $scope.todos.length;
  };
  
  
  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
  };
  
    $scope.clearCompleted = function () {
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        });
    };
}