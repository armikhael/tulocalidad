angular.module('starter.controllers', [])

.controller('InitKey', function($scope) {
    console.log('InitKey');
})

.controller('CategoriasCtrl', function($scope, Categorias) {
    $scope.categorias = Categorias.all();
})

.controller('EmpresaCtrl', function($scope, $stateParams, Categorias) {
    $scope.categoria = Categorias.get($stateParams.categoriaId);
});
