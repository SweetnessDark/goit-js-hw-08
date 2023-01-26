import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

const email = document.querySelector('input');

const message = document.querySelector('textarea');

const FEEDBACK_FORM = 'feedback-form-state';

const formObj = {};

const formInput = function({ target }) {
    formObj[target.name] = target.value;
    
    const formData = JSON.stringify(formObj);
    localStorage.setItem(FEEDBACK_FORM, formData)
}

const formSubmit = function(event) {
    event.preventDefault();
    
    const {
        elements: { email, message }
    } = event.currentTarget;
    
    if (email.value == '' || message.value == '') {
        return alert('Все поля должны быть заполнены!')
    }
    
    const formDetail = {
        email: email.value,
        message: message.value
    }
    
    console.log(formDetail);
    
    event.currentTarget.reset();
    
    localStorage.removeItem(FEEDBACK_FORM);
}

form.addEventListener('input', throttle(formInput, 500));
form.addEventListener('submit', formSubmit);

const readFeedbackForm = localStorage.getItem(FEEDBACK_FORM);

const parsedSettings = JSON.parse(JSON.stringify(readFeedbackForm));

updateStorage();

function updateStorage() {
    if(readFeedbackForm) {
        console.log(parsedSettings.email || '');
        console.log(parsedSettings.message || '');

        email.value = parsedSettings.email || '';
        message.value = parsedSettings.message || '';
    }
}
