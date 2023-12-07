import Swal from "sweetalert2";

export const alertaWarning = (text = "Debe ingresar un texto") => {
  Swal.fire({
    icon: "warning",
    html: `<b>${text}</b>`,
    timer: 2000,
    confirmButtonColor: "#444444", // dataInfoGeneral.backgroundButton
    iconColor: "#F7AC08",
  });
};

export const alertaTickets = (
  text = "Gracias por contactarte",
  ticket = "",
  dateCreated="",
  status=""
) => {
  Swal.fire({
    icon: "success",
    allowOutsideClick: false,
    html: ` <div style="text-align: center;">
        <b>${text}<br></b><br>
        <span style="color: #6bbf59;">Tu número de ticket es: ${ticket}<br></span><br>
        <span style="color: #000;">Fue creado el ${dateCreated}<br></span><br>
        <span style="color: #000;">El status es ${status}<br></span><br>
         </div>`,
    // timer: 3000,
    confirmButtonColor: "#444444", // dataInfoGeneral.backgroundButton
    // iconColor: "#F7AC08",
  });
};


export const alertaSuccess = (
  text = "Gracias por contactarte",
  ticket = "Tu número de seguimiento es:",
  numero = "18564830575-3",
  info = "Toda la información te llegará por correo electrónico. Puede revisar la carpeta de spam en caso de no recibirlo."
) => {
  Swal.fire({
    icon: "success",
    allowOutsideClick: false,
    html: ` <div style="text-align: center;">
        <b>${text}<br></b><br>
        <span>${ticket}</span><br>
        <span style="color: #6bbf59;">${numero}<br></span><br>
        <small style="font-size: 80%;">${info}</small> </div>`,
    // timer: 3000,
    confirmButtonColor: "#444444", // dataInfoGeneral.backgroundButton
    // iconColor: "#F7AC08",
  });
};
