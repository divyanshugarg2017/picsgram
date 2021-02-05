import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
<script src="/__/firebase/init.js"></script>

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };