
let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let body = document.querySelector('body');
let f;

let watch = {

    radius: 100,
    widthPath: 100,

    red: 1,
    green: 149,
    blue: 242,

    getTimeColor(){
        let date = new Date();

        sec.innerHTML = date.getSeconds();
        min.innerHTML = date.getMinutes();
        hour.innerHTML = date.getHours();

         f = date.getSeconds()*6*Math.PI/180; 
         m = date.getMinutes()*6*Math.PI/180;
         h = date.getHours()*16*Math.PI/180;
        
        body.style.backgroundColor = `rgb(${Math.floor(this.red + 244 - (date.getSeconds())*3)}, 
                                               ${Math.floor(this.green - (date.getSeconds())*4)}, 
                                                ${Math.floor(this.blue + (date.getSeconds())*1 + 20)})`;

        sec.style.backgroundColor = `rgb(${Math.floor(this.red + (date.getSeconds())*4)}, 
                                               ${Math.floor(this.green)}, 
                                                ${Math.floor(this.blue)})`;
        
        min.style.backgroundColor = `rgb(${Math.floor(this.red + (date.getMinutes())*4)}, 
                                               ${Math.floor(this.green)}, 
                                                ${Math.floor(this.blue)})`;
    
        hour.style.backgroundColor = `rgb(${Math.floor(this.red + (date.getHours())*10)}, 
                                               ${Math.floor(this.green)}, 
                                                ${Math.floor(this.blue)})`

        sec.style.transform = `translate(calc(50vw + (${(Math.sin(f))*this.radius}px) - ${this.widthPath/2}px), 
                                    calc((50vh + (${(Math.cos(f))*this.radius*-1}px) - ${this.widthPath/2}px))`

        min.style.transform = `translate(calc(50vw + (${(Math.sin(m))*this.radius}px) - ${this.widthPath/2}px), 
                                    calc((50vh + (${(Math.cos(m))*this.radius*-1}px) - ${this.widthPath/2}px))`

        hour.style.transform = `translate(calc(50vw + (${(Math.sin(h))*this.radius}px) - ${this.widthPath/2}px), 
                                    calc((50vh + (${(Math.cos(h))*this.radius*-1}px) - ${this.widthPath/2}px))`
        
    }
};

setInterval(function(){
    watch.getTimeColor();
}, 1000);
console.log(Math.sin(360*Math.PI/180))
console.log(Math.cos(360*Math.PI/180))