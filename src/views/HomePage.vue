<template>
  <div class="jeb-home">
    <h1><img class="jeb-home--title" src="../assets/title.png" alt="Saturday Morning: Mayhem of Musculor" /></h1>
    <div class="jeb-home--gallery">
      <RouterLink to="/meet-jared" class="jeb-home--author">
        <figure>
          <img class="jeb-home--jared" src="../assets/author.jpg" alt="Jared Everett Bell" />
          <figcaption>Meet Jared</figcaption>
        </figure>
      </RouterLink>
      <RouterLink to="/books" class="jeb-home--cover">
        <figure>
          <img src="../assets/cover-art.jpg" alt="Cover Art" />
          <figcaption>Books</figcaption>
        </figure>
      </RouterLink>
      <RouterLink to="/schoolvisits" class="jeb-home--kids">
        <figure>
          <img src="../assets/grandkids.jpg" alt="Jared with grandkids" />
          <figcaption>School Visits</figcaption>
        </figure>
      </RouterLink>
      <RouterLink to="/newsletter" class="jeb-home--musculor">
        <figure>
          <img src="../assets/musculor.png" alt="Musculor" />
          <figcaption>Newsletter</figcaption>
        </figure>
      </RouterLink>
      <RouterLink to="/extras" class="jeb-home--tv">
        <figure>
          <img src="../assets/tv.jpg" alt="TV" />
          <figcaption>Extras</figcaption>
        </figure>
      </RouterLink>
    </div>
    <div class="jeb-home--socialMedia">
      <a href="https://www.facebook.com/profile.php?id=100088101285779" target="_blank" rel="noopener noreferrer"><img src="../assets/facebook.svg" alt="Facebook" /></a>
      <a href="https://www.instagram.com/jaredbell90" target="_blank" rel="noopener noreferrer"><img src="../assets/instagram.svg" alt="Instagram" /></a>
      <a href="https://www.tiktok.com/@jaredeverettbell?lang=en" target="_blank" rel="noopener noreferrer"><img src="../assets/tiktok.svg" alt="TikTok" /></a>
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

  .jeb-home--jared {
    object-position: 0 -6rem;
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
    width: 100%;
    height: 100%;
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

  a figcaption:hover, figure:hover figcaption {
    text-decoration: underline;
  }

  .jeb-home--author {
    grid-row: 1 / 4;
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

  @media screen and (max-width: 1200px) {
    .jeb-home--jared {
      object-position: center;
    }
  }

  @media screen and (max-width: 920px) {
    .jeb-home--gallery figcaption {
      font-size: 1rem;
      bottom: 0.5rem;
      padding: 0.25rem;
    }
  }

  @media screen and (max-width: 500px) {
    .jeb-home--gallery {
      width: 90vw;
      height: 50vw;
      grid-template-columns: 1fr 30vw 1fr;
    }
  }
</style>
