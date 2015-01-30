angular.module('hs.controllers', []).controller('HomeController', function(Employee) {
  this.employees = Employee.query();

  this.gridOptions = {
    paginationPageSizes: [25, 50, 75],
    paginationPageSize: 25,
    columnDefs: [
      {
        name: 'picture',
        cellTemplate: "<div class='ui-grid-cell-contents'><img class='avatar' src='{{row.entity.picture}}' /></div>"
      },
      {
        name: 'name',
        cellTemplate: "<div class='ui-grid-cell-contents'>{{row.entity.firstName}} {{row.entity.lastName}}</div>"
      },
      {
        name: 'jobTitle'
      },
      {
        name: 'location'
      },
      {
        name: 'email'
      },
      {
        name: 'phoneNumbers'
      }
    ],
    data: this.employees
  };
});