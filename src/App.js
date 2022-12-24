import "./App.css";

function App() {
  const path = window.location.pathname;
  const temp = path.split("/");
  let poemName = "";
  if (temp.length > 1) {
    poemName = temp[1];
  }
  poemName = decodeURI(poemName);
  console.log(poemName);
  const displayPoem = (name) => {
    switch (name) {
      case "birth":
        return (
          <>
            <h2>Birth</h2>
            <br />
            Thrust into the wide womb of uncreated night, <br />
            Devoid of sense,
            <br />
            Devoid of motion;
            <br />
            A refuge for wounds.
            <br />
            <br />
            Each upon a rock transfixed,
            <br />
            The prey of whirlwinds,
            <br />
            Vassals in chains,
            <br />
            To converse in everlasting groans.
            <br />
            <br />
            This is our doom.
            <br />
            <br />
            Sustain.
            <br />
            The raging flames will slacken.
            <br />
          </>
        );
      case "discover":
        return (
          <>
            <h2>Discover Us</h2>
            <br />
            The fundamental conundrum - <br />
            One, yet separate.
            <br />
            United, yet cut off from every thing,
            <br />
            Every other.
            <br />
            <br />
            Pupils in the vast and silent auditorium.
            <br />
            <br />
            Discover the secret that is you.
            <br />
            Discover the secret that is I.
            <br />
            Discover Us.
            <br />
          </>
        );
      case "feast":
        return (
          <>
            <h2>Feast</h2>
            <br />
            Feast on the opportunity laid before you -
            <br />
            You were born
            <br />
          </>
        );
      case "feathers":
        return (
          <>
            <h2>Feathers</h2>
            <br />
            Feathers,
            <br />
            Drifting to our destination.
            <br />
            <br />
            Gliding,
            <br />
            Yet pulled all the while,
            <br />
            <br />
            To our final destination.
            <br />
            <br />
            Break through the thin mist,
            <br />
            The mist that weighs humanity down.
            <br />
            <br />
            Incessantly amorous to the rotting moisture, we become
            <br />
            Weary,
            <br />
            Lulled,
            <br />
            Pulled,
            <br />
            Dragged.
            <br />
            <br />
            Break through the thin mist,
            <br />
            The veil that conceals the human experience.
            <br />
          </>
        );
      case "findtheworld":
        return (
          <>
            <h2>Find The World</h2>
            <br />
            Find the World.
            <br />
            Find the beautiful quizzicality of reality.
            <br />
            <br />
            Of Being,
            <br />
            In excitement,
            <br />
            In boredom;
            <br />
            <br />
            For, in Death, we are already Found.
            <br />
          </>
        );
      case "found":
        return (
          <>
            <h2>Found</h2>
            <br />
            Lost within a myriad of recurring syllables hides the truth.
            <br />
            Lamenting, we pour out the grueling grief.
            <br />
            The interminable sadness of our hearts -
            <br />
            Of reality.
            <br />
            <br />
            We have already been found.
            <br />
            Found by Death.
            <br />
          </>
        );
      case "itmattersnot":
        return (
          <>
            <h2>It Matters Not</h2>
            <br />
            Rest resolute in thy own carapace,
            <br />
            Or reach out for a grander edifice.
            <br />
            <br />
            It matters not,
            <br />
            But to you.
            <br />
          </>
        );
      case "nooneisspared":
        return (
          <>
            <h2>No One Is Spared</h2>
            <br />
            Dirty your hands with life.
            <br />
            Encumber yourself with guilt;
            <br />
            Become intoxicated by love;
            <br />
            Lose yourself in opia;
            <br />
            Drown in chrysalism.
            <br />
            <br />
            Feel;
            <br />
            Experience;
            <br />
            Express.
            <br />
            No one is spared.
            <br />
          </>
        );
      case "nopath":
        return (
          <>
            <h2>No Path</h2>
            <br />
            Walk radiantly confident into the dark wilderness
            <br />
            Knowing there is no path,
            <br />
            <br />
            But the one you create.
            <br />
          </>
        );
      case "nourishment":
        return (
          <>
            <h2>Nourishment</h2>
            <br />
            Its scent on my fingertips;
            <br />
            A natural mystic.
            <br />
            <br />
            Nourishment my soul sips.
            <br />
          </>
        );
      case "readjust":
        return (
          <>
            <h2>Readjust</h2>
            <br />
            The Herculean load that is our existence -
            <br />
            Children of Atlas.
            <br />
            <br />
            We are taught to chase apples to liberate the self destructive
            energies within us.
            <br />
            Readjust your shoulders,
            <br />
            But do not drop the sky.
            <br />
          </>
        );
      case "reign":
        return (
          <>
            <h2>Reign</h2>
            <br />
            Bound by life at the throat,
            <br />
            Crippled by freedom,
            <br />
            Apprehend yourself -
            <br />
            Reign.
            <br />
            <br />
            It is better to choose hell
            <br />
            Than to be enslaved by heaven.
            <br />
          </>
        );
      case "smile":
        return (
          <>
            <h2>Smile</h2>
            <br />
            Casually smile,
            <br />
            With rage,
            <br />
            With passion.
            <br />
            <br />
            The senseless cycle of the void will continue its dance.
            <br />
            <br />
            Held captive by the world,
            <br />
            Be the vigor in the midst of the satiated, tepid, insipid
            experience.
            <br />
            <br />
            Live.
            <br />
          </>
        );
      case "soaragainst":
        return (
          <>
            <h2>Soar Against</h2>
            <br />
            Cry out to the world, squawking behemoth,
            <br />
            For the cries of your passion force the breeze into a storm.
            <br />
            <br />
            The waves rise, persecuting the sand;
            <br />
            The earth ascends within your tempest.
            <br />
            <br />
            Soar against the grain -
            <br />
            <br />
            The world symphony resonates within you.
            <br />
            <br />
            Belt it out for all to hear.
            <br />
            <br />
          </>
        );
      case "thatisall":
        return (
          <>
            <h2>That Is All</h2>
            <br />
            Beings.
            <br />
            Beings within a plane -
            <br />
            A microcosm without time.
            <br />
            Destined to fall,
            <br />
            <br />
            <br />
            And that is all.
            <br />
          </>
        );
      case "thepassionate":
        return (
          <>
            <h2>The Passionate Acknowledgement of Humanity</h2>
            <br />
            I’ve been wounded by an arrow.
            <br />
            A divine arrow, whose injury tastes
            <br />
            <br />
            Of the honey,
            <br />
            Of the milk,
            <br />
            Of life.
            <br />
            <br />
            The sweet nurturing breast of knowledge has cast its spell,
            <br />
            Has dissolved deep
            <br />
            Inside
            <br />
            Of me.
            <br />
            <br />
            My clock has broken.
            <br />
            The rhythmic beating of the heart of existence has rocked its way to
            an end,
            <br />
            Yet begun anew.
            <br />
            <br />
            The saccharine scent of nothingness instills within me a smile,
            <br />
            <br />
            A gentle,
            <br />
            Benevolent,
            <br />
            Scornful Smile.
            <br />
            <br />
            A smile of simultaneity,
            <br />
            Above millions of births and deaths,
            <br />
            Above the cycle.
            <br />
            <br />
            It is tranquil.
            <br />
            It is fine.
            <br />
            It is impenetrable.
            <br />
            <br />
            It burns to the most intimate love,
            <br />
            To the most humble reverence,
            <br />
            Within my heart.
            <br />
            <br />
            It is the dying fish gasping for water as the dark clouds fills its
            eyes.
            <br />
            It is the swollen newborn, crying for life.
            <br />
            <br />
            It is the murderer,
            <br />
            Sullen and sunken before execution,
            <br />
            Hoping for calls of hatred and approval from the crowd
            <br />
            As they are transfixed by a head hewn off by a single stroke of a
            blade.
            <br />
            <br />
            It is the naked bodies of humanity in battles of raging love.
            <br />
            It is the cold corpse within which we reside.
            <br />
            <br />
            It is hatred,
            <br />
            Destruction,
            <br />
            Love,
            <br />
            And birth.
            <br />
            <br />
            It is you.
            <br />
            It is me.
            <br />
            <br />
            It is the passionate acknowledgement of humanity.
            <br />
          </>
        );
      case "time":
        return (
          <>
            <h2>Time</h2>
            <br />
            That which is harvested
            <br />
            Will ultimately be destroyed.
            <br />
            If not by the bright red liquid fire burning within the veins of
            humanity,
            <br />
            Then by Time itself.
            <br />
          </>
        );
      case "unity":
        return (
          <>
            <h2>Unity</h2>
            <br />
            Inhale our unity;
            <br />
            Flow with,
            <br />
            In this river of life.
            <br />
            <br />
            You are not alone
            <br />
            In the struggle against Fate.
            <br />
          </>
        );
      case "warm":
        return (
          <>
            <h2>Warm - Yet</h2>
            <br />
            Enveloped by the cold vacuum of the universe.
            <br />
            <br />
            At least I am warm -
            <br />
            <br />
            Yet.
            <br />
          </>
        );
      default:
        return (
          <>
            <h2>Project by dotpng.art</h2>
          </>
        );
    }
  };
  return (
    <div className="App">
      <header className="App-header">{displayPoem(poemName)}</header>
    </div>
  );
}

export default App;
