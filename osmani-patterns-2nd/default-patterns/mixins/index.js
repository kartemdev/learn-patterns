const Mixins = (superclass) => {
  return class extends superclass {
    moveUp() {
      console.log('move up');
    }

    moveDown() {
      console.log('move down');
    }

    stop() {
      console.log('stop! in the name of love!');
    }
  }
}

class Animator {
  moveLeft() {
    console.log('move left');
  }
}

class MyAnimator extends Mixins(Animator) {
  moveRandomly() {
    console.log('move randomly');
  }
}

const animator = new MyAnimator();

animator.moveRandomly();

animator.moveLeft();

animator.moveUp();
animator.moveDown();
animator.stop();
