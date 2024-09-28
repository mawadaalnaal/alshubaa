
const imagesObject = {
    imagesMap: new Map()
};

// إضافة 85 صورة إلى الخريطة تلقائيًا باستخدام حلقة for
for (let i = 1; i <= 46; i++) {
    const imageName = `image${i}`; // تسمية الصورة (image1, image2, ...)
    const imagePath = `الحفل الخامس/${i}.jpg`; // مسار الصورة النسبي داخل مجلد الصور
    imagesObject.imagesMap.set(imageName, imagePath); // إضافة الصورة إلى الخريطة
}


imagesObject.imagesMap.forEach((imagePath, imageName) => {
    
    const imgElement = document.createElement('img');
    imgElement.src = imagePath; 
    imgElement.alt = imageName; 
    imgElement.style.margin = '10px'; 

    
    document.querySelector('.event-details').appendChild(imgElement);
});
