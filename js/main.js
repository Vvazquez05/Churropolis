class producto{
    constructor(nombre, precio, unidades){
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}
const Churro_sencillo = new producto ("CHURRO SENCILLO", 15);
const Churro_relleno = new producto ("CHURRO RELLENO", 25);
const Bites_churros = new producto ("BITES DE CHURROS", 35);
const Malteada = new producto ("MALTEADA", 45);
const Frappe = new producto ("FRAPPE", 55);
const Cafe = new producto ("CAFE", 25);

const menu = [Churro_sencillo, Churro_relleno, Bites_churros, Malteada, Frappe, Cafe];
console.log(menu);
const mostrarMenu = () => {
    let texto = "";
    menu.forEach((eLement) => {
        texto += `${eLement.nombre} $${eLement.precio}\n`
    })
    texto = `Menú:\n${texto}`
    return texto;
};
let nombre = prompt ("¡Bienvenido a Churropolis! Por favor ingrese su nombre");
while (nombre === ""){
    nombre = prompt ("¡Bienvenido a Churropolis! Por favor ingrese su nombre");
}
let cantidad = parseInt (prompt((nombre.toUpperCase()) + ",  inserte la CANTIDAD de productos a elegir"));
const comanda = [];
for (let i = 1; i <= cantidad; i++){
    let seleccion = prompt(mostrarMenu()+"Coloque el nombre del producto a comprar ("+ i +"/"+cantidad+")");
    while (menu.some((el) => el.nombre == (seleccion.toUpperCase())) == false) {
        alert("No se ingresó correctamente");
        seleccion = prompt ("Coloque el nombre del producto a comprar");
    }
    alert("Se ingresó correctamente");
    comanda.push(menu.find((el)=> el.nombre === seleccion.toUpperCase()));
    console.log(comanda);
}

const mostrarCompra = () => {
    let texto = "";
    let suma = 0;
    comanda.forEach((eLement) => {
        texto += `${eLement.nombre} $${eLement.precio}\n`
        suma += eLement.precio
    })
    alert(`Los productos de compra son:\n${texto}\nEl monto total son $${suma}`);
};

mostrarCompra()