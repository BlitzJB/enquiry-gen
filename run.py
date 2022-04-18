from app import app

from json import load
config = load(open('config.json'))

if __name__ == "__main__":
    app.run(debug = True if not config['production'] else False, 
            host = config['host'], 
            port = config['port'])