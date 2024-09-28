const imagesObject = {
    imagesMap: new Map()
};

// إضافة 23 صورة إلى الخريطة تلقائيًا باستخدام حلقة for
for (let i = 1; i <= 62; i++) {
    const imageName = `aaa${i}`; // تسمية الصورة (aa1, aa2, ...)
    const imagePath = `الحفل الرابع/aaa${i}.JPG`; // مسار الصورة الكامل
    imagesObject.imagesMap.set(imageName, imagePath); // إضافة الصورة إلى الخريطة
}

imagesObject.imagesMap.forEach((imagePath, imageName) => {
    const imgElement = document.createElement('img');
    imgElement.src = imagePath; 
    imgElement.alt = imageName; 
    imgElement.style.margin = '10px'; 

    document.querySelector('.event-details').appendChild(imgElement);
});
