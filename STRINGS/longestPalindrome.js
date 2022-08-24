
// A O(n^2) time and O(1) space program to
// find the longest palindromic substring
// easy to understand as compared to previous version.

// A utility function to print
// a substring str[low..high]
// This function prints the
// longest palindrome substring (LPS)
// of str[]. It also returns the
// length of the longest palindrome

function longestPalSubstr(str)
{
	let n = str.length; // calculating size of string
	if (n < 2)
		return n; // if string is empty then size will be 0.
				// if n==1 then, answer will be 1(single
				// character will always palindrome)

	let maxLength = 1,start=0;
	let low, high;
	for (let i = 0; i < n; i++) {
		low = i - 1
		high = i + 1
		while ( high < n && str[high] == str[i]) //increment 'high'							
			high++
	
		while ( low >= 0 && str[low] == str[i]) // decrement 'low'			
			low--
	
		while (low >= 0 && high < n && str[low] == str[high]){
			low--
			high++
		}

		let length = high - low - 1;
		if (maxLength < length) {
			maxLength = length
			start=low+1;
		}
	}
	
	console.log("Longest palindrome substring is: ");
	console.log(str.substring(start, maxLength+start));
	return maxLength;
}

longestPalSubstr("babad")