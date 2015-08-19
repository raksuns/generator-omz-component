(function() {
'use strict';
angular.module('<%= scriptAppName %>')
    .service('<%= cameledName %>', <%= classedName%>);


/* @ngInject */
function <%=classedName%>() {
    // AngularJS will instantiate a singleton by calling "new" on this function
}

})();
