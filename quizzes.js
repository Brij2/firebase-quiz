const admin = require('firebase-admin');
const fs = require('fs-extra');
const yaml = require('yamljs');

admin.initializeApp({
    credential: admin.credential.cert(require('./credentials.json')),
});
const db = admin.firestore();

const quizzes = [
    'physics-unit1-Units-and-Measurements1',
    'physics-unit1-Units-and-Measurements2',
    'physics-unit1-Dimensions',
    'physics-unit1-Errors',
    'physics-unit1-vernier',
    'physics-unit2-ELECTROSTATICS-AND-MAGNETISM',
    'physics-unit2-ELECTROSTATICS-AND-MAGNETISM2'

]


const update = async(quizId) => {

    const json = yaml.load(`quizzes/${quizId}.yaml`);

    console.log(JSON.stringify(json));

    const ref = db.collection('quizzes').doc(quizId);

    await ref.set(json, { merge: true });

    console.log('DONE');

}

for (const quiz of quizzes) {
    update(quiz);
}



