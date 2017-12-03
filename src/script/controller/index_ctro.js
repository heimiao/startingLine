myApp.controller("index-contro", ["$scope", "$rootScope", "$state", "$http", "$stateParams",
	function($scope, $rootScope, $state, $http, $stateParams) {
		var baseInfo = baseInfo || {};
		 
		//根据角色遍历响应的菜单
		$scope.baseInfo = baseInfo;
	}
]);