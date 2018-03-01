// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
	var H = 0;
	var Q = 0;
	var D = 0;
	var N = 0;
	var P = 0;
	var arr ={};
	var sum = currency;
	if (sum>10000)
		return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	if (sum>=50){
		H = Math.floor(sum/50);
        arr["H"] = H;
		sum = sum - 50*H;
	}	
	if (sum>=25) { 
		Q = Math.floor(sum/25);
		arr["Q"] = Q;
		sum = sum - 25*Q;
	}
	if (sum>=10) {
		D = Math.floor(sum/10);
		arr["D"] = D;
		sum = sum - 10*D;
	}	
	if (sum>=5) {
		N = Math.floor(sum/5);
		arr["N"] = N;
	    sum = sum - 5*N;
	}	
	if (sum>0) {
		P = sum;
		arr["P"] = P;
	}					
return arr;    
}
