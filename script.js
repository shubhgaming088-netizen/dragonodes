function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Loading Screen Logic
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if(loader) {
        setTimeout(() => {
            loader.classList.add('loader-hidden');
        }, 1500);
    }
});

// VPS Tab Logic
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove('animate-fade-in-up');
    }

    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" bg-cyan-600 text-white shadow-lg shadow-cyan-500/30", " bg-gray-900/50 text-gray-400 border border-white/5");
    }

    const activeTab = document.getElementById(tabName);
    activeTab.style.display = "grid";
    
    // Trigger animation
    setTimeout(() => {
        activeTab.classList.add('animate-fade-in-up');
    }, 10);

    evt.currentTarget.className = evt.currentTarget.className.replace(" bg-gray-900/50 text-gray-400 border border-white/5", " bg-cyan-600 text-white shadow-lg shadow-cyan-500/30");
}

// Default open tab logic & Scroll Animations
document.addEventListener('DOMContentLoaded', function() {
    if(document.getElementById('xeon')) {
        document.getElementById('xeon').style.display = "grid";
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.glass-card').forEach((el) => {
        el.style.opacity = '0'; 
        observer.observe(el);
    });
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-2xl', 'bg-[#05050a]/95');
        nav.classList.remove('bg-[#05050a]/80');
    } else {
        nav.classList.remove('shadow-2xl', 'bg-[#05050a]/95');
        nav.classList.add('bg-[#05050a]/80');
    }
});