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
//  console.log("Selected Class:", selectedClass);
//  console.log("Subjects:", classData[selectedClass]?.subjects);
//  console.log("Selected Subject:", selectedSubject);
 
// -------------------------------------show the text-box-----------------------

const searchIcon = document.getElementById("searchIcon");
const textBox = document.getElementById("textBox");
const errorMessage = document.getElementById("errorMessage");

        // Add click event to the search icon
        searchIcon.addEventListener("click", () => {
            const isClassSelected = classSelect.value !== "";
            const isSubjectSelected = subjectSelect.value !== "";
            const isLanguageSelected = languageSelect.value !== "";

            if (isClassSelected && isSubjectSelected && isLanguageSelected) {
                errorMessage.style.display = "none"; // Hide error if all are selected
                textBox.classList.add("active"); // Show the text box
                alert("All selections are complete. Proceeding!");
                // Optionally redirect to another page
                // window.location.href = "nextpage.html";
            } else {
                errorMessage.style.display = "block"; // Show error message
                textBox.classList.remove("active"); // Ensure text box is hidden
            }
});