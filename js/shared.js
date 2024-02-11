(() => {
    // Function to set a Bootstrap theme style
    const setStyle = (style) => {
        if (!style) return;
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = style;
        document.head.appendChild(link);
    };

    // Function to set a favorite icon
    const setFavoriteIcon = () => {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = 'img/question.png';
        document.head.appendChild(link);
    };

    // Function to set a header to all web pages
    const setHeader = () => {
        let header = document.createElement('header');
        header.innerHTML = `
        <!-- Navigation Bar -->
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container" id="navbar">
                <div class="navbar-brand d-flex align-items-center">
                    <img src="img/question.png" alt="Logo" width="60" height="60">
                    <a href="index.html">JavaScript<sup>ES6</sup></a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <div class="navbar-nav me-auto">
                        <a class="nav-link btn" href="index.html">HOME</a>
                        <a class="nav-link btn" href="rgb.html">RGB COLOR MODEL</a>
                        <a class="nav-link btn" href="web-safe-colors.html">WEB SAFE COLORS</a>
                        <a class="nav-link btn" href="about.html">ABOUT US</a>
                    </div>
                    <form class="d-flex">
                        <input id="searchBox" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn nav-link" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        `;
        document.body.insertBefore(header, document.body.firstChild);

    };

    // Function to set a footer to all web pages
    const setFooter = () => {
        let footer = document.createElement('footer');
        footer.className = 'footer text-center';

        footer.innerHTML = `
        <div class="container">
            <div class="row">
                <p></p>
            </div>
        </div>
    `;
        document.body.appendChild(footer);
    };

    // Function to set the copyright year to the footer in all web pages
    const setCopyrightYear = () => {
        const year = new Date().getFullYear();
        const copyright = document.querySelector('.footer p');
        if (copyright) {
            copyright.textContent = `©${year} Mourad Bouguerra. All Rights Reserved.`;
        }
    };

    // Function to highlight the tab of the current webpage
    const setActivePage = () => {
        const path = window.location.pathname;
        const page = path.split("/").pop();
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        navLinks.forEach(link => {
            if (link.href.includes(page)) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };

    document.addEventListener('DOMContentLoaded', () => {
        setStyle("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css");
        setStyle("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
        setStyle("css/style.css");
        setHeader();
        setFooter();
        setCopyrightYear();
        setActivePage();
        setFavoriteIcon();
    });

})();
