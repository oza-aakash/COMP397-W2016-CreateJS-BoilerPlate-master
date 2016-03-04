


// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: objects.Label;
        private _clickHereButton: objects.Button;
        private _reels: createjs.Bitmap[];
        private _reels2:createjs.Bitmap[];
         private _dice1 = 0;
        private _dice2 = 0;
        private _dice3 = 0;
        private _dice4 = 0;
        private _dice5 = 0;
        private _dice6 = 0;
        private _dice7 = 0;
       // private _blanks = 0;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {


            //Add Play Label
            this._playLabel = new objects.Label(
                "PLAY SCENE","60px Consolas", 
                "#000000", 
                config.Screen.CENTER_X,config.Screen.CENTER_Y);
            this.addChild(this._playLabel);

            // Adding click here button to the scene
         this._clickHereButton= new objects.Button(
             "clickHere",
              config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 180);
            this.addChild(this._clickHereButton);
            
            // Start button event listner
            this._clickHereButton.on("click",this._clickHere,this);
            
           //Initialize of array
            this._initializeBitmapArray();

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
         private _checkRange(value: number, lowerBounds: number, upperBounds: number): number {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        }
        
         private _spinReels(): string[] {
            var betLine = [" ", " "];
            var outCome = [0, 0];

            for (var spin = 0; spin < 3; spin++) {
                outCome[spin] = Math.floor((Math.random() * 65) + 1);
                switch (outCome[spin]) {
                    case this._checkRange(outCome[spin], 28, 37): // 15.4% probability
                        betLine[spin] = "dice1";
                        this._dice1++;
                        break;
                    case this._checkRange(outCome[spin], 38, 46): // 13.8% probability
                        betLine[spin] = "dice2";
                        this._dice2++;
                        break;
                    case this._checkRange(outCome[spin], 47, 54): // 12.3% probability
                        betLine[spin] = "dice3";
                        this._dice3++;
                        break;
                    case this._checkRange(outCome[spin], 55, 59): //  7.7% probability
                        betLine[spin] = "dice4";
                        this._dice3++;
                        break;
                    case this._checkRange(outCome[spin], 60, 62): //  4.6% probability
                        betLine[spin] = "dice5";
                        this._dice5++;
                        break;
                    case this._checkRange(outCome[spin], 63, 64): //  3.1% probability
                        betLine[spin] = "dice6";
                        this._dice6++;
                        break;
                    case this._checkRange(outCome[spin], 65, 65): //  1.5% probability
                        betLine[spin] = "dice7";
                        this._dice7++;
                        break;
                }
            }
            return betLine;
        }
         private _initializeBitmapArray(): void {
            // Initialize the arrays
         //   this._reels = new Array<createjs.Bitmap>();
            for (var reel: number = 0; reel < 2; reel++) {

                //this._reels[reel] = new createjs.Bitmap(assets.getResult("dice1"));
                
              
            }

        }
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // Click event
        
        private _clickHere(event: createjs.MouseEvent):void
        {
            
              var bitmap: string[] = this._spinReels();
              var bitmap2:string[]=this._spinReels();
             for (var reel: number = 0; reel < 2; reel++) {
                 this._reels = new Array<createjs.Bitmap>();
                                 
                 this._reels[reel] = new createjs.Bitmap(assets.getResult("dice1"));
                  this._reels[reel].x = 216 + (reel * 84);
                this._reels[reel].y = 220;
                    this.addChild(this._reels[reel]);
                    
                    
                 //this._reels[reel] = new createjs.Bitmap(assets.getResult("dice2"));
                 //this._reels[reel].image = assets.getResult(bitmap[reel]);
                
                    //this.addChild(this._reels[reel]);
                    
               }
               console.log("reel"  + "reel" + this._reels[reel]);
                
        }
        
        
    }
}


