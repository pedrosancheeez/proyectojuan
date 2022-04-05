const $formulario = document.querySelector("#form");
console.log($formulario);
$formulario.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const $form = new FormData(this);
  const resp = await fetch(this.action, {
    method: 'POST',
    body: $form,
    headers: {
      'Accept': "application/json",
    },
  });
  if (resp.ok) {
    this.reset();
    Swal.fire({
      icon: 'success',
      title: 'Mensaje enviado con exito',
      html: 'Presiona Ok para continuar'
    })

  }
}