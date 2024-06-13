// src/services/api.js
const API_BASE_URL = "https://serbasayur-id-back-end-production.up.railway.app";

// Fungsi untuk menambahkan pesanan baru
async function addOrder(order) {
  const response = await fetch(`${API_BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
  if (!response.ok) {
    throw new Error("Failed to add order");
  }
  return response.json();
}

// Fungsi untuk menambahkan item pesanan baru
async function addOrderItem(orderItem) {
  try {
    const response = await fetch(`${API_BASE_URL}/orderitems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderItem),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to add order item: ${response.status} ${errorText}`
      );
    }

    return response.json();
  } catch (error) {
    console.error("Error in addOrderItem:", error.message);
    throw error;
  }
}

// Fungsi untuk mengambil semua pesanan
async function getAllOrders() {
  const response = await fetch(`${API_BASE_URL}/orders`);
  if (!response.ok) {
    throw new Error("Failed to fetch orders");
  }
  return response.json();
}

// Fungsi untuk mengambil pesanan berdasarkan ID
async function getOrderById(idOrder) {
  const response = await fetch(`${API_BASE_URL}/orders/${idOrder}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch order with id ${idOrder}`);
  }
  return response.json();
}

// Fungsi untuk mengambil semua item pesanan berdasarkan ID pesanan
async function getAllOrderItems() {
  const response = await fetch(`${API_BASE_URL}/order-items`);
  if (!response.ok) {
    throw new Error("Failed to fetch order items");
  }
  return response.json();
}

// Fungsi untuk mengambil item pesanan berdasarkan ID pesanan dan ID item pesanan
async function getOrderItemById(idOrder, idOrderItem) {
  const response = await fetch(
    `${API_BASE_URL}/order-items/${idOrder}/${idOrderItem}`
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch order item with id ${idOrderItem} for order with id ${idOrder}`
    );
  }
  return response.json();
}

// Fungsi untuk memperbarui pesanan berdasarkan ID
async function updateOrder(idOrder, order) {
  const response = await fetch(`${API_BASE_URL}/orders/${idOrder}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
  if (!response.ok) {
    throw new Error(`Failed to update order with id ${idOrder}`);
  }
  return response.json();
}

// Fungsi untuk memperbarui item pesanan berdasarkan ID pesanan dan ID item pesanan
async function updateOrderItem(idOrder, idOrderItem, orderItem) {
  const response = await fetch(
    `${API_BASE_URL}/order-items/${idOrder}/${idOrderItem}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderItem),
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to update order item with id ${idOrderItem} for order with id ${idOrder}`
    );
  }
  return response.json();
}

// Fungsi untuk menghapus pesanan berdasarkan ID
async function deleteOrder(idOrder) {
  const response = await fetch(`${API_BASE_URL}/orders/${idOrder}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`Failed to delete order with id ${idOrder}`);
  }
  return response.json();
}

// Fungsi untuk menghapus item pesanan berdasarkan ID pesanan dan ID item pesanan
async function deleteOrderItem(idOrder, idOrderItem) {
  const response = await fetch(
    `${API_BASE_URL}/order-items/${idOrder}/${idOrderItem}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error(
      `Failed to delete order item with id ${idOrderItem} for order with id ${idOrder}`
    );
  }
  return response.json();
}

// Ekspor fungsi-fungsi API
export {
  addOrder,
  addOrderItem,
  getAllOrders,
  getOrderById,
  getAllOrderItems,
  getOrderItemById,
  updateOrder,
  updateOrderItem,
  deleteOrder,
  deleteOrderItem,
};
