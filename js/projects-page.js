let canvas;
let ctx;
let outrunField;
let outrunFieldAnimation;

window.onload = function(){
    canvas = document.getElementById('outrun-background');
    ctx = canvas.getContext('2d'); // TODO: look into WebGL
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    outrunField = new OutrunFieldEffect(ctx,canvas.width,canvas.height);
    outrunField.animate();
}

window.addEventListener('resize', function() {
    this.cancelAnimationFrame(outrunFieldAnimation);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight; 
    outrunField = new OutrunFieldEffect(ctx,canvas.width,canvas.height);
    outrunField.animate();
});

class OutrunFieldEffect {
    #ctx;
    #width;
    #height;
    constructor(ctx, width, height){
        this.#ctx = ctx;
        this.#ctx.strokeStyle = 'white';
        this.#width = width;
        this.#height = height;
        this.lineArray = new Array(0,0.2,0.4,0.6,0.8);
    }
    setup(){
        this.#ctx.lineWidth = 3;
        this.#ctx.beginPath();
        this.#ctx.moveTo(0, this.#height/2);
        this.#ctx.lineTo(this.#width, this.#height/2);
        this.#ctx.stroke();

        this.#ctx.beginPath();
        this.#ctx.arc(this.#width/2, this.#height/2, this.#height/6, 1*Math.PI, 2*Math.PI);
        this.#ctx.fillStyle="white";
        this.#ctx.fill();

        this.#ctx.lineWidth = 1;
        this.#ctx.beginPath();
        this.#ctx.moveTo(this.#width*0.2, this.#height*0.5);
        this.#ctx.lineTo(0, this.#height*0.75);
        this.#ctx.stroke();

        this.#ctx.beginPath();
        this.#ctx.moveTo(this.#width*0.4, this.#height*0.5);
        this.#ctx.lineTo(this.#width*0.15, this.#height);
        this.#ctx.stroke();

        this.#ctx.beginPath();
        this.#ctx.moveTo(this.#width*0.6, this.#height*0.5);
        this.#ctx.lineTo(this.#width*0.85, this.#height);
        this.#ctx.stroke();

        this.#ctx.beginPath();
        this.#ctx.moveTo(this.#width*0.8, this.#height*0.5);
        this.#ctx.lineTo(this.#width, this.#height*0.75);
        this.#ctx.stroke();
    }
    #draw(y){
        this.#ctx.lineWidth = 1;
        let halfHeight = this.#height/2;
        this.#ctx.beginPath();
        this.#ctx.moveTo(0, halfHeight + halfHeight*y);
        this.#ctx.lineTo(this.#width, halfHeight + halfHeight*y);
        this.#ctx.stroke();
    }
    animate(){
        this.#ctx.clearRect(0,0,this.#width,this.#height);
        console.log('animating');
        this.setup();
        for (let i=0;i<this.lineArray.length;i++){
            if (this.lineArray[i] >= 1){
                this.lineArray[i] = 0;
            }
            this.#draw(this.lineArray[i]);
            this.lineArray[i] += 0.001;
        }
        outrunFieldAnimation = requestAnimationFrame(this.animate.bind(this));
    }
}