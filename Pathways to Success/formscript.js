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
const dbRef = firebase.database().ref('students');

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get form values
    const sname = document.getElementById('sname').value;
    const degree = document.getElementById('degree').value;
    const phone = document.getElementById('phone').value;
    const pemail = document.getElementById('pemail').value;
    const cemail = document.getElementById('cemail').value;
    const specialization = document.getElementById('specialization').value;
    const graduatingYear = document.getElementById('graduatingYear').value;
    const dob = document.getElementById('dob').value;
    const collegeName = document.getElementById('collegeName').value;
    const cgpa = document.getElementById('cgpa').value;
    const board12 = document.getElementById('board12').value;
    const marks12 = document.getElementById('marks12').value;
    const board10 = document.getElementById('board10').value;
    const marks10 = document.getElementById('marks10').value;
    const backlogs = document.getElementById('backlogs').value;
    const backlogHistory = document.getElementById('backlogHistory').value;
    const address = document.getElementById('address').value;
    const skills = document.getElementById('skills').value;
    const jobRole = document.getElementById('jobRole').value;
    const resumeFile = document.getElementById('resume').files[0];

    // Check if a file is selected
    if (!resumeFile) {
        alert('Please upload a PDF resume.');
        return;
    }

    // Firebase Storage reference for uploading resume
    const storageRef = firebase.storage().ref(`resumes/${resumeFile.name}`);

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
                    phone,
                    pemail,
                    cemail,
                    specialization,
                    graduatingYear,
                    dob,
                    collegeName,
                    cgpa,
                    board12,
                    marks12,
                    board10,
                    marks10,
                    backlogs,
                    backlogHistory,
                    address,
                    skills,
                    jobRole,
                    resumeURL
                }).then(() => {
                    alert('Student details submitted successfully!');
                    document.getElementById('contactForm').reset();
                    window.location.href = "index.html";
                }).catch((error) => {
                    console.error('Error saving student details:', error);
                });
            });
        }
    );
}


























































// firebase.initializeApp(firebaseConfig);

// // Reference to Firebase Storage
// var storage = firebase.storage();

// // Reference to Firebase Realtime Database
// var database = firebase.database();

// // Function to handle form submission (data collection and file upload)

// document.getElementById("contactForm").addEventListener('submit', function (event) {
//     event.preventDefault(); //Prevent form submission

//     var sname = document.getElementById('sname');
//     var degree = document.getElementById('degree');
//     var phone = document.getElementById('phone');
//     var pemail = document.getElementById('pemail');
//     var cemail = document.getElementById('cemail');
//     var specialization = document.getElementById('specialization');
//     var graduatingYear = document.getElementById('graduatingYear');
//     var dob = document.getElementById('dob');
//     var collegeName = document.getElementById('collegeName');
//     var cgpa = document.getElementById('cgpa');
//     var board12 = document.getElementById('board12');
//     var marks12 = document.getElementById('marks12');
//     var board10 = document.getElementById('board10');
//     var marks10 = document.getElementById('marks10');
//     var backlogs = document.getElementById('backlogs');
//     var backlogHistory = document.getElementById('backlogHistory');
//     var address = document.getElementById('address');
//     var skills = document.getElementById('skills');
//     var jobRole = document.getElementById('jobRole');
//     var resume = document.getElementById('resume');
//     var file = resume.files[0];

//     if (!sname || !degree || !phone || !pemail || !cemail || !specialization || !graduatingYear || !dob || !collegeName || !cgpa || !board12 || !marks12 || !board10 || !marks10 || !backlogs || !backlogHistory || !address || !skills || !jobRole || !file) {
//         alert('Please fill all the fields!!');
//         return;
//     }

//     // Create a storage reference with a unique name (e.g., timestamp + file name)
//     var storageRef = storage.ref('resumes/' + Date.now() + '_' + file.name);

//     // Upload file to Firebase Storage
//     var uploadTask = storageRef.put(file);

//     uploadTask.on('state_changed',
//         function () {
//             // File upload successful
//             uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
//                 console.log('File available at:', downloadURL);

//                 // Save data (including file download URL) to Firebase Realtime Database
//                 database.ref('students').push({
//                     sname: sname,
//                     degree: degree,
//                     phone: phone,
//                     pemail: pemail,
//                     cemail: cemail,
//                     specialization: specialization,
//                     graduatingYear: graduatingYear,
//                     dob: dob,
//                     collegeName: collegeName,
//                     cgpa: cgpa,
//                     board12: board12,
//                     marks12: marks12,
//                     board10: board10,
//                     marks10: marks10,
//                     backlogs: backlogs,
//                     backlogHistory: backlogHistory,
//                     address: address,
//                     skills: skills,
//                     jobRole: jobRole,
//                     pdfDownloadUrl: downloadURL // Store download URL in database
//                 });

//                 alert('Data and file uploaded successfully.');
//                 document.getElementById('pdfUploadForm').reset(); // Reset form
//             });
//         },
//         function (error) {
//             console.error('Error uploading file:', error);
//             alert("Error uploading file. Please try again");
//         }
//     );

// });

































// // Reference to the Firebase Realtime Database
// const dbRef = firebase.database().ref('students');

// // Handle form submission
// document.getElementById('contactForm').addEventListener('submit', submitForm);

// function submitForm(e) {
//     e.preventDefault();

//     // Get form values
//     const name = document.getElementById('name').value;
//     const degree = document.getElementById('degree').value;
//     const specialization = document.getElementById('specialization').value;
//     const graduatingYear = document.getElementById('graduatingYear').value;
//     const dob = document.getElementById('dob').value;
//     const cgpa = document.getElementById('cgpa').value;
//     const marks12 = document.getElementById('marks12').value;
//     const marks10 = document.getElementById('marks10').value;
//     const backlogs = document.getElementById('backlogs').value;
//     const backlogHistory = document.getElementById('backlogHistory').value;
//     const address = document.getElementById('address').value;
//     const skills = document.getElementById('skills').value;
//     const jobRole = document.getElementById('jobRole').value;
//     const resume = document.getElementById('resume').files[0];

//     // Firebase Storage reference for uploading resume
//     const storageRef = firebase.storage().ref(`resumes/${resume.name}`);

//     // Upload resume to Firebase Storage
//     const uploadTask = storageRef.put(resume);

//     uploadTask.on('state_changed',
//         (snapshot) => {
//             // Track upload progress if needed
//         },
//         (error) => {
//             console.error('Error uploading resume:', error);
//         },
//         () => {
//             // Resume uploaded successfully, now save other details to Realtime Database
//             uploadTask.snapshot.ref.getDownloadURL().then((resumeURL) => {
//                 const newStudentRef = dbRef.push();
//                 newStudentRef.set({
//                     name,
//                     degree,
//                     specialization,
//                     graduatingYear,
//                     dob,
//                     cgpa,
//                     marks12,
//                     marks10,
//                     backlogs,
//                     backlogHistory,
//                     address,
//                     skills,
//                     jobRole,
//                     resumeURL
//                 }).then(() => {
//                     alert('Student details submitted successfully!');
//                     document.getElementById('contactForm').reset();
//                 }).catch((error) => {
//                     console.error('Error saving student details:', error);
//                 });
//             });
//         }
//     );
// }
