const classSelect = document.getElementById("classSelect");
    const subjectSelect = document.getElementById("subjectSelect");
    const languageSelect = document.getElementById("languageSelect");
    const pdfViewer = document.getElementById("pdfViewer");
    const errorMessage = document.getElementById("errorMessage");


    [classSelect, subjectSelect, languageSelect].forEach(select => {
        select.addEventListener("change", () => {
            const selectedClass = classSelect.value;
            const selectedSubject = subjectSelect.value;
            const selectedLanguage = languageSelect.options[languageSelect.selectedIndex];

            if (selectedClass && selectedSubject && selectedLanguage.value) {
                // Match selected PDF based on data attributes
                const pdfPath = selectedLanguage.value;
                if (selectedLanguage.dataset.class === selectedClass && selectedLanguage.dataset.subject === selectedSubject) {
                    pdfViewer.src = pdfPath; // Update iframe
                    errorMessage.style.display = "none";
                } else {
                    pdfViewer.src = ""; // Clear iframe if mismatched
                   
                }
            } else {
                pdfViewer.src = ""; // Clear iframe if incomplete selection
               
            }
        });
    });

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