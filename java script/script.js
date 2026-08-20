/* =====================================================
  Mithil Computer Institute
   COMMON JAVASCRIPT
===================================================== */


/* =====================================================
   1. ACTIVE NAVIGATION LINK
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const navLinks =
        document.querySelectorAll("nav ul li a");

    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });

});


/* =====================================================
   2. CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name");

        const phone =
            document.getElementById("phone");

        const email =
            document.getElementById("email");

        const message =
            document.getElementById("message");

        /* Basic validation */

        if (
            name &&
            name.value.trim() === ""
        ) {
            alert("Please enter your name.");
            name.focus();
            return;
        }

        if (
            phone &&
            !/^[0-9]{10}$/.test(phone.value.trim())
        ) {
            alert("Please enter a valid 10-digit phone number.");
            phone.focus();
            return;
        }

        if (
            email &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                email.value.trim()
            )
        ) {
            alert("Please enter a valid email address.");
            email.focus();
            return;
        }

        if (
            message &&
            message.value.trim() === ""
        ) {
            alert("Please enter your message.");
            message.focus();
            return;
        }

        const successMessage =
            document.getElementById("successMessage");

        if (successMessage) {

            successMessage.style.display = "block";

            successMessage.innerHTML =
                "✅ Thank you! Your message has been submitted successfully.";

        }

        contactForm.reset();

    });

}


/* =====================================================
   3. ADMISSION FORM
===================================================== */

const admissionForm =
    document.getElementById("admissionForm");

if (admissionForm) {

    admissionForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("studentName");

        const phone =
            document.getElementById("studentPhone");

        const email =
            document.getElementById("studentEmail");

        /* Validate name */

        if (
            name &&
            name.value.trim() === ""
        ) {
            alert("Please enter the student's name.");
            name.focus();
            return;
        }

        /* Validate phone */

        if (
            phone &&
            !/^[0-9]{10}$/.test(
                phone.value.trim()
            )
        ) {
            alert("Please enter a valid 10-digit phone number.");
            phone.focus();
            return;
        }

        /* Validate email if provided */

        if (
            email &&
            email.value.trim() !== "" &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                email.value.trim()
            )
        ) {
            alert("Please enter a valid email address.");
            email.focus();
            return;
        }

        const successMessage =
            document.getElementById("successMessage");

        if (successMessage) {

            successMessage.style.display = "block";

            successMessage.innerHTML =
                "✅ Admission application submitted successfully!";

        } else {

            alert(
                "✅ Admission application submitted successfully!"
            );

        }

        admissionForm.reset();

    });

}


/* =====================================================
   4. GALLERY FILTER
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const galleryItems =
    document.querySelectorAll(".gallery-item");

if (
    filterButtons.length > 0 &&
    galleryItems.length > 0
) {

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            /* Remove active class */

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });

            /* Add active class */

            button.classList.add("active");

            const filter =
                button.getAttribute("data-filter");

            galleryItems.forEach(function (item) {

                const category =
                    item.getAttribute("data-category");

                if (
                    filter === "all" ||
                    category === filter
                ) {

                    item.style.display = "block";

                } else {

                    item.style.display = "none";

                }

            });

        });

    });

}


/* =====================================================
   5. GALLERY LIGHTBOX
===================================================== */

const galleryImages =
    document.querySelectorAll(".gallery-item img");

const lightbox =
    document.querySelector(".lightbox");

const lightboxImage =
    document.querySelector(".lightbox img");

const closeButton =
    document.querySelector(".lightbox .close");


if (
    galleryImages.length > 0 &&
    lightbox &&
    lightboxImage
) {

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            lightbox.style.display = "flex";

            lightboxImage.src =
                image.src;

            lightboxImage.alt =
                image.alt;

        });

    });


    /* Close button */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            function () {

                lightbox.style.display = "none";

            }
        );

    }


    /* Close by clicking outside image */

    lightbox.addEventListener(
        "click",
        function (event) {

            if (event.target === lightbox) {

                lightbox.style.display = "none";

            }

        }
    );


    /* Close using Escape key */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                lightbox.style.display === "flex"
            ) {

                lightbox.style.display = "none";

            }

        }
    );

}


/* =====================================================
   6. PHONE NUMBER - ONLY NUMBERS
===================================================== */

const phoneInputs =
    document.querySelectorAll(
        'input[type="tel"]'
    );

phoneInputs.forEach(function (input) {

    input.addEventListener(
        "input",
        function () {

            this.value =
                this.value.replace(
                    /[^0-9]/g,
                    ""
                );

        }
    );

});


/* =====================================================
   7. CURRENT YEAR IN FOOTER
===================================================== */

const yearElements =
    document.querySelectorAll(".current-year");

yearElements.forEach(function (element) {

    element.textContent =
        new Date().getFullYear();

});


/* =====================================================
   8. SCROLL TO TOP BUTTON
===================================================== */

const scrollButton =
    document.getElementById("scrollTop");


if (scrollButton) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 300) {

                scrollButton.style.display =
                    "block";

            } else {

                scrollButton.style.display =
                    "none";

            }

        }
    );


    scrollButton.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =====================================================
   9. COURSE SEARCH
===================================================== */

const courseSearch =
    document.getElementById("courseSearch");

const courseCards =
    document.querySelectorAll(".course-card");


if (
    courseSearch &&
    courseCards.length > 0
) {

    courseSearch.addEventListener(
        "input",
        function () {

            const searchText =
                this.value.toLowerCase().trim();

            courseCards.forEach(function (card) {

                const cardText =
                    card.textContent.toLowerCase();

                if (
                    cardText.includes(searchText)
                ) {

                    card.style.display =
                        "block";

                } else {

                    card.style.display =
                        "none";

                }

            });

        }
    );

}


/* =====================================================
   10. SIMPLE WELCOME MESSAGE
===================================================== */

console.log(
    "Mithil  Institute Computer Training Institute website loaded successfully."
);