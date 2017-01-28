class HeaderDirective {
    constructor() {
        // directives are created with fuctions not classes
        return () => {
            // directive configuration object
            return {
                restrict: 'E',
                scope: {},
                templateUrl: 'layout/header.template.html',
                controller: this.headerCtrl,
                controllerAs: '$ctrl'
            };
        };
    }

    headerCtrl(AppConstants) {
        'ngInject';
        this.name = AppConstants.appName;
    }
}

export default new HeaderDirective;