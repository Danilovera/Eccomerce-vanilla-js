const fakeApi =  async () => {
    let response = await fetch("http://localhost:4000/libros");
    let data = await response.json();

    return data

}




let data = await fakeApi()
console.log(data)
let containerPrint = document.getElementById("containerPrint")

function showCard (data, container){
    
    data.forEach((element) => {
        container.innerHTML += `
             <span>${element.name}</span>
          `
    });
}

 

    

