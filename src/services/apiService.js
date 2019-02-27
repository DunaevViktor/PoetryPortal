//поставил выше, потому что не всплывает
const Post = [
  {
    id: 0,
    title: "Поворотам судьбы",
    createdAt: "26-02-2019",
    tags: ["философия", "разное"],
    content: `<p>Странно, но больны на всю голову,</p>
       <p>Неожиданные повороты судьбы.</p>`
  },
  {
    id: 1,
    title: "Поворотам судьбы",
    createdAt: "25-02-2019",
    tags: ["философия", "разное"],
    content: `<p>Странно, но больны на всю голову,</p>
       <p>Неожиданные повороты судьбы.</p>`
  }
];

class ApiService {
  getPostsPage(downloadInfo) {
    let resultObj = {};
    let takenPost = [];
    let realTaken = 0;
    let realSkipped = 0;

    let promise = new Promise((resolve, reject) => {
      for (let i = 0; i < downloadInfo.take; i++) {
        takenPost[i] = Post[i];
        //тут нужно как то проверять, записался ли пост,я не могу придумать ошибку
        if (takenPost[i] == Post[i]) {
          resolve();
          realTaken++;
        } else {
          reject();
          realSkipped++;
        }
      }
    });

    //я думал ассинхронность кода, в том, чтобы знать реальное число записанных элементов
    promise.then(
      () => {
        //realTaken++;
      },
      () => {
        //realSkipped++;
      }
    );

    resultObj.skipped = realSkipped;
    resultObj.taken = realTaken;
    resultObj.total = realTaken + realSkipped;
    resultObj.items = takenPost;

    return resultObj;
  }
}

let info = {
  skip: 0,
  take: 2
};
const service = new ApiService();
let res = service.getPostsPage(info);
console.log(res);

/*export default service;*/
