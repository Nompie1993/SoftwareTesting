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
| Unit             | [e.g., Notes save even when title or content is empty]                      |
| Integration      | [e.g., Note text does not appear after clicking "Save Note"]                |
| System           | [e.g., Edit function deletes note without repopulating input fields]        |
| UI / UX          | [e.g., No feedback or confirmation after saving or deleting a note]         |
| Accessibility    | [e.g., Inputs have no labels for screen readers]                            |

*GitHub Issues Filed: [List links to the 3 required issues, with labels]*

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
> [e.g., Starting with exploratory clicks helped me find visible bugs before writing code-level tests.]

### 4. What was challenging during this lab?
>  Setting up Jest and understanding how it works is still a bit tricky for me..

---

## ✅ Checklist

- [ ] I wrote and ran unit, integration, and system tests using Jest  
- [ ] I filed 3 functional GitHub Issues with clear descriptions  
- [ ] I completed this Test Report and reflected on the process  
