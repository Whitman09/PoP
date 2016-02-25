//TODO: ADD HEADER
//TODO: Implement Player functions
var GameObject = require('./GameObject.js')
		, inherits = require('util').inherits;
var ServerPlayer= function (x, y, texture_location, id, isServer) {
    GameObject.call(this);
    this.AddPhysicsComponent(x, y, new GameObject.RectBodyData(80, 80), texture_location);

    //set these values so we don't rotate as we collide with stuff
    this.physicsComponent.inertia = Infinity;
    this.physicsComponent.inverseInertia = 0;
    this.oldX=x;
    this.oldY=y;
    this.newX;
    this.newY;
    this.id = id; //may need id for plaryer AND game
    this.gameid;
    this.item;
};

inherits(ServerPlayer, GameObject);
//Player.prototype = GameObject.prototype;
//Player.prototype.contructor = Player;
module.exports =global.ServerPlayer = ServerPlayer;

ServerPlayer.prototype.attack = function(){
    this.item = new Item(this.x,this.y,100,100,100,this.worldData);  
};

ServerPlayer.prototype.stopAttack = function(){
    this.item = null ;
};
