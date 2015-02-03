angular.module('hs.controllers').controller('HomeController', function(Employee) {
  var self = this;

  this.gridOptions = {
    filters: {
      name: '',
      jobTitle: '',
      location: '',
      email: ''
    },
    orderBy: 'name',
    reverseOrder: false,
    currentPage: 1,
    pageSize: 25,
    pageSizes: [25, 50, 75],
    maxNavSize: 5
  };

  this.loading = true;
  this.employees = Employee.query(function() {
    self.loading = false;
  });

  this.noCache = new Date().getTime();

  this.sortGrid = function(orderBy) {
    if (this.gridOptions.orderBy === orderBy) {
      this.gridOptions.reverseOrder = !this.gridOptions.reverseOrder;
    } else {
      this.gridOptions.orderBy = orderBy;
      this.gridOptions.reverseOrder = false;
    }
  }
});