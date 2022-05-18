let btnGuardar = document.getElementById('btnGuardar');
let btnCorreo = document.getElementById('btnCorreo');
let btnEditar = document.getElementById('btnEditar');
let btnEliminar = document.getElementById('btnEliminar');
let btnLimpiar = document.getElementById("btnLimpiar")

let formulario = document.getElementById('formulario');
const url= 'http://localhost:4080/usuarios/'


btnLimpiar.addEventListener('click', () =>{
    formulario.reset();
})

//------------Guardar----------------/
formulario.addEventListener('submit', async (e)=>{
    e.preventDefault();
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value


        let userr = {
            nombre: name,
            apellido:lastName,
            correo: email
        }

    await axios.post(url, userr)
        alert("Creado correctamente")
    
   
})

//------------Buscar----------------/
btnCorreo.addEventListener("click", async () =>{

    let email = document.getElementById('email').value
    
    
    try {
        console.log(email)
        const { data } = await axios.get(url)
    
       let buscarCorreo= data.find(user => user.correo === email)
    
        console.log(buscarCorreo)
    
        const {nombre, apellido, correo, id} = buscarCorreo
        document.getElementById('name').value = nombre
        document.getElementById('lastName').value = apellido
        document.getElementById('email').value = correo
       // document.getElementById('id').style.display='block'
      //  document.getElementById('label-edit').style.display='block'
        document.getElementById('id').value = id
    } catch (error) {
        alert("usuario no existe")
        formulario.reset();
    }

})


//-------------Editar---------------/
btnEditar.addEventListener('click', async ()=>{
    let nameM = document.getElementById('name').value;
    let lastNameM = document.getElementById('lastName').value;
    let emailM = document.getElementById('email').value
    let idM= document.getElementById('id').value
try {
    let userr = {
        nombre: nameM,
        apellido:lastNameM,
        correo: emailM,
        id: idM
    }
    await axios.put(url+idM, userr)
    alert("editado correctamente")
} catch (error) {
    alert('hubo un error', error)
    formulario.reset();
}
    
    
    
})


//------------Eliminar----------------/

btnEliminar.addEventListener('click', async() =>{
    let idEliminar = document.getElementById('id').value

    await axios.delete(url+idEliminar)
    alert("eliminado correctamente")

})