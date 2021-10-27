function calc1() {
    var vo = document.getElementById('vo').value;
    var io = document.getElementById('io').value;
    var wo = document.getElementById('wo').value;

    var cos1=parseFloat(wo)/(parseFloat(io)*parseFloat(vo));
    var sin1=Math.sqrt(1- Math.pow(parseFloat(cos1), 2));

    var ro=parseFloat(vo)/(parseFloat(io)*parseFloat(cos1));
    var xo=parseFloat(vo)/(parseFloat(io)*parseFloat(sin1));

    if(!isNaN(ro) && !isNaN(xo))
    {
        document.getElementById("r1").innerHTML="The equivalent exciting resistance is " +ro+ " Ω";
        document.getElementById("x1").innerHTML="The equivalent exciting reactance is "+xo+ " Ω";
    }

}
function calc2() {
    var vc = document.getElementById('vc').value;
    var ic = document.getElementById('ic').value;
    var wc = document.getElementById('wc').value;

    var rc=parseFloat(wc)/Math.pow(parseFloat(ic), 2);
    var zc=parseFloat(vc)/parseFloat(ic);
    var xc=Math.sqrt(Math.pow(parseFloat(zc), 2) - Math.pow(parseFloat(rc), 2));

    if(!isNaN(rc) && !isNaN(xc))
    {
        document.getElementById("r2").innerHTML="The equivalent resistance referred to the HV side is "+rc+ " Ω";
        document.getElementById("x2").innerHTML="The equivalent reactance referred to the HV side by "+xc+ " Ω";
    }

}
