angular
  .module('app')
  .factory('localStorageService', localStorageService);

localStorageService.$inject = ['$window'];

function localStorageService($window) {
  var service = {
    ok     : !!$window.localStorage,
    save   : save,
    load   : load,
    remove : remove,
    exists : exists
  };
  return service;

  function save(path, data) {
    try { data = JSON.stringify(data, null, 2); } catch (e) {}
    $window.localStorage[path] = data;
  }
  function load(path) {
    var data = $window.localStorage[path];
    try { data = JSON.parse(data); } catch (e) {}
    return data;
  }
  function remove(path) {
    delete $window.localStorage[path];
  }
  function exists(path) {
    return path in $window.localStorage;
  }
}
