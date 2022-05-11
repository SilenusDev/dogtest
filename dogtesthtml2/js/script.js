class Dog {
    constructor(dogName, dogType, dogForce, description) {
    this.dogName 	= dogName;
    this.dogType 	= dogType;
    this.dogForce 	= dogForce;
    this.description= description; 
    }
}

let dog1 = new Dog ('dog1', 'type1', 0, 'description 1');
let dog2 = new Dog ('dog2', 'type2', 0, 'description 2');
let dog3 = new Dog ('dog3', 'type3', 0, 'description 3');
let dog4 = new Dog ('dog4', 'type4', 0, 'description 1');

let dogType = [dog1, dog2, dog3, dog4];			

class Question {
    constructor(quest, type, force, description) {
    this.quest 	= quest;
    this.type 	= type;
    this.force 	= force;
    this.description = description;
    }
}

let q1 = new Question ("question 1","type1", 0);
let q2 = new Question ("question 2","type1", 0);
let q3 = new Question ("question 3","type2", 0);
let q4 = new Question ("question 4","type2", 0);
let q5 = new Question ("question 5", "type3", 0);
let q6 = new Question ("question 6", "type3", 0);
let q7 = new Question ("question 7", "type4", 0);
let q8 = new Question ("question 8","type4", 0);

let tabQuest = [q1, q2, q3, q4, q5, q6, q7, q8];

let startBtn = document.querySelector('#launchBtn');
let myForm = document.querySelector('form');
let myBtnValid = document.querySelector('#validBtn'); 
let inputsQuest = document.querySelectorAll('input');
let count= 0;
let isValidated = false;
let titleQ=document.querySelector('#titleQuest');
let textQ=document.querySelector('#textQuest');
let tableresult=document.querySelector('table')

// le bouton de lancement lance le launch puis est display none
startBtn.addEventListener('click', function() {
	// e.preventDefault();
    startBtn.style.display = 'none';
    myForm.style.display = 'block';
	launch(count);
})
// launch
function launch() {
    isValidated = false; 
    myBtnValid.style.display = 'none';
    myForm.reset();

    
    titleQ.textContent = `Question n° ${count+1}`;
    textQ.textContent = tabQuest[count].quest;
// lorsqu'un radio est coché le bouton de validation apparait
    inputsQuest.forEach(function(input){
        input.addEventListener('click', function() {
            // la force de la qestion prend la value du radio
            tabQuest[count].force = parseInt(this.value);
            console.log(tabQuest[count].force)
            myBtnValid.style.display = 'block';
            
        })
    })
    // le clique sur le bouton de valeur valide l'execution du premier traitement
    myBtnValid.addEventListener('click', function() {
        console.log('uservalid');
        
        myForm.reset();
        myBtnValid.style.display = 'none';
        isValidated = true;
        // les types du tableau questiion et les types du tableau dog sont comparés
        dogType.forEach(function(type) {
            if (dogType.dogType === tabQuest[count].type) {
                // s'ils sont identiques la force de la question est implementée à la force du dog
                dogType.dogForce += tabQuest[count].force;
                console.log('before launch' + dogType.dogForce);
                
                
            }
        })
        
        // for (let i =0; i < dogType.length ; i++) {
        //     if (dogType[i].dogType === tabQuest[count].type) {
                
        //         dogType[i].dogForce += tabQuest[count].force;
        //         console.log('before launch' + dogType[i].dogForce);
        //         break;
                
        //     }
        // }


        // la fonction est relancée. Mais la boucle s'embale... je n'arrive pas à corriger
        // je n'ai que les question 1, 2, 4, 8
        if (count < tabQuest.length && isValidated === true ){
            count++ ;
            launch();
        } else if ( count == tabQuest.length) {
            titleQ.textContent = `Tes resultats`;
            textQ.textContent = ``;
            for (let i=0 ; i < dogType.length; i++) {
                console.log(dogType[i].dogName + ' = ' + dogType[i].dogForce)
            }
        } else {
            console.log('y a bug')
        }
    })
} 

    