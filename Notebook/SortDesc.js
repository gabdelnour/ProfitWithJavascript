function sortDescending(numbers) {
    for (j=0; j < numbers.length; j++){
        max_num = numbers[j]
        max_location = j    
        for (i = j; i < numbers.length; i++){
            if(max_num < numbers[i]){
                max_num = numbers[i]
                max_location = i
            }
        }
        numbers[max_location] = numbers[j]
        numbers[j] = max_num
    }
    return numbers
}

console.log(sortDescending([2,34,5,7578,79,345]))