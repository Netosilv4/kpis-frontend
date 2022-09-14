import Swal from 'sweetalert2'

interface SwalHandler {
  status: number;
  logoutCallback?: () => void;
  genericCallback?: () => void;
}

export const swalHandler = (props: SwalHandler) => {
  const { status, logoutCallback, genericCallback } = props

  if (status === 401) {
    return Swal.fire({
      title: 'Sessão expirada',
      text: 'Faça login novamente',
      icon: 'info',
      confirmButtonText: 'Ok'
    }).then(() => {
      logoutCallback && logoutCallback()
    })
  }
  Swal.fire({
    title: 'Erro interno',
    text: 'Tente novamente mais tarde',
    icon: 'error',
    confirmButtonText: 'Ok'
  }).then(() => {
    if (genericCallback) return genericCallback()
    if (!genericCallback && logoutCallback) return logoutCallback()
    window.location.reload()
  })
}
