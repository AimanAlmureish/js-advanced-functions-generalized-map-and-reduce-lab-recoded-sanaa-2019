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




    function reduce(array, newFunc,startVal){
        let newVal;
        newVal = Boolean(newVal)



    //     for(let i=0; i< array.length; i++){  
    //         startVal = startVal + newFunc(array[i])
    //  }

    

        for(let i=0; i< array.length; i++){  
            startVal = newFunc(array[i],newVal)
     }
     return startVal
    }
  
  