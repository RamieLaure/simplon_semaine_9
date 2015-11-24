$list = document.getElementById("list");
$prenom = document.getElementById("prenom");
$nom = document.getElementById("nom");
$tel = document.getElementById("tel");
$ajouter = document.getElementById("ajouter");
$annuler = document.getElementById("annuler");
$research = document.getElementById("research");
$search = document.getElementById("search");
$result = document.getElementById("result");

contacts = [{
    prenom: "Julien",
    nom: "Grillot",
    tel: "0123456789"
}, {
    prenom: "John",
    nom: "Smith",
    tel: "0123456789"
}];

function texteContact(contact) {
    return contact.prenom + " " + contact.nom + " (" + contact.tel + ")";
}

function showList() {
    elements = "";
    for (i = 0; i < contacts.length; i++) {
        elements += "<li>" + texteContact(contacts[i]) + "</li>";
    }
    $list.innerHTML = elements;
}

function ajouter() {
    contacts.push({
        prenom: $prenom.value,
        nom: $nom.value,
        tel: $tel.value
    });
    showList();
}

function search() {
    research = $research.value;
    elements = "";
    for (i = 0; i < contacts.length; i++) {
        if (contacts[i].prenom == research || contacts[i].nom == research || contacts[i].tel == research) {
            elements += "<li>" + texteContact(contacts[i]) + "</li>";
        }
    }
    $result.innerHTML = elements;
}

$ajouter.onclick = ajouter;
$search.onclick = search;
showList();