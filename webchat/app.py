
"""
@author: Kianoush 

GitHUb: https://github.com/Kianoush-h
YouTube: https://www.youtube.com/channel/UCvf9_53f6n3YjNEA4NxAkJA
LinkedIn: https://www.linkedin.com/in/kianoush-haratiannejadi/

Email: haratiank2@gmail.com

"""




from flask import Flask, render_template
from flask_socketio import SocketIO, join_room, leave_room, send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('connect')
def on_connect():
    print('User connected')

@socketio.on('disconnect')
def on_disconnect():
    print('User disconnected')

@socketio.on('join')
def on_join(data):
    room = data['room']
    join_room(room)
    print(f'User joined room: {room}')

@socketio.on('leave')
def on_leave(data):
    room = data['room']
    leave_room(room)
    print(f'User left room: {room}')

@socketio.on('chatMessage')
def on_chat_message(message):
    room = 'default_room'  # You can implement logic to determine room based on the website
    send(message, room=room)

if __name__ == '__main__':
    socketio.run(app, allow_unsafe_werkzeug=True)

# if __name__ == '__main__':
#     socketio.run(app, debug=True)


















































