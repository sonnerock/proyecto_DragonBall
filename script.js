$(document).ready(function () {

    $("#formulario").submit(function (event) {
        event.preventDefault();
        let consultaPersonaje = $("#character").val(); //variable del input de la consulta, (val() metodo para rescatar valor del input)


        $.ajax({
            type: "GET", //metodo de ajax
            url: `https://dragonball-api.com/api/characters/${consultaPersonaje}`, //Concatenacion de url con variable 
            dataType: "json", //formato que espero de vuelta
            success: function (data) {

                let nombre = data.name;
                let ki = data.ki;
                let imagen = data.image;
                let descripcion = data.description;

                $("#cardCharacter").html(`
                
                <div class="card" style="width: 18rem;">
                    <img src="${imagen}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${nombre}</h5>
                            <p class="card-text">${ki} ki de poder</p>
                        </div>
                </div>
                
                `);

            },
            error: function (error) {

                console.error("error: ", error);
            }
        })

    })

});