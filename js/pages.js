// 페이지별 추가 기능 JavaScript

// Contact 폼 처리
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // 폼 검증
        if (!name || !email || !subject || !message) {
            showFormMessage('모든 필드를 입력해주세요.', 'error');
            return;
        }
        
        // 실제 배포시 백엔드로 전송
        console.log('폼 데이터:', { name, email, subject, message });
        
        // 성공 메시지 표시
        showFormMessage('메시지가 성공적으로 전송되었습니다!', 'success');
        
        // 폼 초기화
        contactForm.reset();
    });
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById('form-message');
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        
        // 3초 후 메시지 사라지기
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 3000);
    }
}

// FAQ 아코디언
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
        question.addEventListener('click', function() {
            item.classList.toggle('active');
        });
    }
});

// 뉴스레터 구독
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        console.log('뉴스레터 구독:', email);
        alert('구독해주셔서 감사합니다!');
        this.reset();
    });
}