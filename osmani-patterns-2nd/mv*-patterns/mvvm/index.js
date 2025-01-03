// Model
const photos = [
  { caption: 'Sample Photo 1', src: 'photo1.jpg', metadata: 'Some metadata for photo 1' },
  { caption: 'Sample Photo 2', src: 'photo2.jpg', metadata: 'Some metadata for photo 2' },
];

// ViewModel
class PhotoViewModel {
  constructor(model) {
    this.caption = model.caption;
    this.src = model.src;
    this.metadata = model.metadata;
  }
}

// View
class PhotoView {
  constructor(viewModel) {
    this.viewModel = viewModel;
    this.createPhotoElement();
  }

  createPhotoElement() {
    this.photoElement = document.createElement('li');
    this.photoElement.classList.add('photo');
    this.photoElement.innerHTML = `
      <h2>${this.viewModel.caption}</h2>
      <img class="source" src="${this.viewModel.src}" />
      <div class="metadata">${this.viewModel.metadata}</div>
    `;
  }

  addToPhotoList(photoList) {
    photoList.appendChild(this.photoElement);
  }
}

// Binding ViewModel to View
const photoList = document.getElementById('photoList');
photos.forEach(photo => {
  const viewModel = new PhotoViewModel(photo);
  const view = new PhotoView(viewModel);
  view.addToPhotoList(photoList);
});
