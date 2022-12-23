// 1. jawaban soal nomor 2
const data = ["cook", "save", "taste", "aves", "vase", "state", "map"];

function fill(arr, value) {
  let newArr = [];
  for (const key in arr) {
    if (arr[key].includes(value)) {
      newArr = [...newArr, arr[key]];
    }
  }

  return newArr;
}

let group = [];
group.push(fill(data, "v"));
group.push(fill(data, "t"));
group.push(fill(data, "m"));

console.log(group);

// 2. jawaban soal nomor 2 (query)

// SELECT datarelation.name AS NAME, data.`name` AS parent_name FROM DATA RIGHT JOIN DATA AS datarelation ON datarelation.`parent_id` =  data.id
