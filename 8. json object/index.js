 //Javascript Object Notation

 const bioObject = {
     name: "Agent",
     age: 22,
     profession: "Software Engineer"
 }

 // Object format { name: 'Agent', age: 22, profesison: 'Software Engineer' }
 //JSON Format {"name":"Agent","age":22,"profesison":"Software Engineer"}
 console.log(bioObject);
 const jsonData = JSON.stringify(bioObject)
 console.log(jsonData);