# Comandos para crear un entorno
# crear = py -m venv venv


from flask import Flask, render_template


app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')



# Se encarga de mostrar errores cuando se este deputando.
if __name__ == "__main__":
    app.run(debug=True)