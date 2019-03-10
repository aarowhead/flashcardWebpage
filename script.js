var app = new Vue({
  el: '#app',
  data: {
    flashcards: [{
        word: "Dog",
        description: "Perro",
        done: false
      },
      {
        word: "Cat",
        description: "Gatto",
        done: true
      },
      {
        word: "Airplain",
        description: "Avion",
        done: false
      },
      {
        word: "Spain",
        description: "Espana",
        done: false
      },
      {
        word: "Spanish",
        description: "Espanol",
        done: false
      }
    ],
    message: '',
    showAll: '0',
    indexOfDisplayed: 0,
    addedWord: '',
    addedDescription: '',
    displayAnswer: false,
  },
  computed: {
    getDoneButtonLabel() {
      if (!this.flashcards[this.indexOfDisplayed].done) {
        return "Finished";
      } else {
        return "Unfinished";
      }
    }
  },
  methods: {
    displayNext() {
      if (this.showAll === '1') {
        // increment index
        if (this.indexOfDisplayed + 1 >= this.flashcards.length) {
          this.indexOfDisplayed = 0;
        } else {
          this.indexOfDisplayed = this.indexOfDisplayed + 1;
        }
      } else {
        // increment index to next one not marked as done
        startingIndex = this.indexOfDisplayed;
        currentIndex = this.indexOfDisplayed;
        do {
          currentIndex++;
          if (currentIndex >= this.flashcards.length) {
            currentIndex = 0;
          }
        } while (currentIndex !== startingIndex && this.flashcards[currentIndex].done);
        this.indexOfDisplayed = currentIndex;
      }
    },
    displayPrevious() {
      if (this.showAll === '1') {
        if (this.indexOfDisplayed - 1 < 0) {
          this.indexOfDisplayed = this.flashcards.length - 1;
        } else {
          this.indexOfDisplayed = this.indexOfDisplayed - 1;
        }
      } else {
        // decrement index to next one not marked as done
        startingIndex = this.indexOfDisplayed;
        currentIndex = this.indexOfDisplayed;
        do {
          currentIndex--;
          if (currentIndex == -1) {
            currentIndex = this.flashcards.length - 1;
          }
        } while (currentIndex !== startingIndex && this.flashcards[currentIndex].done);
        this.indexOfDisplayed = currentIndex;
      }

    },
    toggleDone() {
      this.flashcards[this.indexOfDisplayed].done = !this.flashcards[this.indexOfDisplayed].done;
    },
    toggleDisplayAnswer() {
      this.displayAnswer = !this.displayAnswer;
    },
    addFlashcard() {
      this.flashcards.push({
        word: this.addedWord,
        description: this.addedDescription,
        done: false
      });
      this.addedWord = '';
      this.addedDescription = '';
    },
  }
});