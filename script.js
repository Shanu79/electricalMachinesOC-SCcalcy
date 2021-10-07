function calc1() {
    var vo = document.getElementById('vo').value;
    var io = document.getElementById('io').value;
    var wo = document.getElementById('wo').value;

    var cos1=parseFloat(wo)/(parseFloat(io)*parseFloat(vo));
    var sin1=Math.sqrt(1- Math.pow(parseFloat(cos1), 2));

    var ro=parseFloat(vo)/(parseFloat(io)*parseFloat(cos1));
    var xo=parseFloat(vo)/(parseFloat(io)*parseFloat(sin1));

    if(!isNaN(ro))
    {
        document.getElementById("ans").innerHTML="The equivalent exciting resistance is "+ro;
    }
    else if(!isNaN(xo))
    {
        document.getElementById("ans").innerHTML="The equivalent exciting reactance is "+xo;
    }

}
function calc2() {
    var vc = document.getElementById('vc').ariaValueMax;
    var ic = document.getElementById('ic').ariaValueMax;
    var wc = document.getElementById('wc').ariaValueMax;

    var rc=parseFloat(wc)/Math.pow(parseFloat(ic), 2);
    var zc=parseFloat(vc)/parseFloat(ic);
    var xc=Math.sqrt(Math.pow(parseFloat(zc), 2) - Math.pow(parseFloat(rc), 2));

    if(!isNaN(rc))
    {
        document.getElementById("ans").innerHTML="The equivalent resistance referred to the secondary side is "+rc;
    }
    else if(!isNaN(xc))
    {
        document.getElementById("ans").innerHTML="The equivalent reactance referred to the secondary side is given by "+xc;
    }
}