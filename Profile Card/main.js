function showContactInfo() {
    const contactInfo = document.getElementById('contact-info');
    if (contactInfo.style.display === 'none' || contactInfo.style.display === '') {
        contactInfo.style.display = 'block';
    } else {
        contactInfo.style.display = 'none';
    }
}
