app.controller('authCtrl', [
'$scope',
'$state',
'auth',
function($scope, $state, auth){
  $scope.signup = function () {
    if (!$scope.user.name || !$scope.user.email || 
        !$scope.user.password || !$scope.user.passwordConfirm) {
      $scope.error = {message: 'Please fill out all fields.'};
      return
    } else if ($scope.user.password !== $scope.user.passwordConfirm) {
      $scope.error = {message: 'Passwords do not match.'};
      return
    }
    auth.signup($scope.user).error(function(error){
      $scope.error = error;
    }).then(function() {
      $state.go('proposals');
    });
  };

  $scope.login = function () {
    if (!$scope.user.email || !$scope.user.password) {
      $scope.error = {message: 'Please fill out all fields.'};
    } else {
      auth.login($scope.user).error(function(error){
        $scope.error = error;
      }).then(function() {
        $state.go('proposals');
      });
    }
  };
}]);

app.controller('navCtrl', [
'$scope',
'auth',
function($scope, auth){
  // get info by calling isLoggedIn() and currentUser()
  $scope.isLoggedIn = auth.isLoggedIn;
  $scope.currentUser = auth.currentUser;
  $scope.privilege = auth.privilege;
  $scope.staffId = auth.staffId;
  $scope.logOut = auth.logOut;
}]);

app.controller('proposeCtrl', [
'$scope',
'$state',
'$http',
'auth',
'proposals',
function ($scope, $state, $http, auth, proposals) {
  $scope.subjects = proposals.subjects;

  $scope.submit = function() {
    if (!$scope.prob.subject || !$scope.prob.difficulty ||
        !$scope.prob.problem || !$scope.prob.answer ||
        !$scope.prob.solution) {
      $scope.error = {message: 'Please fill out all fields.'};
      return
    }

    var prob = $scope.prob;
    prob.staff_id = auth.staffId();
    proposals.create(prob);
    $state.go('proposals');
  }
}]);

app.controller('manageContestCtrl', [
'$scope',
'proposals',
function ($scope, proposals) {
  $scope.bank = proposals.bank;
  $scope.changeChecked = proposals.changeChecked;
}]);

app.controller('manageUsersCtrl', [
'$scope',
'staff',
'auth',
function ($scope, staff, auth) {
  $scope.staff = staff.staff;
  $scope.changePrivilege = staff.changePrivilege;
  $scope.staffId = auth.staffId;
}]);

app.controller('probBankCtrl', [
'$scope',
'$http',
'proposals',
function ($scope, $http, proposals) {
  $scope.bank = proposals.bank;
}]);

app.controller('myProposalsCtrl', [
'$scope',
'$http',
'proposals',
function ($scope, $http, proposals) {
  $scope.subjects = proposals.subjects;
  $scope.probs = proposals.probs;
}]);

app.controller('viewProbCtrl', [
'$scope',
'$state',
'auth',
'proposals',
'comments',
'solutions',
function ($scope, $state, auth, proposals, comments, solutions) {
  $scope.comments = comments.comments;
  $scope.solutions = solutions.solutions;

  var p = proposals.prob;
  if (p == []) {
    $state.go('proposals') //@TODO go to an error message
  } else {
    $scope.prob = proposals.prob[0];
    $scope.revealIdentity = function() {
      document.getElementById("prob-author").innerHTML = $scope.prob.staffid;
      document.getElementById("prob-author").removeAttribute("href");
    };
  }

  $scope.submitComment = function () {
    $scope.comment.staffid = auth.staffId();
    $scope.comment.probid = $scope.prob.probid;
    comments.create(angular.copy($scope.comment));
    $scope.comments.push(angular.copy($scope.comment));
    $scope.comment.comment = '';
  };

  $scope.submitSolution = function () {
    $scope.solution.staffid = auth.staffId();
    $scope.solution.probid = $scope.prob.probid;
    solutions.create(angular.copy($scope.solution));
    $scope.solutions.push(angular.copy($scope.solution));
    $scope.solution.solution = '';
  };
}]);

app.controller('editProbCtrl', [
'$scope',
'$state',
'$location',
'proposals',
function ($scope, $state, $location, proposals) {
  var p = proposals.prob;
  if (p == []) {
    $state.go('proposals') //@TODO go to an error message
  } else {
    p = p[0];
    p.difficulty = p.difficulty.toString();
    $scope.prob = p;
  }

  $scope.put = function () {
    proposals.put(p.probid, p);
    $location.path('proposals');
  }

  $scope.delete = function () {
    proposals.delete(p.probid);
    $location.path('proposals');
  }
}]);

app.controller('homeCtrl', [
'$scope',
'auth',
function($scope, auth){
  $scope.isLoggedIn = auth.isLoggedIn;
  $scope.currentUser = auth.currentUser;
  $scope.privilege = auth.privilege;
}]);
