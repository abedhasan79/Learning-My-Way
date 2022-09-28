let key= "4c8a72b907d32acddb15397e25094e20";

 let url='`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20';


fetch(url)
.then(response => response.json())
.then((data)=> { 
    
    console.log(data)

})