function UploadImage() {

    var archivo = document.getElementById("FileDocumento").value;

    if (document.getElementById("DdlDocumento").value == 0) {
        swal({ title: "Debe seleccionar una descripción del  Documento.", type: "error", confirmButtonText: "Cerrar" });
        $('#DdlDocumento').addClass("alert-danger");
        return;
    }
    else if ((archivo == null) || (archivo == "")) {
        swal({ title: "Debe seleccionar un Documento.", type: "error", confirmButtonText: "Cerrar" });
        $('#FileDocumento').addClass("alert-danger");
        return;
    }else{

        var archivo = document.getElementById("FileDocumento").value;
        mostrarRelojProgress();

        $("#CargarDocumentosForm").submit();
          
    }
}
var isFirstLoad = true;

function UploadImage_Complete() {
    //chequear si es la primera carga del iFrame
    if (isFirstLoad == true) {
        isFirstLoad = false;
        return;
    }

    document.getElementById("loading").style.display = 'none';

    //obtener la informacion enviada al iframe desde el controlador
    var newImg = $.parseJSON($("#UploadTarget").contents().find("#jsonResult")[0].innerHTML);

    //si se encontro un error con el archivo mostrarlo
    if (newImg.IsValid == false) {
        alert(newImg.Message);
        return;
    }

    //borrar datos del formulario por carga exitosa
    alert(newImg.Message);
    document.getElementById("CargarDocumentosForm").reset();

    //obtener nuevos datos y mostrar tabla
    obtenerDocumentos();
}