from django.core.mail import send_mail
from django.shortcuts import render
from django.conf import settings

def raja(request):
    success = False  # Default: message not sent
    if request.method == 'POST':
        name = request.POST.get('Name')
        email = request.POST.get('email')
        message = request.POST.get('Message')

        subject = f"Message from {name}"
        full_message = f"Sender: {name}\nEmail: {email}\n\nMessage:\n{message}"
        try:
            send_mail(
                subject,
                full_message,
                settings.EMAIL_HOST_USER,
                [settings.EMAIL_HOST_USER],  # Your email receives it
                fail_silently=False
            )
            success = True  # Email sent successfully
        except Exception as e:
            print("Error sending email:", e)
            success = False

    return render(request, 'raja.html', {'success': success})