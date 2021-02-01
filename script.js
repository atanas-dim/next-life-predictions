// Step 1: Create function to generate a random number. It should take the length of an array as parameter and use it as a maximum value.
function randomNumber(num) {
    return Math.floor(Math.random() * num)
};

// Step 2: Create object to store 3 types of messages
// Step 3: Create getter for each type of messages to return a random message
// Step 4: Create object method to combine the randomly selected messages into a single one and print it
const storedMessages = {
    _willBecome: [
        "an astronaut",
        "a magician",
        "a galactic explorer",
        "a technology master",
        "a guru of wisdom",
        "an inventor",
        "a leader of a space colony",
        "a science master",
        "an augmented reality artist",
        "a space farmer"
    ],
    _willBeAbleTo: [
        "teleport",
        "communicate via telepathy",
        "sing like Mariah",
        "jump 100 meters",
        "create any object you can think of",
        "handle and work with energies",
        "travel through time",
        "send a parcel from Mars to Jupiter",
        "speak with animals",
        "change your age"
    ],
    _willOwn: [
        "a magic wand",
        "a space ship",
        "a space factory",
        "a time machine",
        "a flying house",
        "a plant that can speak",
        "an invisible car",
        "a house robot",
        "a self running kitchen",
        "a moon"
    ],

    get willBecome () {
        let randWillBecome = this._willBecome[randomNumber(this._willBecome.length)];
        return randWillBecome;
    },

    get willBeAbleTo () {
        let randWillBeAbleTo = this._willBeAbleTo[randomNumber(this._willBeAbleTo.length)];
        return randWillBeAbleTo;
    },

    get willOwn () {
        let randWillOwn = this._willOwn[randomNumber(this._willOwn.length)];
        return randWillOwn;
    },

    predict () {
        let message = [
            'In your next life:',
            `- you will become ${this.willBecome}.`,
            `- you will be able to ${this.willBeAbleTo}.`,
            `- you will own ${this.willOwn}.`
        ];
        let formattedMessage = message.join("\n")
        return formattedMessage;
    }
};

console.log(storedMessages.predict());

