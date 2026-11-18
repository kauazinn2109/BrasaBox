function getUser(){return JSON.parse(localStorage.getItem('brasabox_user')||'null')}
function setUser(u){localStorage.setItem('brasabox_user',JSON.stringify(u))}
function requireUser(){if(!getUser()){location.href='login.html?redirect='+encodeURIComponent(location.pathname+location.search)}}
function logout(){localStorage.removeItem('brasabox_user');toast('Você saiu da conta.');setTimeout(()=>location.href='index.html',500)}
document.addEventListener('DOMContentLoaded',()=>{
 const login=$('#loginForm'), register=$('#registerForm');
 if(login)login.addEventListener('submit',e=>{e.preventDefault();const email=$('#loginEmail').value.trim(),senha=$('#loginSenha').value;const users=JSON.parse(localStorage.getItem('brasabox_users')||'[]');let u=users.find(x=>x.email===email&&x.senha===senha);if(email==='admin@brasabox.local'&&senha==='1234')u={nome:'Administrador',email,senha,admin:true};if(!u){$('#authMsg').innerHTML='<div class="notice error">E-mail ou senha inválidos.</div>';return}setUser(u);location.href=new URLSearchParams(location.search).get('redirect')||'index.html'});
 if(register)register.addEventListener('submit',e=>{e.preventDefault();const u={nome:$('#regNome').value.trim(),email:$('#regEmail').value.trim(),telefone:$('#regTelefone').value.trim(),senha:$('#regSenha').value};if(u.senha.length<4){$('#authMsg').innerHTML='<div class="notice error">A senha deve ter pelo menos 4 caracteres.</div>';return}let users=JSON.parse(localStorage.getItem('brasabox_users')||'[]');if(users.some(x=>x.email===u.email)||u.email==='admin@brasabox.local'){ $('#authMsg').innerHTML='<div class="notice error">Este e-mail já está cadastrado.</div>';return}users.push(u);localStorage.setItem('brasabox_users',JSON.stringify(users));setUser(u);$('#authMsg').innerHTML='<div class="notice success">Cadastro realizado! Entrando...</div>';setTimeout(()=>location.href='index.html',700)});
});
window.getUser=getUser;window.setUser=setUser;window.logout=logout;window.requireUser=requireUser;
