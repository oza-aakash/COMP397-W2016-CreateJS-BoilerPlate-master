var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // private _blanks = 0;
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
            this._dice1 = 0;
            this._dice2 = 0;
            this._dice3 = 0;
            this._dice4 = 0;
            this._dice5 = 0;
            this._dice6 = 0;
            this._dice7 = 0;
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            //Add Play Label
            this._playLabel = new objects.Label("PLAY SCENE", "60px Consolas", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._playLabel);
            // Adding click here button to the scene
            this._clickHereButton = new objects.Button("clickHere", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._clickHereButton);
            // Start button event listner
            this._clickHereButton.on("click", this._clickHere, this);
            //Initialize of array
            this._initializeBitmapArray();
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        Play.prototype._checkRange = function (value, lowerBounds, upperBounds) {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        };
        Play.prototype._spinReels = function () {
            var betLine = [" ", " "];
            var outCome = [0, 0];
            for (var spin = 0; spin < 3; spin++) {
                outCome[spin] = Math.floor((Math.random() * 65) + 1);
                switch (outCome[spin]) {
                    case this._checkRange(outCome[spin], 28, 37):
                        betLine[spin] = "dice1";
                        this._dice1++;
                        break;
                    case this._checkRange(outCome[spin], 38, 46):
                        betLine[spin] = "dice2";
                        this._dice2++;
                        break;
                    case this._checkRange(outCome[spin], 47, 54):
                        betLine[spin] = "dice3";
                        this._dice3++;
                        break;
                    case this._checkRange(outCome[spin], 55, 59):
                        betLine[spin] = "dice4";
                        this._dice3++;
                        break;
                    case this._checkRange(outCome[spin], 60, 62):
                        betLine[spin] = "dice5";
                        this._dice5++;
                        break;
                    case this._checkRange(outCome[spin], 63, 64):
                        betLine[spin] = "dice6";
                        this._dice6++;
                        break;
                    case this._checkRange(outCome[spin], 65, 65):
                        betLine[spin] = "dice7";
                        this._dice7++;
                        break;
                }
            }
            return betLine;
        };
        Play.prototype._initializeBitmapArray = function () {
            // Initialize the arrays
            //   this._reels = new Array<createjs.Bitmap>();
            for (var reel = 0; reel < 2; reel++) {
            }
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // Click event
        Play.prototype._clickHere = function (event) {
            var bitmap = this._spinReels();
            var bitmap2 = this._spinReels();
            for (var reel = 0; reel < 2; reel++) {
                this._reels = new Array();
                this._reels[reel] = new createjs.Bitmap(assets.getResult("dice1"));
                this._reels[reel].x = 216 + (reel * 84);
                this._reels[reel].y = 220;
                this.addChild(this._reels[reel]);
            }
            console.log("reel" + "reel" + this._reels[reel]);
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map