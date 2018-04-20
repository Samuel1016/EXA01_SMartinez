var articulo, precio, cantidad, total;

var x = "",  row, col, ela;
var a1 = "btn-", a2 = 1;
var arr = new Array(new Array(0));
var i = 1;
var id = 1;
var almacen = new Array(new Array("1001", "Laptop-HP", "2600", "50"), new Array("1002", "Mouse", "20", "60"),new Array("1003", "Cargadores", "15", "150"),new Array("1004", "Teclado","50", "100"));
function alumno(art, pre, can, tot) {
  this.articulo = art;
  this.precio = pre;
  this.cantidad = can;
  this.total = tot;
}
var codigo="0";
var almac = "";
var au=0;
var art="";
function ShowSelected() {

var cod = document.getElementById("prodd").value;

for (row = 0; row < almacen.length; row++) {

  if (almacen[row][0] == cod && almacen[row][3] >  0) {
art = almacen[row][1];
  	document.getElementById("pre").value = almacen[row][2];
  	document.getElementById("alm").value = almacen[row][3];
codigo = cod
almac = almacen[row][3];
  } else {
}

}

}


function registro() {
  var pre = document.getElementById("pre").value;
  var can = document.getElementById("can").value;
  var tot = pre*can;
  alumno(art, pre, can, tot);

	if(this.articulo=="" || this.articulo== null || this.precio == "" || this.precio == null || this.cantidad=="" || this.cantidad== null)
  {
		alert("Falta Llenar Campos");
	}
	else {
    if(verificar(codigo))
  {
    update(codigo,almac,this.cantidad);
  }
  else {

    if(update(codigo,almac,this.cantidad ))
    {
		arr.push([codigo, this.articulo , this.precio, this.cantidad, this.total])
  }
  else {
    alert("Stock No Disponible");
  }
}
}

  document.getElementById("pre").value = "";
  document.getElementById("alm").value = "";
  document.getElementById("can").value = "";
  mostrar();
}

var subtotal = 0;
var subtotal1 = 1.4;
var totalfinal = 0.0;
function mostrar() {
  totalF();
  ela = 1; x = "";

  for (row = 1; row < arr.length; row++) {
    x = x + "<tr>";

    for (col = 0; col < arr[row].length; col++) {
      x = x + "<td>" + arr[row][col] + "</td>";
    }
    if (arr[row][1] == "" || arr[row][1] == null) {} else {
      x = x + "<td>";
      x = x + "<input type='button' class='btn-2' onclick='eliminar(" + ela + ")' id='" + a1 + a2 + "'></td>";
      ela++;
    }
    x = x + "</tr>";

  }
  document.getElementById("tlb").innerHTML = x;
}


function eliminar(index) {
	document.getElementById("pre").value = "";
	document.getElementById("alm").value = "";
	document.getElementById("can").value = "";
  for (row = 0; row < almacen.length; row++) {

    for (col = 0; col < almacen[row].length; col++) {

    if (almacen[row][0] == arr[index][0]) {

    	can1 = parseInt(almacen[row][3]);
    indx2=row;
    } else {

    }

}
}
var can2 = 0;
can2=parseInt(arr[index][3]);
var total1 = can1+can2;
almacen[indx2][3] = total1;
arr.splice(index, 1);
mostrar();
}
var indx = 0;
var indx2="";
function update(id,alm,can)
{
  for (row = 0; row < almacen.length; row++) {
    for (col = 0; col < almacen[row].length; col++) {

    if (almacen[row][0] == id) {
      subtotal = alm-can;
      if(subtotal > 0 )
    {
      almacen[row][3] = alm - can;
      return true;
    }else {
      return false;
    }

    } else {
    }
  }
  }
}

function verificar(cod) {
  can = document.getElementById("can").value;

  for (row = 0; row < arr.length; row++) {
    for (col = 0; col < arr[row].length; col++) {

    if (arr[row][0] == cod) {
      arr[row][3]= parseInt(arr[row][3])+parseInt(can);
      arr[row][4] = parseFloat(arr[row][2])*parseInt(arr[row][3]);
      return true;
    }
    else {
      return false;
    }
  }
  }
	document.getElementById("pre").value = "";
	document.getElementById("alm").value = "";
	document.getElementById("can").value = "";

}
function totalF()
{
  for (row = 1; row < arr.length; row++) {
    subtotal1 = parseFloat(arr[row][4]);
    totalfinal = totalfinal + subtotal1;
      }

document.getElementById("igv").value = parseInt(totalfinal*0.18);
  document.getElementById("subtot").value = totalfinal;
  document.getElementById('total').value = (totalfinal*0.18)+totalfinal;
  totalfinal = 0;
}
function venta() {
  var vn = document.getElementById("sales");
  vn.style.display = "block";
  var hm = document.getElementById("home");
  hm.style.display = "none";    
}
