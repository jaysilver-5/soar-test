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

![Sidebar Tabs Placeholder](./images/sidebar-tabs.png)

---

### 2. Quick Transfer - Error Handling
Includes error handling for invalid input scenarios.

![Quick Transfer Error Placeholder](./images/quick-transfer-error.png)

---

### 3. Settings Form - Error Handling
Error feedback for settings form submission.

![Settings Form Error Placeholder](./images/settings-form-error.png)

---

### 4. Success Modals
Both the Quick Transfer and the Settings form display success modals upon successful submission.

![Success Modal Placeholder](./images/success-modal.png)

---

### 5. "See All" Modal for Cards
Clicking the "See All" button in the Cards section opens a modal displaying all card listings.

![See All Cards Placeholder](./images/see-all-cards.png)

---

## 🎨 Additional Details

- **Hover & Loading Styles**:
  - The Quick Transfer button includes hover effects and a loading state with a centered loader for a polished user experience.

- **Mock API**:
  - All data is fetched from a mock API, enabling a seamless simulation of real-world scenarios.

---


## 📬 Feedback and Contributions

Feel free to raise an issue or submit a pull request if you have suggestions or enhancements.

---

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
