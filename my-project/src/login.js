import './style.scss'
 

document.getElementById("btn-login").addEventListener('click', () => {
    const emailLogin = document.getElementById("emailLogin").value;
    const senhaLogin = document.getElementById("passwordLogin").value;

    if (emailLogin === 'adm' && senhaLogin === '123'){
        localStorage.setItem('user', emailLogin);
        window.location.href = 'pagina_principal.html'
    }else {
        alert("erro")
        
    }
});
    document.getElementById("btn-registro").addEventListener("click", () =>{
        const usuario = document.getElementById("userRegistro").value
        const emailRegistro = document.getElementById("emailRegistro").value
        const senhaRegistro = document.getElementById("passwordRegistro").value

        if (usuario === 'joao' && emailRegistro === 'joaovictordosanjos@gmail.com' && senhaRegistro === '123'){
           window.location.href = 'pagina_principal.html'    
        }else {
            alert('alerta')
        }
    })

function alternarForm(tipo) {
    const loginForm = document.getElementById("loginForm");
    const registroForm = document.getElementById("registroForm");
    const namelg = document.getElementById("nomeLogin")
    const namerg = document.getElementById("nomeRegistrar")
  
    if (tipo === "registro") {
      loginForm.classList.add("hidden");
      registroForm.classList.remove("hidden");
      namelg.classList.add("hidden")
      namerg.classList.remove("hidden")
    } else {
      registroForm.classList.add("hidden");
      loginForm.classList.remove("hidden");
      namerg.classList.add("hidden")
      namelg.classList.remove("hidden")
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("linkRegistro").addEventListener("click", (e) => {
      e.preventDefault();
      alternarForm("registro");
    });
  
    document.getElementById("linkLogin").addEventListener("click", (e) => {
      e.preventDefault();
      alternarForm("login");
    });
  });
  
      

