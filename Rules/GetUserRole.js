// import ClientData from './ClientData'; // Import the ClientData.js file

// export default function GetUserRole(context) {
//     var userRoles = context.getClientData().UserRoles;

//     if (!userRoles) {
//         userRoles = context.getODataProvider('/CustomerScanner/Services/CustomerScanner.service').getUserRoles();
//         context.getClientData().UserRoles = userRoles;
//     }

//     if (userRoles.includes('Admin')) {
//         ClientData.UserRole = 'Admin';
//         return 'Admin';
//     } else if (userRoles.includes('user')) {
//         ClientData.UserRole = 'user';
//         return 'user';
//     } else {
//         ClientData.UserRole = 'Guest';
//         return 'Guest';
//     }
// }
