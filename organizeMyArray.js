function organizeMyArray(array, sort = 'ascending'){
    let oldArray = array
    let newArray = [];
    let controller = array.length;
    let currentHighest = 0;
    let currentHighestPosition = 0;
    while(controller > newArray.length){
        for(let i = 0; i < oldArray.length; i++){
            for(let o = 0; o < oldArray.length; o++ ){
                if(oldArray[i] > oldArray[o]){
                   if(oldArray[i] > currentHighest){
                        currentHighest = oldArray[i];
                        currentHighestPosition = i   
                    }
                }else {   
                    if(oldArray[o] > currentHighest){
                        currentHighest = oldArray[o];  
                        currentHighestPosition = o
                    }
                }
            }
        }
        switch (sort) {
            case 'ascending':
                newArray.unshift(currentHighest)
                oldArray.splice(currentHighestPosition,1)
                currentHighestPosition = 0
                currentHighest = 0
                break;
            case 'decreasing':
                newArray.push(currentHighest)
                oldArray.splice(currentHighestPosition,1)
                currentHighestPosition = 0
                currentHighest = 0
                break;
        
            default:
                break;
        }      
    }
    return newArray
}
