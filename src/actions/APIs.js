/**
 * @param {*} request - No request is used
 */
export function fetchResumeData(firestoreConnection) {
  return new Promise((resolve, reject) => {
   try{
    let response = new Object()
    firestoreConnection.collection('portfolio_resume_data').get().then(function(snapshot){
      snapshot.forEach(function(doc){
       response = doc.data()
      })
      resolve(response)
    })
   }catch(e){
    reject(e)
   }
})
}

/**
 * @param {*} request - No request is used
 */
export function fetchSharedData(firestoreConnection) {
  return new Promise((resolve, reject) => {
   try{
      let response = new Object()
      firestoreConnection.collection('portfolio_shared_data').get().then(function(snapshot){
        snapshot.forEach(function(doc){
         response = doc.data()
        })
        console.log(response)
        resolve(response)
      })
   }
   catch(e){console.log(e)}
  })
}