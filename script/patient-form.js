document.getElementById("patientRegistrationForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent normal form submission

    // Collect form data
    const form = e.target;
    const data = {
        surname: form.surname.value,
        firstName: form.first_name.value,
        otherName: form.other_name.value,
        maritalStatus: form.marital_status.value,
        dob: form.dob.value,
        age: form.age.value,
        sex: form.sex.value,
        religion: form.religion.value,
        occupation: form.occupation.value,
        stateOfOrigin: form.state_of_origin.value,
        lga: form.lga.value,
        tribe: form.tribe.value,
        phone: form.phone.value,
        email: form.email.value,
        homeAddress: form.home_address.value,
        officeAddress: form.office_address.value,
        nokName: form.nok_name.value,
        nokRelationship: form.nok_relationship.value,
        nokAddress: form.nok_address.value,
        nokPhone: form.nok_phone.value
    };

    // Build the message
    let message = "New Patient Registration:%0A";
    for (let key in data) {
        message += `${key.replace(/([A-Z])/g, ' $1')}: ${data[key]}%0A`;
    }

    // WhatsApp number (international format without +)
    const whatsappNumber = "2349167760222";

    // Open WhatsApp with prefilled message
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");

    // Notify the user
    alert("Registration received! Our team will reach out to you shortly.");
});