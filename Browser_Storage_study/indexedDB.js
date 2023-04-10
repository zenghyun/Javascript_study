const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

let db;

const dbRequest = indexedDB.open("StorageDummy", 1); // 1 = version

dbRequest.onsuccess = function(event) {
    db = event.target.result;
};

dbRequest.onupgradeneeded = function(event) { // onsuccess = 브라우저의 교차 지원 
    db = event.target.result;
  // onupgradeneeded : db가 처음 만들어질 때 도는 버전이 변경될 때 실행됨 

  const objStore = db.createObjectStore("products", { keyPath: "id" });

  objStore.transaction.oncomplete = function (event) {
    const productStore = db
      .transaction("products", "readwrite") // readwrite = 사용 모드 ( 읽고 쓸 것이다. )
      .objectStore("products"); // 객체 저장소 설정 
    productStore.add({
      id: "p1",
      title: "A First Prodjuct",
      price: 12.99,
      tags: ["Expensive", "Luxury"],
    });
  };
};

dbRequest.onerror = function(event) {
    console.log('ERROR!');
}

storeBtn.addEventListener("click", () => {
    if (!db) {
        return;
    }
    const productStore = db
    .transaction("products", "readwrite") // readwrite = 사용 모드 ( 읽고 쓸 것이다. )
    .objectStore("products"); // 객체 저장소 설정 
  productStore.add({
    id: "p2",
    title: "A Second Prodjuct",
    price: 23.99,
    tags: ["Expensive", "Luxury"],
  });
});

retrBtn.addEventListener("click", () => {
    const productStore = db
    .transaction("products", "readwrite")
    .objectStore("products"); 

    const request = productStore.get('p2');
    request.onsuccess = function() {
        console.log(request.result);
    }
});
