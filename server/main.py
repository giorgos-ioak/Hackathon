import replicate
import os
from flask import Flask, request, Response, jsonify
from flask_cors import CORS




app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}) 




def generate_response(input_text: str):
    response_text = ""

    for event in replicate.stream(
            "meta/meta-llama-3-8b",
            input={
                "top_k": 0,
                "top_p": 0.9,
                "prompt": (
                    "Provide 3 project ideas for developers based on these technologies:\n" 
                    f"{input_text}\n"
                ),
                "max_tokens": 512,
                "min_tokens": 0,
                "temperature": 0.6,
                "length_penalty": 1,
                "stop_sequences": "<|end_of_text|>",
                "prompt_template": "{prompt}",
                "presence_penalty": 1.15,
                "log_performance_metrics": False
            },
        ):
            response_text += str(event)  # Accumulate the response text

    return response_text





@app.route('/', methods=['POST'])
def process():
    data = request.get_json()
    input_text = f"""
    Database: {data['database']},\n
    Backend Environment: {data['backendEnvironment']},\n
    Backend Framework: {data['backendFramework']},\n
    Backend Language: {data['backendLanguage']},\n
    Frontend Build Tool: {data['frontendBuildTool']},\n
    Frontend Framework: {data['frontendFramework']},\n
    Frontend Language: {data['frontendLanguage']}
    """

    # Call generate_response to get the response text
    response_text = generate_response(input_text)

    return jsonify({"response": response_text})




if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)