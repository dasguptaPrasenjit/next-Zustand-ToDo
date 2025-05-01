# Next-Zustand-ToDo

A minimal yet powerful Todo List application built using **Next.js 13**, **Zustand** for state management, and **Tailwind CSS** for styling.

## 🚀 Features

- ✅ **Create Todo:** Add new todos with name, description, and status.
- 🔄 **Edit Todo:** Update name, description, or status of any existing todo.
- 📋 **Filter Todos:** View todos by status - All, To Do, In Progress, or Done.
- 🔁 **Change Status:** Seamlessly move todos across different statuses.
- 🎨 **Responsive UI:** Built with Tailwind CSS for modern and clean design.

## 📂 Project Structure

- `pages/` - Contains main application routes
- `components/` - Reusable UI components like `TodoCard`, `TodoForm`, etc.
- `store/` - Zustand store managing todos and actions

## 🧠 State Management

- **Zustand** is used for lightweight, scalable state management.
- Todos are stored in a global state and updated via defined actions like `addTodo`, `editTodo`, `deleteTodo`, and `updateStatus`.

## 📌 Todo Status Options

- **To Do**
- **In Progress**
- **Done**

Users can filter todos based on these statuses and update them anytime.

## 🛠 Tech Stack

- **Framework:** [Next.js 13](https://nextjs.org/)
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)

## 🌐 Live Demo

Check out the working example here: [next-zustand-to-do.vercel.app](https://next-zustand-to-do.vercel.app)

## 🖼 Screenshots

### Todo List View
![Todo App Screenshot](./assets/todo-list.png)

### Add Todo Modal
![Add Todo Modal](./assets/add-todo-modal.png)

## 📦 Installation

```bash
git clone https://github.com/dasguptaPrasenjit/next-Zustand-ToDo.git
cd next-Zustand-ToDo
npm install
npm run dev
```

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using Next.js, Zustand, and Tailwind CSS.

