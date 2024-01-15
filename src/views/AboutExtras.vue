<template>
  <div class="jeb-extras">
    <h1>Extras</h1>
    <main>
      <section>
        <h2>Book Recommendations</h2>
        <p>Middle-Grade Readers</p>
        <ul>
          <li>Deltora Quest</li>
          <li>Harry Potter</li>
          <li>Fablehaven</li>
        </ul>
        <p>Teens</p>
        <ul>
          <li>The Reckoners (by Brandon Sanderson)</li>
          <li>Ready Player One</li>
          <li>Toy Story (Screenplay)</li>
        </ul>
      </section>
      <section>
        <h2>Favorite Cartoons</h2>
        <ul>
          <li>Digimon (Series 1 & 2)</li>
          <li>Jackie Chan’s Adventures</li>
          <li>Power Rangers (I know it’s not a cartoon)</li>
          <li>Transformers Beast Wars</li>
          <li>X-Men: The Animated Series</li>
        </ul>
      </section>
      <section>
        <h2>Tour Dates</h2>
        <p>Coming Soon</p>
      </section>
    </main>
  </div>
</template>

<style scoped>
  h2 {
    font-size: 3rem;
  }

  main {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 2rem;
    margin: 0 auto;
    width: 75%;
    padding: 1rem;
  }

  @media screen and (max-width: 880px) {
    main {
      width: 100%;
    }
  }

  @media screen and (max-width: 675px) {
    main {
      display: block;
      width: 75%;
    }
  }
</style>
