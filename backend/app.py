from flask import Flask, jsonify, request
from flask_cors import CORS
app = Flask(__name__)
cors=CORS(app)

@app.route('/api/products')
def get_products():
    products = [
        {"id": 1, "name": "Product Name", "wear":"T-shirt", "category": "men", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)"},
        {"id": 2, "name": "Product Name", "wear": "Pant", "category": "men", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)"},
        {"id": 3, "name": "Product Name", "wear": "Short", "category": "men", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)"},
        {"id": 4, "name": "Product Name", "wear":"T-shirt", "category": "men", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)"},
        {"id": 5, "name": "Product Name", "wear": "Pant", "category": "men", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)"},
        {"id": 6, "name": "Product Name", "wear": "Short", "category": "men", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)"},
        {"id": 1, "name": "Product Name", "wear": "Sarees", "category": "women", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)"},
        {"id": 2, "name": "Product Name", "wear": "Kurties", "category": "women", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)"},
        {"id": 3, "name": "Product Name", "wear": "Short", "category": "women", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)"},
        {"id": 4, "name": "Product Name", "wear": "Sarees", "category": "women", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)"},
        {"id": 5, "name": "Product Name", "wear": "Kurties", "category": "women", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)"},
        {"id": 6, "name": "Product Name", "wear": "Short", "category": "women", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)"},
    ]
    return jsonify(products)
@app.route('/api/products/<category>')
def get_products_by_category(category):
    products = [
        {"id": 1, "name": "Product Name", "wear":"T-shirt", "category": "men", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)","image": "http://localhost:5000/static/polo.png","sku":"4717"},
        {"id": 2, "name": "Product Name", "wear":"T-shirt", "category": "men", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)","image": "http://localhost:5000/static/men1.png"},
        {"id": 3, "name": "Product Name", "wear":"T-shirt", "category": "men", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)","image": "http://localhost:5000/static/men2.png"},
        {"id": 4, "name": "Product Name", "wear":"T-shirt", "category": "men", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)","image": "http://localhost:5000/static/men3.png"},
        {"id": 5, "name": "Product Name", "wear":"T-shirt", "category": "men", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)","image": "http://localhost:5000/static/polo.png"},
        {"id": 6, "name": "Product Name", "wear":"T-shirt", "category": "men", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)","image": "http://localhost:5000/static/men1.png"},
        {"id": 7, "name": "Product Name", "wear":"T-shirt", "category": "men", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)","image": "http://localhost:5000/static/men2.png"},
        {"id": 8, "name": "Product Name", "wear":"T-shirt", "category": "men", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)","image": "http://localhost:5000/static/men3.png"},
    ]
    return jsonify(products)

@app.route('/api/products/<int:id>')
def get_product_by_id(id):
    products = {
        1: {"id": 1, "name": "Product Name", "wear": "T-shirt", "category": "men", "price": "Rs.2300", "OG": "Rs.2500", "Discount": "(8% off)", "image": "http://localhost:5000/static/polo.png", "sku": "4717",},
        2: {"id": 2, "name": "Product Name", "wear": "T-shirt", "category": "men", "price": "Rs.2300", "OG": "Rs.2500", "Discount": "(8% off)", "image": "http://localhost:5000/static/men1.png", "sku": "4718",},
        3: {"id": 3, "name": "Product Name", "wear":"T-shirt", "category": "men", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)","image": "http://localhost:5000/static/men2.png"},
        4: {"id": 4, "name": "Product Name", "wear":"T-shirt", "category": "men", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)","image": "http://localhost:5000/static/men3.png"},
        5: {"id": 5, "name": "Product Name", "wear":"T-shirt", "category": "men", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)","image": "http://localhost:5000/static/polo.png"},
        6: {"id": 6, "name": "Product Name", "wear":"T-shirt", "category": "men", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)","image": "http://localhost:5000/static/men1.png"},
        7: {"id": 7, "name": "Product Name", "wear":"T-shirt", "category": "men", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)","image": "http://localhost:5000/static/men2.png"},
        8: {"id": 8, "name": "Product Name", "wear":"T-shirt", "category": "men", "price": "Rs.2300", "OG": "Rs.2500","Discount": "(8% off)","image": "http://localhost:5000/static/men3.png"},
    }
    
    product = products.get(id)
    if product is None:
        return jsonify({"error": "Product not found"}), 404
    
    return jsonify(product)

users = {
    "test@gmail.com": {"password": "123456", "name": "Test User"},
    "test1@gmail.com": {"password": "1234567", "name": "Test User2"}
}

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")
    user = users.get(email)
    if user and user["password"] == password:
        return jsonify({"success": True, "name": user["name"], "email": email})
    return jsonify({"success": False, "error": "Invalid credentials"}), 401

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    email = data.get("email")
    password = data.get("password")
    name = data.get("name")
    if not email or not password or not name:
        return jsonify({"success": False, "error": "Missing fields"}), 400
    if email in users:
        return jsonify({"success": False, "error": "User already exists"}), 409
    users[email] = {"password": password, "name": name}
    return jsonify({"success": True, "name": name, "email": email})

if __name__ == "__main__":
    app.run(debug=True)
