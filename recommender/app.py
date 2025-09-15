from flask import Flask, request, jsonify
app = Flask(__name__)


# A very simple placeholder recommend endpoint
@app.route('/recommend', methods=['POST'])
def recommend():
data = request.json
# data expected: {"user_id": "...", "history": [event_ids], "interests": [tags]}
# TODO: replace with collaborative filtering or embeddings pipeline
recs = ["64abf1f2e1a2b3c4d5e6f7a8", "64abf1f2e1a2b3c4d5e6f7a9"]
return jsonify({"recommendations": recs})


if __name__ == '__main__':
app.run(host='0.0.0.0', port=6000)