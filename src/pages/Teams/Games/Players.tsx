const Players = ({ game }: { game: string }) => {
  const players = [
    {
      name: "Wang Ho Han",
      nickName: "Peanut",
      jobRole: "Player",
      citizenship: "KR",
      birthday: new Date(),
    },
  ];
  return (
    <>
      <hr className="my-8 border-1 border-zinc-600" />
      <div className="mb-8">
        <p className="text-xl text-zinc-300 uppercase mb-6">Players</p>
        <div className="flex flex-col lg:flex-row gap-2 font-secondary">
          <div className="group basis-1/5 p-4 bg-zinc-600 md:max-lg:hover:py-6 lg:hover:basis-2/5">
            <div className="flex justify-between content-center">
              <p className="text-xl font-semibold text-zinc-50">Peanut</p>
              <img src="https://flagsapi.com/KR/flat/32.png" alt="" />
            </div>
            <p className="text-sm text-zinc-300">Wang Ho Han</p>
          </div>
          <div className="basis-1/5 bg-zinc-600 p-4 md:max-lg:hover:py-6 lg:hover:basis-2/5"></div>
          <div className="basis-1/5 bg-zinc-600 p-4 md:max-lg:hover:py-6 lg:hover:basis-2/5"></div>
          <div className="basis-1/5 bg-zinc-600 p-4 md:max-lg:hover:py-6 lg:hover:basis-2/5"></div>
          <div className="basis-1/5 bg-zinc-600 p-4 md:max-lg:hover:py-6 lg:hover:basis-2/5"></div>
        </div>
      </div>
      <div className="mb-8">
        <p className="text-xl text-zinc-300 uppercase mb-6">Coaching Staff</p>
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="basis-1/5 bg-zinc-600 p-4 md:max-lg:hover:py-6 lg:hover:basis-2/5"></div>
          <div className="basis-1/5 bg-zinc-600 p-4 md:max-lg:hover:py-6 lg:hover:basis-2/5"></div>
          <div className="basis-1/5 bg-zinc-600 p-4 md:max-lg:hover:py-6 lg:hover:basis-2/5"></div>
          <div className="basis-1/5 bg-zinc-600 p-4 md:max-lg:hover:py-6 lg:hover:basis-2/5"></div>
          <div className="basis-1/5 bg-zinc-600 p-4 md:max-lg:hover:py-6 lg:hover:basis-2/5"></div>
        </div>
      </div>
    </>
  );
};

export default Players;
