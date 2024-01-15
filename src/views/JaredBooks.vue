<template>
  <div class="jeb-books">
    <h1><img class="jeb-books--title" src="../assets/title-only.png" alt="Saturday Morning" /></h1>
    <main>
      <div class="jeb-books--cover">
        <img src="../assets/cover-art.jpg" />
        <a href="https://amazon.com" target="_blank">BUY NOW</a>
      </div>
      <div>
        <img src="../assets/subtitle-only.jpg" />
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
    grid-gap: 2rem;
    width: 60%;
    margin: 0 auto;
  }

  p {
    text-align: center;
    margin-top: 1rem;
  }

  a {
    display: inline-block;
    text-align: center;
    background: black;
    color: white;
    padding: 2rem;
    border-radius: 10rem;
    width: 100%;
    font-size: 2rem;
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
