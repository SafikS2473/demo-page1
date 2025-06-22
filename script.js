const LANGUAGES = {
    ru: {
        code: 'Русский',
        name: 'Русский'
    },
    kz: {
        code: 'Қазақша', 
        name: 'Қазақша'
    }
};

// Текущий язык
let currentLanguage = 'ru';

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    initLanguageToggle();
    initSmoothScrolling();
    initContactForm();
    initScrollAnimations();
    initMobileMenu();
    console.log('Приложение инициализировано');
}

function initLanguageToggle() {
    const languageBtn = document.getElementById('languageBtn');
    const languageText = languageBtn.querySelector('.language-text');
    
    if (!languageBtn) {
        console.error('Кнопка смены языка не найдена');
        return;
    }
    
    languageBtn.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'ru' ? 'kz' : 'ru';
        
        languageText.textContent = LANGUAGES[currentLanguage].code;
        
        languageBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            languageBtn.style.transform = 'scale(1)';
        }, 150);
        
        translateContent(currentLanguage);
        
        console.log(`Язык изменен на: ${LANGUAGES[currentLanguage].name}`);
    });
}




function initSmoothScrolling() {
   
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                console.log(`Прокрутка к секции: ${targetId}`);
            }
        });
    });
}




function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                console.log(`Анимация для элемента: ${entry.target.className}`);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    const animatedElements = document.querySelectorAll(
        '.specialty-card, .review-card, .about-content, .contacts-content'
    );
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    const style = document.createElement('style');
    style.textContent = `
        .specialty-card, .review-card, .about-content, .contacts-content {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .form-input.error, .form-textarea.error {
            border-color: #ef4444;
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }
    `;
    document.head.appendChild(style);
}

function initMobileMenu() {
    function checkScreenSize() {
        const isMobile = window.innerWidth <= 768;
        const nav = document.querySelector('.nav');
        
        if (isMobile) {
            nav.style.display = 'none';
            console.log('Мобильный режим активирован');
        } else {
            nav.style.display = 'flex';
            console.log('Десктопный режим активирован');
        }
    }
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
}



function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedScroll = debounce(() => {
    console.log('Прокрутка страницы');
}, 100);

window.addEventListener('scroll', debouncedScroll);

console.log('Скрипт загружен успешно');


document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burgerBtn");
  const navWrapper = document.getElementById("navWrapper");

  burger.addEventListener("click", function () {
    navWrapper.classList.toggle("open");
  });
});

