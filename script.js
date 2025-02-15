const pages = document.querySelectorAll(".page");
const nextBtns = document.querySelectorAll(".next-page");
const prevBtns = document.querySelectorAll(".prev-page");

let currentPage = 0;

nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (currentPage < pages.length - 1) {
            pages[currentPage].style.transform = "rotateY(-180deg)";
            pages[currentPage].style.zIndex = pages.length - currentPage;
            currentPage++;
        }
    });
});

prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (currentPage > 0) {
            currentPage--;
            pages[currentPage].style.transform = "rotateY(0deg)";
            pages[currentPage].style.zIndex = pages.length - currentPage;
        }
    });
});

// Închidem cartea la ultima pagină
const lastPage = document.querySelector(".cover.back .prev-page");
lastPage.addEventListener("click", () => {
    pages.forEach((page) => {
        page.style.transform = "rotateY(0deg)";
    });
    currentPage = 0;
});
