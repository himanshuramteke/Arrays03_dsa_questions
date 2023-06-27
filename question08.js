//Question 8: Check if a Person Can Attend All Meetings

function canAttendMeetings(intervals) {
    intervals.sort((a, b) => a[0] - b[0]); // Sort intervals based on start time

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < intervals[i - 1][1]) {
            return false; // Overlapping meetings found
        }
    }

    return true; // No overlapping meetings
}

const intervals = [[0, 30], [5, 10], [15, 20]];
const result = canAttendMeetings(intervals);
console.log(result); // Output: false
