import axios from 'axios';

const fetchLists = () => axios.get('http://192.168.0.104:9000/api/items');

const addList = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append('title', listing.title);
  data.append('price', listing.price);
  data.append('categoryId', listing.category.value);
  data.append('description', listing.description);

  listing.images.forEach((image, index) =>
    data.append('image', {
      name: 'image' + index,
      type: 'image/jpeg',
      uri: image,
    })
  );

  if (listing.location) data.append('location', JSON.stringify(listing.location));

  // return console.log(data);
  return axios.post('http://192.168.0.104:9000/api/items', data, {
    onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  fetchLists,
  addList,
};
