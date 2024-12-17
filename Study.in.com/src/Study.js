// Select elements
const loginBox = document.getElementById('loginBox');
const signUpBox = document.getElementById('signUpBox');
const closeIcons = document.querySelectorAll('.close-icon');
const loginBtn = document.querySelector('.login-Btn');

loginBtn.addEventListener('click', () => {
    if (loginBox.style.display === 'block') {
        loginBox.style.display = 'none';
    } else {
        loginBox.style.display = 'block';
    }
});

// Event listeners for close icons
closeIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        loginBox.style.display = 'none';
        signUpBox.style.display = 'none';
    });
});

const signUpBtn = document.getElementById('showSignUpBox');
const loginBtn2 = document.getElementById('showLoginBox');

signUpBtn.addEventListener('click', () => {
    if (signUpBox.style.display === 'block') {
        signUpBox.style.display = 'none';
    } else {
        signUpBox.style.display = 'block';
        // loginBox.style.display = 'none'; // Hide login box
    }
});

loginBtn2.addEventListener('click', () => {
    if (loginBox.style.display === 'none') {
        loginBox.style.display = 'block';
        // console.log("hello");
        
    } else {
        loginBox.style.display = 'block';
        // console.log("function is not run");
        signUpBox.style.display = 'none';
        
    }
});


// --------------------------title ncert book----------

const classData = {
    6: {
        subjects: {
            hindi: ["Bal Ram Katha", "Kahani Manjari"],
            english: ["English Reader", "Grammar Workbook"],
            mathematics: ["Numbers and Geometry", "Math Practice"],
        }
    },
    7: {
        subjects: {
            hindi: ["Kavitavali", "Doha Sanchay"],
            english: ["Shakespeare Stories", "Poetry Anthology"],
            mathematics: ["Fractions and Algebra", "Geometry Basics"],
        }
    },
    8: {
        subjects: {
            science: ["Physics Basics", "Chemistry Essentials"],
            mathematics: ["Trigonometry Basics", "Advanced Algebra"],
        }
    },
    9: {
        subjects: {
            science: ["Physics Concepts", "Chemistry Practical Guide"],
            socialScience: ["World History", "Political Science"],
        }
    },
    10: {
        subjects: {
            science: ["Advanced Physics", "Chemical Reactions"],
            socialScience: ["Indian History", "Geography"],
        }
    },
    11: {
        subjects: {
            arts: ["Art and Culture", "Modern Art"],
            physicalEducation: ["Health and Fitness", "Yoga Practice"],
        }
    },
    12: {
        subjects: {
            vocationalEducation: ["Entrepreneurship Guide", "Workshop Manuals"],
            urdu: ["Urdu Poetry", "Ghazals Compilation"],
        }
    },
};

 // Get the select elements
 const classSelect = document.getElementById("classSelect");
 const subjectSelect = document.getElementById("subjectSelect");
 const languageSelect = document.getElementById("languageSelect");

 // Event listener for class selection
 classSelect.addEventListener("change", function() {
     const selectedClass = classSelect.value;
     console.log("Selected Class:", selectedClass);

     

     // Clear previous subject and language options
     subjectSelect.innerHTML = `<option value="">Select the subject</option>`;
     languageSelect.innerHTML = `<option value="">Select the book title</option>`;

     // Populate subjects based on selected class
     if (classData[selectedClass]) {
         const subjects = classData[selectedClass].subjects;
         for (const subject in subjects) {
             const option = document.createElement("option");
             option.value = subject;
             option.textContent = subject.charAt(0).toUpperCase() + subject.slice(1);
             subjectSelect.appendChild(option);
         }
     }
 });

 // Event listener for subject selection
 subjectSelect.addEventListener("change", function() {
     const selectedClass = classSelect.value;
     const selectedSubject = subjectSelect.value;

     // Clear previous language options
     languageSelect.innerHTML = `<option value="">Select the book title</option>`;

     // Populate books based on selected class and subject
     if (classData[selectedClass] && classData[selectedClass].subjects[selectedSubject]) {
         const books = classData[selectedClass].subjects[selectedSubject];
         books.forEach((book) => {
             const option = document.createElement("option");
             option.value = book;
             option.textContent = book;
             languageSelect.appendChild(option);
         });
     }
 });
 console.log("Selected Class:", selectedClass);
 console.log("Subjects:", classData[selectedClass]?.subjects);
 console.log("Selected Subject:", selectedSubject);
 
