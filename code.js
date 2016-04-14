angular.module('myFirst', []).controller('MyFirstCntl', function ($scope, userService) {
    $scope.fullName = userService.getFullName();
}).factory('userService', function () {
    var user = {
        name: 'John',
        surname: 'Nowak'
    };
    return {
        getFullName: function () {
            return user.name + ' ' + user.surname;
        }
    }
});

angular.module('myFirst', []).controller('MyFirstCntl', function ($scope, userService) {
    $scope.fullName = userService();
}).factory('userService', function () {
    var user = {
        name: 'John',
        surname: 'Nowak'
    };
    return function () {
        return user.name + ' ' + user.surname;
    }
});

angular.module('myFirst', []).controller('MyFirstCntl', function ($scope, userService) {
    $scope.fullName = userService;
}).factory('userService', function () {
    var user = {
        name: 'John',
        surname: 'Nowak'
    };
    return user.name + ' ' + user.surname;
});


function UnicornLauncher(apiToken) {
    this.launchedCount = 0;
    this.launch = function () {
        //uses apiToken somehow
        this.launchedCount++;
    }
}

angular.module('myFirst', []).config(function (unicornLauncherProvider) {
    unicornLauncherProvider.setGalaxName('Andromeda');
}).provider('unicornLauncher', function () {
    var galaxyName = 'the Milky Way';

    this.setGalaxyName = function (galaxy) {
        galaxyName = galaxy;
    };

    this.$get = ["apiToken", function (apiToken) {
        return new UnicornLauncher(apiToken, galaxyName);
    }];
}).controller('DemoCntl', function ($scope, unicornLauncher) {
    unicornLauncher.launch();
});


angular.module('myFirst', []).config(function ($routeProvider) {
    $routeProvider.when('/books', {
        templateUrl: '/library/html/books.html',
        controller: 'BooksCntl'
    }).when('/articles', {
        templateUrl: '/library/html/articles.html',
        controller: 'ArticlesCntl'
    })
});


describe('A suite', function () {
    it('contains spec with an expectation', function () {
        expect(true).toBe(true);
    });
});

describe('Calculator Controller', function () {
    beforeEach(module('app'));

    beforeEach(inject(function ($controller, $rootScope) {
        var $scope = $rootScope.$new();
        $controller('CalculatorCtrl', {$scope: $scope});
    }));

    describe('factorial tests', function () {
        it('return 1 for 0!', function () {
            // given when then
            expect($scope.factorial(0)).toBe(1);
        });
    });
});

describe('data service tests', function () {

    var someDataService;
    beforeEach(module('app'));

    beforeEach(inject(function (_someDataService_) {
        someDataService = _someDataService_;
    }));

    describe('get data method', function () {
        it('should return data', function () {
            // given
            var data = [];
            // when
            data = someDataService.getData();
            expect(data.length).toEqual(10);
        });
    });
});

describe('testing directive', function() {
    'use strict';

    var $compile, $rootScope;

    beforeEach(module('moduleName'));
    beforeEach(inject(function(_$compile_, _$rootScope_){
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should replace the directive with an appropriate content', function() {
        var element = $compile('<directive-name></directive-name>')($rootScope);
        $rootScope.$digest();
        expect(element.html()).toContain('expected content');
    });
});
