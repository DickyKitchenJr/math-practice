
interface ChooseSettingsProps {
  setPage: (view: "settings" | "practice") => void;
  setNumberOfProblems: (num: number) => void;
}

function ChooseSettings({ setPage, setNumberOfProblems }: ChooseSettingsProps) {

  return (
    <>
      <button onClick={() => setPage("practice")}>Start Practice</button>
      <main>
        <form>
          <label htmlFor="numProblems">Number of Problems: </label>
          <input
            type="number"
            id="numProblems"
            onChange={(e) => setNumberOfProblems(Number(e.target.value))}
          />
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
