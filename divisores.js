function divisor() {

    var x = document.getElementById('x');
    var y = document.getElementById('y');
    var resultado = document.getElementById('mdc');
    var divisores = document.getElementById('divisores');
    
    
    var cont = 0;
    
    var vx = parseInt(x.value);
    var vy = parseInt(y.value);
    
    if(vx > vy){
    for (var i = 0; i <= vy; i++) {
      if((vy % i === 0) && (vx % i === 0)){
        cont++;
        mdc = i;

    
    resultado.textContent = mdc ;
    }
    divisores.textContent = cont;
                                        }
                }
    else {
      for (var i = 0; i <= vx; i++) {
        if((vy % i === 0) && (vx % i === 0)){
          cont++;
          var mdc = i;
    
          resultado.textContent = mdc;
    }
    }
    divisores.textContent = cont;
    }
    }