from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import parse_qs

memory = []

form = '''<!DOCTYPE html>
    <title>Message Board</title>
    <form method="POST" action="http://localhost:8000/">
    <textarea name="message"></textarea>
    <br>
    <button type="submit">Post it!</button>
    </form>
    <pre>
{}
    </pre>
    '''

class HelloHandler(BaseHTTPRequestHandler):


    def do_GET(self):
        self.send_response(200) # response code
        self.send_header('Content-type', 'text/html; charset=utf-8') # response headers
        self.end_headers()
        # path = self.path[1:]
        formatted_form = form.format("\n".join(memory))

        self.wfile.write(formatted_form.encode()) # response body

    def do_POST(self):
        length = int(self.headers.get('Content-length', 0))
        data = self.rfile.read(length).decode()

        message = parse_qs(data)['message'][0]
        message = message.replace("<", "&lt;")

        memory.append(message)
        self.send_response(303)
        self.send_header('Location', '/')
        self.end_headers()
        # self.wfile.write(message.encode())




if __name__ == '__main__':
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, HelloHandler)
    httpd.serve_forever()