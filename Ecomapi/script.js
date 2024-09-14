// Get the forms and table elements
const createForm = document.getElementById('create-form');
const listProducts = document.getElementById('list-products');
const updateForm = document.getElementById('update-form');
const deleteForm = document.getElementById('delete-form');
const productTable = document.getElementById('product-table');
const productList = document.getElementById('product-list');

// Create Product
createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    fetch('http://localhost:5000/api/v1/products/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, price })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('create-response').innerHTML = `Product created with ID ${data.id}`;
        // You can also update the table here
    })
    .catch(error => console.error('Error:', error));
});

// List Products
fetch('http://localhost:5000/api/v1/products/')
    .then(response => response.json())
    .then(data => {
        const productListHtml = data.map(product => `
            <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.description}</td>
                <td>${product.price}</td>
                <td>
                    <button data-id="${product.id}" class="update-btn">Update</button>
                    <button data-id="${product.id}" class="delete-btn">Delete</button>
                </td>
            </tr>
        `).join('');
        productList.innerHTML = productListHtml;
    })
    .catch(error => console.error('Error:', error));

// Update Product
updateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('update-id').value;
    const title = document.getElementById('update-title').value;
    const description = document.getElementById('Description').value;
    const price = document.getElementById('price').value;
    fetch(`http://localhost:5000/api/v1/products/update/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, price })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('update-response').innerHTML = `Product updated with ID ${data.id}`;
        // You can also update the table here
    })
    .catch(error => console.error('Error:', error));
});

// Delete Product
deleteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('delete-id').value;
    fetch(`http://localhost:5000/api/v1/products/delete/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('delete-response').innerHTML = `Product deleted with ID ${data.id}`;
        // You can also update the table here
    })
    .catch(error => console.error('Error:', error));
});