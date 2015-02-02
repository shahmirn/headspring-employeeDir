angular.module('hs.controllers').controller('HomeController', function($scope, Employee, uiGridConstants) {
  var self = this;

  var getViewportWidth = function() {
    var viewportWidth = $(window).width();
    return {
      atLeast768: viewportWidth >= 768,
      atLeast992: viewportWidth >= 992
    }
  };

  this.employees = Employee.query();

  var viewportWidth = $(window).width();
  var visible = getViewportWidth();

  this.columns = [
    {
      name: 'picture',
      cellTemplate: "<div class='ui-grid-cell-contents'><img class='avatar img-circle' ng-src='{{row.entity.picture}}' /></div>",
      enableFiltering: false,
      visible: visible.atLeast992
    },
    {
      name: 'name', // Composite of firstName and lastName which is done by the server
      cellTemplate: "<div class='ui-grid-cell-contents'><a href='#/employee/{{row.entity._id}}'>{{row.entity.name}}</a></div>",
    },
    {
      name: 'jobTitle',
      visible: visible.atLeast768
    },
    {
      name: 'location',
      visible: visible.atLeast768
    },
    {
      name: 'email'
    }
  ];

  this.gridOptions = {
    enableFiltering: true,
    paginationPageSizes: [25, 50, 75],
    paginationPageSize: 25,
    columnDefs: this.columns,
    onRegisterApi: function(gridApi) {
      self.gridApi = gridApi;
    },
    data: this.employees
  };

  // Drop columns on screen resize
  var hideColumns = function() {
    var visible = getViewportWidth();

    self.columns[0].visible = visible.atLeast992;
    self.columns[2].visible = visible.atLeast768;
    self.columns[3].visible = visible.atLeast768;

    self.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
  };

  $(window).resize(function() {
    hideColumns();
  });
});