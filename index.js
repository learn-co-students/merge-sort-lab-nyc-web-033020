function findMinAndRemoveSorted(arr) {
  let min = arr[0]
  let index = 0
  for( let i = 0; i<arr.length; i++){
    if(arr[i] < min){
      min = arr[i]
      index = i
    }
    arr.splice(index,1)
    return min
  }
}



function merge(firstSubarray, secondSubArray){
  let sorted = []
  while(firstSubarray.length != 0 && secondSubArray.length != 0){
    if(firstSubarray[0] < secondSubArray[0]){
      sorted.push(findMinAndRemoveSorted(firstSubarray))
    } else {
      sorted.push(findMinAndRemoveSorted(secondSubArray))
    }
  }
  return sorted.concat(firstSubarray).concat(secondSubArray)
}

function mergeSort(arr) {
  let mid = arr.length/2 
  let first = arr.slice(0, mid)
  let second = arr.slice(mid, arr.length)
  
  if(arr.length <2){
   return arr
  }else{
    return merge(mergeSort(first), mergeSort(second))
  }
}