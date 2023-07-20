document.addEventListener('DOMContentLoaded', () => {
  const socket = io.connect('http://127.0.0.1:5000'); // Replace with your backend server URL

  const messages = document.getElementById('messages');
  const input = document.getElementById('input');
  const sendBtn = document.getElementById('sendBtn');

  sendBtn.addEventListener('click', () => {
    const message = input.value;
    socket.emit('chatMessage', message);
    input.value = '';
  });

  socket.on('chatMessage', (message) => {
    const li = document.createElement('li');
    li.textContent = message;
    messages.appendChild(li);
  });
});
