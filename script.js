document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    var name = document.querySelector('#fullName').value;
    var email = document.querySelector('#email').value;
    var phone = document.querySelector('#phone').value;
    var message = document.querySelector('#project').value;

    if (!name && !email && !phone && !message) {
        alert('Please fill the required fields first');
    }else {
        var params = {
            name: document.querySelector('#fullName').value,
            email: document.querySelector('#email').value,
            phone: document.querySelector('#phone').value,
            message: document.querySelector('#project').value
        }

        const serviceID = "service_tszjc27";
        const templateID = "template_li06rwr";
    
        emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.querySelector('#fullName').value = '';
            document.querySelector('#email').value = '';
            document.querySelector('#phone').value = '';
            document.querySelector('#project').value = '';
            console.log(res);
            console.log(params);
            alert('Your message sent successfully');
        })
        .catch((err) => console.log(err));
    }
})

