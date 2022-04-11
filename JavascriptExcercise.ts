meetings = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 9, endTime: 10 },
    { startTime: 10, endTime: 12 },
];
/*
Output
[
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 12
]
*/
meetingsOverlapped: any[] = [];
for (let i = 0; i < meetings.length; i++) {
    if (i + 1 < meetings.length) {
        const meeting = meetings[i]
        const nextMeeting = meetings[i + 1]
        const startTime = meeting.startTime
        const nextMeetingStartTime = nextMeeting.startTime
        const nextMeetingEndTime = nextMeeting.endTime
        if (
            startTime >= nextMeetingStartTime
        ) {} else if (startTime <= nextMeetingEndTime) {
            meetingsOverlapped.push(meeting)
        }
    }
}
console.log(meetingsOverlapped)