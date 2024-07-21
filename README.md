# llama-hackathon
A web app that uses LLaMA-3 to suggest innovative project ideas based on user-input topics.

Our Figma UI Design: https://www.figma.com/design/6rmRJZQuJRIFhiXI2pUZlN/Untitled?node-id=0-1&t=6mXZ1BGYfQBYGMGW-0

Dependencies installed:
React: 
1) npm install

Python:
1) install Python in vs code
2) install Ollama -> https://ollama.com/
4) PowerShell select "Run as Administrator".
5) run ollama pull llama3
6) make sure llama3 got pulled by running : ollama list
7) run Get-ExecutionPolicy
8) Set-ExecutionPolicy RemoteSigned and select Y
9) python -m venv venv
10) run .\venv\Scripts\Activate to activate the virtual evn
11) click ctrl + shift + p, and then the in the 'search command box' enter -> Python: Select Interpreter
12) Then select 'Enter Interpreter path' -> Browse Interpreter -> 
13) ![image](https://github.com/user-attachments/assets/476d3760-1685-4947-9fb4-79eeee50dc8c)
14) pip install flask
15) pip install flask_cors
16) pip install langchain_community langchain_core
17) python main.py


FrondEnd Deploy: https://llama-hackathon.vercel.app/
