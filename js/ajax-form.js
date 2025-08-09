$(function () {
    var form = $('#contact-form');
    var formMessages = $('.ajax-response');
    var submitBtn = form.find('button[type="submit"]');

    form.submit(function (e) {
        e.preventDefault();
        submitBtn.prop('disabled', true).text('Sending...');

        var formData = {
            fullName: $('input[name="fullName"]').val(),
            guestCount: $('select[name="guestCount"]').val(),
            message: $('textarea[name="message"]').val()
        };

        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbzQIJRuSlv9Mn1fEfBySvImRbPbcmQoLqyIlD299DZYJu-Szn-2UXTgXrKB2EuaSSXR/exec',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData)
        })
            .done(function (response) {
                formMessages.addClass('success').text(response);
                form[0].reset();
            })
            .fail(function () {
                formMessages.addClass('error').text("Error saving RSVP.");
            })
            .always(function () {
                submitBtn.prop('disabled', false).text('Հաստատել');
            });
    });
});
