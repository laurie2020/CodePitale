class Patient {
    constructor(nom, maladie, argent, poche, etatSante) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
        this.goTo = (arrivee) => {
            console.log(`${this.nom} vas à la pharmacie pour acheter de quoi se soigner.`);
            arrivee.personnes.push(this);
        }
        this.takeCare = (traitement) => {
            if(this.argent >= traitement.prix){
                this.argent -= traitement.prix;
                console.log(`${this.nom} sort de la pharmacie et prend son traitement...`);
                setTimeout(() => {
                    this.etatSante = 'guérrit';
                    console.log(`${this.nom} est guérrit !`);
                }, 3000);
                
            }else{
                console.log(`${this.nom} n'a pa assez d'argent pour se soigner, il sort donc de la pharmacie...`);
                setTimeout(() => {
                    this.etatSante = "mort";
                    console.log(`${this.nom} est mort, il est mantenant au cimetière, paix à son âme`);
                }, 3000);
            }
            
        }
        this.paye = (docteur) => {
            console.log(`Ca fera 50$ s'il-vous-plaît`);
            setTimeout(() => {
                this.argent -= 50;
                docteur.argent += 50;
                console.log('Merci !')
            }, 1000);
            
        }
    }
}

class Traitement {
    constructor(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
}
export {Patient, Traitement};