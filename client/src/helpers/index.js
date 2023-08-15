import Swal from "sweetalert2";
export const showMessage = (icon, message) => {
  return Swal.fire({
    icon: icon,
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};
