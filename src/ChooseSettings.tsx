

function ChooseSettings() {
  return (
    <>
      <header>
        <h1>Choose Your Settings</h1>
      </header>
      <main>
        <form>
          {/* TODO:  add options for how many digits each problem can be*/}
          {/* TODO:  add options for which operators can be used*/}
        </form>
      </main>
      <footer>
        <p className="instructions">
          {/* TODO:  add a better footer message... support section?*/}
          Use The Options Above To Select Your Settings
        </p>
      </footer>
    </>
  );
}

export default ChooseSettings
