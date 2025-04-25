export default function NavigateToCustomerDetail(context) {
    let pageProxy = context.getPageProxy();
    const scannedResult = context.getActionResult('BarcodeResult')?.data;
    console.log("Scanned Result: ", scannedResult);

    if (!scannedResult) {
        return context.executeAction({
            "Name": "/CustomerScanner/Actions/ShowMessage_NoScan.action",
            "Properties": {
                "Message": "No barcode scanned."
            }
        });
    }
    return context.read(
        '/CustomerScanner/Services/CustomerScanner.service',
        'CustomerDataSet',
        [],
        `$filter=CustomerId eq '${scannedResult}'`
    ).then(result => {
        if (result && result.length > 0) {
            context.setActionBinding(result.getItem(0));
            return context.executeAction('/CustomerScanner/Actions/NavigateToDetail.action');
        } else {
            return context.executeAction('/CustomerScanner/Actions/ShowMessage_NotFound.action');
        }
    }).catch(error => {
        console.log('OData Read Error:', error);
        return context.executeAction({
            "Name": "/CustomerScanner/Actions/GenericErrorMessage.action",
            "Properties": {
                "Message": "Something went wrong while fetching customer data."
            }
        });
    });
}


// export default function BarcodeResult_OpenProductDetail(context) {
//     let pageProxy = context.getPageProxy();
//     var message = '';
//     var actionResult = context.getActionResult('BarcodeScanner');
//     var scannedResult = actionResult.data;
//     console.log("Scanned Result: ", scannedResult);

//     return context.read('/Customer_Scanner/Services/Customer_Scanner.service', 'CustomerDataSet', [], `$filter=CustomerId eq ${scannedResult}`).then((results) => {
//         if (results && results.length > 0) {
//             let prod = results.getItem(0);
//             pageProxy.setActionBinding(prod);
//             return pageProxy.executeAction('/Customer_Scanner/Actions/NavigateToDetail.action');
//         } else {
//             message = `Customer with ID (${scannedResult}) not found`;
//             return context.executeAction({
//                 "Name": "/Customer_Scanner/Actions/ShowMessage_NoScan.action",
//                 "Properties": {
//                     "Message": "No barcode scanned"
//                 }
//             });
//         }
//     });
// }
 