from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from .forms import CustomUserCreationForm

from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.models import User
from django.contrib import messages
from .models import CustomUser
from .forms import CustomUserCreationForm

def signup_view(request):
    if request.method == "POST":
        username = request.POST['username']
        fname = request.POST['fname']
        lname = request.POST['lname']
        email = request.POST['email']
        pass1 = request.POST['pass1']
        pass2 = request.POST['pass2']

        if CustomUser.objects.filter(username=username).exists():
            messages.error(request, "Username already exists! Please try another username.")
            return redirect('signup')
        
        if CustomUser.objects.filter(email=email).exists():
            messages.error(request, "Email already registered!")
            return redirect('signup')
        
        if len(username) > 20:
            messages.error(request, "Username must be under 20 characters!")
            return redirect('signup')
        
        if pass1 != pass2:
            messages.error(request, "Passwords didn't match!")
            return redirect('signup')
        
        if not username.isalnum():
            messages.error(request, "Username must be Alpha-Numeric!")
            return redirect('signup')
    
        myuser = CustomUser.objects.create_user(username, email, pass1, first_name=fname, last_name=lname)
        myuser.is_active = False
        myuser.save()
        messages.success(request, "Your account has been created successfully")

        return redirect('login')

    return render(request, 'signup.html', {'form': CustomUserCreationForm()})

def login_view(request):
    if request.method == 'POST':
        username_or_email = request.POST['username_or_email']
        password = request.POST['password']
        try:
            user = CustomUser.objects.get(username = username_or_email)
        except CustomUser.DoesNotExist:
            try:
                user = CustomUser.objects.get(email = username_or_email)
            except CustomUser.DoesNotExist:
                messages.error(request, 'User does not exist')
                return render(request, 'login.html')

        user = authenticate(request, username = user.username, password = password)

        if user is not None and user.is_authenticated:
            login(request, user)
            messages.success(request, "Successfully Logged In")
            return redirect('profile', username = user.username)
        else:
            messages.error(request, 'Incorrect username or password')
            
    return render(request, 'login.html')

def logout_view(request):
    logout(request)
    messages.success(request, "Logged Out Successfully!!")
    return redirect('home')

