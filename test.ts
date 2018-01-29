import { bootstrap, element as $, module } from 'angular'
import { $http } from 'ngimport'
import { $resource } from './'

describe('ngimport-ngresource', () => {
  it('should define angular builtins after the app is bootstrapped', () => {
    const element = div()
    module('a', ['bcherny/ngimport', 'bcherny/ngimport/ngResource'])
    bootstrap(element, ['a'])
    expect($http).toBeDefined('$http')
    expect($resource).toBeDefined('$resource')
    element.remove()
  })
})

function div() {
  return $(document.createElement('div'))
}
