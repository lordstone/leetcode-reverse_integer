/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    if(x > 2147483646 || x < -2147483647){
        return 0;
    }
    
    var xx = Math.abs(x);
    var sign = 1;
    if (x< 0 ){
        sign = -1;
    }
 
    if(xx<10){
        return (xx * sign);
    }else{
        var mynum = 0;
        while( xx >= 1 ){
            mynum *= 10;
            mynum += (xx % 10);
            xx = Math.floor(xx/10);
        }
            if(mynum > 2147483646 || mynum < -2147483647){
        return 0;
    }
        
        return (mynum * sign);
    }
};
