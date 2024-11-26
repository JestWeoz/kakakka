// src/data.js

export const locations = {
    cities: [
        { id: 1, name: "Hà Nội" },
        { id: 2, name: "Hồ Chí Minh" },
        { id: 3, name: "Hà Nam" }
    ],
    districts: {
        1: [
            { id: 1, name: "Hà Đông" },
            { id: 2, name: "Ba Đình" },
            { id: 3, name: "Hoàn Kiếm" }
        ],
        2: [
            { id: 4, name: "Quận 1" },
            { id: 5, name: "Quận 2" },
            { id: 6, name: "Quận 3" }
        ],
        3: [
            { id: 7, name: "Duy Tiên" },
            { id: 8, name: "Kim Bảng" }
        ]
    },
    wards: {
        1: [
            { id: 1, name: "Phú La" },
            { id: 2, name: "La Khê" }
        ],
        2: [
            { id: 3, name: "Quang Trung" },
            { id: 4, name: "Nguyễn Trãi" }
        ]
    }
};
