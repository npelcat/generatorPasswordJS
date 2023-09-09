// La logique de la fonction (numérotée) :

//3. Créer des données : STOCKER dans des variables toutes les données possibles (chiffres, maljuscules, minuscules et symboles)
const dataLowerCase = "azertyuiopqsdfghjklmwxcvbn";
const dataUpperCase = dataLowerCase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "&~\"#'{([-|`_^@)]=}+$%*?,;./:§!";
//Récupérer la valeur de ce qui est écrit dans le range (aller chercher la valeur dans l'objet "password-length" = rangeValue.value)
const rangeValue = document.getElementById("password-length");
// L'endroit où afficher le mot de passe généré :
const passwordOutput = document.getElementById("password-output");



// 1. Créer une fonction avec un nom parlant qui fera le comportement souhaité et juste la loguer dans un premier temps.
function generatePassword() {
    // console.log("je génère un MdP");
    //Créer la variable qui stockera les caractères dans un tableau :
    let data = [];
    //Stocker le MdP généré :
    let password = "";

    //Utilisation du "..."(spread operator) pour casser la chaîne de caractères et n'avoir plus une string entière mais 26 lettres séparées :
    if(lowercase.checked) data.push(...dataLowerCase);
    if(uppercase.checked) data.push(...dataUpperCase);
    if(numbers.checked) data.push(...dataNumbers);
    if(symbols.checked) data.push(...dataSymbols);

    //5. Sécurité si jamais rien n'est coché :
    if(data.length === 0) {
        alert("Please select something");
        //Ne va pas plus loin, la fonction s'arrête ici :
        return;
    }

    //4. Créer une Boucle FOR (pour générer autant de caractères que la valeur de rangeValue.value):
    //i = 0, tant que i est inférieur à la valeur de rangeValue, tu incrémentes d'un.
    for (i = 0; i < rangeValue.value; i++){

    //password = je t'attribue la valeur suivante :
    //"+=" = pour ne pas écraser les lettres une à une, mais les incrémenter et en faire un mot
    //data = stocker les données dans ce tableau
    //Math.floor = pour arrondir à l'inférieur
    //Math.random = générer un caractère au hasard
    //* data.length = fois la longueur des données de data 
    password += data[Math.floor(Math.random() * data.length)];
    console.log(password);
    }

    //6. Ecrire le mot de passe généré dans le input prévu :
    passwordOutput.value = password;

    //7. Copier le mot de passe généré à l'utilisateur
    //Sélectionner :
    passwordOutput.select();
    //Copier dans le prese-papier (clipboard)
    navigator.clipboard.writeText(passwordOutput.value);

    //8.Signaler à l'utilisateur que le MdP a été copié (en notant "Copy !" dans le bouton):
    generateButton.textContent = "Copy !";
    // Délai pour remettre le texte initial dans le bouton :
    setTimeout(() => {
        generateButton.textContent = "Generate password";
    }, 2000);
};

//2. Créer un event Listener sur le bouton pour appeler la fonction lorsqu'il est cliqué :
// Le addEventListener peut prendre une fonction fléchée (pour définir à la main ce que l'on souhaite) ou le nom d'une fonction déjà définie.
generateButton.addEventListener("click", generatePassword);