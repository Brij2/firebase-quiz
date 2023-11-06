const admin = require('firebase-admin');
const fs = require('fs-extra');
const yaml = require('yamljs');

admin.initializeApp({
    credential: admin.credential.cert(require('./credentials.json')),
});
const db = admin.firestore();

const topics = [
    'physics-unit1',
    'physics-unit2',
    'chemistry-unit1',
    'chemistry-unit2',
    'units_and_measurements',
    'angular',
    'flutter',
    'cf',
    'firebase',
    'firestore',
    'flutter',
    'rxjs',
    'js',
    'ts'
]


const update = async(id) => {

    const json = yaml.load(`topics/${id}.yaml`);

    console.log(JSON.stringify(json));

    const ref = db.collection('topics').doc(id);

    await ref.set(json, { merge: true });

    console.log('DONE');

}

for (const topic of topics) {
    update(topic);
}



