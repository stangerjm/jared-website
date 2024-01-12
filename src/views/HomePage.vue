<template>
  <div class="jeb-home">
    <h1><img class="jeb-home--title" src="../assets/title.png" alt="Saturday Morning: Mayhem of Musculor" /></h1>
    <div class="jeb-home--gallery">
      <figure class="jeb-home--author">
        <img src="../assets/author.jpg" alt="Jared Everett Bell" />
      </figure>
      <figure class="jeb-home--cover">
        <img src="../assets/cover-art.jpg" alt="Cover Art" />
      </figure>
      <figure class="jeb-home--kids">
        <img src="../assets/grandkids.jpg" alt="Jared with grandkids" />
      </figure>
      <figure class="jeb-home--musculor">
        <img src="../assets/musculor.png" alt="Musculor" />
      </figure>
      <figure class="jeb-home--tv">
        <img src="../assets/tv.jpg" alt="TV" />
      </figure>
    </div>
  </div>
</template>

<style scoped>
  .jeb-home {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .jeb-home--title {
    width: 75vw;
    min-width: 30rem;
    max-width: 75rem;
  }

  .jeb-home--gallery {
    display: grid;
    grid-gap: 1rem;
    width: 65vw;
    height: 36vw;
    grid-template-columns: 1fr 25vw 1fr;
    grid-template-rows: repeat(6, 1fr);
  }

  .jeb-home--gallery figure {
    padding: 0;
    margin: 0;
  }

  figure img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }

  .jeb-home--author {
    grid-row-start: 1;
    grid-row-end: 4;
  }

  .jeb-home--cover {
    grid-row-start: 1;
    grid-row-end: 7;
  }

  .jeb-home--kids {
    grid-row-start: 1;
    grid-row-end: 5;
  }

  .jeb-home--musculor {
    grid-row-start: 4;
    grid-row-end: 7;
  }

  .jeb-home--tv {
    grid-row-start: 5;
    grid-row-end: 7;
  }
</style>
