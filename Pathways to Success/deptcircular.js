// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAO10__wXNXrKrC90RRnZDSPeng1zQiIUg",
    authDomain: "admin-8aa20.firebaseapp.com",
    databaseURL: "https://admin-8aa20-default-rtdb.firebaseio.com",
    projectId: "admin-8aa20",
    storageBucket: "admin-8aa20.appspot.com",
    messagingSenderId: "632402957348",
    appId: "1:632402957348:web:bcb55da724c02fa79cb4b1"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

// Reference to the Firebase Realtime Database
const dbRef = firebase.database().ref('company');

// Handle form submission
document.getElementById('deptForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get form values
    const sname = document.getElementById('sname').value;
    const degree = document.getElementById('degree').value;
    const pemail = document.getElementById('pemail').value;
    const specialization = document.getElementById('specialization').value;
    const cgpa = document.getElementById('cgpa').value;
    const marks12 = document.getElementById('marks12').value;
    const marks10 = document.getElementById('marks10').value;
    const backlog = document.getElementById('backlog').value;
    const skills = document.getElementById('skills').value;
    const eskills = document.getElementById('eskills').value;
    const resumeFile = document.getElementById('resume').files[0];

    // Check if a file is selected
    if (!resumeFile) {
        alert('Please upload a PDF resume.');
        return;
    }

    // Firebase Storage reference for uploading resume
    const storageRef = firebase.storage().ref(`deptres/${resumeFile.name}`);

    // Upload resume to Firebase Storage
    const uploadTask = storageRef.put(resumeFile);

    uploadTask.on('state_changed',
        (snapshot) => {
            // Track upload progress if needed
        },
        (error) => {
            console.error('Error uploading resume:', error);
        },
        () => {
            // Resume uploaded successfully, now save other details to Realtime Database
            uploadTask.snapshot.ref.getDownloadURL().then((resumeURL) => {
                const newStudentRef = dbRef.push();
                newStudentRef.set({
                    sname,
                    degree,
                    pemail,
                    specialization,
                    cgpa,
                    marks12,
                    marks10,
                    backlog,
                    skills,
                    eskills,
                    resumeURL
                }).then(() => {
                    alert('Student details submitted successfully!');
                    window.location.href="index.html";
                    document.getElementById('deptForm').reset();
                }).catch((error) => {
                    console.error('Error saving student details:', error);
                });
            });
        }
    );
}
