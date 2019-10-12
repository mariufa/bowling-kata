from flask import Flask, jsonify, request
from Bowling import game
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/healthy")
def healthy():
    return "healthy"

@app.route("/api/post_score", methods=['POST'])
def get_score():
    json_data = request.get_json()
    print(f'Payload {json_data}')
    result = {
        'score': game(json_data)
    }

    return jsonify(result)





if __name__ == "__main__":
    app.run()