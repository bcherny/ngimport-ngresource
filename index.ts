import * as angular from 'angular'
import 'angular-resource'

export let $resource: angular.resource.IResourceService

// prevent double-loading, which has the potential
// to prevent sharing state between services
let m: angular.IModule
try {
  m = angular.module('bcherny/ngimport/ngResource')
} catch (e) {
  m = angular.module('bcherny/ngimport/ngResource', ['ngResource'])
}

m.run(['$injector', ($i: angular.auto.IInjectorService) => {
  $resource = $i.get('$resource')
}])
