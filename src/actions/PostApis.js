/**
 * @param {*} request - No request is used
 */
 export function postData(firestoreConnection) {
    return new Promise((resolve, reject) => {
     try{
        const databaseRef = firestoreConnection.collection('// Change this with DB name');
        databaseRef.doc('// Change this with document name').set({
         // Your Data here
        })
     }
     catch(err){
         console.error(err)
     }
    })
}