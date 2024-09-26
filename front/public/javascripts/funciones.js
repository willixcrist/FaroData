//función para validar rut
$(document).ready(function () {
    $("#rut").on("input", function () {
        this.setCustomValidity("");
        const rut = $(this).val();
        $(this).val(validarRut(rut));
    });
    $("#rut").on("blur", function () {
        var rutCompleto = $(this).val();
        if (!validarDV(rutCompleto))
            this.setCustomValidity("Dígito verificador inválido");
        else
            this.setCustomValidity("");
        this.reportValidity();
    });
});
function validarRut(rut) {
    rut = rut.replace(/[^0-9kK]/g, '');
    const numero = rut.slice(0, -1);
    const dv = rut.slice(-1).toUpperCase();
    const numeroFormateado = numero.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return numeroFormateado + "-" + dv;
}

function validarDV(rutCompleto) {
    const rutDV = rutCompleto.split("-")[1];
    var rut = rutCompleto.split("-")[0];
    rut = rut.replace(/[.]+/g, "");
    rut = [...rut].reverse();
    var dv = 11 - rut.reduce((sum, val, i) => sum + val * (i % 6 + 2), 0) % 11;
    if (dv==10) // lo cambiamos por K
    dv= "K";
    if (rutDV == dv.toString())
        return true;
    else
        return false;
}