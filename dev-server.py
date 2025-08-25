#!/usr/bin/env python3
"""
Simple development server for WanderW website
Run this script to start a local server for previewing your site
"""

import http.server
import socketserver
import webbrowser
import os
from pathlib import Path

# Configuration
PORT = 8000
DIRECTORY = "."

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def end_headers(self):
        # Add CORS headers for development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def start_server():
    """Start the development server"""
    try:
        with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
            print(f"🌍 WanderW Development Server")
            print(f"📍 Server running at: http://localhost:{PORT}")
            print(f"📁 Serving files from: {os.path.abspath(DIRECTORY)}")
            print(f"🔗 Homepage: http://localhost:{PORT}/index.html")
            print(f"📞 Contact: http://localhost:{PORT}/contact.html")
            print("\n" + "="*50)
            print("Press Ctrl+C to stop the server")
            print("="*50 + "\n")
            
            # Open browser automatically
            webbrowser.open(f"http://localhost:{PORT}")
            
            # Start serving
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ Port {PORT} is already in use. Try a different port or stop the existing server.")
        else:
            print(f"❌ Error starting server: {e}")
    except Exception as e:
        print(f"❌ Unexpected error: {e}")

if __name__ == "__main__":
    start_server()
