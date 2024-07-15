document.addEventListener("DOMContentLoaded", function() {
    const order = document.querySelector(".order-wrap");
    const contact = document.querySelectorAll("contact-wrapper")
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, options);

    observer.observe(order,contact);

});
