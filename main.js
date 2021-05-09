function setup(){
	createCanvas(700,700);
	background(0);
	frameRate(120);
}

let x=0,y=0,nowyX,nowyY;
let zer=false,jed=false;




function draw(){
	let r=random();
	
	if(r<0.01) {
		nowyX=0;
		nowyY=0.16*y;
	}
	else if(r<0.85){
		nowyX=0.85*x+0.04*y;
		nowyY=-0.04*x+0.85*y+1.6;
	}
	else if(r<0.92){
		nowyX=0.2*x-0.26*y;
		nowyY=0.23*x+0.22*y+1.6;
	}
	else{
		nowyX=-0.15*x+0.28*y;
		nowyY=0.26*x+0.24*y+0.44;
	}
	
	
	x=nowyX;
	y=nowyY;
	
	zer=(r<0.85&&r>0.01)
	
	if (zer&&jed){stroke('green');jed=false;}
	else {stroke('orange');jed=true}
	strokeWeight(2);
	
	point(map(x,-2.5,3,0,width),map(y,0,11,height-5,0));
	
	
	
	
	
	/* console.log(r);
	noLoop(); */
	
}