angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  //   function MyCtrl($scope, $ionicHistory) {
  //     $scope.myGoBack = function() {
  //       $ionicHistory.goBack();
  //   };
  // }

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };
    //CADASTRO DE USUARIO
    $scope.cadastroUsuario = function(cadastro){
      console.log(cadastro);
    };

    //Cria e deletar novos inputs de tags
    $scope.inputs = [{value: null}];
    $scope.addfield = function () {
        $scope.inputs.push({value: null});
    }
    $scope.removefield = function (index) {
    $scope.inputs.splice(index, 1);
    }
})

.controller('PlaylistsCtrl', function($scope) {
//  $scope.playlists = [
    //{ title: 'Reggae', id: 1 },
    //{ title: 'Chill', id: 2 },
    //{ title: 'Dubstep', id: 3 },
    //{ title: 'Indie', id: 4 },
    //{ title: 'Rap', id: 5 },
    //{ title: 'Cowbell', id: 6 }
  //];
})

.controller('CadastroCtrl', function($scope, $cordovaCamera, $cordovaFile) {
    $scope.images = [];

    $scope.addImage = function() {
      console.log("add image");
    }

    $scope.urlForImage = function(imageName) {
        console.log("get correct path for image");
    }

    //Parte de pegar dados do cadastro
    getData();
    $scope.cadastroUsuario = function(cadastro){
      console.log(cadastro);
    }
});
