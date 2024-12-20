class PhotoModel {
  constructor(caption, src) {
    this.caption = caption;
    this.src = src;
  }

  getCaption() {
    return this.caption;
  }

  getSource() {
    return this.src;
  }
}

class PhotoView {
  constructor(photoModel) {
    this.photoModel = photoModel;
    this.photoEl = document.createElement('div');
    this.photoEl.classList.add('photo');
  }

  render() {
    const caption = this.photoModel.getCaption();
    const src = this.photoModel.getSource();

    this.photoEl.innerHTML = `
      <img src="${src}" alt="${caption}">
      <div class="caption">${caption}</div>
    `;
  }

  getElement() {
    return this.photoEl;
  }
}

class PhotoController {
  constructor(photoModel, photoView) {
    this.photoModel = photoModel;
    this.photoView = photoView;
  }

  render() {
    this.photoView.render();
    return this.photoView.getElement();
  }
}

const photoData = [
  {
    caption: 'Sample Photo 1',
    src: 'https://via.placeholder.com/300x200?text=Sample+Photo+1',
  },
  {
    caption: 'Sample Photo 2',
    src: 'https://via.placeholder.com/300x200?text=Sample+Photo+2',
  },
  {
    caption: 'Sample Photo 3',
    src: 'https://via.placeholder.com/300x200?text=Sample+Photo+3',
  },
];

const photoGallery = document.getElementById("photoGallery");
photoData.forEach((data) => {
  const photoModel = new PhotoModel(data.caption, data.src)
  const photoView = new PhotoView(photoModel);
  const photoController = new PhotoController(photoModel, photoView);
  photoGallery.appendChild(photoController.render());
})
