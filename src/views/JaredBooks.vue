<template>
  <div class="jeb-books">
    <h1><img class="jeb-books--title" src="../assets/title-only.png" alt="Saturday Morning" /></h1>
    <main>
      <div class="jeb-books--cover">
        <img class="jeb-books--coverArt" src="../assets/cover-art.jpg" alt="Cover art" />
        <a href="https://a.co/d/1ic4m4e" target="_blank" rel="noopener noreferrer">
          <img src="https://www.niftybuttons.com/amazon/amazon-button9.png" alt="Available on Amazon">
        </a>
        <a class="jeb-books--buySigned" href="https://forms.gle/AAYVqYKsYaa32Z2J7" target="_blank" rel="noopener noreferrer">
          BUY SIGNED COPY
        </a>
      </div>
      <div>
        <img src="../assets/subtitle-only.jpg" alt="Mayhem of Musculor" />
        <p>Max Santel, a nine-year-old Saturday Morning cartoon
          fanatic. Rebecca Santel, a mother who simply wants
          her kids’ chores done. What does Max do instead of
          his chores? That’s right, watch TV!
          What does Rebecca do as punishment for repeatedly
          ignoring chores? She takes a sledgehammer to the
          family TV! Glass flies everywhere and seven cartoons
          escape from their television imprisonment. And who
          is called to be the hero to fix the mess? You guessed
          it, Max Santel!</p>
      </div>
    </main>
  </div>
</template>

<style scoped>
  h1 {
    width: 50%;
    margin: 0 auto 5rem auto;
  }

  main {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 5rem;
    width: 60%;
    margin: 0 auto;
    font-size: 2rem;
  }

  p {
    text-align: center;
    margin-top: 2rem;
  }

  .jeb-books--cover a.jeb-books--buySigned {
    background-color: var(--button-background-color);
    padding: 1rem;
  }

  a {
    display: inline-block;
    text-align: center;
    color: white;
    border-radius: 1rem;
    width: 100%;
    font-size: 2rem;
  }

  img {
    width: 100%;
  }

  a:hover {
    text-decoration: none;
  }

  .jeb-books--cover {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20rem;
  }

  .jeb-books--coverArt {
    margin-bottom: 1rem;
  }

  .jeb-books--cover a {
    margin-top: 1rem;
  }

  @media screen and (max-width: 800px) {
    h1 {
      display: none;
    }

    .jeb-books--cover {
      margin: 0 auto 3rem auto;
    }

    main {
      display: block;
      width: 100%;
    }
  }
</style>
