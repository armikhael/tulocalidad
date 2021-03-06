angular.module('tulocalidad.controllers')

.controller('EmpresaDetalleCtrl', function($scope, $ionicHistory, $ionicPopup, $ionicScrollDelegate, $rootScope, $window, $cordovaSocialSharing, detalle_empresa) {
    console.log('EmpresaDetalleCtrl');

    $scope.myGoBack = function() {
        $ionicHistory.goBack();
    };

    $scope.openGeo = function(latitude, longitude, latitude_go, longitude_go) {
        $window.open('geo:' + latitude + ',' + longitude + '?z=11&q=' + latitude_go + ',' + longitude_go + '(Treasure)', '_system', 'location=yes');
    };

    $scope.id_publicidad = function(id_publicidad) {
        $rootScope.id_publicidad = id_publicidad;
    };

    $scope.numLimit = 200;
    
    detalle_empresa.get({'id_empresa': $rootScope.id_empresa})
        .$promise.then(function(data) {
            if (data.success == true){
                $scope.empresa  = data.consulta.detalle;
                $scope.map = {  center: 
                                {   latitude: data.consulta.detalle[0].positionmap_empresa_latitude, 
                                    longitude:  data.consulta.detalle[0].positionmap_empresa_longitude
                                },
                                marker: 
                                {   latitude: data.consulta.detalle[0].positionmap_empresa_latitude, 
                                    longitude:  data.consulta.detalle[0].positionmap_empresa_longitude
                                }, 
                                zoom: 17, 
                                id: 0,
                                options: {scrollwheel: false}
                            };
                $scope.publicidades = data.consulta.publicidades;
            }else{
                $ionicPopup.alert({ title:    'Disculpe!',
                                    template: data.mensaje});
            }
        }, function(error) {
            if ( error.status === 0 || error.status === 404 ) {
                $ionicPopup.alert({ title:    'Error de Conexión',
                                    template: 'No es posible establecer conexión a Internet.'});
            }
        });

});
