// //load all existing customers
// getAll();
//
// //add customer event
// $("#saveBtn1").click(function () {
//     if (checkAll()){
//         saveCustomer();
//     }else{
//         alert("Error");
//     }
//
// });
//
// //get all customer event
// $("#getAllBtn1").click(function () {
//     getAll();
// });
//
// //bind tr events for getting back data of the rows to text fields
// function bindTrEvents() {
//     $('#customerTableBody>tr').click(function () {
//         //get the selected rows data
//         let id = $(this).children().eq(0).text();
//         let name = $(this).children().eq(1).text();
//         let address = $(this).children().eq(2).text();
//         let salary = $(this).children().eq(3).text();
//
//         //set the selected rows data to the input fields
//         $("#customerId").val(id);
//         $("#customerName1").val(name);
//         $("#customerAddress1").val(address);
//         $("#customerSalary1").val(salary);
//     })
// }
//
// //delete btn event
// $("#deleteBtn1").click(function () {
//     let id = $("#customerId").val();
//
//     let consent = confirm("Do you want to delete.?");
//     if (consent) {
//         let response = deleteCustomer(id);
//         if (response) {
//             alert("Customer Deleted");
//             clearCustomerInputFields();
//             getAllCustomers();
//         } else {
//             alert("Customer Not Removed..!");
//         }
//     }
// });
//
// //update  btn event
// $("#updateBtn1").click(function () {
//     let id = $("#customerId").val();
//     updateCustomer(id);
//     clearCustomerInputFields();
// });
//
// //clear btn event
// $("#btn-clear1").click(function () {
//     clearCustomerInputFields();
// });
//
//
//
// // CRUD operation Functions
// function saveCustomer() {
//     let id = $("#customerId").val();
//     if (searchCustomer(id.trim()) == undefined) {
//         let name = $("#customerName1").val();
//         let address = $("#customerAddress1").val();
//         let salary = $("#customerSalary1").val();
//
//         customer.push({
//             id:id,
//             name: name,
//             address:address,
//             salary:salary
//
//         });
//         // customerDB.push(customerOb);
//         clearCustomerInputFields();
//         getAll();
//
//     } else {
//         alert("Customer already exits.!");
//         clearCustomerInputFields();
//     }
// }
//
// function getAllCustomers() {
//     //clear all tbody data before add
//     $("#customerTableBody").empty();
// }
//
//     //get all customers
//     function getAll() {
//         //clear all tbody data before add
//         $("#customerTableBody").empty();
//
//         let tableBodycustomer = $("#customerTableBody");
//         //get all customers
//         for (let i = 0; i < customer.length; i++) {
//             let tr = `<tr>
//                         <td>${customer[i].id}</td>
//                         <td>${customer[i].name}</td>
//                         <td>${customer[i].address}</td>
//                         <td>${customer[i].salary}</td>
//                      </tr>`
//             // //and then append the row to tableBody
//             tableBodycustomer.append(tr);
//             //invoke this method every time
//             // we add a row // otherwise click
//             //event will not work
//             bindTrEvents();
//         }
//     }
//
//     function deleteCustomer(id) {
//         for (let i = 0; i < customer.length; i++) {
//             if (customer[i].id == id) {
//                 customer.splice(i, 1);
//                 return true;
//             }
//         }
//         return false;
//     }
//
//     function searchCustomer(id) {
//         return customer.find(function (customerS) {
//             //if the search id match with customer record
//             //then return that object
//             return customerS.id == id;
//         });
//     }
//
//     function updateCustomer(id) {
//         if (searchCustomer(id) == undefined) {
//             alert("No such Customer..please check the ID");
//         } else {
//             let consent = confirm("Do you really want to update this customer.?");
//             if (consent) {
//                 let customer = searchCustomer(id);
//                 //if the customer available can we update.?
//
//                 let name = $("#customerName1").val();
//                 let address = $("#customerAddress1").val();
//                 let salary = $("#customerSalary1").val();
//
//                 customer.name = name;
//                 customer.address = address;
//                 customer.salary = salary;
//
//                 getAll();
//             }
//         }
//
//     }
//
//
//
//
//load all existing customers
getAllCustomers();

//add customer event
$("#saveBtn1").click(function () {
    if (checkAll()){
        saveCustomer();
    }else{
        alert("Error");
    }

});

//get all customer event
$("#getAllBtn1").click(function () {
    getAllCustomers();
});

//bind tr events for getting back data of the rows to text fields
function bindTrEvents() {
    $('#customerTableBody>tr').click(function () {
        //get the selected rows data
        let id = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let address = $(this).children().eq(2).text();
        let salary = $(this).children().eq(3).text();

        //set the selected rows data to the input fields
        $("#customerId").val(id);
        $("#customerName1").val(name);
        $("#customerAddress1").val(address);
        $("#customerSalary1").val(salary);
    })
}

//delete btn event
$("#deleteBtn1").click(function () {
    let id = $("#customerId").val();

    let consent = confirm("Do you want to delete.?");
    if (consent) {
        let response = deleteCustomer(id);
        if (response) {
            alert("Customer Deleted");
            clearCustomerInputFields();
            getAllCustomers();
        } else {
            alert("Customer Not Removed..!");
        }
    }


});

//update  btn event
$("#updateBtn1").click(function () {
    let id = $("#customerId").val();
    updateCustomer(id);
    clearCustomerInputFields();
});

// //clear btn event
// $("#btn-clear1").click(function () {
//     clearCustomerInputFields();
// });



// CRUD operation Functions
function saveCustomer() {
    let customerID = $("#customerId").val();
    //check customer is exists or not?
    if (searchCustomer(customerID.trim()) == undefined) {

        //if the customer is not available then add him to the array
        let customerName = $("#customerName1").val();
        let customerAddress = $("#customerAddress1").val();
        let customerSalary = $("#customerSalary1").val();

        //by using this one we can create a new object using
        //the customer model with same properties
        let newCustomer = Object.assign({}, customer);
        newCustomer.id = customerID;
        newCustomer.name = customerName;
        newCustomer.address = customerAddress;
        newCustomer.salary = customerSalary;

        //add customer record to the customer array (DB)
        customerDB.push(newCustomer);
        clearCustomerInputFields();
        getAllCustomers();

    } else {
        alert("Customer already exits.!");
        clearCustomerInputFields();
    }
}

function getAllCustomers() {
    //clear all tbody data before add
    $("#customerTableBody").empty();

    //get all customers
    for (let i = 0; i < customerDB.length; i++) {
        let id = customerDB[i].id;
        let name = customerDB[i].name;
        let address = customerDB[i].address;
        let salary = customerDB[i].salary;

        let row = `<tr>
                     <td>${id}</td>
                     <td>${name}</td>
                     <td>${address}</td>
                     <td>${salary}</td>
                    </tr>`;

        // //and then append the row to tableBody
        $("#customerTableBody").append(row);

        //invoke this method every time
        // we add a row // otherwise click
        //event will not work
        bindTrEvents();
    }
}

function deleteCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].id == id) {
            customerDB.splice(i, 1);
            return true;
        }
    }
    return false;
}

function searchCustomer(id) {
    return customerDB.find(function (customer) {
        //if the search id match with customer record
        //then return that object
        return customer.id == id;
    });
}

function updateCustomer(id) {
    if (searchCustomer(id) == undefined) {
        alert("No such Customer..please check the ID");
    } else {
        let consent = confirm("Do you really want to update this customer.?");
        if (consent) {
            let customer = searchCustomer(id);
            //if the customer available can we update.?

            let customerName = $("#customerName1").val();
            let customerAddress = $("#customerAddress1").val();
            let customerSalary = $("#customerSalary1").val();

            customer.name = customerName;
            customer.address = customerAddress;
            customer.salary = customerSalary;

            getAllCustomers();
        }
    }

}




