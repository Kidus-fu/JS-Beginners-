let num = [20, 50, 10, 5, 100, 1, 200, 300, 400, 600];

    let largest = num[0];
    for (let i = 1; i < num.length; i++) 
        if (num[i] > largest) 
            largest = num[i];
        
    
   console.log("The largest Number is"+ largest);

   //or
    let largestNumber = Math.max(...num);
    console.log("The largest Number is " + largestNumber);

// or using reduce
    let largestNum = num.reduce((max, current) => (current > max ? current : max), num[0]);
    console.log("The largest Number is " + largestNum);

// or using sort
    let sortedNum = num.sort((a, b) => b - a);
    console.log("The largest Number is " + sortedNum[0]);
    
// or using forEach

    let maxNum = num[0];
    num.forEach((n) => {
        if (n > maxNum) {
            maxNum = n;
        }
    }); 
  