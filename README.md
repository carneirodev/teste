# Documentação da API BAOBA

![APRESENTACAO-1-01a720d440f2b35002.jpg](https://imgurl.me/images/2020/07/06/APRESENTACAO-1-01a720d440f2b35002.jpg)
----------

![APRESENTACAO-1-02891fac2a11d986b6.jpg](https://imgurl.me/images/2020/07/06/APRESENTACAO-1-02891fac2a11d986b6.jpg)
----------


# Rotas da API
### Link da API: [http://ec2-18-231-167-59.sa-east-1.compute.amazonaws.com:3000](http://ec2-18-231-167-59.sa-east-1.compute.amazonaws.com:3000/)
#### Criar usurário
- POST - /student
    - Body
         ```jsx
      "user_name":"aluno",
      "user_email":"aluno@aluno.com",
      "user_password":"123456",
      "user_school_id":"IFSULDEMINAS",
      "user_teacher": bollean,
      "user_room_id": "75195a14-275e-4118-957b-84b44d720792" || "",
      "user_country":"brasil",
      "user_state":"MG",
      "user_city":"Pocos"   
      ```
 #### Autenticação de usuário
- POST - /sessions
    - Body
         ```jsx
            "user_email":"aluno@aluno.com",
            "user_password":"123456",
         ```
    - Response
         ```jsx
            "token": "eyJhbGciOiJIUzI1NiIsInR5caI6IkpXVCJ9.eyJpYXQiOjE1OTM5NjQ1NDcsImV4cCI6qTU5NDA1MDk0Nywic3ViIjoiYWZjMTk3OTYtZjcwNS00MGUxLThhMmUtNjI4NDJlZWNkNTdlIn0.t_QStGuS57wH23NRpZSqHJGLYgnW_tiqdX-zEQKuJjY"
         ```
----------
## Todas as rotas abaixo será necessario estar autenticado
>  Será necessario passar o token obtido na rota sessions

---

#### Editar usuario
- POST - /sessions
    - Body
         ```jsx
        "user_email":"aluno@aluno.com",
        "user_password":"123456",
        ```
    - Response
         ```jsx
        "token": "eyJhbGciOiJIUzI1NiIsInR5caI6IkpXVCJ9.eyJpYXQiOjE1OTM5NjQ1NDcsImV4cCI6qTU5NDA1MDk0Nywic3ViIjoiYWZjMTk3OTYtZjcwNS00MGUxLThhMmUtNjI4NDJlZWNkNTdlIn0.t_QStGuS57wH23NRpZSqHJGLYgnW_tiqdX-zEQKuJjY"
        ```
-----  
#### Lista dados do usuario
- GET - /logged
    - Response
         ```jsx
      "user_name": "aluno",
      "user_email": "aluno@aluno.com",
      "user_school_id": "IFSULDEMINAS",
      "user_room_id": "75195a14-275e-4118-957b-84b44d720792",
      "user_teacher": false,
      "user_country": "brasil",
      "user_state": "MG",
      "user_city": "Pocos"
        ```   
-----
#### Cria sala do professor
- POST - /rooms
    - Body
         ```jsx
        "room_name": "sala 10"
        ```
    - Response
         ```jsx
       "room_name": "sala 10",
      "teacher_id": "8a90a9e8-479e-486a-8783-22738d0b3a52",
      "school_id": "IFSULDEMINAS",
      "room_id": "893f0c7a-6e2d-43f9-9a64-67b0d1362b0d"
        ```
-----  
#### Lista todas as salas do professor
- GET - /rooms
    - Response
         ```jsx
         [
          {
            "room_id": "75195a14-275e-4118-957b-84b44d720792",
            "room_name": "sala 08",
            "teacher_id": "8a90a9e8-479e-486a-8783-22738d0b3a52",
            "school_id": "IFSULDEMINAS"
          },
          {
            "room_id": "f8b6356b-5684-4796-8f63-4cfa3e0cc9d0",
            "room_name": "sala 10",
            "teacher_id": "8a90a9e8-479e-486a-8783-22738d0b3a52",
            "school_id": "IFSULDEMINAS"
          },
          {
            "room_id": "893f0c7a-6e2d-43f9-9a64-67b0d1362b0d",
            "room_name": "sala 11",
            "teacher_id": "8a90a9e8-479e-486a-8783-22738d0b3a52",
            "school_id": "IFSULDEMINAS"
          }
        ]
        ```    
----
#### Cria tarefa para a sala de aula
- POST - /rooms
    - Body
         ```jsx
        "room_id":"75195a14-275e-4118-957b-84b44d720792",
        "book_id":"5071931c-722a-4c4b-af29-bbee6fce2c41",
    	"date": DATE
        ```
    - Response
         ```jsx
       "room_name": "sala 10",
      "teacher_id": "8a90a9e8-479e-486a-8783-22738d0b3a52",
      "school_id": "IFSULDEMINAS",
      "room_id": "893f0c7a-6e2d-43f9-9a64-67b0d1362b0d"
        ```
-----  
#### Lista as tarefas da sala de aula
- GET -/homework/rooM/:id
    >É necessário passar o id da sala pela URL

    - Response
        ```jsx
        [
          {
            "homework_id": "74f2c883-ba63-4592-be63-b142b4157f5f",
            "teacher_id": "8a90a9e8-479e-486a-8783-22738d0b3a52",
            "room_id": "75195a14-275e-4118-957b-84b44d720792",
            "book_id": "5071931c-722a-4c4b-af29-bbee6fce2c41",
            "date": "2020-07-05T00:00:00.000Z"
          },
          {
            "homework_id": "83df84ba-0ab5-4084-8236-1d1ae58f2b43",
            "teacher_id": "8a90a9e8-479e-486a-8783-22738d0b3a52",
            "room_id": "75195a14-275e-4118-957b-84b44d720792",
            "book_id": "5071931c-722a-4c4b-af29-bbee6fce2c41",
            "date": "2020-07-05T00:00:00.000Z"
          },
          {
            "homework_id": "e6b7eca6-b891-4bf2-ae53-6ab32574150f",
            "teacher_id": "8a90a9e8-479e-486a-8783-22738d0b3a52",
            "room_id": "75195a14-275e-4118-957b-84b44d720792",
            "book_id": "5071931c-722a-4c4b-af29-bbee6fce2c41",
            "date": "2020-07-05T00:00:00.000Z"
          }
        ]
        ```
----- 
#### Lista todas as tarefas criadas pelo professor
- GET - /homework

    - Response
        ```jsx
        [
          {
            "homework_id": "74f2c883-ba63-4592-be63-b142b4157f5f",
            "teacher_id": "8a90a9e8-479e-486a-8783-22738d0b3a52",
            "room_id": "75195a14-275e-4118-957b-84b44d720792",
            "book_id": "5071931c-722a-4c4b-af29-bbee6fce2c41",
            "date": "2020-07-05T00:00:00.000Z"
          },
          {
            "homework_id": "83df84ba-0ab5-4084-8236-1d1ae58f2b43",
            "teacher_id": "8a90a9e8-479e-486a-8783-22738d0b3a52",
            "room_id": "75195a14-275e-4118-957b-84b44d720792",
            "book_id": "5071931c-722a-4c4b-af29-bbee6fce2c41",
            "date": "2020-07-05T00:00:00.000Z"
          },
          {
            "homework_id": "e6b7eca6-b891-4bf2-ae53-6ab32574150f",
            "teacher_id": "8a90a9e8-479e-486a-8783-22738d0b3a52",
            "room_id": "75195a14-275e-4118-957b-84b44d720792",
            "book_id": "5071931c-722a-4c4b-af29-bbee6fce2c41",
            "date": "2020-07-05T00:00:00.000Z"
          }
        ]
        ```
----- 
#### Lista todas as tarefas do aluno
- GET - /student

    - Response
        ```jsx
        [
          {
            "student_homework_id": "d90792bd-429d-464e-9e68-61eb1ef9879a",
            "homework_id": "83df84ba-0ab5-4084-8236-1d1ae58f2b43",
            "student_id": "a0c47cd1-6dfb-4502-85e6-a1a83b22d22c",
            "student_chapters": 1,
            "student_text": "",
            "homework_status": "todo"
          },
          {
            "student_homework_id": "82a1031f-a4fc-4571-bfe5-8227d0157d5e",
            "homework_id": "74f2c883-ba63-4592-be63-b142b4157f5f",
            "student_id": "a0c47cd1-6dfb-4502-85e6-a1a83b22d22c",
            "student_chapters": 1,
            "student_text": "muito bom, show",
            "homework_status": "doing"
          },
          {
            "student_homework_id": "925dd1f5-7365-40e0-a410-e629eb34885c",
            "homework_id": "e6b7eca6-b891-4bf2-ae53-6ab32574150f",
            "student_id": "a0c47cd1-6dfb-4502-85e6-a1a83b22d22c",
            "student_chapters": 1,
            "student_text": "muito bom, show",
            "homework_status": "doing"
          },
          {
            "student_homework_id": "7f812d1a-fb77-4321-a78f-6c75443037c7",
            "homework_id": "97f2ade2-7430-4fa9-94a5-f211533624ab",
            "student_id": "a0c47cd1-6dfb-4502-85e6-a1a83b22d22c",
            "student_chapters": 1,
            "student_text": "",
            "homework_status": "todo"
          }
        ]
        ```
----- 
#### Altera o texto
- PUT - /student/text
    - Body
         ```jsx
        "student_homework_id":"925dd1f5-7365-40e0-a410-e629eb34885c",
    	"student_text":"muito bom, show"
        ```
#### Altera o status da tarefa para todo/doing/done
- PUT - /student/status
    - Body
         ```jsx
        "homework_status":"Done",
    	"student_homework_id":"925dd1f5-7365-40e0-a410-e629eb34885c"
        ```
    
-----  
![APRESENTACAO-1098e2512e926096b6.jpg](https://imgurl.me/images/2020/07/06/APRESENTACAO-1098e2512e926096b6.jpg)
