const form = document.querySelector('.feedback__form');
const send = document.querySelector('.button__submit');

send.addEventListener('click', e => {
    e.preventDefault();

    if (validateForm(form)) {
        console.log('ok');
        const data = {
            name: form.elements.name.value,
            email: form.elements.email.value,
            message: form.elements.message.value,
            //to: form.elements.to.value
        };

        const xhr = new XMLHttpRequest();
        var formOverlay;

        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', () => {
            if (xhr.status == 200) {
                formOverlay = createOverlay("Сообщение отправлено");
                document.body.appendChild(formOverlay);

            } else {
                formOverlay = createOverlay("Что-то пошло не так");
                document.body.appendChild(formOverlay);
                // document.body.classList.add("scroll-hidden"); 
            }

            setTimeout(function () {
                document.body.removeChild(formOverlay);
            }, 3000);

        });
        
    }
});

function createOverlay(content) {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");

    const containerElement = document.createElement("div");
    containerElement.classList.add("overlay__container");

    const contentElement = document.createElement("div");
    contentElement.classList.add("overlay__content");
    contentElement.innerHTML = content;

    const closeElement = document.createElement("button");
    contentElement.appendChild(closeElement);
    closeElement.classList.add("overlay__btn");
    closeElement.textContent = "Закрыть";
    closeElement.addEventListener("click", function (e) {
        e.preventDefault();
        document.body.removeChild(overlayElement);
        // document.body.classList.remove('scroll-hidden');
    });

    overlayElement.appendChild(containerElement);
    containerElement.appendChild(closeElement);
    containerElement.appendChild(contentElement);

    return overlayElement;
}

function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.name)) {
        valid = false;
    }
    if (!validateField(form.elements.email)) {
        valid = false;
    }

    if (!validateField(form.elements.message)) {
        valid = false;
    }

    return valid;
}

function validateField(field) {
    field.nextElementSibling.textContent = field.validationMessage;

    if (!field.checkValidity()) {
        field.classList.add('feedback__text-error');
        field.nextElementSibling.classList.add('error--active');
    } else {
        field.classList.remove('feedback__text-error');
        field.nextElementSibling.classList.remove('error--active');
    }
    return field.checkValidity();
}