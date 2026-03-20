from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def home():
    table = None
    number = None

    if request.method == 'POST':
        number = int(request.form['number'])
        table = []

        for i in range(1, 11):
            table.append(f"{number} x {i} = {number*i}")

    return render_template('main.html', table=table, number=number)

if __name__ == '__main__':
    app.run('0.0.0.0',debug=True)