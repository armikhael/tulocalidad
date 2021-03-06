// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('tulocalidad', [ 'ionic', 
                                'tulocalidad.controllers', 
                                'tulocalidad.services',
                                'tulocalidad.directives',
                                'tulocalidad.config',
                                'uiGmapgoogle-maps',
                                'ngResource', 
                                'ngCordova', 
                                'chieffancypants.loadingBar',
                                'ngMaterial'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, cfpLoadingBarProvider) {
  
  cfpLoadingBarProvider.includeSpinner = true;

  $stateProvider

    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    /*--------------------------Tab Recomendado ---------------------------------*/
    .state('tab.recomendados', {
      url: "/recomendados",
      views: {
        'tab-recomendados': {
          templateUrl: "templates/tab-recomendados/recomendados.html",
          controller: 'RecomendadosCtrl'
        }
      }
    })

    .state('tab.recomendados-detalle', {
      url: "/recomendados-detalle",
      views: {
        'tab-recomendados': {
          templateUrl: "templates/tab-recomendados/recomendados-detalle.html",
          controller: 'RecomendadosDetalleCtrl'
        }
      }
    })

    .state('tab.recomendados-empresas-detalle', {
      url: "/recomendados-empresas-detalle/:id_empresa",
      views: {
        'tab-recomendados': {
          templateUrl: "templates/tab-recomendados/empresas-detalle.html",
          controller: 'EmpresaDetalleCtrl'
        }
      }
    })

    .state('tab.empresa-recomendados-detalle', {
      url: "/empresa-recomendados-detalle",
      views: {
        'tab-recomendados': {
          templateUrl: "templates/tab-recomendados/empresa-recomendados-detalle.html",
          controller: 'RecomendadosDetalleCtrl'
        }
      }
    })

    .state('tab.empresa-detalle-mapa-recomendado', {
      url: "/empresa-detalle-mapa-recomendado",
      views: {
        'tab-recomendados': {
          templateUrl: "templates/tab-recomendados/empresa-detalle-mapa.html",
          controller: 'EmpresaDetalleCtrl'
        }
      }
    })

    .state('tab.empresa-caracteristicas-recomendado', {
      url: "/empresa-caracteristicas-recomendado",
      views: {
        'tab-recomendados': {
          templateUrl: "templates/tab-recomendados/empresa-caracteristicas.html",
          controller: 'EmpresaDetalleCtrl'
        }
      }
    })

    .state('tab.acerca', {
      url: "/acerca",
      views: {
        'tab-recomendados': {
          templateUrl: "templates/tab-recomendados/acerca.html",
          controller: 'AcercaCtrl'
        }
      }
    })

    
    .state('tab.configuracion', {
      url: "/configuracion",
      views: {
        'tab-recomendados': {
          templateUrl: "templates/tab-recomendados/configuracion.html",
          controller: 'ConfiguracionCtrl'
        }
      }
    })


    /*-----------------------------------Tab Categoria----------------------------------------*/
    .state('tab.categoria', {
      url: "/categoria",
      views: {
        'tab-categoria': {
          templateUrl: "templates/tab-categoria/categoria.html",
          controller: 'CategoriasCtrl'
        }
      }
    })

    .state('tab.empresas', {
      url: "/empresas/:id_categoria",
      views: {
        'tab-categoria': {
          templateUrl: "templates/tab-categoria/empresas.html",
          controller: 'EmpresaCtrl'
        }
      }
    })

    .state('tab.empresas-detalle', {
      url: "/empresas-detalle/:id_empresa",
      views: {
        'tab-categoria': {
          templateUrl: "templates/tab-categoria/empresas-detalle.html",
          controller: 'EmpresaDetalleCtrl'
        }
      }
    })

    .state('tab.categoria-recomendados-detalle', {
      url: "/categoria-recomendados-detalle",
      views: {
        'tab-categoria': {
          templateUrl: "templates/tab-categoria/recomendados-detalle.html",
          controller: 'RecomendadosDetalleCtrl'
        }
      }
    })

    .state('tab.empresa-detalle-mapa', {
      url: "/empresa-detalle-mapa",
      views: {
        'tab-categoria': {
          templateUrl: "templates/tab-categoria/empresa-detalle-mapa.html",
          controller: 'EmpresaDetalleCtrl'
        }
      }
    })

    .state('tab.empresa-caracteristicas', {
      url: "/empresa-caracteristicas",
      views: {
        'tab-categoria': {
          templateUrl: "templates/tab-categoria/empresa-caracteristicas.html",
          controller: 'EmpresaDetalleCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/recomendados');
});
