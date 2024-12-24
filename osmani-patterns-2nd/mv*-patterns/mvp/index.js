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
  constructor() {
    this.photoEl = document.createElement('div');
    this.photoEl.classList.add('photo');
  }

  setCaption(caption) {
    this.caption = caption;
  }

  setSource(src) {
    this.src = src;
  }

  render() {
    this.photoEl.innerHTML = `
      <img src="${this.src}" alt="${this.caption}">
      <div class="caption">${this.caption}</div>
    `;
  }

  getElement() {
    return this.photoEl;
  }
}

class PhotoPresenter {
  constructor(photoModel, photoView) {
    this.photoModel = photoModel;
    this.photoView = photoView;
  }

  render() {
    this.photoView.setCaption(this.photoModel.getCaption());
    this.photoView.setSource(this.photoModel.getSource());
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

const photoGallery = document.getElementById('photoGallery');
photoData.forEach((data) => {
  const photoModel = new PhotoModel(data.caption, data.src);
  const photoView = new PhotoView();
  const photoPresenter = new PhotoPresenter(photoModel, photoView);
  photoGallery.appendChild(photoPresenter.render()) 
});
