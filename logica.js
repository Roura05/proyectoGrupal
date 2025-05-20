function calculaDistancia(angulo, velocidadInicial){
  let distancia = velocidadInicial*velocidadInicial*Math.sin(angulo)/9.81;
  return distancia;
}

function gradosARadianes(grados){
  let radianes = grados*Math.PI/180;
  return radianes;
}
