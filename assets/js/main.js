// Header scroll effect
const header = document.querySelector('header');
let lastScrollTop = 0;
const scrollThreshold = 100;

function handleHeaderScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Check if we're on a small screen
    const isSmallScreen = window.innerWidth <= 600;
    
    if (isSmallScreen) {
        if (currentScroll > scrollThreshold) {
            // Add fixed header styles
            header.classList.add('header-fixed');
        } else {
            // Remove fixed header styles
            header.classList.remove('header-fixed');
        }
    } else {
        // Remove fixed styles on larger screens
        header.classList.remove('header-fixed');
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}

// Listen to scroll events
window.addEventListener('scroll', handleHeaderScroll);

// Listen to resize events to handle screen size changes
window.addEventListener('resize', handleHeaderScroll);

// Run once on page load
handleHeaderScroll();


const navToggle = document.querySelector(".nav-toggle");
const navigation = document.getElementById("nav");
const closeNav = document.querySelector(".close-nav");
console.log(navToggle, navigation, closeNav);

if (navToggle && navigation && closeNav) {
    // Toggle instead of separate open/close
    const toggleNav = () => navigation.classList.toggle("active");
    
    navToggle.addEventListener("click", toggleNav);
    closeNav.addEventListener("click", toggleNav);
    
    // Optional: Close on outside click
    document.addEventListener("click", (e) => {
        if (!navigation.contains(e.target) && !navToggle.contains(e.target)) {
            navigation.classList.remove("active");
        }
    });
    
    // Optional: Close on Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && navigation.classList.contains("active")) {
            navigation.classList.remove("active");
        }
    });
}

// if (navToggle) {
//     let lastScrollY = window.scrollY;
    
//     window.addEventListener('scroll', () => {
//         const currentScrollY = window.scrollY;
        
//         // Add 'fixed' class when scrolled down more than 100px
//         if (currentScrollY > 100) {
//             navToggle.classList.add('fixed');
            
//             // Optional: Hide when scrolling down, show when scrolling up
//             if (currentScrollY > lastScrollY) {
//                 navToggle.classList.add('hidden');
//             } else {
//                 navToggle.classList.remove('hidden');
//             }
//         } else {
//             navToggle.classList.remove('fixed', 'hidden');
//         }
        
//         lastScrollY = currentScrollY;
//     });
// }