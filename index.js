        function saludoUser(){
            let nombreUser = prompt("Ingresa su nombre:")
            alert('Bienvenido a la calculadora de Indice de Masa Muscular ' + nombreUser + ".")
        }
        saludoUser()


         let edadUsuario = parseInt(prompt('Ingrese su edad'))
         let pesoUsuario = parseFloat(prompt('Ingrese su peso en kilogramos'))
         let alturaUsuario = parseFloat(prompt('Ingrese su altura en en centimetros'))

         const cuentaImc = pesoUsuario / (alturaUsuario**2) *10000
        
         alert('Su indice de masa muscular es de ' + parseInt(cuentaImc))
        
         if (cuentaImc > 25) {
             alert('Su masa corporal esta excedida, cuidado!')
         } else if (cuentaImc < 25) {
             alert('Su masa corporal es la ideal, siga asi!!')
         }
        
         // Metabolismo Basal Calculator

         let sexo = prompt('¿Con que genero se identifica?')
        
        
          while (sexo == "" || sexo == "") {
              alert('Respuesta invalida')
             //  prompt("Ingrese una respuesta valida")
              sexo = (prompt("Ingresa una respuesta valida por favor. \'Hombre' o 'Mujer'\ "))

          }
        
         let metabolismoBasalUsuario;

         if (sexo === 'hombre') {
             metabolismoBasalUsuario = (10 * pesoUsuario) + (6.25 * alturaUsuario) - (5*edadUsuario) + 5
             alert('Su metabolisimo basal es de ' + parseInt(metabolismoBasalUsuario) + ' calorias para mantener')
         } else if (sexo === 'mujer') {
             metabolismoBasalUsuario = (10 * pesoUsuario) + (6.25 * alturaUsuario) - (5*edadUsuario) - 161
             alert('Su calorias de reposo son ' + parseInt(metabolismoBasalUsuario) + ' calorias para mantener')
         }

         // Calorias a comer segun tu metabolismo basal

         let nivelDeActividad = parseInt(prompt('Indique su nivel de actividad según, 1 Moderada, 2 ligera o 3 fuerte'))

         if (nivelDeActividad === 1) {
             let actividadModerada = (metabolismoBasalUsuario * 1.3)
             alert('Su calorias a consumir para mantener son ' + actividadModerada)
         } else if (nivelDeActividad === 2) {
             let actividadLigera =  (metabolismoBasalUsuario * 1.5)
             alert('Su calorias a consumir para mantener son ' + actividadLigera)
         } else if (nivelDeActividad === 3) {
             let actividadFuerte = (metabolismoBasalUsuario * 1.7)
             alert('Su calorias a consumir para mantener son ' + actividadFuerte)
         } else {
             prompt('Número incorrecto')
        }




        class Personas {
    constructor(nombreUser, edadUsuario, pesoUsuario, alturaUsuario) {
        this.nombreUser = nombreUser
        this.edadUsuario = edadUsuario
        this.pesoUsuario = pesoUsuario
        this.alturaUsuario = alturaUsuario
        this.registrado = function (){
            console.log(`El usuario ${this.nombreUser} ha sido guardado correctamente`)
        }
    }

}

const persona1 = new Personas("Lucas",20, 76,170 )
persona1.registrado()

const alimentos = [{ comida: "milanesa", calorias: 200, proteina: 20},
                    { comida: "fideos", calorias: 300, proteina: 12},
                { comida: "arroz", calorias: 100, proteina: 15}];

for (const alimento of alimentos) {
    console.log(alimento.comida)
    console.log(alimento.calorias)
    console.log(alimento.proteina)


}