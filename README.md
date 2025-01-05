# Next.js Application

Welcome to the Next.js App! This project showcases a variety of features, including state management, modals, and form handling, all powered by Redux Toolkit and a mock API.

---

## 🚀 Features

- **State Management**:  
  State for the sidebar tabs and the settings form is managed using **Redux Toolkit**.

- **Modals**:  
  - Success modal for actions like "Quick Transfer" and the settings form submission.  
  - "See All" modal to display the complete card listings.

- **Forms and Error Handling**:  
  - Error handling for the **Quick Transfer** form and the **Settings** form.  
  - Dynamic feedback on form submission, including success states.

- **Interactive UI**:  
  - **Quick Transfer Button**:
    - Hover effect.
    - Loading style with a centered loader.
    - Success modal on submission.  
  - **Settings Form**:
    - Includes error handling and displays a success modal on successful submission.

- **Navigation**:  
  Access the **Settings** tab via the settings icon in the header bar.

- **Mock API**:  
  All data is fetched from a mock API.

---

## 🛠 Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## 🖼️ Screenshots

### 1. Sidebar State Management
Redux Toolkit is used to manage the sidebar tabs and the settings form.
---

### 2. Quick Transfer - Error Handling
Includes error handling for invalid input scenarios.
![image](https://github.com/user-attachments/assets/5741a2e4-f9dc-4655-a841-9729f65668ce)
---

### 3. Settings Form - Error Handling
Error feedback for settings form submission.

![image](https://github.com/user-attachments/assets/496b6cbd-8f93-49c8-abcc-faa7babeb36b)
A modal and red border input showing missed inputs. 

Success modal. While these still need a lot of work. It is a proof of concept
![image](https://github.com/user-attachments/assets/672103ad-e963-4a25-99e3-62397be8d945)


![Settings Form Error Placeholder](./images/settings-form-error.png)

---

### 4. Success Modals
Both the Quick Transfer and the Settings form display success modals upon successful submission.

![Success Modal Placeholder](./images/success-modal.png)

---

### 5. "See All" Modal for Cards
Clicking the "See All" button in the Cards section opens a modal displaying all card listings.
![image](https://github.com/user-attachments/assets/204c881c-5a49-4840-b397-a4694e066112)

---

## 🎨 Additional Details

- **Hover & Loading Styles**:
  - The Quick Transfer button includes hover effects and a loading state with a centered loader for a polished user experience.

hover: ![image](https://github.com/user-attachments/assets/eccfb323-346f-4f1d-8555-95c7d57e1a0a)
loadding:![image](https://github.com/user-attachments/assets/a7f61ea9-6231-4559-a6c5-1f13e4374452)


- **Mock API**:
  - All data is fetched from a mock API, enabling a seamless simulation of real-world scenarios.

---


## 📬 Feedback and Contributions

Feel free to raise an issue or submit a pull request if you have suggestions or enhancements. This was done under limited time, please beware with me.

---
