// 1. وظيفة زر ابدأ للانتقال وإظهار الكروت
function scrollToContent() {
    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'block';
    
    mainContent.scrollIntoView({ behavior: 'smooth' });
    
    // تشغيل فحص السكرول مباشرة بعد الضغط لتظهر الكروت الأولى
    revealSections();
}

// 2. أنيميشن ظهور الكروت بشكل تدريجي فخم أثناء النزول (Scroll Reveal)
window.addEventListener('scroll', revealSections);

function revealSections() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 100; // المسافة بالبكسل قبل ظهور الكرت
        
        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }
    });
}

// 3. تفعيل وإعدادات تأثير الجسيمات (Particles) العسكرية بالخلفية
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 60, /* عدد الجسيمات المتساقطة */
            "density": { "enable": true, "value_area": 800 }
        },
        "color": { "value": "#6da36d" }, /* لون أخضر عسكري نيون */
        "shape": { "type": "circle" },
        "opacity": {
            "value": 0.4,
            "random": true,
            "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": { "enable": false }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#3d593d", /* لون الخطوط الرابطة */
            "opacity": 0.3,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1.5, /* سرعة التحرك للأسفل */
            "direction": "bottom", /* الحركة تتجه لأسفل مثل المطر المخابراتي */
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "bubble" }, /* تتضخم الجسيمات عند مرور الماوس عليها */
            "onclick": { "enable": true, "mode": "push" }
        },
        "modes": {
            "bubble": { "distance": 200, "size": 6, "duration": 2, "opacity": 0.8 }
        }
    },
    "retina_detect": true
});
