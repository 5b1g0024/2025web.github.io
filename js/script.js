// 頁面過渡效果
document.addEventListener('DOMContentLoaded', function() {
    // 頁面進入動畫
    const pageTransition = document.querySelector('.page-transition');
    if (pageTransition) {
        pageTransition.classList.add('active');
        setTimeout(() => {
            pageTransition.style.display = 'none';
        }, 700);
    }
    
    // 導航欄點擊效果
    const navLinks = document.querySelectorAll('.floating-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href !== window.location.href) {
                e.preventDefault();
                pageTransition.style.display = 'block';
                pageTransition.classList.remove('active');
                
                setTimeout(() => {
                    window.location.href = this.href;
                }, 300);
            }
        });
    });
    
    // 滾動觸發動畫
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.slide-up, .slide-left, .slide-right, .scale-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                const animation = element.style.animation;
                if (!animation || animation === 'none') {
                    const animationName = window.getComputedStyle(element).getPropertyValue('animation-name');
                    const animationDuration = window.getComputedStyle(element).getPropertyValue('animation-duration');
                    const animationDelay = window.getComputedStyle(element).getPropertyValue('animation-delay');
                    
                    element.style.animation = `${animationName} ${animationDuration} ease-out ${animationDelay} forwards`;
                }
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // 初始檢查
    
    // 技能條動畫
    const skillBars = document.querySelectorAll('.skill-level');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});





//NxN乘法表













