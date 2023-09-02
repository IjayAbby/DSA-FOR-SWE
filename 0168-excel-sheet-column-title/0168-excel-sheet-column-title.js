/**
 * @param {number} columnNumber
 * @return {string}
 64+1 - "A" 
 2 - "B"
 A - Z = 26
 27 == (26*1) + 1
 27 == Math.floor(27/26) + (27%26)
       "AA"
 701 == Math.floor(701/26) + (701%26)  
            26              +  25
            Z                   Y
 703 == Math.floor(703/26) + (703%26)
        27                 +      1
        27/26               +     1
        1  +  1            +       1
        A      A                    A
        
 730  == Math.floor        +        2
            28 1
            1
        1 + 1                  +  2
        AAB
        BBB
        26*26*2 + 26*2  + 2
        
        1406
        result = ""
        rem = [2,2,2]
        columnNumber = 2
        result = BBB
        705
        result = ""
        rem = [3, 1, 1]
        columnNumber = 1
        result = CAA
        reverse.result
        
        INT division = columnNumber/26 Math.floor()
        rem = columnNumber%26
        function
        define string result 
        define rem
        create a while loop given columnNumber is > 26
        columnNumber % 26, add TO REM
        columnNumber = Math.floor(columnNumber/26)
        rem.add(columnNumber)
        loop throug rem 
        result += rem @index + 64.fromCharcode
        return result
        
      
        
 */
function convertToTitle(columnNumber) {
    
    let result = "";
    let rem = [];
    while (columnNumber > 26) {
        rem.push(columnNumber%26 == 0 ? 26: columnNumber%26)
        columnNumber = Math.ceil(columnNumber/26 - 1)
    }
    rem.push(columnNumber%26 == 0 ? 26: columnNumber%26)
    
    for (let i = 0; i < rem.length; i++) {
        
        result += String.fromCharCode(rem[i] + 64)
    }
    return result.split("").reverse().join("");
    
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
};