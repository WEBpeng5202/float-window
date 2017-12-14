window.onload=function () {
/*    let box=document.querySelector('.box');
    let maxH=window.innerHeight-box.offsetHeight;
    let maxW=window.innerWidth-box.offsetWidth;
    let speedsy=Math.random()*10;
    let speedsx=Math.random()*10;
    setInterval(moveT,10);
    function moveT() {
        let Tops=box.offsetTop+speedsy;
        let left=box.offsetLeft+speedsx;
        if (Tops >= maxH){
            Tops=maxH;
            speedsy*=-1;
        }
        if (left>=maxW){
            left=maxW;
            speedsx*=-1;
        }
        if (Tops<=0){
            Tops=0;
            speedsy*=-1;
        }
        if (left<=0){
            left=0;
            speedsx*=-1;
        }
        box.style.top=Tops+'px';
        box.style.left=left+'px';
    }*/
    let box=document.querySelectorAll('.box');
    class Float{
        constructor(obj){
            this.obj=obj;
            this.speedy=10;
            this.speedx=10;
            this.maxH=window.innerHeight-this.obj.offsetHeight;
            this.maxW=window.innerWidth-this.obj.offsetWidth;
        }
        start(){
            this.move();
        }
        move(){
            let That=this;
            That.t=setInterval(function () {
                let tops=That.obj.offsetTop+That.speedy;
                let lefts=That.obj.offsetLeft+That.speedx;
                if (tops>=That.maxH){
                    tops=That.maxH;
                    That.speedy*=-1;
                }
                if (tops<=0){
                    tops=0;
                    That.speedy*=-1;
                }
                if (lefts>=That.maxW){
                    lefts=That.maxW;
                    That.speedx*=-1;
                }
                if (lefts<=0){
                    lefts=0;
                    That.speedx*=-1;
                }
                That.obj.style.top=tops+'px';
                That.obj.style.left=lefts+'px';
            },20)
        }
        stop(){
            clearInterval(this.t);
        }
        resize(){
            this.tops=window.innerHeight-this.obj.offsetHeight;
            this.lefts=window.innerWidth-this.obj.offsetWidth;
        }
    }
    let flag=true;
    for (let i=0;i<box.length;i++){
        let n = new Float(box[i]);
        n.start();

        box[i].onclick=function () {

            if (flag){
                n.stop();
                flag=false;
            }else if (flag==false){
                n.start();
                flag=true;
            }
        };
        window.onresize=function () {
            n.resize();
        }
    }



};