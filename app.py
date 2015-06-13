from flask import Flask, Response, render_template
import json
import requests
import requests_cache
import os

QUERY_URL = 'https://api.jcdecaux.com/vls/v1/stations?contract=Vilnius&apiKey=%s'
API_KEY = os.getenv('JCD_API_KEY')

if not API_KEY:
    raise Exception('''No JCDecaux API key was supplied''')

app = Flask(__name__, static_url_path='/static')
requests_cache.install_cache(cache_name='jcdecaux_cache', backend='sqlite', expire_after=180)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/apidata')
def jcdecaux_cycledata():
    r = requests.get(QUERY_URL % API_KEY)
    return Response(json.dumps(r.json()), mimetype='application/json')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.getenv('PORT', '5000')))
