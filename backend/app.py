from flask import Flask, jsonify
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


if __name__ == "__main__":
    app.run(debug=True)
