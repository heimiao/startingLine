var myApp = angular.module("myApp", ['ui.router', 'ngCookies', 'ngFileUpload']);
//配置路由
myApp.config(function($httpProvider, $stateProvider, $urlRouterProvider) {
	//添加拦截器
	$httpProvider.interceptors.push("myInterceptor");
	//设置默认的加载模块
	$urlRouterProvider.otherwise('/index');
	$stateProvider
		//贫困户列表
		.state('index', {
			url: '/index',
			controller: "index-contro",
			templateUrl: 'dist/template/index.html'
		})
		// 登录
		.state('login', {
			url: '/login',
			controller: "login",
			templateUrl: 'dist/template/login.html'
		})
});