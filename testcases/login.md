# Feature: Login

## Test Case 1: Valid login

Given user is on the login page  
When user enters username "standard_user"  
And user enters password "secret123"  
And user clicks login  
Then user should be redirected to the dashboard  
And user should see text "Welcome"

---

## Test Case 2: Invalid password

Given user is on the login page  
When user enters username "standard_user"  
And user enters password "wrongpass"  
And user clicks login  
Then error message "Invalid credentials" should be displayed
