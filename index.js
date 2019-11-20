// Add your functions here
function map(array, newFunc){
    let arr = [];
      console.log(arr)
      array.forEach(element => {
          arr.push(newFunc(element))
      });
      return arr
    }
    console.log(arr)




    // function reduce(array, newFunc,startVal){
    //     let newVal;
    //     newVal = Boolean(newVal)



    // //     for(let i=0; i< array.length; i++){  
    // //         startVal = startVal + newFunc(array[i])
    // //  }

    

    //     for(let i=0; i< array.length; i++){  
    //         startVal = newFunc(array[i],newVal)
    // }
    // return startVal
    // }
    
    function reduce(array , myFunc, start ){

    let newSart;  
    if(!!array[0]){ newSart=true; newSart=Boolean(newSart);} 
    if(start){ newSart=start;}

    function myNuum(array) {
        return typeof(array) === "number";
      }
    if(!start && array.every(myNuum)){console.log("okay"); newSart=0}

           for(let i=0; i<array.length; i++){  
            newSart = myFunc(array[i],newSart )
        }

   return newSart ; 
}
  
  