from server_flask import app

@app.route('/', methods=['GET'])
def index():
   return 'Hello world'

# Run Server
if __name__ == '__main__':
    app.run(debug=True)
