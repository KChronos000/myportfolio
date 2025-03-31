// infoData.ts
export const infoList = [
    { label: "ชื่อ - สกุล :", value: "นางสาวแทมมารีน ตาปราบ" },
    { label: "ชื่อเล่น :", value: "ไทม์" },
    { label: "อายุ :", value: "18 ปี" },
    { label: "วันเกิด :", value: "23 พฤศจิกายน 2551" },
    { label: "สัญชาติ :", value: "ไทย" },
    { label: "ศาสนา :", value: "พุทธ" },
    { label: "เบอร์โทรติดต่อ :", value: "064-8071895" },
];

// info2Data.ts

export type InfoItem = {
    label: string;
    value: string | string[]; // รองรับทั้งข้อความเดียวและหลายบรรทัด
};

export const info2List: InfoItem[] = [
    { label: "โรงเรียน :", value: "ภูเขียว" },
    { label: "แผนการเรียน :", value: "SMT(science-math-technology)" },
    { label: "บิดา :", value: "นายสัญญา ตาปราบ" },
    { label: "มารดา :", value: "นางโชฏิกา ตาปราบ" },
    {
        label: "งานอดเรก :",
        value: ["เขียนโค้ด", "วาดรูป", "สำรวจศึกษาข้อมูลออนไลน์"]
    }
];
