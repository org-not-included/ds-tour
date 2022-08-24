var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var left = 1;
        var right = n;
        while (left < right) {
            let mid = (left + right)/2
            if (isBadVersion(mid))
                right = mid
            else 
                left = mid + 1
        }
        
        return left
        
    };
};