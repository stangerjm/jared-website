<template>
  <div class="jeb-home">
    <h1><img class="jeb-home--title" src="../assets/title.png" alt="Saturday Morning: Mayhem of Musculor" /></h1>
    <div class="jeb-home--gallery">
      <figure class="jeb-home--author">
        <img src="../assets/author.jpg" alt="Jared Everett Bell" />
        <figcaption><RouterLink to="/meet-jared">Meet Jared</RouterLink></figcaption>
      </figure>
      <figure class="jeb-home--cover">
        <img src="../assets/cover-art.jpg" alt="Cover Art" />
        <figcaption><RouterLink to="/books">Books</RouterLink></figcaption>
      </figure>
      <figure class="jeb-home--kids">
        <img src="../assets/grandkids.jpg" alt="Jared with grandkids" />
        <figcaption><RouterLink to="/educators">Educators</RouterLink></figcaption>
      </figure>
      <figure class="jeb-home--musculor">
        <img src="../assets/musculor.png" alt="Musculor" />
        <figcaption><RouterLink to="/newsletter">Newsletter</RouterLink></figcaption>
      </figure>
      <figure class="jeb-home--tv">
        <img src="../assets/tv.jpg" alt="TV" />
        <figcaption><RouterLink to="/extras">Extras</RouterLink></figcaption>
      </figure>
    </div>
    <div class="jeb-home--socialMedia">
      <a href="https://facebook.com" target="_blank"><img src="../assets/facebook.svg" /></a>
      <a href="https://instagram.com" target="_blank"><img src="../assets/instagram.svg" /></a>
      <a href="https://twitter.com" target="_blank"><img src="../assets/twitter.svg" /></a>
      <a href="https://tiktok.com" target="_blank"><img src="../assets/tiktok.svg" /></a>
    </div>
  </div>
</template>

<style scoped>
  .jeb-home {
    display: flex;
    align-items: center;
    flex-direction: column;
    white-space: nowrap;
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
    position: relative;
  }

  figure img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }

  figcaption {
    position: absolute;
    bottom: 2rem;
    padding: 1rem;
    width: 80%;
    text-align: center;
    background: #f8f8f8;
    left: 50%;
    transform: translateX(-50%);
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

  .jeb-home--tv img {
    object-position: center;
  }

  .jeb-home--socialMedia {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 2rem;
    margin-top: 10rem;
  }

  .jeb-home--socialMedia img {
    width: 5rem;
  }

  a {
    color: black;
  }

  @media screen and (max-width: 920px) {
    .jeb-home--gallery figcaption {
      font-size: 1rem;
      bottom: 0.5rem;
      padding: 0.25rem;
    }
  }
</style>
