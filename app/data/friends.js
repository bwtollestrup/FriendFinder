var Friend = function (name, photo, scores) {

    this.name = name;
    this.photo = photo;
    this.scores = scores;
}

var friends = [];
var friendNamesAndPhotos = [
    {
        name: "Brenda Waymire",
        photo: "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/225521_208209009220015_7170347_n.jpg?_nc_cat=0&oh=1e4145d96e8cd7051f7de8ff042d7f1f&oe=5BD46EAD"
    }, 
    {
        name: "Elisa Chou",
        photo: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/15585210_952851101481685_5915185130388233248_o.jpg?_nc_cat=0&oh=781ed871a4c616e59451ceda0896e9fe&oe=5BD22385"
    }, 
    {
        name: "Karizma Maxson",
        photo: "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/22853142_10154877285407665_5408040483396319080_n.jpg?_nc_cat=0&oh=a11ccf568feb638396e571372ee8d317&oe=5BD0735A"
    }, 
    {
        name: "Lacie Anderson",
        photo: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/23632154_10155188251014065_5699671945661633601_o.jpg?_nc_cat=0&oh=6d4742fe74577b9820ddb7b5bfc1f022&oe=5BDB8F12"
    }, 
    {
        name: "Lily Waymire",
        photo: "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/36432389_10216938125064273_1414750802689392640_n.jpg?_nc_cat=0&oh=c79e567fec340cb4f84d19e1c29a5de4&oe=5BC699AE"
    }, 
    {
        name: "Logan Waymire",
        photo: "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/36432389_10216938125064273_1414750802689392640_n.jpg?_nc_cat=0&oh=c79e567fec340cb4f84d19e1c29a5de4&oe=5BC699AE"
    }, 
    {
        name: "Alyssa McDonald",
        photo: "https://scontent-ort2-2.xx.fbcdn.net/v/t31.0-8/20232724_10155511117788134_273578424682123135_o.jpg?_nc_cat=0&oh=4453aee39e088c6f9d9c1caed586041f&oe=5BD0C8D4"
    }, 
    {
        name: "Danille Howard",
        photo: "https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/26112494_10104046568770719_1137971830877650674_n.jpg?_nc_cat=0&oh=b3b0c3391e372bd28f24dc2bf71495a1&oe=5BCCC33D"
    }, 
]

for (friend of friendNamesAndPhotos) {
    var scores = [];
    for (i = 0; i < 10; i++) {
        scores.push(Math.ceil(Math.random() * 5));
    }

    friends.push(new Friend(friend.name, friend.photo, scores));
}

module.exports = {
    addFriend: function (name, photo, scores) {
        try {
            var friend = new Friend(name, photo, scores);
            friends.push(friend);
            return friend;
        } catch (error) {
            console.log(error);
        }
        return null;
    },

    friends: function () {
        return friends;
    }
};