# Todo Application

Given an app.js file and database collection todoApplication with a collection todo
.Write APIs to perform operations on the table
todo, with the following collection,


## TodoCollection

```
{
    id         INTEGER
    todo       TEXT
    category   TEXT
    priority   TEXT
    status     TEXT
    due_dat    DATE
}
```
## NOTE

- Replace the spaces in URL with %20

- Possible values for priority are HIGH, MEDIUM, and LOW

- Possible values for status are TO DO, IN PROGRESS, and DONE

- Possible values for category are WORK, HOME, and LEARNING

- Use the format yyyy-MM-dd for formating with date-fns format function.

- The user may request with due date value as 2024-7-15, format the date to 2021-07-15
and perform Create, Read, Update operations on the database.


## Invalid scenarios 

- InvalidStatus

  - Response
  - Status code 400
  - Body InvalidTodoStatus
  
- InvalidPriority

  - Response
  - Status code 400
  - Body InvalidTodoPriority
  
- InvalidCategory

  - Response
  - Status code 400
  - Body InvalidTodoCategory
  
- InvalidDueDate

  - Response
  - Status code 400
  - Body InvalidDueDate

## Some possible routes

```
/todos/?status=TO%20DO
```
```
/todos/?priority=HIGH
```
```
/todos/?priority=HIGH&status=IN%20PROGRESS
```
```
/todos/?category=HOME
```

