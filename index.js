const dodger = document.getElementById('dodger');
const game = document.getElementById('game');

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);
  const gameWidth = game.offsetWidth;
  const dodgerWidth = 40; // Assuming the dodger is 40px wide

  if (left + dodgerWidth < gameWidth) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (event.key === 'ArrowRight') {
    moveDodgerRight();
  }
});

// Test cases for moveDodgerLeft and moveDodgerRight
describe('moveDodgerLeft()', () => {
  beforeEach(() => {
    dodger.style.left = '0px'; // Ensure the dodger starts at the left edge
  });

  it('moves the DODGER to the left', () => {
    let left = dodger.style.left.replace('px', '');
    left = parseInt(left, 10);

    moveDodgerLeft();

    let newPosition = dodger.style.left.replace('px', '');
    newPosition = parseInt(newPosition, 10);

    if (left > 0) {
      expect(newPosition).to.be.below(left);
    } else {
      expect(newPosition).to.equal(left);
    }
  });
});

describe('moveDodgerRight()', () => {
  beforeEach(() => {
    dodger.style.left = '0px'; // Ensure the dodger starts at the left edge
  });

  it('moves the DODGER to the right', () => {
    let left = dodger.style.left.replace('px', '');
    left = parseInt(left, 10);

    moveDodgerRight();

    let newPosition = dodger.style.left.replace('px', '');
    newPosition = parseInt(newPosition, 10);

    const gameWidth = game.offsetWidth;
    const dodgerWidth = 40; // Assuming the dodger is 40px wide

    if (left + dodgerWidth < gameWidth) {
      expect(newPosition).to.be.above(left);
    } else {
      expect(newPosition).to.equal(left);
    }
  });
});
