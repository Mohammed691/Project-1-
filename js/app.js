var dataset = [
    {
        color:"red",
        nextColor: "blue"
    },
    {
        color:"blue",
        nextColor: "green"
    },
    {
        color:"green",
        nextColor: "red"

    }
]

var userBox = [];

function makePlayerBoxes(clr) {
    var that = this;

    this.color = clr;
    this.ele = document.createElement("div");
    this.ele.style.backgroundColor = this.color;
    this.ele.style.height = "50px";
    this.ele.style.width = "50px";
    this.ele.style.lineHeight = "50px";
    this.ele.style.float = "left";
    this.ele.style.paddingLeft = "15px";
    this.ele.style.color = "white";

    this.ele.addEventListener("click", function () {
        var currentColor = that.color;
        var nextColor;
        for (var i=0; i<dataset.length; i++) {
            if (dataset[i].color == currentColor) {
                nextColor=dataset[i].nextColor;
            }
        }
        that.color = nextColor;
        that.ele.style.backgroundColor = nextColor;
        //check to see if color matches
        for (var ii=0; ii<dataset.length; ii++){
            if (userBox[ii].color == gameBox[ii].color){
                userBox[ii].ele.innerHTML = "Correct";
            }
            else{
                userBox[ii].ele.innerHTML = "";
            }
        }
    });

    document.getElementById("user").appendChild (this.ele);

}

var gameBox = [];
function makeGameBoxes(clr) {
    var that = this;

    this.color = clr;
    this.ele = document.createElement("div");
    this.ele.style.backgroundColor = this.color;
    this.ele.style.height = "50px";
    this.ele.style.width = "50px";
    this.ele.style.lineHeight = "50px";
    this.ele.style.float = "left";
    this.ele.style.paddingLeft = "15px";
    this.ele.style.color = "white";

    document.getElementById("game").appendChild (this.ele);
}


for (var v=0; v<dataset.length; v++) {

    gameBox.push(new makeGameBoxes(dataset[Math.floor((Math.random() * 3))].color));

}

for (var i=0; i<dataset.length; i++) {
    userBox.push(new makePlayerBoxes(dataset[Math.floor((Math.random() * 3))].color));
    if (userBox[i].color = gameBox[i].color) {
        var currentColor = userBox[i].color;
        var nextColor;
        for (var u=0; u<dataset.length; u++) {
            if (dataset[u].color == currentColor) {
                nextColor=dataset[u].nextColor;
            }
        }
        userBox[i].color = nextColor;
        userBox[i].ele.style.backgroundColor = nextColor;
    }
}
var AnswerBox =[];
//roundCounter = document.getElementById("stats");
//roundCounter.innerHTML = "round: " + AnswerBox;

//var newGame = new Game ();

