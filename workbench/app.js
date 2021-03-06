var app = angular.module("test-app", ['grid']);

app.controller("TestGridCtrl", function($scope) {
   $scope.employees = [
      {employeeId: 1, firstName: "John", lastName: "Smith", department: "Legal", birthday: 450997200000, salary: 123123},
      {employeeId: 2, firstName: "Ali", lastName: "Veli", department: "Muhasebe", birthday: 450997200000, salary: 123123},
      {employeeId: 3, firstName: "John", lastName: "Smith", department: "Legal", birthday: 450997200000, salary: 123123},
      {employeeId: 4, firstName: "John", lastName: "Smith", department: "Legal", birthday: 450997200000, salary: 123123},
      {employeeId: 5, firstName: "John", lastName: "Smith", department: "Legal", birthday: 450997200000, salary: 123123},
      {employeeId: 6, firstName: "John", lastName: "Smith", department: "Legal", birthday: 450997200000, salary: 123123},
      {employeeId: 7, firstName: "John", lastName: "Smith", department: "Legal", birthday: 450997200000, salary: 123123},
      {employeeId: 8, firstName: "Ali", lastName: "Veli", department: "Muhasebe", birthday: 450997200000, salary: 123123},
      {employeeId: 9, firstName: "John", lastName: "Smith", department: "Legal", birthday: 450997200000, salary: 123},
      {employeeId: 10, firstName: "John", lastName: "Smith", department: "Legal", birthday: 450997200000, salary: 123123},
      {employeeId: 11, firstName: "Zohn", lastName: "Smith", department: "Legal", birthday: 450997200000, salary: 123123},
      {employeeId: 12, firstName: "Şeyma", lastName: "Smith", department: "Legal", birthday: 450997200000, salary: 123123}
   ];

   var xyz = function(text) {
      return "<a href='http://google.com?q="+text+"'>"+text+"</a>";
   }

   $scope.columns = [
      {title:"Employee Id", field: "employeeId", width: "10%"},
      {title:"First Name", field: "firstName", renderFn: xyz},
      {title:"Last Name", field: "lastName"},
      {title:"Department", field: "department"},
      {title: "Birthday", field: "birthday", filter: "date:'dd.MM.yyyy'"},
      {title: "Salary", field: "salary", filter: "currency:'$ '", width: "10%"}
   ];

   $scope.gridOptions = {
      pageSize: 5,
      i18n: 'en'
   }

   $scope.assignSelectedRow = function(row){
      $scope.selectedRow =  row;
   }
});