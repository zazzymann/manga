class stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("images/stone.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	fly(){
		this.stone.bodyA = null;
	  }
	  display(){
		if (this.stone.bodyA){
		 var pointA = this.stone.bodyA.position;
		 var pointB = this.pointB;
		 strokeWeight(4);
		 line(pointA.x,pointA.y,pointB.x,pointB.y)
		}
	 }
}