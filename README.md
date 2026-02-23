


let x =0;
x = 1; 




sectX(1); 


# Evento 
- onClick -> clic del usuario
- onChange -> cuando escribe en un input
- onSubmit -> cuando envia un formulario
- onKeyDown -> pulsa una tecla 
- onMouseEnter -> pasa el mause


<button onclick="hacerAlgo()"></button>
<button onClick={hacerAlgo}></button>

- useState -> hook
  - Crear una variable de estado 
  - Crea una funcion para actualizar algo 
  - le dice a React: "ciando cambiar"


const [valor, setValor] = useState(valorInicial);


const [contador, setContador] = useState(0);

- contador -> valor actual 
- setContador -> función que actualiza
- 0 -> valor inicial



# Crea un nuevo proyecto de git 
- git init 

# Clonar 
- git clone 
  - npm i
  
# estado actual 
- git status 
  

# guardar archivos 
- git add . 
- git add nombre.txt

# guardar cambios 
- git commit -m ""

# enviar codigo

- main - develop
- develop 
  - view-login
  - Navbar
  - footer 
  - contact-form


- git push origin main 
  - git push -u origin main 
  - git push feature-login

# traer cambios del repo
- develop 
- git pull 


# Trabajo con ramas 


- git branch nombre-rama - nueva rama 
- git checkout - cambiar de rama 

- git checkout -b nombre-rama
- git switch -c nombre-rama

- ver ramas 
- git branch 
- git branch -a -> incluye las remotas


# Mezclar ramas (Merge)
- git merge nombre-rama 

-> Conflictos 
- Git marcará las partes en conflicto asi:
  <<<<<<<< HEAD
  su version de code
  ==============
  version de la otra rama
  >>>>>>>>

-> aceptar o denegar 
  - entrantes 
  - salientes 

  - negar entrantes 
  - negar salientes 

  - unir las dos 



# Comandos de apoyo 
- ver historial -> commit 
  - git log --online -graph
- git checkout -- archivo.txt # descartar cambios locales del archivo

- revertir commit 
  - git revert <id-del-commit>

