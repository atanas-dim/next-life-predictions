// Step 1: Create object to store 3 types of messages
// Step 2: Create factory function with 3 parameters which will create the final message
// Step 3: Create function to generate a random number. It should take the length of an array as parameter and use it as a maximum value.
// Step 4: Define 3 variables to pick randomized messages from each category of predictions
// Step 5: Call the factory function with the 3 variables as arguments and save the result to a new variable (this should have an array containing the 3 randomized messages)
// Step 6: Format the final array of messages to be printed without commas and brackets

// Step 1: Create object to store 3 types of messages
const storedMessages = {
    willBecome: [
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
    willBeAbleTo: [
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
    willOwn: [
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
    ]
};

// Step 2: Create factory function with 3 parameters which should have a method to return the combined messages 
function predictionsFactory (become, able, own) {
        return {
        become: become,
        able: able,
        own: own,
        predict () {
            let messages = [
                'In your next life:',
                `- you will become ${this.become}.`,
                `- you will be able to ${this.able}.`,
                `- you will own ${this.own}.`
            ];

            return messages;
        }
    }
};

// Step 3: Create function to generate a random number. It should take the length of an array as parameter and use it as a maximum value.
function randomNumber(num) {
    return Math.floor(Math.random() * num)
};

// Step 4: Define 3 variables to pick a randomized messages from each category of predictions
const randomBecomeMsg = storedMessages.willBecome[randomNumber(storedMessages.willBecome.length)];
const randomAbleToMsg = storedMessages.willBeAbleTo[randomNumber(storedMessages.willBeAbleTo.length)];
const randomOwnMsg = storedMessages.willOwn[randomNumber(storedMessages.willOwn.length)];

// Step 5: Call the factory function with the 3 variables as arguments and save the result 
// to a new variable (this should return an array containing the 3 randomized messages)
const predictionObject = predictionsFactory(randomBecomeMsg, randomAbleToMsg, randomOwnMsg)
const predictionArray = predictionObject.predict();

// Step 6: Format the final array of messages to be printed without commas and brackets
function format (array) {
    let formattedPrediction = array.join('\n')
    console.log(formattedPrediction);
};

// Call the format function with the final array of messages
format(predictionArray);






