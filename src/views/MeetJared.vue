<template>
  <div class="jeb-meet">
    <header class="jeb-meet--description">
      <h1>Meet Jared</h1>
      <img class="jeb-meet--jared" src="../assets/author.jpg" alt="Jared Everett Bell" />
      <p>Jared Everett Bell writes action-packed, funny, and heartfelt books for
        middle-grade readers. Books that parents will enjoy reading with their kids.
        Jared loves comedy, cartoons, board games, game shows, and sandwiches.
        He lives in Lacey, Washington, close to his large immediate family.</p>
    </header>
    <section class="jeb-meet--section">
      <h2>Childhood</h2>
      <div class="jeb-meet--item">
        <img class="jeb-meet--imgLarge" src="../assets/jared-kid.jpg" alt="Jared as a kid" />
        <p>The first half of Jared’s life was spent in
          Spokane, Washington, the inspiration for
          Kanespo in his book series Saturday Morning. He
          is the middle child, number four of six. His first
          experience with comedy was watching a live
          family-friendly improv show at the age of four.
          He laughed so hard, it made the comedians
          break. At the age of 9, Jared and his family
          moved to western Washington.
        </p>
      </div>
      <div class="jeb-meet--item">
        <img src="../assets/mario-sketch.jpg" alt="Mario sketch" />
        <p>During his early teens and high school, Jared
          became a stage performer at the local
          community theater and high school
          productions, including the sketch comedy class
          Wednesday Morning Live.</p>
      </div>
    </section>
    <section class="jeb-meet--section jeb-meet--invertedSection">
      <h2>College</h2>
      <div class="jeb-meet--item">
        <img src="../assets/humor-code.jpg" alt="Humor Code" />
        <p>After serving a church mission for two years, Jared
          studied screenwriting, producing, and
          comedy in college at Brigham Young University-Idaho
          and Brigham Young University-Provo.
          He performed sketch comedy at BYU-Idaho with the sketch troupe "Humor Code"
          as an original cast member.</p>
      </div>
      <div class="jeb-meet--item">
        <img src="../assets/comedy-sports.png" alt="Comedy Sports" />
        <p>
          <span class="jeb-meet--break" />
          <span>After moving to Provo, Utah, and gaining entry to the
            BYU film program, Jared started performing improv
            at ComedySportz.</span>
        </p>
      </div>
      <div class="jeb-meet--item">
        <iframe class="jeb-meet--video" src="https://www.youtube.com/embed/BvPfCTyd3X8?si=pePAgnQP1nrMKK82" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
        <p>During the last year of college, Jared was asked to
          join two other writers in writing a fan-made Star
          Wars short called "Han Solo."</p>
      </div>
    </section>
    <section class="jeb-meet--section">
      <h2>Hollywood</h2>
      <div class="jeb-meet--item">
        <img src="../assets/ucb.jpg" alt="UCB" />
        <p>After college, Jared moved to Los Angeles,
          California to further his study of comedy
          and pursue a career in television writing. He
          studied improv, sketch, and musical comedy
          at the Upright Citizens Brigade theatre. He
          worked on a number of scripted and
          unscripted television shows.</p>
      </div>
      <div class="jeb-meet--item">
        <img src="../assets/game-shakers.jpg" alt="Game Shakers" />
        <p>On the side, he also did some acting, landing
          a small role on a Nickelodeon show called
          Game Shakers.</p>
      </div>
      <div class="jeb-meet--item">
        <iframe title="Lets Make a Deal" class="jeb-meet--video" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FJaredBellComedy%2Fvideos%2F281036223310966%2F&show_text=false&width=560&t=0" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
        <p>His favorite Hollywood experience was
          getting on Let’s Make a Deal and competing
          for a brand new car.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .jeb-meet {
    width: 60%;
    margin: 0 auto;
  }

  .jeb-meet--jared {
    object-position: center;
    height: 30rem;
    margin-bottom: 2rem;
  }

  .jeb-meet--section {
    padding: 5rem 0;
  }

  .jeb-meet--description {
    text-align: center;
  }

  video.jeb-meet--video {
    height: 12rem;
    object-position: center;
  }

  img, .jeb-meet--video {
    width: 30rem;
    height: 20rem;
    object-fit: cover;
    object-position: top;
    grid-column: 2 / 3;
  }

  .jeb-meet--imgLarge {
    height: 30rem;
  }

  .jeb-meet--invertedSection img, .jeb-meet--invertedSection .jeb-meet--video {
    grid-column: 1 / 2;
  }

  .jeb-meet--item {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 2.5rem;
  }

  .jeb-meet--item:not(:last-child) {
    margin-bottom: 3rem;
  }

  .jeb-meet--break {
    display: block;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 1000px) {
    .jeb-meet {
      width: 75%;
    }
  }

  @media screen and (max-width: 650px) {
    .jeb-meet {
      width: 100%;
    }
  }

  @media screen and (max-width: 500px) {
    .jeb-meet--section {
      display: block;
    }

    img, .jeb-meet--video {
      float: right;
      margin-left: 1rem;
      width: 20rem;
      height: 15rem;
    }

    img:after, .jeb-meet--vide:after {
      clear: both;
      content: '';
      display: block;
    }

    p {
      margin: 1rem;
      overflow-wrap: break-word;
    }

    p:not(:last-child) {
      margin-bottom: 3rem;
    }

    .jeb-meet--item {
      display: block;
      overflow: auto;
      margin-bottom: 1rem;
    }

  .jeb-meet--description {
    text-align: left;
  }
  }
</style>
