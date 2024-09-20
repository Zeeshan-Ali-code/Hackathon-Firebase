  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
  import { 
    getFirestore, 
    collection,
    addDoc,
    getDocs,
    doc,
    deleteDoc,
      } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCv-PpgVax29bdYLN5lHKudaJ9VthEEvqM",
    authDomain: "repeat-11-df889.firebaseapp.com",
    projectId: "repeat-11-df889",
    storageBucket: "repeat-11-df889.appspot.com",
    messagingSenderId: "1008517021207",
    appId: "1:1008517021207:web:13339dd72dfe7dd239a652",
    measurementId: "G-NDJEMNGH1W"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  let numbersCollection = collection(db, "numbers");
  let todoscollection = collection(db, "todos")
  
  const todo_input = document.getElementById('todo_input')
  const add_todo = document.getElementById('add_todo')
  const todo_list = document.getElementById('todo_list')
  const ftodo_input = document.getElementById('ftodo_input')
  const ltodo_input = document.getElementById('ltodo_input')

  getTodosFromDb();
  add_todo.addEventListener('click', addTodoToDb)


  async function addTodoToDb(){
    try{
      const obj = {
        todo : todo_input.value,
        fName : ftodo_input.value,
        lName : ltodo_input.value,
        createdAt : new Date ().toISOString(),
      }
                                                                                                                    
      const docRef = await addDoc(todoscollection, obj);
      console.log('Todo Added', docRef);
      todo_input.value="";
      ftodo_input.value="";
      ltodo_input.value="";
      
    }
    catch{
      console.log(e)
      
    }
  }

  async function getTodosFromDb(){
    try{
      const querySnapshot = await getDocs(todoscollection);
      todo_list.innerHTML = ''
      querySnapshot.forEach((doc) => {
      console.log("Doc=>", doc.id);
      const { todo, fName, lName, createdAt } =  doc.data(); 
        const ele = `<li id = ${doc.id}>${todo} - ${new Date(
          createdAt)
          .toLocaleDateString()}</li>`
        todo_list.innerHTML += ele;      
      
});   
todo_list.childNodes.forEach((li)=> 
  li.addEventListener('click', deleteTodo)
)

    }
    catch(e){
      console.log(e);
      
    }
  }
 async function deleteTodo(){
  try{
    const docId = this.id;
    const docCollection = doc(db, 'todos', docId )
    const docRef = await deleteDoc(docCollection);
    getTodosFromDb()
    console.log('Document Deleted=>', docRef);
    
  }
  catch(e){
    console.log(e);
    
  }
 }


//   addNumberToDB()
//  async  function addNumberToDB(){
//     try {
//         // console.log(abc);
        
//         const docRef = await addDoc(numbersCollection, {
//           number: Math.round(Math.random() = 100)
//         })

//         console.log("docRef=>", docRef);
         

//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
      
//   }

//   9:22 pause in video