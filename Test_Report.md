# 🧪 Functional Testing Report

## 👤 Student Information
- **Full Name**: Nompie Dube 
- **Cohort**: [FEB 2025]  
- **Date**: [03 JUNE 2025]  

---

## 🧪 What I Tested

| Test Type        | Description                                                                 |
|------------------|------------------------------------------------------------------------------|
| **Unit Test**     | Tested the `saveNote()` function for correct behavior and input validation. |
| **Integration Test** | Verified that saving a note updates the UI as expected.                     |
| **System Test**   | Simulated full note lifecycle: create → edit → delete.                      |

---

## 🐛 Bugs / Issues Identified

| Type             | Description                                                                 |
|------------------|------------------------------------------------------------------------------|
| Unit             |Tests one function in isolation ,The app only checks for empty inputs          |
| Integration      |Tests multiple components together.[e.g.	Does clicking "Save" update the UI?]               |
| System           | Edit an existing note,	N	Original note is deleted before saving|
| UI / UX          | No message shown when there are no notes (just blank space)      |
| Accessibility    |No keyboard focus management: Focus isn't properly managed after adding/deleting notes                          |

*GitHub Issues Filed: [List links to the 3 required issues, with labels]*

https://github.com/Nompie1993/SoftwareTesting/issues/3
https://github.com/Nompie1993/SoftwareTesting/issues/2
https://github.com/Nompie1993/SoftwareTesting/issues/1

---

## 💬 Reflection

### 1. What did you learn from testing this app?
>Basic Functionality: The function successfully adds a new note to an array of notes when both title and content are provided.
>Validation Requirements: The function requires both title and content to be non-empty strings
>Immutability: The function doesn't mutate the original notes array but instead returns a new array with the added note (pure function behavior)
>Return Value: The function always returns an array - either:
A new array with the added note when inputs are valid, or
An unchanged array when validation fails

### 2. Which part of the app had the most bugs or problems?
> Based on the test cases, the validation logic (for title and content) and immutability aspects were likely the most problematic parts of the saveNote function

### 3. What testing strategy worked best for you?
>  Integration 

### 4. What was challenging during this lab?
>  Setting up Jest and understanding how it works is still a bit tricky for me..

---

## ✅ Checklist

- [ ] I wrote and ran unit, integration, and system tests using Jest  
- [ ] I filed 3 functional GitHub Issues with clear descriptions  
- [ ] I completed this Test Report and reflected on the process  
