function generateInvitationMessages(guests, ...additionalDetails) {
    return guests.map(guest => {
        const { name, age, rsvp } = guest;
        const details = additionalDetails.join(' ');
        return `${name}, you are cordially invited to the party! ${details}`;
    });
}

// Example usage
const guests = [
    { name: 'Suresh', age: 22, rsvp: 'Yes' },
    { name: 'Madhan', age: 21, rsvp: 'No' },
    { name: 'Ali', age: 20, rsvp: 'Maybe' }
];

const invitations = generateInvitationMessages(guests, 'Please bring a dish to share.');

console.log(invitations);
