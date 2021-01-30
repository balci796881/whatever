class box {
constructor (x,y,width,height){
var options = {
    restitution: 1
}
this.boxbody=Bodies.rectangle(x,y,width,height,options)
this.x = x;
this.y = y;
this.width = width;
this.height = height;
World.add(world,this.boxbody)
}
display(){
    push()
 translate(this.boxbody.position.x,this.boxbody.position.y)
 rotate(this.boxbody.angle)   
rectMode(CENTER)
fill("blue")
rect(0,0,this.width,this.height)
pop()
}
}