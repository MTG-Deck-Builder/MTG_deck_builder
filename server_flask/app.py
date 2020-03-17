from config import app
import routes


@app.route('/', methods=['GET'])
def index():
    return 'Hello world'


# Run Server
if __name__ == '__main__':
    app.run(debug=True)
