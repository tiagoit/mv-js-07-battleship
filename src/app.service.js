const AppService = () => {
  const message = (msg, duration) => {
    document.getElementById('message').innerHTML = `<p>${msg}</p>`;
    document.getElementById('message').classList.remove('hidden');

    const d = duration ? duration * 1000 : 3000;
    setTimeout(() => {
      document.getElementById('message').classList.add('hidden');
    }, d);
  };

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  return {
    message,
    rand,
  };
};

export default AppService;
