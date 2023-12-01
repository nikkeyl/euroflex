let addWindowScrollEvent = false;
export function headerScroll() {
    addWindowScrollEvent = true;
    const header = document.querySelector('header.header');
    const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
    document.addEventListener("windowScroll", () => {
        const scrollTop = window.scrollY;
        if (scrollTop >= startPoint) {
            !header.classList.contains('header-scroll') ? header.classList.add('header-scroll') : null;
        } else {
            header.classList.contains('header-scroll') ? header.classList.remove('header-scroll') : null;
        }
    });
}
setTimeout(() => {
    if (addWindowScrollEvent) {
        let windowScroll = new Event("windowScroll");
        window.addEventListener("scroll", () => {
            document.dispatchEvent(windowScroll);
        });
    }
}, 0);