// Tab functionality
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

for (let tablink of tablinks) {
    tablink.addEventListener("click", function () {
        // Use the text content of the clicked tab or a custom attribute for tabname
        const tabname = this.getAttribute("data-tab");
        console.log(tabname);
        opentab(tabname);
    });
}

// Form submission handling
const scriptURL = 'https://script.google.com/macros/s/AKfycbzTcRRJrpPbN--bnHQGK9jUgk7xIvkNLHS0FgfjIXOvBv6mDvO5gSDeKR133K3QZo909A/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});