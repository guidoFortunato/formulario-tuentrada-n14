import Swal from "sweetalert2"

export const alertaWarning = (text = "Debe ingresar un texto") => {
  
  Swal.fire({
    icon: 'warning',
    html: `<b>${text}</b>`,
    timer: 2000,
    confirmButtonColor: "#444444", // dataInfoGeneral.backgroundButton
    iconColor: "#F7AC08",
  })
}

export const alertaSuccess = (text = "Información enviada con éxito") => {
  
  Swal.fire({
    icon: 'success',
    html: `<b>${text}</b>`,
    timer: 3000,
    confirmButtonColor: "#444444", // dataInfoGeneral.backgroundButton
    // iconColor: "#F7AC08",
  })
}