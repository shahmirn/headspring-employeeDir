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
        name: 'name',
        cellTemplate: "<div class='ui-grid-cell-contents'>{{row.entity.firstName}} {{row.entity.lastName}}</div>",
        filter: {
          condition: function(searchTerm, cellValue, row, column) {
            searchTerm = searchTerm.toLowerCase();
            var firstName = row.entity.firstName.toLowerCase();
            var lastName = row.entity.lastName.toLowerCase();

            return firstName.indexOf(searchTerm) === 0 || 
              lastName.indexOf(searchTerm) === 0 || 
              (firstName + ' ' + lastName).indexOf(searchTerm) === 0;
          }
        }
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