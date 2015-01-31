angular.module('hs.controllers', []).controller('HomeController', function(Employee) {
  this.employees = Employee.query();

  this.gridOptions = {
    enableFiltering: true,
    paginationPageSizes: [25, 50, 75],
    paginationPageSize: 25,
    columnDefs: [
      {
        name: 'picture',
        cellTemplate: "<div class='ui-grid-cell-contents'><img class='avatar' src='{{row.entity.picture}}' /></div>",
        enableFiltering: false
      },
      {
        name: 'name' // Composite of firstName and lastName which is done by the server
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
        name: 'phoneNumbers',
        enableFiltering: false
      }
    ],
    data: this.employees
  };
});