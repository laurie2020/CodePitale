import { Patient, Traitement} from "./class.js";
let marcus = new Patient('Marcus', 'mal indenté', 100, '', 'malade');
let optimus = new Patient('Optimus', 'unsave', 200, '', 'malade');
let sangoku = new Patient('Sangoku', '404', 80, '', 'malade');
let darthVader = new Patient('DarthVader', 'azmatique', 110, '', 'malade');
let semicolon = new Patient('Semicolon', 'syntaxError', 60, '', 'malade');

let malIndente = new Traitement('ctrl+maj+f', 60);
let unsave = new Traitement('saveOnFocusChange', 100);
let error404 = new Traitement('CheckLinkRelation', 35);
let azmatique = new Traitement('Ventoline', 40);
let syntaxError = new Traitement('f12+doc', 20);

let pharmacie = {
    nom: 'pharmacie',
    personnes: [],
    contenu: [malIndente, unsave, error404, azmatique, syntaxError]
}
let docteur = {
    nom: 'Dr.Chmet',
    argent: 100,
    cabinet: [],
    salleDAttente: [],
    diagnostique(patient) {
        switch (patient.maladie) {
            case 'mal indenté':
                setTimeout(() => {
                    console.log('Vous êtes mal indenté !');
                }, 3000);
                setTimeout(() => {
                    patient.paye(this);
                }, 4000);        
                setTimeout(() => {
                    patient.traitement = malIndente;
                    console.log('Vous avez besoin de ctrl+mak+f');
                }, 6000);
                
                break;
            case 'unsave':
                setTimeout(() => {
                    console.log('Vous êtes unsave !');
                }, 3000);
                setTimeout(() => {
                    patient.paye(this);
                }, 4000);
                setTimeout(() => {
                    patient.traitement = unsave;
                    console.log('Vous avez besoin de saveOnFocusChange');
                }, 6000);       
                break;
            case '404':
                setTimeout(() => {
                    console.log('Vous avez un 404 !');
                }, 3000);
                setTimeout(() => {
                    patient.paye(this);
                }, 4000);
                setTimeout(() => {
                   patient.traitement = error404;
                    console.log('Vous avez besoin de CheckLinkRelation'); 
                }, 6000);        
                break;
            case 'azmatique':
                setTimeout(() => {
                    console.log('Vous avez un 404 !');
                }, 3000);
                setTimeout(() => {
                    patient.paye(this);
                }, 4000);
                setTimeout(() => {
                    patient.traitement = azmatique;
                    console.log('Vous avez besoin de Ventoline');
                }, 6000);                       
                break; 
            case 'syntaxError':
                setTimeout(() => {
                    console.log('Vous avez un 404 !');
                }, 3000);
                setTimeout(() => {
                    patient.paye(this);
                }, 4000);
                setTimeout(() => {
                    patient.traitement = syntaxError;
                    console.log('Vous avez besoin de f12+doc');
                }, 6000);        
                break;   
        }
    },
    patientIn(patient){
        console.log('Bonjour, c\'est à votre tour!')
        setTimeout(() => {
            console.log(`${patient.nom} entre dans le cabinet du Dr.Chmet`)
            this.cabinet.push(this.salleDAttente.shift())
        }, 1000);
        
    },
    patientOut(patient){
        console.log('Merci docteur, au revoir');
        setTimeout(() => {
            console.log(`${patient.nom} sort du cabinet...`)
            this.cabinet.splice(this.cabinet.indexOf(patient));
            console.log(`Au revoir, ${patient.nom}`);     
        }, 2000);
        
    }
}


docteur.salleDAttente.push(marcus);
docteur.salleDAttente.push(optimus);
docteur.salleDAttente.push(sangoku);
docteur.salleDAttente.push(darthVader);
docteur.salleDAttente.push(semicolon);



let visite = patient => {
    setInterval(console.log('miaouuuh'), 2000);
    setTimeout(() => {
        docteur.patientIn(patient);
        docteur.diagnostique(patient);
    }, 2000);
    setTimeout(() => {
        docteur.patientOut(patient); 
    }, 10000);
    setTimeout(() => {
        patient.goTo(pharmacie);
    }, 13000);
    setTimeout(() => {
        patient.takeCare(patient.traitement);
        pharmacie.personnes.splice(pharmacie.personnes.indexOf(patient));
    }, 14000);
}

let chat = setInterval(console.log('miaouuuh'), 2000);
let stopChat = () => { clearInterval(chat)};

let interval = setInterval(visite(docteur.salleDAttente[0]), 2000);
let stopInterval = () => { clearInterval(interval)};
setInterval(() => {
    if(docteur.salleDAttente[0]){
        visite(docteur.salleDAttente[0])
    }else{
        stopInterval();
        stopChat();
    }
}, 17000);
