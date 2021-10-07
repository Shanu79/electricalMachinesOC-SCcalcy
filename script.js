function calc1() {
    var vo = document.getElementById('vo').ariaValueMax;
    var io = document.getElementById('io').ariaValueMax;
    var wo = document.getElementById('wo').ariaValueMax;

    var cos1=parseFloat(wo)/(parseFloat(io)*parseFloat(vo));
    var sin1=Math.sqrt(1- Math.pow(parseFloat(cos1), 2));

    var ro=parseFloat(vo)/(parseFloat(io)*parseFloat(cos1));
    var xo=parseFloat(vo)/(parseFloat(io)*parseFloat(sin1));

    if(!isNaN(ro))
    {
        document.getElementById("ans").innerHTML="Ro is "+ro;
    }

}
function calc2() {
    var vc = document.getElementById('vc').ariaValueMax;
    var ic = document.getElementById('ic').ariaValueMax;
    var wc = document.getElementById('wc').ariaValueMax;

    var rc=parseFloat(wc)/Math.pow(parseFloat(ic), 2);
    var zc=parseFloat(vc)/parseFloat(ic);
    var xc=Math.sqrt(Math.pow(parseFloat(zc), 2) - Math.pow(parseFloat(rc), 2));
}