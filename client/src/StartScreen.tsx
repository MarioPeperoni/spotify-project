const StartScreen = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <div className="rounded-lg border-2 p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Re-Cover</h1>
          <h2 className="text-lg font-light text-neutral-200">
            Dokurwiona gra typu zgaduj po okładce
          </h2>
        </div>
        <br />
        <div className="flex flex-col gap-2">
          <input
            className="rounded-lg border-2 border-neutral-400 p-2"
            placeholder="Twoj nick"
          />
          <input
            className="rounded-lg border-2 border-neutral-400 p-2"
            placeholder="Kod gry (opcjonalnie)"
          />
          <button className="rounded-lg bg-green-500 px-4 py-2 text-white transition hover:bg-green-700">
            Dołącz do gry
          </button>
          <button className="rounded-lg border-2 border-green-500 px-4 py-2 text-white transition hover:bg-green-700/20">
            Stwórz grę
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
