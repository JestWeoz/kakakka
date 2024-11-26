export function formatVND(amount) {
    if (typeof amount !== 'number') {
        return 'Invalid input';
    }
    return amount.toLocaleString('vi-VN', { style: 'decimal' }) + ' VND';
}

// Ví dụ sử dụng
console.log(formatVND(3500000)); // Kết quả: "3.500.000 VND"
