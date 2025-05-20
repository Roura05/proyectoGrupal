function calculaDistancia(angulo, velocidadInicial){
  let distancia = velocidadInicial*velocidadInicial*Math.sin(angulo)/0.81;
  return distancia;
}

function gradosARadianes(grados){
  let radianes = grados*(180/Math.PI);
  return radianes;
}
