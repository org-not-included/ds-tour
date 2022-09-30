// step 1) First we need to create a timeline in the system. The timeline will be composed of two type of events - positive bandwidth (at start of interval) 
// and negative bandwidth (at end of interval).
// Each point on the time line will look like (time, bandwitdh). For instance, you can break (1, 10, 2) as two intervals - (1, 2) & (10, -2)

// step 2) sort the points based on the time component.

// step3) keep the count of the sum as you iterate through points. The max sum will give you the max bandwidth requirement.

// def get_max_bandwidth(bandwidths):
//     points = []
//     for start, end, band in bandwidths:
//         points.append((start, band))
//         points.append((end, -1 * band))
    
//     points.sort(key=lambda x: x[0])
   
//     max_value = 0
//     curr_value = 0
//     for _, band in points:
//         curr_value += band
//         max_value = max(curr_value, max_value)
    
//     return max_value
