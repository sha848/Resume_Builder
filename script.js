function generateResume() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;

    if (!name || !email || !phone || !skills || !experience) {
        alert("Please fill out all fields.");
        return;
    }

    const resumeHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Experience:</strong> ${experience}</p>
    `;

    document.getElementById("resume").innerHTML = resumeHTML;
}
