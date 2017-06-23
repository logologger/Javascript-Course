var app = angular.module("first_module"); //You are not creating a instance ..you are actually defining it

app.controller("first_controller", function($scope) {



    //Dependency Injection
    //Can also come from Ajax

    $scope.students = [

        {

            "name": "Cambridge University Student",
            "age": "12",
            "Skills": "Maths",
            "Class": "1A"



        },

        {

            "name": "Student 2",
            "age": "11",
            "Skills": "Chemistry",
            "Class": "1B"



        },{

            "name": "Student 1",
            "age": "12",
            "Skills": "Maths",
            "Class": "1A"



        },

        {

            "name": "Student 2",
            "age": "11",
            "Skills": "Chemistry",
            "Class": "1B"



        },{

            "name": "Student 1",
            "age": "12",
            "Skills": "Maths",
            "Class": "1A"



        },

        {

            "name": "Student 2",
            "age": "11",
            "Skills": "Chemistry",
            "Class": "1B"



        },{

            "name": "Student 1",
            "age": "12",
            "Skills": "Maths",
            "Class": "1A"



        },

        {

            "name": "Student 2",
            "age": "11",
            "Skills": "Chemistry",
            "Class": "1B"



        },{

            "name": "Student 1",
            "age": "12",
            "Skills": "Maths",
            "Class": "1A"



        },

        {

            "name": "Student 2",
            "age": "11",
            "Skills": "Chemistry",
            "Class": "1B"



        },{

            "name": "Student 1",
            "age": "12",
            "Skills": "Maths",
            "Class": "1A"



        },

        {

            "name": "Student 2",
            "age": "11",
            "Skills": "Chemistry",
            "Class": "1B"



        },{

            "name": "Student 1",
            "age": "12",
            "Skills": "Maths",
            "Class": "1A"



        },

        {

            "name": "Student 2",
            "age": "11",
            "Skills": "Chemistry",
            "Class": "1B"



        },{

            "name": "Student 1",
            "age": "12",
            "Skills": "Maths",
            "Class": "1A"



        },

        {

            "name": "Student 2",
            "age": "11",
            "Skills": "Chemistry",
            "Class": "1B"



        },{

            "name": "Student 1",
            "age": "12",
            "Skills": "Maths",
            "Class": "1A"



        },

        {

            "name": "Student 2",
            "age": "11",
            "Skills": "Chemistry",
            "Class": "1B"



        }


    ];

    

    $scope.name = "Ajay"; //Lets suppose any Json data was coming

    $scope.age="12";
});
