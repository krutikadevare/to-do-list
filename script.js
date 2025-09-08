@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;700&display=swap');

body {
  font-family: 'Baloo 2', cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #fff7b0, #fff1a8);
  overflow-x: hidden;
}

.container {
  background: #fff9d6;
  border-radius: 30px;
  padding: 40px;
  width: 380px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: center;
  position: relative;
}

h1 {
  font-size: 28px;
  margin-bottom: 10px;
  color: #f9a825;
}

.affirmation {
  font-size: 14px;
  margin-bottom: 20px;
  color: #f57f17;
  font-style: italic;
}

/* Input */
#taskInput {
  width: 100%;
  padding: 15px 20px;
  border-radius: 25px;
  border: none;
  outline: none;
  box-shadow: inset 5px 5px 15px #ffe680, inset -5px -5px 15px #fff1a8;
  font-size: 16px;
  margin-bottom: 25px;
  transition: 0.3s;
}

#taskInput:focus {
  box-shadow: inset 2px 2px 10px #ffe680, inset -2px -2px 10px #fff1a8;
}

/* Task list */
ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

/* Task items */
li {
  background: #fff3b0;
  padding: 15px 20px;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 5px 5px 15px #ffe680, -5px -5px 15px #fff1a8;
  transition: transform 0.3s, box-shadow 0.3s;
}

li:hover {
  transform: translateY(-3px);
  box-shadow: 5px 5px 20px #ffd54f, -5px -5px 20px #fff1a8;
}

.completed {
  text-decoration: line-through;
  color: #b58c00;
}

/* Delete button */
button {
  background: #f9a825;
  border: none;
  padding: 6px 12px;
  border-radius: 15px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #ffb300;
}

/* Flowers */
body::before {
  content: "🌸 🌼 🌷 🌻 🌺";
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  opacity: 0.2;
}

body::after {
  content: "🌸 🌼 🌷 🌻 🌺";
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 24px;
  opacity: 0.2;
}

