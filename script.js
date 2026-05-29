// ПРЕЛОАДЕР: скрывается после полной загрузки страницы
window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
};
// МОДАЛЬНАЯ ФОРМА
window.onload = function() {
    // Прелоадер
    let preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('hide-preloader');
    }

    // Элементы модального окна
    const modal = document.getElementById('feedbackModal');
    const openBtn = document.getElementById('openFeedbackBtn');
    const closeBtn = document.querySelector('.close-modal');

    // Открыть форму
    if (openBtn) {
        openBtn.onclick = function() {
            modal.style.display = 'flex';
        };
    }

    // Закрыть форму (крестик)
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        };
    }

    // Закрыть форму при клике вне её области
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Обработка отправки формы (пока просто alert)
    const form = document.getElementById('feedbackForm');
    if (form) {
        form.onsubmit = function(e) {
            e.preventDefault();
            
            // Собираем данные
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const set = document.getElementById('set').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Пожалуйста, заполните все обязательные поля (*)');
                return;
            }
            
            alert(`Спасибо, ${name}!\nВаша заявка отправлена.\nМы свяжемся с вами по email: ${email}`);
            
            // Очистить форму
            form.reset();
            
            // Закрыть модальное окно
            modal.style.display = 'none';
        };
    }
};