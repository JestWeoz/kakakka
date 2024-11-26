export function createSlug(title) {
    return title
        .toLowerCase()
        .replace(/ /g, '-')        // Thay khoảng trắng bằng dấu '-'
        .replace(/[^\w-]+/g, ''); // Loại bỏ ký tự đặc biệt
}