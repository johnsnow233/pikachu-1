let string = `

.skin{box-sizing: border-box; margin: 0; padding: 0;}
.skin::after{box-sizing: border-box;}
.skin::before{box-sizing: border-box;}

.skin{
    position: relative;
    background: #ffe600;
    min-height: 50vh;
}
.nose{
    border: 10px black solid;
    border-color: black transparent  transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
}
@keyframes wave {
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }100%{
        ransform: rotate(0deg);
    }
}
.nose:hover{
    transform-origin:center bottom ;
    animation: wave 200ms infinite linear;
}
.yuan{
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0 ;
    background: black;
}
.eye{
    border: 2px #000 solid;
    position:absolute;
    width: 64px;
    height: 64px;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
}
.eye::before{
    content: '';
    display: block;
    border: 3px solid 000; 
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: relative;
    top: 2px;
    left: 8px;
    background: #fff;

}
.eye.left{
    transform:translateX(-120px)

}
.eye.right{
    transform:translateX(120px)
}
.mouth{
    position: absolute;
    width: 200px;
    height: 100px;
    left:50%;
    top: 170px;
    margin-left: -100px;
    
}
.mouth .up{
    position: relative;
    top: -20px;
    z-index: 1;
    
}
.mouth .up .lip{
    background: #ffe600 ;
}
.mouth .up .lip.left{
    border: 3px black solid;
    width: 100px;
    height: 30px;
    border-radius: 0 0 0 50px ;
    position: absolute;
    border-top-color: transparent;
    border-right-color: transparent;
    transform:rotate(-15deg) translateX(-53px);
    position:absolute;
    left: 50%;
    margin-left: -50px;

}
.mouth .up .lip.left::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px; 
    position: absolute;
    right: -6px;
    bottom: 0;
    background: #ffe600;
}
.mouth .up .lip.right{
    border: 3px black solid;
    width: 100px;
    height: 30px;
    border-radius: 0 0 50px 0 ;
    position: absolute;
    border-top-color: transparent;
    border-right-color: transparent;
    transform:rotate(15deg) translateX(53px);
    position:absolute;
    left: 50%;
    margin-left: -50px;
}
.mouth .up .lip.right::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px; 
    position: absolute;
    left: -6px;
    bottom: 0;
    background: #ffe600;
}

.mouth .down{
    
    height: 180px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
}
.mouth .down .yuan1{
    border: 3px solid black;
    position: absolute;
    width: 150px;
    height: 1000px;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    position: absolute;
    background: #ff485f;
    width: 200px;
    height: 300px;
    bottom: -150px;
    left:50%;
    margin-left: -100px;
    border-radius: 100px;
}
.face{
    border: 1px black solid;
    position: absolute;
    width: 88px;
    height: 88px;
    left:50%;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
}

.face.left{
    transform: translateX(-180px);
    background: #ff0000;
    border-radius: 50%;
}

.face.right{
    transform: translateX(180px);
    background: #ff0000;
    border-radius: 50%;
}

`
let time = 100
let n =1

document.querySelector('.demo').innerHTML = string.substr(0,n)
document.querySelector('.demo1').innerText = string.substr(0,n)
const x = ()=>{
    n+=1
    if(n > string.length){
        window.clearInterval(id)
        return
    }
    document.querySelector('.demo').innerHTML = string.substr(0,n)
    document.querySelector('.demo1').innerText = string.substr(0,n)
    document.querySelector('.demo1').scrollTop = document.querySelector('.demo1').scrollHeight

}



const play = ()=>{
    return setInterval(x,time);
}
const pause = ()=>{
    window.clearInterval(id)
}
let id = play()
btnPause.onclick = ()=>{
    pause()
}
btnPlay.onclick = ()=>{
    pause()
    id = play()
}
btnSlow.onclick = ()=>{
    time = 300
    pause()
    id = play()
}
btnNormal.onclick = ()=>{
    pause()
    id = play()
}
btnFast.onclick = ()=>{
    time = 0 
    pause()
    id = play()
}