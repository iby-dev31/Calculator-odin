import http.server
import socketserver
from urllib.parse import unquote

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Декодируем URL перед поиском файла
        self.path = unquote(self.path)
        return super().do_GET()

PORT = 8000
with socketserver.TCPServer(("0.0.0.0", PORT), CustomHandler) as httpd:
    print(f"Serving at http://0.0.0.0:{PORT}")
    httpd.serve_forever()
