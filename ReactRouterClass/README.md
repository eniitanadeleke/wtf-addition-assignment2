This is a simpleStudent Course Enrollment App


CLASS WORK DESCRIPTION

A React application that allows users to view available courses, enroll in them, and view their enrolled courses on separate pages using React Router.

FEATURES

View list of available courses
Enroll in courses with one click
View enrolled courses on a separate page
Real-time enrollment count displayed in navbar
Disable enroll button for already enrolled courses



State Management Explanation

Where is state stored? 

The `enrolledCourses` state is stored in the App.jsx file 

WHY? because both the Courses page and the EnrolledCourses page need access to the same data. The Courses component needs to add courses to the enrolled list, while the EnrolledCourses component needs to display them. Since these components are siblings rendered by different routes in React Router, they cannot directly share state with each other. so, the state must be lifted up to their common parent ( The App.jsx file) and passed down to both components via props, allowing them to read and update the same shared data.


Below are the screenshots of how it looks on the web page:

Screenshots

 Home Page
![Home Page](./src/assets/screenshots/homepage.png)

Courses Page
![Courses Page](./src/assets/screenshots/courses.png)

Enrolled Courses Page
![Enrolled Page](./src/assets/screenshots/enrolledpage.png)









Author: Adeleke Eniitan Yetunde